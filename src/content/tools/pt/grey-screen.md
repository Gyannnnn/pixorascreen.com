---
status: complete
sourceHash: a373973fc4700de1
title: "Tela cinza online - Ferramenta grátis em tela cheia"
description: "Um cinza médio neutro em tela cheia (#808080) para perceber luz de fundo irregular, o efeito de tela suja, variações de tom e burn-in em OLED, além de testes perto do preto."
h1: "Tela cinza."
breadcrumb: "Tela cinza"
appDescription: "Uma superfície cinza neutra em tela cheia para verificar uniformidade, equilíbrio de brilho e tons médios. Abra em tela cheia, ajuste o brilho e teste seu display."
lede: "Um cinza médio neutro em tela cheia (#808080) para perceber luz de fundo irregular, o efeito de tela suja, variações de tom e o burn-in em OLED que as cores claras escondem."
chips:
  - "tela cheia"
  - "brilho"
  - "copiar HEX"
  - "copiar RGB"
  - "entrada RGB"
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
  - q: "Por que #808080 se chama cinza 50% se não parece ter metade do brilho?"
    a: "O número fica no meio do caminho entre o preto e o branco, mas as telas usam codificação gama, então #808080 emite, na verdade, só cerca de 22% da luz do branco total. Mesmo assim, ele parece um cinza médio aos olhos, porque a nossa percepção de brilho também não é linear."
  - q: "Qual nível de cinza mostra melhor o efeito de tela suja?"
    a: "Normalmente, os cinzas mais escuros. Comece com o cinza médio desta página e depois digite 333333 (cerca de 20%) e 1A1A1A (cerca de 10%) no campo HEX. Faixas verticais ou horizontais fracas que ficam paradas quando você mexe a cabeça são o efeito de tela suja."
  - q: "Uma tela cinza mostra burn-in em OLED?"
    a: "Sim. O burn-in fica mais fácil de ver em um cinza médio uniforme, em que o contorno fraco de uma barra de status, um logo ou um teclado aparece como uma forma um pouco mais escura ou tingida. O teste de burn-in OLED passa por vários níveis de cinza e acrescenta um padrão em movimento para a retenção de imagem."
  - q: "O que é mura?"
    a: "Mura é a palavra japonesa para irregularidade e é usada para as manchas ou nuvens de um painel que sobram do processo de fabricação. Ela aparece melhor em um cinza uniforme e é uma característica de cada painel, então não muda com as configurações."
  - q: "Posso usar uma tela cinza como fundo neutro para trabalhar com cores?"
    a: "Sim. Editores de fotos usam cinza neutro em volta das imagens porque um entorno colorido muda como julgamos as cores. Uma segunda tela cinza, ou um papel de parede cinza baixado desta página, mantém neutra a área em volta do seu trabalho."
updated: '2026-10-31'
---

## Por que o cinza médio encontra o que as cores claras escondem

Branco e preto são os extremos do que um display consegue mostrar, e muitos painéis ficam no seu melhor ali. Defeitos de uniformidade de brilho e de cor aparecem mais no meio da faixa, onde o painel precisa manter um nível parcial exato em todos os pontos ao mesmo tempo. Esta página preenche a tela com `#808080`, o clássico cinza 50%, que é perfeitamente neutro, com vermelho, verde e azul iguais.

1. Desative Luz noturna, Night Shift ou qualquer modo de conforto visual, para o cinza continuar neutro.
2. Pressione <kbd>F</kbd> para ativar a tela cheia e escureça um pouco o ambiente.
3. Percorra a tela inteira do seu lugar de sempre e depois de mais longe.
4. Repita com um cinza mais escuro, como `333333`, digitado no campo HEX.

## O que procurar

### Brilho irregular e vinheta

Cantos ou bordas mais escuros, ou um lado mais claro que o outro, são comuns em monitores LCD e notebooks com iluminação lateral. Eles aparecem muito mais claramente no cinza do que no branco.

### O efeito de tela suja

Em TVs LCD e OLED grandes, faixas verticais ou horizontais fracas que ficam fixas quando você mexe a cabeça são conhecidas como efeito de tela suja (dirty screen effect). Ele aparece mais em esportes com grandes áreas lisas, como um campo de futebol ou uma pista de gelo, e nos cinzas mais escuros.

### Variações de tom

Um cinza realmente neutro deve parecer da mesma cor em todos os pontos. Áreas que puxam para o rosa, o verde ou o azul são defeitos de uniformidade de cor; elas são mais fáceis de avaliar no cinza do que no branco, porque o olho é mais sensível ao tom nos níveis médios.

### Mura e nuvens

Manchas ou nuvens que sobram do processo de fabricação são chamadas de mura. Elas são uma característica de cada painel, então as configurações não as removem.

### Burn-in em OLED

Formas fracas de uma barra de status, um logo ou um teclado na tela aparecem no cinza como contornos um pouco mais escuros ou tingidos. O [teste de burn-in OLED](tool:oled-burn-in-test) passa por vários níveis de cinza e inclui um padrão em movimento para limpar a retenção de imagem temporária.

## Cinzas perto do preto

Telas OLED podem ter dificuldade com os cinzas mais escuros, logo acima do preto, mostrando manchas ou uma leve cintilação ali. Digite `0A0A0A`, `141414` e `1A1A1A` no campo HEX, um de cada vez. Cada um deve parecer um degrau suave e um pouco mais claro. A [tela preta](tool:black-screen) verifica o preto puro, e a [tela de degradê](tool:gradient-screen) mostra uma rampa suave em que as faixas, ou seja, os degraus visíveis entre os tons, se destacam.

## Um cinza neutro para trabalhar com cores

Editores de foto e vídeo cercam as imagens de cinza neutro por um motivo: um fundo colorido muda como percebemos as cores ao lado dele. Um segundo monitor cinza, ou um papel de parede cinza salvo com o botão Baixar, mantém o entorno neutro enquanto você edita. Para uma verificação completa do painel de uma vez, use o [teste de pixels mortos com seis cores](tool:dead-pixel-test), que inclui o cinza junto com as cores primárias.
