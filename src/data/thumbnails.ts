export function thumbnailScreen(color: string, label?: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" rx="12" fill="${color}"/>
  ${label ? `<text x="160" y="106" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="system-ui" font-size="10" font-weight="600">${label}</text>` : ''}
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailMonitor(inner: string, color = '#111'): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect x="4" y="4" width="312" height="184" rx="8" fill="${color}"/>
  ${inner}
  <rect x="4" y="4" width="312" height="184" rx="8" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailDeadPixelTest(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><clipPath id="roundClipDpt"><rect width="320" height="200" rx="12"/></clipPath></defs>
  <g clip-path="url(#roundClipDpt)">
    <rect width="53.34" height="200" fill="#000000"/>
    <rect x="53.34" width="53.34" height="200" fill="#ffffff"/>
    <rect x="106.68" width="53.34" height="200" fill="#ff0000"/>
    <rect x="160.02" width="53.34" height="200" fill="#00ff00"/>
    <rect x="213.36" width="53.34" height="200" fill="#0000ff"/>
    <rect x="266.7" width="53.3" height="200" fill="#808080"/>
    <circle cx="26" cy="70" r="3" fill="#ffffff"/>
    <circle cx="80" cy="130" r="3" fill="#111111"/>
    <rect x="96" y="150" width="128" height="26" rx="13" fill="rgba(0,0,0,0.55)"/>
    <text x="160" y="167" text-anchor="middle" fill="#ffffff" font-family="system-ui" font-size="11" font-weight="600">Dead Pixel Test</text>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

// export function thumbnailStuckPixel(): string {
//   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
//   <rect width="320" height="200" fill="#111"/>
//   <rect x="40" y="30" width="240" height="140" rx="6" fill="none" stroke="#f00" stroke-width="3"/>
//   <text x="160" y="106" text-anchor="middle" fill="#ff4444" font-family="monospace" font-size="13" font-weight="700">FIXING...</text>
//   <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
// </svg>`;
// }

// export function thumbnailBurnIn(): string {
//   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
//   <rect width="320" height="200" fill="#1a1a1a"/>
//   <text x="160" y="80" text-anchor="middle" fill="rgba(255,255,255,0.15)" font-family="system-ui" font-size="18" font-weight="700">CNN</text>
//   <text x="160" y="105" text-anchor="middle" fill="rgba(255,255,255,0.1)" font-family="system-ui" font-size="14">BREAKING NEWS</text>
//   <text x="160" y="130" text-anchor="middle" fill="rgba(255,255,255,0.08)" font-family="system-ui" font-size="10">LIVE</text>
//   <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
// </svg>`;
// }

// export function thumbnailBrightnessTest(): string {
//   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
//   <rect width="320" height="200" fill="#f5f5f5"/>
//   <circle cx="160" cy="100" r="50" fill="#fff" stroke="#ddd" stroke-width="2"/>
//   <g stroke="#ccc" stroke-width="2" stroke-linecap="round">
//     <line x1="160" y1="35" x2="160" y2="25"/><line x1="160" y1="165" x2="160" y2="175"/>
//     <line x1="95" y1="100" x2="85" y2="100"/><line x1="225" y1="100" x2="235" y2="100"/>
//     <line x1="110" y1="50" x2="103" y2="43"/><line x1="210" y1="150" x2="217" y2="157"/>
//     <line x1="210" y1="50" x2="217" y2="43"/><line x1="110" y1="150" x2="103" y2="157"/>
//   </g>
//   <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
// </svg>`;
// }

// export function thumbnailContrastTest(): string {
//   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
//   <rect width="160" height="200" fill="#fff"/><rect x="160" width="160" height="200" fill="#000"/>
//   <circle cx="80" cy="100" r="30" fill="#eee"/><circle cx="240" cy="100" r="30" fill="#222"/>
//   <text x="80" y="165" text-anchor="middle" fill="#999" font-family="system-ui" font-size="10">100%</text>
//   <text x="240" y="165" text-anchor="middle" fill="#666" font-family="system-ui" font-size="10">0%</text>
//   <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
// </svg>`;
// }

// export function thumbnailGammaTest(): string {
//   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
//   <rect width="320" height="200" fill="#f0f0f0"/>
//   <rect x="40" y="40" width="240" height="120" rx="4" fill="none" stroke="#ccc" stroke-width="1"/>
//   <rect x="40" y="40" width="240" height="120" fill="url(#g)"/>
//   <defs><linearGradient id="g"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#000"/></linearGradient></defs>
//   <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
// </svg>`;
// }

// export function thumbnailGradientTest(): string {
//   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
//   <defs><linearGradient id="gt" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#000"/><stop offset="25%" stop-color="#666"/><stop offset="50%" stop-color="#aaa"/><stop offset="75%" stop-color="#ddd"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs>
//   <rect width="320" height="200" fill="url(#gt)"/>
//   <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
// </svg>`;
// }

// export function thumbnailColorAccuracy(): string {
//   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
//   <rect width="320" height="200" fill="#fafafa"/>
//   <circle cx="110" cy="80" r="40" fill="#ff4444" opacity="0.7"/>
//   <circle cx="170" cy="110" r="40" fill="#44ff44" opacity="0.7"/>
//   <circle cx="140" cy="60" r="40" fill="#4444ff" opacity="0.7"/>
//   <circle cx="160" cy="140" r="40" fill="#ffff44" opacity="0.7"/>
//   <text x="160" y="175" text-anchor="middle" fill="#999" font-family="system-ui" font-size="9">Color Accuracy</text>
//   <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
// </svg>`;
// }

export function thumbnailFireplace(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><linearGradient id="fp" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#1a0500"/><stop offset="50%" stop-color="#ff5a1f"/><stop offset="100%" stop-color="#ff8c42"/></linearGradient></defs>
  <rect width="320" height="200" fill="url(#fp)"/>
  <ellipse cx="160" cy="180" rx="120" ry="30" fill="#1a0500" opacity="0.5"/>
  <ellipse cx="140" cy="130" rx="15" ry="30" fill="#ffaa33" opacity="0.6"/>
  <ellipse cx="170" cy="125" rx="12" ry="28" fill="#ffcc44" opacity="0.5"/>
  <ellipse cx="155" cy="120" rx="8" ry="20" fill="#ffdd66" opacity="0.4"/>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailAquarium(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><linearGradient id="aq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#003d66"/><stop offset="100%" stop-color="#0088aa"/></linearGradient></defs>
  <rect width="320" height="200" fill="url(#aq)"/>
  <ellipse cx="100" cy="150" rx="40" ry="15" fill="#00bbdd" opacity="0.4"/>
  <ellipse cx="220" cy="130" rx="35" ry="12" fill="#00ccdd" opacity="0.3"/>
  <circle cx="80" cy="60" r="3" fill="rgba(255,255,255,0.3)"/>
  <circle cx="200" cy="80" r="2" fill="rgba(255,255,255,0.3)"/>
  <circle cx="250" cy="50" r="2.5" fill="rgba(255,255,255,0.3)"/>
  <circle cx="150" cy="45" r="2" fill="rgba(255,255,255,0.2)"/>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailMatrix(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#001b0b"/>
  <g fill="#00ff41" font-family="monospace" font-size="10" opacity="0.7">
    <text x="10" y="20">0</text><text x="25" y="40">1</text><text x="10" y="60">1</text><text x="25" y="80">0</text><text x="10" y="100">0</text><text x="25" y="120">1</text><text x="10" y="140">1</text><text x="25" y="160">0</text>
    <text x="50" y="30">1</text><text x="65" y="50">0</text><text x="50" y="70">1</text><text x="65" y="90">1</text><text x="50" y="110">1</text><text x="65" y="130">0</text><text x="50" y="150">0</text><text x="65" y="170">1</text>
    <text x="90" y="25">0</text><text x="105" y="45">0</text><text x="90" y="65">1</text><text x="105" y="85">0</text><text x="90" y="105">1</text><text x="105" y="125">1</text><text x="90" y="145">0</text><text x="105" y="165">0</text>
    <text x="130" y="35">1</text><text x="145" y="55">1</text><text x="130" y="75">0</text><text x="145" y="95">1</text><text x="130" y="115">0</text><text x="145" y="135">0</text><text x="130" y="155">1</text><text x="145" y="175">1</text>
    <text x="170" y="20">0</text><text x="185" y="40">1</text><text x="170" y="60">1</text><text x="185" y="80">0</text><text x="170" y="100">1</text><text x="185" y="120">0</text><text x="170" y="140">0</text><text x="185" y="160">1</text>
    <text x="210" y="30">1</text><text x="225" y="50">0</text><text x="210" y="70">0</text><text x="225" y="90">1</text><text x="210" y="110">0</text><text x="225" y="130">1</text><text x="210" y="150">1</text><text x="225" y="170">0</text>
    <text x="250" y="25">0</text><text x="265" y="45">1</text><text x="250" y="65">0</text><text x="265" y="85">0</text><text x="250" y="105">1</text><text x="265" y="125">1</text><text x="250" y="145">0</text><text x="265" y="165">1</text>
    <text x="290" y="35">1</text><text x="305" y="55">0</text><text x="290" y="75">1</text><text x="305" y="95">0</text><text x="290" y="115">0</text><text x="305" y="135">1</text><text x="290" y="155">1</text><text x="305" y="175">0</text>
  </g>
  <g fill="#00ff41" font-family="monospace" font-size="10" opacity="0.3">
    <text x="10" y="30">1</text><text x="25" y="50">0</text><text x="50" y="20">0</text><text x="65" y="40">1</text><text x="90" y="35">1</text><text x="105" y="55">0</text>
    <text x="130" y="45">0</text><text x="145" y="65">1</text><text x="170" y="30">1</text><text x="185" y="50">0</text><text x="210" y="40">0</text><text x="225" y="60">1</text>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailRain(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><linearGradient id="rn" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#475569"/></linearGradient></defs>
  <rect width="320" height="200" fill="url(#rn)"/>
  <g stroke="#94a3b8" stroke-width="1.5" opacity="0.4" stroke-linecap="round">
    <line x1="30" y1="20" x2="25" y2="40"/><line x1="70" y1="35" x2="65" y2="55"/><line x1="120" y1="15" x2="115" y2="35"/>
    <line x1="170" y1="40" x2="165" y2="60"/><line x1="220" y1="10" x2="215" y2="30"/><line x1="270" y1="30" x2="265" y2="50"/>
    <line x1="50" y1="70" x2="45" y2="90"/><line x1="100" y1="85" x2="95" y2="105"/><line x1="150" y1="65" x2="145" y2="85"/>
    <line x1="200" y1="80" x2="195" y2="100"/><line x1="250" y1="60" x2="245" y2="80"/><line x1="290" y1="75" x2="285" y2="95"/>
    <line x1="40" y1="120" x2="35" y2="140"/><line x1="90" y1="135" x2="85" y2="155"/><line x1="140" y1="110" x2="135" y2="130"/>
    <line x1="190" y1="130" x2="185" y2="150"/><line x1="240" y1="115" x2="235" y2="135"/><line x1="300" y1="125" x2="295" y2="145"/>
    <line x1="60" y1="160" x2="55" y2="180"/><line x1="160" y1="170" x2="155" y2="190"/><line x1="260" y1="165" x2="255" y2="185"/>
    <line x1="110" y1="155" x2="105" y2="175"/><line x1="210" y1="145" x2="205" y2="165"/>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailSnow(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><linearGradient id="sn" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eff6ff"/><stop offset="100%" stop-color="#ffffff"/></linearGradient></defs>
  <rect width="320" height="200" fill="url(#sn)"/>
  <g fill="#cbd5e1" opacity="0.6">
    <circle cx="40" cy="30" r="3"/><circle cx="80" cy="60" r="2.5"/><circle cx="130" cy="20" r="2"/><circle cx="180" cy="50" r="3.5"/>
    <circle cx="230" cy="25" r="2"/><circle cx="280" cy="55" r="2.5"/><circle cx="50" cy="90" r="2"/><circle cx="100" cy="110" r="3"/>
    <circle cx="150" cy="80" r="2.5"/><circle cx="200" cy="100" r="2"/><circle cx="250" cy="85" r="3"/><circle cx="300" cy="105" r="2"/>
    <circle cx="30" cy="140" r="2.5"/><circle cx="90" cy="160" r="2"/><circle cx="140" cy="140" r="3"/><circle cx="190" cy="155" r="2.5"/>
    <circle cx="240" cy="135" r="2"/><circle cx="290" cy="150" r="3"/><circle cx="60" cy="180" r="2"/><circle cx="170" cy="185" r="2.5"/>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailGalaxy(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><radialGradient id="gal"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#020617"/></radialGradient></defs>
  <rect width="320" height="200" fill="url(#gal)"/>
  <g fill="white" opacity="0.8">
    <circle cx="160" cy="100" r="1"/><circle cx="180" cy="80" r="0.8"/><circle cx="140" cy="120" r="1.2"/><circle cx="200" cy="90" r="0.5"/>
    <circle cx="120" cy="70" r="0.7"/><circle cx="210" cy="110" r="0.9"/><circle cx="150" cy="130" r="0.6"/><circle cx="190" cy="140" r="1"/>
    <circle cx="100" cy="100" r="0.8"/><circle cx="220" cy="70" r="0.7"/><circle cx="80" cy="80" r="1.1"/><circle cx="240" cy="120" r="0.5"/>
    <circle cx="60" cy="130" r="0.6"/><circle cx="250" cy="60" r="0.9"/><circle cx="50" cy="50" r="0.7"/><circle cx="270" cy="140" r="0.8"/>
  </g>
  <g fill="white" opacity="0.3">
    <circle cx="30" cy="30" r="0.5"/><circle cx="290" cy="30" r="0.5"/><circle cx="30" cy="170" r="0.5"/><circle cx="290" cy="170" r="0.5"/>
    <circle cx="160" cy="20" r="0.5"/><circle cx="160" cy="180" r="0.5"/>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailStars(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#020617"/>
  <g fill="white">
    <circle cx="40" cy="30" r="1.5"/><circle cx="80" cy="60" r="1"/><circle cx="130" cy="20" r="2"/><circle cx="180" cy="50" r="0.8"/>
    <circle cx="230" cy="25" r="1.2"/><circle cx="280" cy="55" r="0.7"/><circle cx="50" cy="90" r="1"/><circle cx="100" cy="110" r="1.8"/>
    <circle cx="150" cy="80" r="0.6"/><circle cx="200" cy="100" r="1.3"/><circle cx="250" cy="85" r="0.9"/><circle cx="300" cy="105" r="1.1"/>
    <circle cx="30" cy="140" r="0.8"/><circle cx="90" cy="160" r="1.4"/><circle cx="140" cy="140" r="0.7"/><circle cx="190" cy="155" r="1"/>
    <circle cx="240" cy="135" r="1.6"/><circle cx="290" cy="150" r="0.5"/><circle cx="60" cy="180" r="1.2"/><circle cx="170" cy="185" r="0.9"/>
    <circle cx="110" cy="40" r="1"/><circle cx="220" cy="70" r="0.8"/><circle cx="70" cy="120" r="1.5"/><circle cx="260" cy="170" r="0.6"/>
    <circle cx="160" cy="160" r="0.5"/><circle cx="120" cy="180" r="0.7"/><circle cx="210" cy="45" r="1.1"/>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailClock(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#111"/>
  <text x="160" y="115" text-anchor="middle" fill="#fff" font-family="system-ui" font-size="52" font-weight="300" letter-spacing="2">23:48</text>
  <text x="160" y="145" text-anchor="middle" fill="#555" font-family="system-ui" font-size="10">MON, JUL 5</text>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailAmbient(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><linearGradient id="amb" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#007cf0"/><stop offset="33%" stop-color="#ff0080"/><stop offset="66%" stop-color="#7928ca"/><stop offset="100%" stop-color="#f9cb28"/></linearGradient></defs>
  <rect width="320" height="200" fill="url(#amb)"/>
  <text x="160" y="106" text-anchor="middle" fill="rgba(255,255,255,0.15)" font-family="system-ui" font-size="8" font-weight="600" letter-spacing="4">AMBIENT</text>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailBrokenScreen(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#0b0b0b"/>
  <g stroke="#333" stroke-width="0.8" fill="none" opacity="0.6">
    <path d="M40,20 L80,80 L60,130 L120,180"/><path d="M80,80 L140,60 L200,90"/><path d="M60,130 L30,160"/><path d="M120,180 L180,150 L260,190"/>
    <path d="M140,60 L160,20"/><path d="M200,90 L240,50 L290,70"/><path d="M180,150 L220,110 L280,140"/><path d="M160,20 L200,10"/>
    <path d="M240,50 L270,20"/><path d="M220,110 L250,90"/><path d="M30,160 L10,180"/><path d="M260,190 L310,170"/>
  </g>
  <g stroke="#555" stroke-width="0.5" fill="none" opacity="0.3">
    <path d="M70,50 L100,100 L50,120"/><path d="M150,100 L170,130 L130,160"/><path d="M210,60 L230,100 L200,120"/>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailHackerTyper(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#001b0b"/>
  <g fill="#00ff41" font-family="monospace" font-size="7" opacity="0.8">
    <text x="15" y="25">$ root@system:~# ls -la</text>
    <text x="15" y="38">drwxr-xr-x  12 root  root  4096 Jul  5 10:00 .</text>
    <text x="15" y="51">-rw-r--r--   1 root  root   320 Jul  5 09:59 .env</text>
    <text x="15" y="64">-rwxr-xr-x  1 root  root  2048 Jul  5 09:58 decrypt.exe</text>
    <text x="15" y="77">-rw-r--r--   1 root  root  1024 Jul  5 09:57 access.log</text>
    <text x="15" y="90">$ root@system:~# ./decrypt.exe --force</text>
    <text x="15" y="103" fill="#00aa30">Decrypting payload...</text>
    <text x="15" y="116">Accessing mainframe...</text>
    <text x="15" y="129" fill="#ff4444">WARNING: Unauthorized access detected</text>
    <text x="15" y="142" fill="#00ff41" opacity="0.5">_</text>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailBlueScreenPrank(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#0078d7"/>
  <text x="160" y="60" text-anchor="middle" fill="#fff" font-family="system-ui" font-size="9" font-weight="700" letter-spacing="2">:(</text>
  <text x="20" y="85" fill="#fff" font-family="system-ui" font-size="8">Your PC ran into a problem and needs to</text>
  <text x="20" y="97" fill="#fff" font-family="system-ui" font-size="8">restart. We're just collecting some error</text>
  <text x="20" y="109" fill="#fff" font-family="system-ui" font-size="8">info, and then we'll restart for you.</text>
  <text x="20" y="130" fill="#fff" font-family="system-ui" font-size="7" opacity="0.7">0% complete</text>
  <text x="20" y="150" fill="#fff" font-family="system-ui" font-size="6" opacity="0.5">For more info: https://www.windows.com/stopcode</text>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailWindowsXpCrash(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#003399"/>
  <rect x="20" y="30" width="280" height="140" rx="2" fill="#0000aa"/>
  <text x="160" y="55" text-anchor="middle" fill="#fff" font-family="system-ui" font-size="7" font-weight="700">Windows</text>
  <text x="30" y="80" fill="#fff" font-family="monospace" font-size="6">A fatal exception 0E has occurred at</text>
  <text x="30" y="92" fill="#fff" font-family="monospace" font-size="6">0028:C0001E6F in VXD VMM(01) +</text>
  <text x="30" y="104" fill="#fff" font-family="monospace" font-size="6">000016BE. The current application</text>
  <text x="30" y="116" fill="#fff" font-family="monospace" font-size="6">will be terminated.</text>
  <text x="30" y="136" fill="#fff" font-family="monospace" font-size="6">* Press any key to restart</text>
  <text x="30" y="148" fill="#fff" font-family="monospace" font-size="6">* Press CTRL+ALT+DEL again to</text>
  <text x="30" y="160" fill="#fff" font-family="monospace" font-size="6">  restart the system</text>
  <text x="160" y="165" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">_</text>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailRadarScreen(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#001b0b"/>
  <circle cx="160" cy="100" r="80" fill="none" stroke="#00ff41" stroke-width="0.5" opacity="0.3"/>
  <circle cx="160" cy="100" r="55" fill="none" stroke="#00ff41" stroke-width="0.5" opacity="0.3"/>
  <circle cx="160" cy="100" r="30" fill="none" stroke="#00ff41" stroke-width="0.5" opacity="0.3"/>
  <line x1="160" y1="100" x2="160" y2="20" stroke="#00ff41" stroke-width="1" opacity="0.5"/>
  <line x1="160" y1="100" x2="240" y2="100" stroke="#00ff41" stroke-width="0.5" opacity="0.3"/>
  <line x1="160" y1="100" x2="220" y2="40" stroke="#00ff41" stroke-width="1" opacity="0.4"/>
  <circle cx="200" cy="60" r="3" fill="#00ff41" opacity="0.7"/>
  <circle cx="130" cy="130" r="2" fill="#00ff41" opacity="0.5"/>
  <circle cx="190" cy="120" r="2.5" fill="#ff4444" opacity="0.6"/>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailWhiteNoise(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#d4d4d4"/>
  <g fill="#999" opacity="0.3">
    <rect x="10" y="10" width="4" height="4"/><rect x="25" y="18" width="3" height="3"/><rect x="40" y="8" width="5" height="5"/>
    <rect x="55" y="22" width="3" height="3"/><rect x="70" y="12" width="4" height="4"/><rect x="85" y="20" width="2" height="2"/>
    <rect x="100" y="15" width="5" height="5"/><rect x="120" y="8" width="3" height="3"/><rect x="135" y="25" width="4" height="4"/>
    <rect x="150" y="10" width="2" height="2"/><rect x="165" y="18" width="5" height="5"/><rect x="185" y="12" width="3" height="3"/>
    <rect x="200" y="22" width="4" height="4"/><rect x="215" y="8" width="3" height="3"/><rect x="230" y="20" width="5" height="5"/>
    <rect x="250" y="14" width="2" height="2"/><rect x="265" y="24" width="4" height="4"/><rect x="285" y="10" width="3" height="3"/>
    <rect x="300" y="18" width="5" height="5"/><rect x="15" y="40" width="3" height="3"/><rect x="35" y="50" width="4" height="4"/>
    <rect x="50" y="38" width="2" height="2"/><rect x="65" y="52" width="5" height="5"/><rect x="80" y="42" width="3" height="3"/>
    <rect x="95" y="48" width="4" height="4"/><rect x="110" y="36" width="2" height="2"/><rect x="130" y="52" width="5" height="5"/>
  </g>
  <g fill="#aaa" opacity="0.3">
    <rect x="20" y="65" width="3" height="3"/><rect x="45" y="75" width="4" height="4"/><rect x="75" y="68" width="2" height="2"/>
    <rect x="105" y="78" width="5" height="5"/><rect x="135" y="70" width="3" height="3"/><rect x="160" y="80" width="4" height="4"/>
    <rect x="190" y="72" width="2" height="2"/><rect x="220" y="82" width="5" height="5"/><rect x="250" y="75" width="3" height="3"/>
    <rect x="280" y="85" width="4" height="4"/><rect x="30" y="105" width="2" height="2"/><rect x="60" y="115" width="5" height="5"/>
    <rect x="95" y="108" width="3" height="3"/><rect x="130" y="118" width="4" height="4"/><rect x="165" y="110" width="2" height="2"/>
    <rect x="200" y="120" width="5" height="5"/><rect x="240" y="112" width="3" height="3"/><rect x="275" y="122" width="4" height="4"/>
    <rect x="40" y="145" width="5" height="5"/><rect x="80" y="155" width="3" height="3"/><rect x="120" y="148" width="4" height="4"/>
    <rect x="155" y="158" width="2" height="2"/><rect x="190" y="150" width="5" height="5"/><rect x="230" y="160" width="3" height="3"/>
    <rect x="270" y="152" width="4" height="4"/><rect x="15" y="175" width="2" height="2"/><rect x="55" y="185" width="5" height="5"/>
    <rect x="100" y="178" width="3" height="3"/><rect x="145" y="188" width="4" height="4"/><rect x="185" y="180" width="2" height="2"/>
    <rect x="225" y="190" width="5" height="5"/><rect x="265" y="182" width="3" height="3"/><rect x="300" y="192" width="4" height="4"/>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailFakeVirus(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect width="320" height="200" fill="#111827"/>
  <rect x="30" y="20" width="260" height="160" rx="4" fill="none" stroke="#ff4444" stroke-width="2"/>
  <text x="160" y="55" text-anchor="middle" fill="#ff4444" font-family="system-ui" font-size="14" font-weight="900">⚠ SECURITY ALERT</text>
  <text x="50" y="85" fill="#ff6666" font-family="monospace" font-size="7">Threat detected: Trojan.Generic.2</text>
  <text x="50" y="100" fill="#ff6666" font-family="monospace" font-size="7">Location: C:\Users\Admin\AppData</text>
  <text x="50" y="115" fill="#ff6666" font-family="monospace" font-size="7">Severity: Critical</text>
  <text x="50" y="130" fill="#ff6666" font-family="monospace" font-size="7">Status: Quarantine failed</text>
  <text x="50" y="155" fill="#ff6666" font-family="monospace" font-size="7">Recommended: Scan immediately</text>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

// export function thumbnailTerminalScreen(): string {
//   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
//   <rect width="320" height="200" fill="#050505"/>
//   <g fill="#a1a1aa" font-family="monospace" font-size="7">
//     <text x="15" y="25">user@dev:~$ npm run build</text>
//     <text x="15" y="38">> freescreen@1.0.0 build</text>
//     <text x="15" y="51">> astro build</text>
//     <text x="15" y="64" fill="#22c55e">✓ Build complete</text>
//     <text x="15" y="77">user@dev:~$ git push origin main</text>
//     <text x="15" y="90" fill="#22c55e">✓ Pushed successfully</text>
//     <text x="15" y="103">user@dev:~$ node server.js</text>
//     <text x="15" y="116">Server running on port 3000...</text>
//     <text x="15" y="129" fill="#22c55e">✓ Ready</text>
//     <text x="15" y="142">user@dev:~$ </text>
//     <text x="15" y="142" fill="#22c55e" opacity="0.8">▊</text>
//   </g>
//   <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
// </svg>`;
// }

export function thumbnailWindowsUpdate(): string {
  return '<img src="/assets/thumbnails/fakescreen/windows-update-screen.png" alt="" class="size-full object-cover" />';
}

export function thumbnailWindowsXp(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><linearGradient id="xpbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient></defs>
  <rect width="320" height="200" fill="url(#xpbg)"/>
  <g fill="rgba(255,255,255,0.15)">
    <path d="M0,140 Q80,120 160,140 Q240,160 320,140 L320,200 L0,200 Z"/>
    <path d="M0,155 Q80,135 160,155 Q240,175 320,155 L320,200 L0,200 Z"/>
  </g>
  <rect x="0" y="170" width="320" height="30" fill="rgba(0,0,0,0.2)"/>
  <rect x="10" y="175" width="16" height="16" rx="3" fill="#3b82f6"/>
  <rect x="10" y="175" width="16" height="16" rx="3" fill="#3b82f6"/>
  <text x="32" y="188" fill="#fff" font-family="system-ui" font-size="9">start</text>
  <rect x="250" y="176" width="12" height="14" rx="1" fill="#0f0" opacity="0.5"/>
  <rect x="268" y="176" width="12" height="14" rx="1" fill="#ff0" opacity="0.5"/>
  <rect x="286" y="176" width="12" height="14" rx="1" fill="#00f" opacity="0.5"/>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailWindows11(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs><linearGradient id="w11bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#2563eb"/></linearGradient></defs>
  <rect width="320" height="200" fill="url(#w11bg)"/>
  <text x="160" y="75" text-anchor="middle" fill="#fff" font-family="system-ui" font-size="28" font-weight="300">11</text>
  <text x="160" y="100" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="system-ui" font-size="7">Good morning</text>
  <text x="160" y="113" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-family="system-ui" font-size="11">Saturday, July 5</text>
  <rect x="0" y="170" width="320" height="30" fill="rgba(0,0,0,0.25)"/>
  <rect x="130" y="175" width="60" height="18" rx="8" fill="rgba(255,255,255,0.15)"/>
  <circle cx="10" cy="185" r="5" fill="rgba(255,255,255,0.2)"/>
  <rect x="40" y="180" width="12" height="10" rx="2" fill="rgba(255,255,255,0.2)"/>
  <rect x="58" y="182" width="10" height="8" rx="1" fill="rgba(255,255,255,0.2)"/>
  <rect x="270" y="180" width="14" height="10" rx="2" fill="rgba(255,255,255,0.2)"/>
  <rect x="290" y="180" width="10" height="10" rx="2" fill="rgba(255,255,255,0.2)"/>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailUbuntu(): string {
  return '<img src="/assets/thumbnails/fakescreen/ubuntu-update-screen.png" alt="" class="size-full object-cover" />';
}

export function thumbnailMacOSUpdate(): string {
  return '<img src="/assets/thumbnails/fakescreen/macos-update-screen.png" alt="" class="size-full object-cover" />';
}

export function thumbnailAndroidUpdate(): string {
  return '<img src="/assets/thumbnails/fakescreen/android-update-screen.png" alt="" class="size-full object-cover" />';
}

export function thumbnailGradient(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <defs>
    <linearGradient id="gradThumb" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#007cf0"/>
      <stop offset="25%" stop-color="#00dfd8"/>
      <stop offset="50%" stop-color="#7928ca"/>
      <stop offset="75%" stop-color="#ff0080"/>
      <stop offset="100%" stop-color="#f9cb28"/>
    </linearGradient>
  </defs>
  <rect width="320" height="200" rx="12" fill="url(#gradThumb)"/>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailRgb(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <clipPath id="roundClipRgb">
    <rect width="320" height="200" rx="12"/>
  </clipPath>
  <g clip-path="url(#roundClipRgb)">
    <rect width="106.6" height="200" fill="#ff0000"/>
    <rect x="106.6" width="106.8" height="200" fill="#00ff00"/>
    <rect x="213.4" width="106.6" height="200" fill="#0000ff"/>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function thumbnailHex(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <clipPath id="roundClipHex">
    <rect width="320" height="200" rx="12"/>
  </clipPath>
  <g clip-path="url(#roundClipHex)">
    <rect width="80" height="200" fill="#171717"/>
    <rect x="80" width="80" height="200" fill="#7c3aed"/>
    <rect x="160" width="80" height="200" fill="#ff0080"/>
    <rect x="240" width="80" height="200" fill="#f9cb28"/>
    <text x="40" y="105" text-anchor="middle" fill="#ffffff" opacity="0.8" font-family="monospace" font-size="8" font-weight="bold">#171717</text>
    <text x="120" y="105" text-anchor="middle" fill="#ffffff" opacity="0.8" font-family="monospace" font-size="8" font-weight="bold">#7C3AED</text>
    <text x="200" y="105" text-anchor="middle" fill="#ffffff" opacity="0.8" font-family="monospace" font-size="8" font-weight="bold">#FF0080</text>
    <text x="280" y="105" text-anchor="middle" fill="#111111" opacity="0.8" font-family="monospace" font-size="8" font-weight="bold">#F9CB28</text>
  </g>
  <rect x="0.5" y="0.5" width="319" height="199" rx="12" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>`;
}

export function getThumbnail(toolId: string, color?: string): string {
  switch (toolId) {
    case 'gradient-screen': return thumbnailGradient();
    case 'rgb-screen': return thumbnailRgb();
    case 'hex-screen': return thumbnailHex();
    case 'dead-pixel-test': return thumbnailDeadPixelTest();
    // case 'stuck-pixel-fix': return thumbnailStuckPixel();
    // case 'burn-in-test': return thumbnailBurnIn();
    // case 'brightness-test': return thumbnailBrightnessTest();
    // case 'contrast-test': return thumbnailContrastTest();
    // case 'gamma-test': return thumbnailGammaTest();
    // case 'gradient-test': return thumbnailGradientTest();
    // case 'color-accuracy-test': return thumbnailColorAccuracy();
    case 'fireplace-screen': return thumbnailFireplace();
    case 'aquarium-screen': return thumbnailAquarium();
    case 'matrix-screen': return thumbnailMatrix();
    case 'rain-screen': return thumbnailRain();
    case 'snow-screen': return thumbnailSnow();
    case 'galaxy-screen': return thumbnailGalaxy();
    case 'stars-screen': return thumbnailStars();
    case 'clock-screen': return thumbnailClock();
    case 'ambient-screen': return thumbnailAmbient();
    case 'broken-screen': return thumbnailBrokenScreen();
    case 'hacker-typer': return thumbnailHackerTyper();
    case 'blue-screen-prank': return thumbnailBlueScreenPrank();
    case 'windows-xp-crash': return thumbnailWindowsXpCrash();
    case 'radar-screen': return thumbnailRadarScreen();
    case 'white-noise-screen': return thumbnailWhiteNoise();
    case 'fake-virus-screen': return thumbnailFakeVirus();
    // case 'terminal-screen': return thumbnailTerminalScreen();
    case 'windows-update': return thumbnailWindowsUpdate();
    // case 'windows-xp-screen': return thumbnailWindowsXp();
    // case 'windows-11-screen': return thumbnailWindows11();
    case 'ubuntu-screen': return thumbnailUbuntu();
    case 'macos-screen': return thumbnailMacOSUpdate();
    case 'android-update': return thumbnailAndroidUpdate();
    default: return thumbnailScreen(color ?? '#fafafa');
  }
}
