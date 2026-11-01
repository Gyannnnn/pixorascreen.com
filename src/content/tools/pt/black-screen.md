---
status: complete
sourceHash: e0c26a47a4b8ec5e
title: "Tela preta - Teste grátis em tela cheia | PixoraScreen"
description: "Faça um teste de tela preta grátis para encontrar pixels mortos, pixels presos e vazamento de luz. Em tela cheia, ideal para ambientes escuros e funciona em qualquer dispositivo."
h1: "Tela preta: teste grátis em tela cheia para encontrar pixels com defeito"
breadcrumb: "Tela preta"
appDescription: "Faça um teste de tela preta grátis para encontrar pixels mortos, pixels presos e vazamento de luz. Em tela cheia, ideal para ambientes escuros e funciona em qualquer dispositivo."
lede: "Uma superfície preta de verdade em tela cheia para verificar telas OLED, encontrar pixels mortos, reduzir reflexos e usar em ambientes escuros."
chips:
  - "tela cheia"
  - "brilho"
  - "copiar HEX"
  - "copiar RGB"
  - "cores favoritas"
shortcuts:
  - keys: F
    label: "Modo tela cheia"
  - keys: R
    label: "Cor aleatória"
  - keys: C
    label: "Copiar a cor atual"
  - keys: D
    label: "Baixar imagem"
faqs:
  - q: "Um teste de tela preta encontra pixels mortos?"
    a: "Não de forma confiável. Um pixel morto nunca acende, então, sobre um fundo preto, ele parece igual a todos os outros. A tela preta encontra o defeito oposto: pixels que ficam acesos. Para encontrar pixels mortos, mude para uma tela branca, onde um ponto apagado aparece como uma pinta escura."
  - q: "Um pouco de vazamento de luz é normal?"
    a: "Um pouco de luz nas bordas é comum em monitores LCD e notebooks, principalmente em painéis IPS com iluminação lateral, e geralmente só aparece em um ambiente escuro com o brilho no máximo. Se você enxerga manchas claras no uso normal, como em uma cena escura de filme com o brilho de sempre, vale a pena acionar a garantia ou pedir a troca."
  - q: "Qual é a diferença entre o IPS glow e o vazamento de luz?"
    a: "O IPS glow é um brilho prateado que muda quando você mexe a cabeça ou olha o painel de lado. O vazamento de luz fica sempre no mesmo lugar, geralmente como uma mancha amarelada ou azulada em um canto ou borda, não importa de onde você olhe."
  - q: "Uma tela preta economiza bateria?"
    a: "Em telas OLED e AMOLED, sim. Os pixels pretos ficam desligados, então quase não gastam energia. Em telas LCD, a luz de fundo continua acesa atrás da imagem preta, então a economia é pequena; colocar a tela em repouso economiza muito mais."
  - q: "Por que o preto parece cinza-escuro no meu monitor?"
    a: "A maioria dos painéis LCD deixa passar um pouco de luz de fundo, então o preto parece cinza-escuro em um ambiente com pouca luz; painéis VA seguram melhor o preto do que os IPS, e o OLED mostra preto de verdade. Se o preto parece claramente desbotado, verifique se a placa de vídeo ou a TV não está enviando uma faixa RGB limitada (16-235) para um monitor de faixa completa."
  - q: "Como saio da tela preta em tela cheia?"
    a: "Pressione Esc no teclado, ou mova o mouse e clique no botão de sair. Em celulares e tablets, use o gesto de voltar ou deslize para baixo a partir da borda superior."
updated: '2026-10-31'
---

## Como fazer um teste de tela preta

Um teste de tela preta preenche todo o display com preto puro (`#000000`). O preto é o estado mais escuro que uma tela funcionando consegue produzir, então qualquer coisa que ainda emita luz se destaca na hora: um pixel preso aceso, luz vazando pelas bordas ou uma área nublada que parece cinza em vez de preta. Esses defeitos se escondem atrás das janelas e dos papéis de parede do dia a dia, e é por isso que um monitor, notebook ou celular novo pode parecer perfeito até você assistir a um filme escuro em um quarto escuro.

