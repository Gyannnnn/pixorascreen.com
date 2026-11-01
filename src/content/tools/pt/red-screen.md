---
status: complete
sourceHash: 86b94a5e7f473b83
title: "Tela vermelha - Teste grátis de pixels mortos em tela cheia | PixoraScreen"
description: "Teste de tela vermelha grátis para encontrar pixels mortos e falhas no subpixel vermelho. Também serve como luz vermelha para a visão noturna e o conforto visual. Em tela cheia, com brilho ajustável."
h1: "Tela vermelha: teste de pixels mortos e tela de luz vermelha"
breadcrumb: "Tela vermelha"
appDescription: "Teste de tela vermelha grátis para encontrar pixels mortos e falhas no subpixel vermelho. Também serve como luz vermelha para a visão noturna e o conforto visual. Em tela cheia, com brilho ajustável."
lede: "Um vermelho sólido em tela cheia (#FF0000) para verificar os subpixels vermelhos do seu display, além de uma luz vermelha suave para observar estrelas, ler à noite e criar efeitos de iluminação em vídeos."
chips:
  - "tela cheia"
  - "brilho"
  - "copiar HEX"
  - "copiar RGB"
  - "entrada HSL"
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
  - q: "O que o teste de tela vermelha mostra que a tela branca não mostra?"
    a: "O vermelho acende só o subpixel vermelho de cada pixel. Um subpixel vermelho morto ou fraco pode se esconder dentro de um pixel branco, porque o verde e o azul ao lado continuam acesos, mas em um campo vermelho sólido ele aparece como um ponto escuro."
  - q: "O que significa um ponto amarelo ou rosa na tela vermelha?"
    a: "Que outro subpixel está preso aceso. Vermelho com um subpixel verde preso parece amarelo, e vermelho com um subpixel azul preso parece magenta ou rosa. Um ponto preto significa que o próprio subpixel vermelho falhou."
  - q: "Uma tela vermelha ajuda a preservar a visão noturna?"
    a: "Só quando está fraca. Os bastonetes, as células que os olhos usam no escuro, são os menos sensíveis ao vermelho profundo, e é por isso que astrônomos leem mapas com luz vermelha. Baixe o brilho do aparelho ao mínimo e o controle desta página para 20%, ou escolha um vermelho mais escuro como #400000 na tela de cor personalizada."
  - q: "Uma tela vermelha é melhor que uma branca à noite?"
    a: "A luz vermelha não tem os comprimentos de onda azuis que mais suprimem a melatonina, então uma tela vermelha fraca atrapalha menos a rotina da noite do que uma branca e forte. Mesmo assim, qualquer tela forte perto do rosto pode tirar o sono, então mantenha-a fraca e afastada."
  - q: "Por que a minha tela inteira está vermelha ou rosada?"
    a: "Confira as configurações primeiro. Luz noturna ou Night Shift na intensidade máxima, um filtro ou tonalidade de cor nas opções de acessibilidade ou uma predefinição de cor do monitor podem tingir a tela. Se o tom pisca ou muda quando você mexe no cabo, a causa provável é um cabo de vídeo danificado ou um conector frouxo."
  - q: "Como deixo a tela do meu iPhone vermelha de forma permanente?"
    a: "Abra Ajustes, Acessibilidade, Tela e Tamanho do Texto, Filtros de Cor. Ative Filtros de Cor, escolha Tonalidade e leve Intensidade e Matiz ao máximo. Você pode adicionar isso ao Atalho de Acessibilidade para que um clique triplo no botão lateral ligue e desligue o tom vermelho."
updated: '2026-10-31'
---

## Como fazer um teste de tela vermelha

Esta página preenche o display com vermelho puro (`#FF0000`). Cada pixel de uma tela LCD ou OLED é formado por um subpixel vermelho, um verde e um azul, e o vermelho puro acende só os vermelhos. Isso faz dele a forma mais limpa de verificar um canal de cor sozinho, algo que uma [tela branca](tool:white-screen) ou uma [tela preta](tool:black-screen) não conseguem fazer.

1. Limpe a tela para não confundir poeira com defeito.
2. Aumente o brilho do aparelho, abra esta página e pressione <kbd>F</kbd> para ativar a tela cheia.
3. Percorra a tela devagar, canto por canto e de perto. Em celulares e notebooks de alta resolução, a câmera de um celular com zoom sobre o vidro funciona como lupa.
4. Anote a posição de qualquer ponto que não tenha o mesmo vermelho do entorno e depois confira o mesmo lugar na [tela verde](tool:green-screen) e na [tela azul](tool:blue-screen).

## O que a tela vermelha revela

### Subpixels vermelhos mortos ou fracos

Um ponto preto no vermelho significa que o subpixel vermelho naquele lugar não acende. Um ponto de um vermelho visivelmente mais escuro significa que o subpixel está fraco. Os dois são difíceis de ver no conteúdo normal, porque os outros dois subpixels do pixel fazem com que ele pareça mais ou menos certo.

### Subpixels verdes ou azuis presos

Qualquer cor extra misturada ao vermelho indica outro subpixel preso. Um ponto amarelo significa que um subpixel verde está preso aceso; um ponto magenta ou rosa, que é um azul. O [teste de pixels mortos com seis cores](tool:dead-pixel-test) confirma o diagnóstico passando por todos os canais.

### Cor irregular no painel

O vermelho é um teste exigente de uniformidade em telas LCD, porque é fácil notar quando uma área puxa para o laranja ou o rosa. Em uma OLED, formas fracas de elementos fixos como a barra de tarefas também podem aparecer através de uma cor sólida, embora os preenchimentos cinza médios do [teste de burn-in OLED](tool:oled-burn-in-test) separem o burn-in com mais clareza.

## Luz vermelha para a visão noturna

Depois de uns 20 a 30 minutos no escuro, os olhos passam a usar os bastonetes, que são muito sensíveis à luz fraca, mas quase não respondem ao vermelho profundo. Uma luz vermelha fraca permite enxergar um mapa celeste, os controles de uma câmera ou uma página sem perder essa adaptação, e é por isso que astrônomos e campistas usam lanternas vermelhas. Para usar esta página assim:

- Baixe o brilho do aparelho ao mínimo.
- Coloque o controle de brilho desta página em 20%.
- Para uma luz ainda mais suave, abra a [tela de cor personalizada](tool:custom-color-screen) e digite um vermelho escuro como `#400000`.

Uma tela vermelha forte ainda ofusca. O benefício vem da luz vermelha em nível baixo.

## Outros usos

- **Iluminação de clima e de festa:** uma TV ou monitor em vermelho no modo tela cheia banha de cor um cômodo ou um setup de mesa.
- **Efeitos de vídeo:** uma tela vermelha logo fora do enquadramento dá ao assunto um contorno de luz vermelha para cenas de alarme, terror ou balada.
- **Testes de projetor:** uma cor primária sólida mostra se cada cor da imagem do projetor chega às bordas por igual.
- **Imagens:** pressione <kbd>D</kbd> para baixar um PNG vermelho em 1920×1080, 1080×1920, 1080×1080 ou na resolução da sua tela.
