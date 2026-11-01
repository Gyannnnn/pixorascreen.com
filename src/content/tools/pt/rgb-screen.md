---
status: complete
sourceHash: 5dabf925f0493c70
title: "Teste de tela RGB online - Subpixels e calibração de cor em tela cheia"
description: "Um teste de tela RGB que mostra vermelho, verde e azul lado a lado ou um de cada vez em tela cheia, para comparar as cores primárias do seu display e verificar cada canal de subpixel."
h1: "Tela RGB."
breadcrumb: "Tela RGB"
appDescription: "Faça um teste de tela RGB online em tela cheia. Inspecione os subpixels vermelhos, verdes e azuis, procure pixels presos ou mortos, verifique os canais de cor do monitor e calibre telas."
lede: "Vermelho, verde e azul lado a lado ou um de cada vez em tela cheia, para comparar as três cores primárias do seu display e verificar cada canal de subpixel."
chips:
  - "tela cheia"
  - "brilho"
  - "canais de subpixel RGB"
  - "copiar RGB/HEX"
  - "ciclo automático de cores"
shortcuts:
  - keys: F
    label: "Modo tela cheia"
  - keys: R
    label: "Vermelho puro"
  - keys: G
    label: "Verde puro"
  - keys: B
    label: "Azul puro"
  - keys: W / K
    label: "Branco / preto"
  - keys: S
    label: "Vermelho, verde e azul lado a lado"
  - keys: D
    label: "Baixar imagem"
faqs:
  - q: "O que a visualização dividida RGB mostra?"
    a: "Ela mostra as três cores primárias do display uma ao lado da outra, na intensidade máxima. Você pode comparar o quanto cada uma parece saturada e brilhante, perceber uma primária que puxa para outra cor e ver de relance se um canal está faltando por completo, porque a faixa dele ficaria preta."
  - q: "Um teste RGB encontra pixels mortos ou presos?"
    a: "Sim, quando você preenche a tela com uma cor de cada vez. Pressione R, G ou B para acender só esse subpixel no painel inteiro; um subpixel morto aparece como um ponto preto. O teste de pixels mortos com seis cores passa pelas mesmas cores, além de preto, branco e cinza."
  - q: "Por que o vermelho parece laranja ou o verde parece amarelado?"
    a: "Cada painel tem as próprias primárias. Telas de gama ampla costumam mostrar primárias muito saturadas, quase neon, quando o conteúdo não tem gerenciamento de cor, enquanto algumas telas baratas têm primárias que puxam para cores vizinhas. Um modo de imagem sRGB costuma aproximá-las do padrão."
  - q: "Como posso ver os próprios subpixels?"
    a: "Abra uma tela branca ou RGB e olhe o vidro com uma lupa, ou com o modo macro ou o zoom máximo da câmera do celular. Você vai ver o padrão de elementos vermelhos, verdes e azuis, que muda entre as listras das telas LCD e os arranjos usados em celulares e TVs OLED."
  - q: "Isto é um teste de iluminação RGB para teclados ou fitas de LED?"
    a: "Não. Esta página testa a tela em que é aberta. A iluminação RGB de teclados e fitas de LED é controlada pelo próprio software deles, embora uma tela totalmente vermelha, verde ou azul possa ajudar a igualar as cores a olho."
updated: '2026-10-31'
---

## Como usar a tela RGB

A página abre com as três cores primárias lado a lado: vermelho puro (`#FF0000`), verde puro (`#00FF00`) e azul puro (`#0000FF`). Todas as cores que a sua tela mostra são misturadas a partir dessas três, então olhar para elas diretamente diz muito sobre o painel.

- Pressione <kbd>F</kbd> para ativar a tela cheia.
- Pressione <kbd>R</kbd>, <kbd>G</kbd> ou <kbd>B</kbd> para preencher a tela inteira com uma primária, <kbd>W</kbd> para o branco e <kbd>K</kbd> para o preto.
- Pressione <kbd>S</kbd> para voltar à visualização lado a lado.
- Os botões abaixo da prévia fazem o mesmo em telas sensíveis ao toque, e cada faixa pode virar qualquer cor pela amostra dela.

## Como comparar as três primárias

Na visualização lado a lado, olhe cada faixa por vez:

- **Alguma faixa está preta ou muito escura?** Falta um canal inteiro, normalmente por causa de um cabo de vídeo solto ou danificado.
- **O vermelho puxa para o laranja, ou o verde para o amarelo?** As primárias do painel diferem do padrão. Alguma variação é normal; um modo de imagem sRGB costuma aproximá-las.
- **As cores parecem neon, quase brilhando?** Isso é típico de monitores de gama ampla mostrando conteúdo comum sem gerenciamento de cor. Fotos e sites vão parecer supersaturados do mesmo jeito.
- **Uma faixa tem bem menos brilho que as outras?** O verde sempre parece o mais claro e o azul o mais escuro, por causa de como o olho funciona. Um azul quase invisível, ou um vermelho que parece marrom, merece investigação.

## Como verificar cada canal de subpixel

Preencher a tela com uma primária acende só esse tipo de subpixel no painel inteiro. Um ponto preto sobre o vermelho é um subpixel vermelho morto; um ponto colorido significa que outro subpixel está preso aceso. Para uma versão guiada com as seis cores de teste e dicas na tela, use o [teste de pixels mortos com seis cores](tool:dead-pixel-test), ou abra a [tela vermelha](tool:red-screen), a [tela verde](tool:green-screen) ou a [tela azul](tool:blue-screen) para dicas específicas de cada cor.

## Como ver o arranjo dos subpixels

Com ampliação, uma tela é uma grade de minúsculos elementos vermelhos, verdes e azuis, e o padrão muda conforme a tecnologia:

| Tipo de tela | Arranjo típico de subpixels |
|---|---|
| A maioria dos monitores e notebooks LCD | Listras verticais na ordem vermelho, verde, azul |
| Muitos celulares OLED | Arranjos em diamante ou “PenTile”, com mais elementos verdes do que vermelhos ou azuis |
| TVs e monitores WOLED | Vermelho, verde, azul e um subpixel branco extra |
| TVs e monitores QD-OLED | Vermelho, verde e azul dispostos em triângulo |

Para ver na sua própria tela, mostre o branco ou a divisão RGB e olhe de perto com uma lupa, ou com o modo macro da câmera do celular. O arranjo explica por que textos pequenos podem mostrar bordas coloridas em alguns monitores OLED: a suavização de texto da maioria dos sistemas operacionais pressupõe a listra RGB clássica.

## Como baixar o padrão

Pressione <kbd>D</kbd> para salvar a visualização atual como PNG, seja com as três faixas ou com uma única cor, em paisagem, retrato, quadrado ou na resolução do seu aparelho. É uma imagem de teste rápida para verificar uma TV ou um projetor a partir de um pendrive.