1. Aumente ao máximo o brilho do próprio display nas configurações do sistema ou do monitor. O controle deslizante desta página só consegue escurecer a imagem ou aplicar um reforço por software; ele não aumenta a luz de fundo.
2. Escureça o ambiente e limpe a tela, para que reflexos e poeira não pareçam defeitos.
3. Pressione <kbd>F</kbd> ou o botão de tela cheia para que nenhuma barra do navegador ou da área de trabalho cubra as bordas. No iPhone, o Safari não deixa páginas da web ocuparem a tela inteira; vire o celular de lado e deixe a barra de endereço se recolher.
4. Dê cerca de 30 segundos para os olhos se acostumarem e depois percorra a tela por partes: os quatro cantos, as bordas e, por fim, o meio.
5. Olhe de novo de frente e de um ângulo baixo. Alguns brilhos só aparecem fora do eixo.
6. Pressione <kbd>Esc</kbd> para sair da tela cheia.

## O que a tela preta revela

### Pixels presos e acesos

Um subpixel preso aceso aparece como um ponto vermelho, verde ou azul brilhante; um pixel totalmente aceso aparece branco. Esses são os defeitos que o preto encontra melhor, porque até um único subpixel aceso é impossível de passar despercebido em um fundo escuro.

### Vazamento de luz

Painéis LCD são iluminados por trás ou pelas bordas. Quando o painel fica pressionado de forma desigual contra a moldura, a luz escapa e aparece como manchas claras, geralmente nos cantos ou ao longo da borda inferior.

### IPS glow

Painéis IPS mostram um brilho suave nos cantos quando vistos de lado. Diferente do vazamento, ele se move e muda conforme você mexe a cabeça, e diminui quando você se afasta. Um pouco de glow é uma característica da tecnologia, não um defeito.

### Nuvens e halos

Áreas mais claras e manchadas no meio da tela são chamadas de clouding (nuvens). Em telas com escurecimento local, um ponteiro do mouse claro sobre o preto também pode criar um halo ao redor, conhecido como blooming. Os dois são fáceis de avaliar em um fundo totalmente preto.

## O que ela não consegue mostrar

Uma tela preta não revela pixels mortos, porque um pixel apagado é invisível no preto; para isso, use a [tela branca](tool:white-screen). Ela também não mostra burn-in, que precisa de um preenchimento cinza médio como o do [teste de burn-in OLED](tool:oled-burn-in-test). Se um canal de cor parecer errado, a [tela vermelha](tool:red-screen) e as outras telas de uma cor só isolam cada subpixel, e o [teste de pixels mortos com seis cores](tool:dead-pixel-test) percorre a sequência inteira para você.

## É defeito ou é normal?

A maioria dos fabricantes avalia defeitos de pixel pelas classes da norma ISO 9241-307, que costumam tolerar alguns pontos escuros, mas menos pontos claros. As políticas variam de marca para marca, então confira os termos da garantia e teste um display novo enquanto ainda dá para devolvê-lo. Ao fotografar um defeito para uma reclamação, reduza a exposição da câmera: as câmeras de celular clareiam cenas escuras e fazem um vazamento normal parecer muito pior do que é.

## Outros usos para uma tela preta

- **Repouso em OLED:** em uma TV ou celular OLED, a tela preta desliga os pixels, então é um estado de "desligado" tranquilo que não desgasta o painel.
- **Segundo monitor durante um filme:** apague visualmente um monitor lateral sem desconectá-lo, para que a luz dele não distraia você.
- **Testes de projetor:** compare quão escuro o preto realmente fica antes e depois de fechar as cortinas.
- **Edição de vídeo:** o botão Baixar salva um PNG preto em 1920×1080, 1080×1920 para vídeo vertical, 1080×1080 quadrado ou na resolução exata do seu dispositivo. Pressione <kbd>D</kbd> como atalho.
