import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

(function () {
  'use strict';

  var wrap = document.getElementById('fpWrap');
  var canvas = document.getElementById('fpCanvas');
  if (!wrap || !canvas) return;

  var isCardMode = wrap.getAttribute('data-is-card') === 'true';

  // UI Element References
  var hud = document.getElementById('fpHud');
  var soundBtn = document.getElementById('fpSoundBtn');
  var soundIcon = document.getElementById('fpSoundIcon');
  var volSlider = document.getElementById('fpVol');
  var settingsBtn = document.getElementById('fpSettingsBtn');
  var settingsPanel = document.getElementById('fpSettings');
  var closeSettings = document.getElementById('fpCloseSettings');
  var fsBtn = document.getElementById('fpFsBtn');
  var flameSizeSlider = document.getElementById('fpFlameSize');
  var bloomSlider = document.getElementById('fpBloomStrength');
  var crackleSlider = document.getElementById('fpCrackle');
  var soundToggle = document.getElementById('fpSoundToggle');
  var volSettings = document.getElementById('fpVolSettings');
  var fsGearBtn = document.getElementById('fpFsGearBtn');
  var fsGear = document.getElementById('fpFsGear');

  // Groups and Badges
  var timerGroup = document.getElementById('fpTimerGroup');
  var styleGroup = document.getElementById('fpStyleGroup');
  var volBadge = document.getElementById('fpVolBadge');
  var crackleBadge = document.getElementById('fpCrackleBadge');
  var flameSizeBadge = document.getElementById('fpFlameSizeBadge');
  var bloomBadge = document.getElementById('fpBloomBadge');

  var currentStyleKey = 'classic';

  // Master Curated Color Palettes (RGB 0..1)
  var PALETTES = {
    classic: {
      core: [1.0, 0.88, 0.45],    // Bright Warm Golden Core
      base: [1.0, 0.55, 0.08],   // Fiery Orange Main Body
      edge: [0.85, 0.20, 0.02],   // Ember Red Edge
      glowHex: 0xff7700,
      roomCss: 'rgba(255,119,0,0.18)',
      litHex: 0xff7700
    },
    amber: {
      core: [1.0, 0.92, 0.55],
      base: [0.98, 0.68, 0.12],
      edge: [0.72, 0.28, 0.04],
      glowHex: 0xf59e0b,
      roomCss: 'rgba(245,158,11,0.16)',
      litHex: 0xfbbf24
    },
    blue: {
      core: [0.85, 0.95, 1.0],
      base: [0.18, 0.62, 1.0],
      edge: [0.04, 0.16, 0.68],
      glowHex: 0x3b82f6,
      roomCss: 'rgba(59,130,246,0.15)',
      litHex: 0x3b82f6
    },
    purple: {
      core: [0.96, 0.90, 1.0],
      base: [0.68, 0.28, 0.98],
      edge: [0.35, 0.05, 0.58],
      glowHex: 0xa855f7,
      roomCss: 'rgba(168,85,247,0.15)',
      litHex: 0xa855f7
    },
    green: {
      core: [0.90, 1.0, 0.92],
      base: [0.16, 0.82, 0.38],
      edge: [0.04, 0.38, 0.14],
      glowHex: 0x22c55e,
      roomCss: 'rgba(34,197,94,0.14)',
      litHex: 0x22c55e
    }
  };

  var S = {
    volume: 0.70,
    crackle: 0.70,
    muted: true,
    bloomStrength: 0.35,
    flameScale: 1.0
  };

  // Three.js Core Setup
  var scene, camera, renderer, composer, bloomPass;
  var flameMaterials = [];
  var flameEmitters = [];
  var coalsGroup, logsGroup, grateGroup, heatHazeMesh;
  var fireLight, ambientLight, hearthLight;
  var embersMesh, smokeMesh, emberPops = [];
  var circleTexture = null;
  var clock = new THREE.Clock();

  // Generate Smooth Radial Circle Texture for WebGL Particles
  function generateCircleParticleTexture() {
    var c = document.createElement('canvas');
    c.width = 64; c.height = 64;
    var cx = c.getContext('2d');

    var grad = cx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1.0)');
    grad.addColorStop(0.35, 'rgba(255,220,160,0.85)');
    grad.addColorStop(0.7, 'rgba(255,110,20,0.4)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');

    cx.fillStyle = grad;
    cx.beginPath();
    cx.arc(32, 32, 32, 0, Math.PI * 2);
    cx.fill();

    var tex = new THREE.CanvasTexture(c);
    return tex;
  }

  // Shader Source for Volumetric Flame Tendrils
  var fireVertShader = `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  var fireFragShader = `
    #define NUM_OCTAVES 5

    uniform vec3 colorCore;
    uniform vec3 colorBase;
    uniform vec3 colorEdge;
    uniform float time;
    uniform float noiseScale;
    uniform float speed;
    uniform float opacity;
    uniform float phase;

    varying vec2 vUv;

    float rand(vec2 n) {
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }

    float noise(vec2 p) {
      vec2 ip = floor(p);
      vec2 u = fract(p);
      u = u * u * (3.0 - 2.0 * u);
      return mix(
        mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
        mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y
      );
    }

    float fbm(vec2 x) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100.0);
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = vUv;

      vec2 flow = uv * vec2(2.4, 4.8) * noiseScale + vec2(phase, -time * speed);
      float n1 = fbm(flow);
      float n2 = fbm(flow + vec2(n1 * 1.2, time * 0.4));
      float fireNoise = n2;

      // Realistic flame shape: anchored wide at bottom wood logs, tapering sharply into licking tips at top
      float horizontalDist = abs(uv.x - 0.5) * 2.0;
      float flameTaper = max(0.02, 1.0 - pow(uv.y, 0.72) * 0.88);
      float widthMask = max(0.0, 1.0 - pow(horizontalDist / flameTaper, 2.2));
      float heightMask = pow(1.0 - uv.y, 1.15);
      float shape = widthMask * heightMask;

      // Robust alpha threshold for sharp organic flames
      float alpha = smoothstep(0.08, 0.48, fireNoise * shape * 2.5);

      if (alpha < 0.01) {
        discard;
      }

      vec3 col;
      if (alpha > 0.68) {
        col = mix(colorBase, colorCore, (alpha - 0.68) / 0.32);
      } else if (alpha > 0.24) {
        col = mix(colorEdge, colorBase, (alpha - 0.24) / 0.44);
      } else {
        col = colorEdge * (alpha / 0.24);
      }

      float coreHeat = (1.0 - horizontalDist) * pow(1.0 - uv.y, 1.5) * 0.45;
      col += colorCore * coreHeat;

      gl_FragColor = vec4(col, alpha * opacity);
    }
  `;

  // Heat Haze Shader
  var heatHazeVertShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  var heatHazeFragShader = `
    uniform float time;
    varying vec2 vUv;

    float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 ip = floor(p); vec2 u = fract(p);
      u = u * u * (3.0 - 2.0 * u);
      return mix(mix(rand(ip), rand(ip+vec2(1.0,0.0)), u.x), mix(rand(ip+vec2(0.0,1.0)), rand(ip+vec2(1.0,1.0)), u.x), u.y);
    }

    void main() {
      vec2 uv = vUv;
      float n = noise(uv * 10.0 + vec2(0.0, -time * 2.0));
      float alpha = (1.0 - uv.y) * (1.0 - abs(uv.x - 0.5) * 2.0) * 0.15;
      gl_FragColor = vec4(1.0, 0.55, 0.15, n * alpha * 0.12);
    }
  `;

  // Procedural Textures
  function generateBrickTexture() {
    var c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    var cx = c.getContext('2d');

    cx.fillStyle = '#0f0806';
    cx.fillRect(0, 0, 512, 512);

    var bH = 26, bW = 72;
    for (var r = 0; r < 512 / bH + 1; r++) {
      var y = r * bH;
      var offset = (r % 2 === 0) ? 0 : bW / 2;
      for (var col = -1; col < (512 / bW) + 1; col++) {
        var x = col * bW + offset;
        var tone = Math.random();

        var rCol = Math.floor(58 + tone * 42);
        var gCol = Math.floor(28 + tone * 20);
        var bCol = Math.floor(18 + tone * 14);

        cx.fillStyle = 'rgb(' + rCol + ',' + gCol + ',' + bCol + ')';
        cx.fillRect(x + 2, y + 2, bW - 4, bH - 4);

        for (var i = 0; i < 10; i++) {
          var px = x + 2 + Math.random() * (bW - 4);
          var py = y + 2 + Math.random() * (bH - 4);
          cx.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.32)' : 'rgba(90,40,25,0.2)';
          cx.fillRect(px, py, 2, 2);
        }
      }
    }

    var sootGrad = cx.createLinearGradient(0, 0, 0, 512);
    sootGrad.addColorStop(0, 'rgba(4,2,1,0.95)');
    sootGrad.addColorStop(0.35, 'rgba(8,4,2,0.82)');
    sootGrad.addColorStop(0.72, 'rgba(14,7,4,0.22)');
    sootGrad.addColorStop(1, 'rgba(8,4,2,0.3)');
    cx.fillStyle = sootGrad;
    cx.fillRect(0, 0, 512, 512);

    var tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  function generateLogTexture() {
    var c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    var cx = c.getContext('2d');

    cx.fillStyle = '#24140b';
    cx.fillRect(0, 0, 512, 256);

    for (var i = 0; i < 256; i += 3) {
      var d = Math.random() * 48;
      cx.fillStyle = 'rgb(' + Math.floor(36 + d) + ',' + Math.floor(20 + d / 2) + ',' + Math.floor(14 + d / 3) + ')';
      cx.fillRect(0, i, 512, 1.8 + Math.random() * 1.5);
    }

    for (var a = 0; a < 80; a++) {
      var ax = Math.random() * 512;
      var ay = Math.random() * 256;
      cx.fillStyle = 'rgba(180,175,170,0.25)';
      cx.fillRect(ax, ay, 3, 2);
    }

    var burnt = cx.createLinearGradient(100, 0, 412, 0);
    burnt.addColorStop(0, 'rgba(10,4,2,0.5)');
    burnt.addColorStop(0.2, 'rgba(12,5,3,0.85)');
    burnt.addColorStop(0.5, '#050201');
    burnt.addColorStop(0.8, 'rgba(12,5,3,0.85)');
    burnt.addColorStop(1, 'rgba(10,4,2,0.5)');
    cx.fillStyle = burnt;
    cx.fillRect(0, 0, 512, 256);

    cx.strokeStyle = '#ff6600';
    cx.lineWidth = 2.8;
    cx.shadowColor = '#ff3300';
    cx.shadowBlur = 8;
    for (var k = 0; k < 10; k++) {
      var lx = 140 + Math.random() * 220;
      var ly = 15 + Math.random() * 220;
      cx.beginPath();
      cx.moveTo(lx, ly);
      cx.lineTo(lx + 40 + Math.random() * 45, ly + (Math.random() - 0.5) * 16);
      cx.stroke();
    }

    var tex = new THREE.CanvasTexture(c);
    return tex;
  }

  function generateLogEndTexture() {
    var c = document.createElement('canvas');
    c.width = 256; c.height = 256;
    var cx = c.getContext('2d');

    cx.fillStyle = '#1a0e08';
    cx.fillRect(0, 0, 256, 256);

    cx.strokeStyle = '#522e1b';
    cx.lineWidth = 2;
    for (var r = 10; r < 120; r += 11) {
      cx.beginPath();
      cx.arc(128, 128, r, 0, Math.PI * 2);
      cx.stroke();
    }

    var core = cx.createRadialGradient(128, 128, 0, 128, 128, 62);
    core.addColorStop(0, '#060301');
    core.addColorStop(0.7, 'rgba(16,8,4,0.85)');
    core.addColorStop(1, 'rgba(0,0,0,0)');
    cx.fillStyle = core;
    cx.fillRect(0, 0, 256, 256);

    var tex = new THREE.CanvasTexture(c);
    return tex;
  }

  function createIrregularLogGeometry(radius, length) {
    var geo = new THREE.CylinderGeometry(radius, radius * 1.06, length, 24, 10);
    var pos = geo.attributes.position;
    for (var i = 0; i < pos.count; i++) {
      var x = pos.getX(i);
      var y = pos.getY(i);
      var z = pos.getZ(i);

      if (Math.abs(y) < length * 0.44) {
        var n = Math.sin(y * 7.5) * 0.014 + Math.cos(x * 10.0) * 0.012;
        pos.setX(i, x + n);
        pos.setZ(i, z + n * 0.85);
      }
    }
    geo.computeVertexNormals();
    return geo;
  }

  // Setup Three.js Engine
  function initThree() {
    var rect = wrap.getBoundingClientRect();
    var w = rect.width || window.innerWidth;
    var h = rect.height || 480;

    circleTexture = generateCircleParticleTexture();

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050302);
    scene.fog = new THREE.FogExp2(0x050302, 0.075);

    // Perfectly positioned camera framing the hearth
    camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(0, 0.0, 2.7);
    camera.lookAt(0, -0.12, 0);

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    var renderPass = new RenderPass(scene, camera);
    bloomPass = new UnrealBloomPass(
      new THREE.Vector2(w, h),
      S.bloomStrength,
      0.5,
      0.55
    );

    composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    ambientLight = new THREE.AmbientLight(0x44281c, 0.7);
    scene.add(ambientLight);

    hearthLight = new THREE.PointLight(0xff7700, 2.0, 6, 2.0);
    hearthLight.position.set(0, -0.55, 0.35);
    scene.add(hearthLight);

    fireLight = new THREE.PointLight(0xff8800, 2.8, 8, 1.5);
    fireLight.position.set(0, -0.16, 0.1);
    scene.add(fireLight);

    buildFireplaceStructure();
    buildIronGrate();
    buildCoalsAndLogs();
    buildMultiFlameEmitters();
    buildHeatHaze();
    buildEmberParticles();
    buildSmokeParticles();

    updatePalette();

    // Pre-compile WebGL scene synchronously so shaders are compiled before frame 0
    if (renderer && scene && camera) {
      renderer.compile(scene, camera);
    }
  }

  // Construct Masonry Hearth
  function buildFireplaceStructure() {
    var brickTex = generateBrickTexture();
    brickTex.repeat.set(2, 2);

    var brickMat = new THREE.MeshStandardMaterial({
      map: brickTex,
      roughness: 0.86,
      metalness: 0.04
    });

    // Back Firebox Wall
    var backWallGeo = new THREE.PlaneGeometry(4.2, 3.2);
    var backWall = new THREE.Mesh(backWallGeo, brickMat);
    backWall.position.set(0, 0.2, -1.1);
    scene.add(backWall);

    // Left Angled Wall
    var leftWallGeo = new THREE.PlaneGeometry(1.8, 3.2);
    var leftWall = new THREE.Mesh(leftWallGeo, brickMat);
    leftWall.position.set(-1.65, 0.2, -0.55);
    leftWall.rotation.y = Math.PI * 0.26;
    scene.add(leftWall);

    // Right Angled Wall
    var rightWall = new THREE.Mesh(leftWallGeo, brickMat);
    rightWall.position.set(1.65, 0.2, -0.55);
    rightWall.rotation.y = -Math.PI * 0.26;
    scene.add(rightWall);

    // Stone Hearth Floor Slab
    var floorGeo = new THREE.PlaneGeometry(5.2, 3.8);
    var floorMat = new THREE.MeshStandardMaterial({
      color: 0x140c08,
      roughness: 0.92,
      metalness: 0.04
    });
    var floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(0, -0.82, 0.1);
    floor.rotation.x = -Math.PI * 0.5;
    scene.add(floor);

    // Dark Wooden Mantle Beam
    var mantleGeo = new THREE.BoxGeometry(4.0, 0.16, 0.4);
    var mantleMat = new THREE.MeshStandardMaterial({
      color: 0x241208,
      roughness: 0.68,
      metalness: 0.1
    });
    var mantle = new THREE.Mesh(mantleGeo, mantleMat);
    mantle.position.set(0, 1.48, -0.2);
    scene.add(mantle);
  }

  // Build 3D Cast Iron Grate
  function buildIronGrate() {
    grateGroup = new THREE.Group();
    var ironMat = new THREE.MeshStandardMaterial({
      color: 0x141414,
      roughness: 0.55,
      metalness: 0.8
    });

    for (var i = -4; i <= 4; i++) {
      var barGeo = new THREE.BoxGeometry(0.04, 0.04, 0.6);
      var bar = new THREE.Mesh(barGeo, ironMat);
      bar.position.set(i * 0.14, -0.64, 0.0);
      grateGroup.add(bar);
    }

    var legGeo = new THREE.BoxGeometry(1.3, 0.05, 0.05);
    var leg1 = new THREE.Mesh(legGeo, ironMat);
    leg1.position.set(0, -0.64, 0.24);
    grateGroup.add(leg1);

    var leg2 = new THREE.Mesh(legGeo, ironMat);
    leg2.position.set(0, -0.64, -0.24);
    grateGroup.add(leg2);

    scene.add(grateGroup);
  }

  // Build Wood Logs & Glowing Coals
  function buildCoalsAndLogs() {
    coalsGroup = new THREE.Group();
    logsGroup = new THREE.Group();

    var coalGeo = new THREE.SphereGeometry(0.04, 8, 8);
    for (var i = 0; i < 110; i++) {
      var angle = Math.random() * Math.PI * 2;
      var rad = Math.random() * 0.82;
      var coalMat = new THREE.MeshStandardMaterial({
        color: 0x0c0503,
        emissive: 0xff3300,
        emissiveIntensity: 0.6 + Math.random() * 0.7,
        roughness: 0.95
      });
      var coal = new THREE.Mesh(coalGeo, coalMat);
      coal.position.set(
        Math.cos(angle) * rad,
        -0.72 + (Math.random() - 0.5) * 0.04,
        -0.05 + Math.sin(angle) * rad * 0.4
      );
      coal.scale.set(1 + Math.random() * 1.4, 0.5 + Math.random() * 0.4, 1 + Math.random() * 1.4);
      coalsGroup.add(coal);
    }
    scene.add(coalsGroup);

    var logBarkTex = generateLogTexture();
    var logEndTex = generateLogEndTexture();

    var logBarkMat = new THREE.MeshStandardMaterial({ map: logBarkTex, roughness: 0.82, metalness: 0.05 });
    var logEndMat = new THREE.MeshStandardMaterial({ map: logEndTex, roughness: 0.78 });
    var logMaterials = [logBarkMat, logEndMat, logEndMat];

    var logGeo1 = createIrregularLogGeometry(0.12, 1.35);
    var log1 = new THREE.Mesh(logGeo1, logMaterials);
    log1.position.set(0.0, -0.54, -0.22);
    log1.rotation.z = Math.PI * 0.5;
    log1.rotation.y = 0.04;
    logsGroup.add(log1);

    var logGeo2 = createIrregularLogGeometry(0.10, 1.15);
    var log2 = new THREE.Mesh(logGeo2, logMaterials);
    log2.position.set(-0.25, -0.52, 0.14);
    log2.rotation.z = Math.PI * 0.48;
    log2.rotation.y = 0.18;
    logsGroup.add(log2);

    var logGeo3 = createIrregularLogGeometry(0.095, 1.1);
    var log3 = new THREE.Mesh(logGeo3, logMaterials);
    log3.position.set(0.25, -0.52, 0.12);
    log3.rotation.z = Math.PI * 0.52;
    log3.rotation.y = -0.22;
    logsGroup.add(log3);

    var logGeo4 = createIrregularLogGeometry(0.085, 1.05);
    var log4 = new THREE.Mesh(logGeo4, logMaterials);
    log4.position.set(-0.08, -0.40, -0.02);
    log4.rotation.z = Math.PI * 0.42;
    log4.rotation.x = 0.22;
    log4.rotation.y = -0.15;
    logsGroup.add(log4);

    scene.add(logsGroup);
  }

  // Build Volumetric Flame Emitters
  function buildMultiFlameEmitters() {
    flameMaterials = [];
    flameEmitters = [];

    var emitterConfigs = [
      { width: 0.38, height: 0.95, x: 0.0, y: -0.12, z: -0.04, scale: 1.0, speed: 0.60, opacity: 0.95, phase: 0.0 },
      { width: 0.34, height: 0.90, x: -0.10, y: -0.14, z: -0.06, scale: 1.1, speed: 0.65, opacity: 0.92, phase: 1.4 },
      { width: 0.32, height: 0.88, x: 0.12, y: -0.14, z: -0.08, scale: 0.95, speed: 0.58, opacity: 0.92, phase: 2.8 },

      { width: 0.26, height: 0.65, x: -0.22, y: -0.25, z: 0.12, scale: 1.25, speed: 0.72, opacity: 0.88, phase: 4.2 },
      { width: 0.25, height: 0.62, x: 0.20, y: -0.25, z: 0.10, scale: 1.2, speed: 0.68, opacity: 0.88, phase: 5.6 },
      { width: 0.28, height: 0.70, x: 0.02, y: -0.23, z: 0.08, scale: 1.15, speed: 0.65, opacity: 0.92, phase: 0.8 },

      { width: 0.28, height: 0.78, x: -0.32, y: -0.20, z: -0.10, scale: 1.05, speed: 0.55, opacity: 0.85, phase: 3.5 },
      { width: 0.27, height: 0.75, x: 0.30, y: -0.20, z: -0.12, scale: 1.0, speed: 0.56, opacity: 0.85, phase: 2.1 },

      { width: 0.48, height: 0.98, x: -0.08, y: -0.08, z: -0.24, scale: 0.85, speed: 0.48, opacity: 0.70, phase: 4.8 },
      { width: 0.45, height: 0.92, x: 0.08, y: -0.08, z: -0.24, scale: 0.88, speed: 0.50, opacity: 0.70, phase: 1.1 }
    ];

    var pal = PALETTES.classic;

    emitterConfigs.forEach(function (cfg) {
      var geo = new THREE.PlaneGeometry(cfg.width, cfg.height, 14, 14);
      
      var posAttr = geo.attributes.position;
      for (var i = 0; i < posAttr.count; i++) {
        var px = posAttr.getX(i);
        posAttr.setZ(i, Math.sin((px / cfg.width) * Math.PI) * 0.07);
      }
      geo.computeVertexNormals();

      var mat = new THREE.ShaderMaterial({
        vertexShader: fireVertShader,
        fragmentShader: fireFragShader,
        uniforms: {
          colorCore: { value: new THREE.Color(...pal.core) },
          colorBase: { value: new THREE.Color(...pal.base) },
          colorEdge: { value: new THREE.Color(...pal.edge) },
          time: { value: 0.0 },
          noiseScale: { value: cfg.scale },
          speed: { value: cfg.speed },
          opacity: { value: cfg.opacity },
          phase: { value: cfg.phase }
        },
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending
      });

      flameMaterials.push(mat);

      var mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      
      flameEmitters.push({
        mesh: mesh,
        baseWidth: cfg.width,
        baseHeight: cfg.height,
        phase: cfg.phase
      });

      scene.add(mesh);
    });
  }

  // Heat Haze Distortion Mesh
  function buildHeatHaze() {
    var geo = new THREE.PlaneGeometry(1.6, 1.2);
    var mat = new THREE.ShaderMaterial({
      vertexShader: heatHazeVertShader,
      fragmentShader: heatHazeFragShader,
      uniforms: { time: { value: 0.0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    heatHazeMesh = new THREE.Mesh(geo, mat);
    heatHazeMesh.position.set(0, 0.45, -0.12);
    scene.add(heatHazeMesh);
  }

  // Smooth Circular Spark Particles
  function buildEmberParticles() {
    var count = isCardMode ? 45 : 160;
    var geo = new THREE.BufferGeometry();
    var positions = new Float32Array(count * 3);
    var velocities = new Float32Array(count * 3);
    var lives = new Float32Array(count);

    for (var i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.85;
      // Pre-populate embers floating throughout the scene height on load
      positions[i * 3 + 1] = -0.5 + Math.random() * 1.3;
      positions[i * 3 + 2] = -0.1 + (Math.random() - 0.5) * 0.45;

      velocities[i * 3] = (Math.random() - 0.5) * 0.28;
      velocities[i * 3 + 1] = 0.6 + Math.random() * 1.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.28;

      lives[i] = Math.random();
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geo.setAttribute('life', new THREE.BufferAttribute(lives, 1));

    var mat = new THREE.PointsMaterial({
      color: 0xff8811,
      size: 0.024,
      map: circleTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    embersMesh = new THREE.Points(geo, mat);
    scene.add(embersMesh);
  }

  // Occasional Ember Pops
  function triggerEmberPop() {
    if (isCardMode || Math.random() > 0.08) return;
    var popGeo = new THREE.SphereGeometry(0.018, 8, 8);
    var popMat = new THREE.MeshStandardMaterial({
      color: 0xff7700,
      emissive: 0xff4400,
      emissiveIntensity: 1.5,
      roughness: 0.2
    });
    var popMesh = new THREE.Mesh(popGeo, popMat);
    popMesh.position.set((Math.random() - 0.5) * 0.45, -0.45, 0.1);
    
    var vx = (Math.random() - 0.5) * 0.8;
    var vy = 1.1 + Math.random() * 0.8;
    var vz = (Math.random() - 0.5) * 0.38;

    scene.add(popMesh);
    emberPops.push({ mesh: popMesh, vx: vx, vy: vy, vz: vz, life: 1.0 });
  }

  // Faint Translucent Smoke Puffs
  function buildSmokeParticles() {
    var count = isCardMode ? 12 : 32;
    var geo = new THREE.BufferGeometry();
    var positions = new Float32Array(count * 3);
    var lives = new Float32Array(count);

    for (var i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = 0.2 + Math.random() * 0.9;
      positions[i * 3 + 2] = -0.3 + (Math.random() - 0.5) * 0.3;
      lives[i] = Math.random();
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('life', new THREE.BufferAttribute(lives, 1));

    var mat = new THREE.PointsMaterial({
      color: 0x30221a,
      size: 0.28,
      map: circleTexture,
      transparent: true,
      opacity: 0.16,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    smokeMesh = new THREE.Points(geo, mat);
    scene.add(smokeMesh);
  }

  // Update Palette Colors
  function updatePalette() {
    var p = PALETTES[currentStyleKey] || PALETTES.classic;

    flameMaterials.forEach(function (mat) {
      mat.uniforms.colorCore.value.setRGB(...p.core);
      mat.uniforms.colorBase.value.setRGB(...p.base);
      mat.uniforms.colorEdge.value.setRGB(...p.edge);
    });

    if (fireLight) fireLight.color.setHex(p.litHex);
    if (hearthLight) hearthLight.color.setHex(p.litHex);
    if (embersMesh) embersMesh.material.color.setHex(p.litHex);

    var roomGlow = document.getElementById('fpRoomGlow');
    if (roomGlow) {
      roomGlow.style.background = 'radial-gradient(ellipse 75% 50% at 50% 85%,' + p.roomCss + ' 0%, transparent 70%)';
    }
  }

  // Resize Handler
  function onResize() {
    if (!wrap || !renderer || !camera || !composer) return;
    var rect = wrap.getBoundingClientRect();
    var w = rect.width;
    var h = rect.height;
    if (w < 10 || h < 10) return;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    renderer.setSize(w, h);
    composer.setSize(w, h);
  }

  window.addEventListener('resize', onResize);
  if (typeof ResizeObserver !== 'undefined' && wrap) {
    new ResizeObserver(onResize).observe(wrap);
  }

  // Main Render Loop
  function animate() {
    requestAnimationFrame(animate);

    var delta = clock.getDelta();
    var elapsedTime = clock.getElapsedTime();

    // 1. Camera Framing
    if (camera) {
      camera.position.y = Math.sin(elapsedTime * 0.5) * 0.004;
      camera.position.x = Math.cos(elapsedTime * 0.4) * 0.003;
      camera.lookAt(0, -0.12, 0);
    }

    // 2. Update Shader Time & Heat Haze
    flameMaterials.forEach(function (mat) {
      mat.uniforms.time.value = elapsedTime;
    });

    if (heatHazeMesh) {
      heatHazeMesh.material.uniforms.time.value = elapsedTime;
    }

    // 3. Animate Flame Emitters Height and Width (with Sleep Extinguish support)
    var activeScale = isSleepExtinguished ? 0.0 : S.flameScale;
    flameEmitters.forEach(function (em, idx) {
      var heightMod = 1.0 + Math.sin(elapsedTime * 3.6 + em.phase) * 0.14 + Math.cos(elapsedTime * 5.8 + idx) * 0.08;
      var widthMod = 1.0 + Math.cos(elapsedTime * 2.6 + em.phase) * 0.09;

      em.mesh.scale.set(widthMod * activeScale, heightMod * activeScale, activeScale);
    });

    // 4. Multi-Frequency Firelight Flickering
    if (fireLight) {
      var flicker = Math.sin(elapsedTime * 13.0) * 0.25 +
                    Math.cos(elapsedTime * 21.0) * 0.16 +
                    (Math.random() - 0.5) * 0.14;
      var targetIntensity = isSleepExtinguished ? 0.0 : Math.max(2.2, 2.8 + flicker);
      fireLight.intensity = targetIntensity;
      fireLight.position.x = Math.sin(elapsedTime * 2.6) * 0.08;
    }

    if (hearthLight) {
      hearthLight.intensity = isSleepExtinguished ? 0.0 : (1.6 + Math.sin(elapsedTime * 3.8) * 0.25);
    }

    // 5. Coals Bed Emissive Warmth Pulsing
    if (coalsGroup) {
      coalsGroup.children.forEach(function (coal, idx) {
        var pulse = Math.sin(elapsedTime * 2.2 + idx) * 0.2 + 0.65;
        coal.material.emissiveIntensity = pulse;
      });
    }

    // 6. Ember Sparks Motion with Sine Wave Horizontal Drift
    if (embersMesh) {
      var pos = embersMesh.geometry.attributes.position.array;
      var vel = embersMesh.geometry.attributes.velocity.array;
      var lives = embersMesh.geometry.attributes.life.array;
      var count = lives.length;

      for (var i = 0; i < count; i++) {
        lives[i] -= delta * 0.4;
        if (lives[i] <= 0) {
          lives[i] = 1.0;
          pos[i * 3] = (Math.random() - 0.5) * 0.85;
          pos[i * 3 + 1] = -0.5;
          pos[i * 3 + 2] = -0.1 + (Math.random() - 0.5) * 0.45;
        }

        pos[i * 3] += vel[i * 3] * delta + Math.sin(elapsedTime * 3.0 + i) * 0.003;
        pos[i * 3 + 1] += vel[i * 3 + 1] * delta;
        pos[i * 3 + 2] += vel[i * 3 + 2] * delta;
      }
      embersMesh.geometry.attributes.position.needsUpdate = true;
      embersMesh.geometry.attributes.life.needsUpdate = true;
    }

    // 7. Occasional Ember Pops Physics
    triggerEmberPop();
    var nextPops = [];
    for (var k = 0; k < emberPops.length; k++) {
      var pop = emberPops[k];
      pop.life -= delta * 0.88;
      pop.vy -= delta * 0.75;
      pop.mesh.position.x += pop.vx * delta;
      pop.mesh.position.y += pop.vy * delta;
      pop.mesh.position.z += pop.vz * delta;

      if (pop.life > 0 && pop.mesh.position.y > -0.7) {
        pop.mesh.material.opacity = pop.life;
        nextPops.push(pop);
      } else {
        scene.remove(pop.mesh);
      }
    }
    emberPops = nextPops;

    // 8. Faint Translucent Smoke Drift
    if (smokeMesh) {
      var sPos = smokeMesh.geometry.attributes.position.array;
      var sLives = smokeMesh.geometry.attributes.life.array;
      var sCount = sLives.length;

      for (var j = 0; j < sCount; j++) {
        sLives[j] -= delta * 0.2;
        if (sLives[j] <= 0) {
          sLives[j] = 1.0;
          sPos[j * 3] = (Math.random() - 0.5) * 0.5;
          sPos[j * 3 + 1] = 0.1;
          sPos[j * 3 + 2] = -0.3;
        }
        sPos[j * 3] += Math.sin(elapsedTime * 1.6 + j) * 0.0018;
        sPos[j * 3 + 1] += delta * 0.28;
      }
      smokeMesh.geometry.attributes.position.needsUpdate = true;
      smokeMesh.geometry.attributes.life.needsUpdate = true;
    }

    // Render Scene with Bloom
    if (composer) {
      bloomPass.strength = S.bloomStrength;
      composer.render();
    }
  }

  // Audio Engine
  var audioEl = null, audioStarted = false;

  function startAudio() {
    if (isCardMode || audioStarted) return;
    audioEl = new Audio('/assets/fire-screen/fire-screen.mp3');
    audioEl.loop = true;
    audioEl.preload = 'auto';
    audioStarted = true;
    applyVolumes();
  }

  function applyVolumes() {
    if (!audioEl) return;
    audioEl.volume = S.muted ? 0 : S.volume;
    if (S.muted) {
      try { audioEl.pause(); } catch (e) {}
    } else {
      audioEl.play().catch(function () {});
    }
  }

  function syncUIControls() {
    var vPct = Math.round(S.volume * 100);
    if (volSlider) volSlider.value = vPct;
    if (volSettings) volSettings.value = vPct;
    if (volBadge) volBadge.textContent = vPct + '%';

    if (soundToggle) soundToggle.checked = !S.muted;

    if (crackleSlider && crackleBadge) {
      crackleBadge.textContent = crackleSlider.value + '%';
    }

    if (flameSizeSlider && flameSizeBadge) {
      var fsVal = Math.round((parseFloat(flameSizeSlider.value) / 110) * 100);
      flameSizeBadge.textContent = fsVal + '%';
    }

    if (bloomSlider && bloomBadge) {
      var blVal = Math.round((parseFloat(bloomSlider.value) / 35) * 100);
      bloomBadge.textContent = blVal + '%';
    }

    if (soundIcon) {
      soundIcon.innerHTML = S.muted
        ? '<path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'
        : '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>';
    }
  }

  // Toggle settings open class helper
  function toggleSettingsPanel() {
    if (!settingsPanel) return;
    var isOpen = settingsPanel.classList.toggle('open');
    if (wrap) wrap.classList.toggle('has-settings-open', isOpen);
    if (fsGear) fsGear.style.display = isOpen ? 'none' : '';
  }

  function closeSettingsPanel() {
    if (!settingsPanel) return;
    settingsPanel.classList.remove('open');
    if (wrap) wrap.classList.remove('has-settings-open');
    if (fsGear && document.fullscreenElement === wrap) fsGear.style.display = 'flex';
  }

  // UI Listeners
  if (soundBtn) {
    soundBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      S.muted = !S.muted;
      syncUIControls();
      applyVolumes();
      if (!audioStarted && !S.muted) startAudio();
    });
  }

  if (soundToggle) {
    soundToggle.addEventListener('change', function () {
      S.muted = !this.checked;
      syncUIControls();
      applyVolumes();
      if (!audioStarted && !S.muted) startAudio();
    });
  }

  if (volSlider) {
    volSlider.addEventListener('input', function () {
      S.volume = this.value / 100;
      syncUIControls();
      applyVolumes();
      if (!audioStarted && S.volume > 0.02) startAudio();
    });
  }

  if (volSettings) {
    volSettings.addEventListener('input', function () {
      S.volume = this.value / 100;
      syncUIControls();
      applyVolumes();
      if (!audioStarted && S.volume > 0.02) startAudio();
    });
  }

  if (crackleSlider) {
    crackleSlider.addEventListener('input', function () {
      syncUIControls();
    });
  }

  if (flameSizeSlider) {
    flameSizeSlider.addEventListener('input', function () {
      wakeFromSleep();
      S.flameScale = (parseFloat(this.value) || 110) / 110;
      syncUIControls();
    });
  }

  if (bloomSlider) {
    bloomSlider.addEventListener('input', function () {
      S.bloomStrength = (parseFloat(this.value) || 15) / 45;
      syncUIControls();
    });
  }

  // 1. Interactive Flame Style Color Chips
  if (styleGroup) {
    styleGroup.addEventListener('click', function (e) {
      var chip = e.target.closest('.fp-chip');
      if (!chip) return;
      var styleKey = chip.getAttribute('data-value');
      if (!styleKey || !PALETTES[styleKey]) return;

      currentStyleKey = styleKey;
      var allChips = styleGroup.querySelectorAll('.fp-chip');
      allChips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');

      updatePalette();
    });
  }

  // 2. Interactive Sleep Timer Chips with Precise Countdown & Sleep Mode
  var _timerInterval = null;
  var timerEndTime = 0;
  var timerBadge = document.getElementById('fpTimerBadge');
  var isSleepExtinguished = false;

  function updateTimerUI() {
    if (!timerEndTime) {
      if (timerBadge) timerBadge.style.display = 'none';
      return;
    }

    var remainingMs = Math.max(0, timerEndTime - Date.now());
    if (remainingMs <= 0) {
      stopSleepTimer();
      triggerSleepMode();
      return;
    }

    var totalSec = Math.ceil(remainingMs / 1000);
    var mins = Math.floor(totalSec / 60);
    var secs = totalSec % 60;
    var text = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;

    if (timerBadge) {
      timerBadge.textContent = text;
      timerBadge.style.display = 'inline-block';
    }
  }

  function stopSleepTimer() {
    if (_timerInterval) {
      clearInterval(_timerInterval);
      _timerInterval = null;
    }
    timerEndTime = 0;
    if (timerBadge) timerBadge.style.display = 'none';

    if (timerGroup) {
      var allChips = timerGroup.querySelectorAll('.fp-chip');
      allChips.forEach(function (c) {
        if (c.getAttribute('data-value') === '0') c.classList.add('active');
        else c.classList.remove('active');
      });
    }
  }

  function triggerSleepMode() {
    S.muted = true;
    syncUIControls();
    applyVolumes();
    isSleepExtinguished = true;
  }

  function wakeFromSleep() {
    if (isSleepExtinguished) {
      isSleepExtinguished = false;
    }
  }

  if (timerGroup) {
    timerGroup.addEventListener('click', function (e) {
      var chip = e.target.closest('.fp-chip');
      if (!chip) return;
      var mins = parseInt(chip.getAttribute('data-value') || '0', 10);

      var allChips = timerGroup.querySelectorAll('.fp-chip');
      allChips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');

      if (_timerInterval) {
        clearInterval(_timerInterval);
        _timerInterval = null;
      }

      wakeFromSleep();

      if (mins > 0) {
        timerEndTime = Date.now() + mins * 60 * 1000;
        updateTimerUI();
        _timerInterval = setInterval(updateTimerUI, 1000);
      } else {
        stopSleepTimer();
      }
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleSettingsPanel();
    });
  }

  if (closeSettings) {
    closeSettings.addEventListener('click', function (e) {
      e.stopPropagation();
      closeSettingsPanel();
    });
  }

  if (settingsPanel) {
    settingsPanel.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  if (wrap) {
    wrap.addEventListener('click', function () {
      closeSettingsPanel();
    });
  }

  if (fsBtn) {
    fsBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (document.fullscreenElement) document.exitFullscreen();
      else wrap.requestFullscreen().catch(function () {});
    });
  }

  if (fsGearBtn) {
    fsGearBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleSettingsPanel();
    });
  }

  document.addEventListener('fullscreenchange', function () {
    var isFS = document.fullscreenElement === wrap;
    wrap.classList.toggle('is-fullscreen', isFS);
    document.documentElement.classList.toggle('fp-fs-active', isFS);
    if (!isFS) closeSettingsPanel();
    setTimeout(onResize, 120);
  });

  document.addEventListener('keydown', function (e) {
    var k = e.key.toLowerCase();
    if (document.fullscreenElement !== wrap) {
      if (k === 'f') {
        e.preventDefault();
        wrap.requestFullscreen().catch(function () {});
      }
      return;
    }
    if (k === 'escape') document.exitFullscreen();
    else if (k === 'c') {
      e.preventDefault();
      toggleSettingsPanel();
    }
    else if (k === 'm') soundBtn.click();
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      S.volume = Math.min(1, S.volume + 0.05);
      syncUIControls();
      applyVolumes();
    }
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      S.volume = Math.max(0, S.volume - 0.05);
      syncUIControls();
      applyVolumes();
    }
  });

  // Kickoff Engine
  initThree();
  syncUIControls();
  if (composer) {
    composer.render();
  }
  animate();

  if (hud) {
    hud.classList.add('is-visible');
    setTimeout(function () {
      hud.classList.remove('is-visible');
    }, 2800);
  }
})();
