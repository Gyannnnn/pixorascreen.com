---
status: complete
sourceHash: 2b3659a5d6923178
title: "Tela verde online - Chroma key grátis em tela cheia"
description: "Tela verde online e grátis para vídeos com chroma key, fundos de transmissão e testes de tela. Em tela cheia, com brilho ajustável e funciona em qualquer dispositivo."
h1: "Tela verde: chroma key grátis em tela cheia para fundos de vídeo"
breadcrumb: "Tela verde"
appDescription: "Tela verde online e grátis para vídeos com chroma key, fundos de transmissão e testes de tela. Em tela cheia, com brilho ajustável e funciona em qualquer dispositivo."
lede: "Uma tela verde inteira no verde chroma key puro (#00FF00) para remover fundos em vídeos, transmissões e chamadas, além de uma verificação rápida dos subpixels verdes do seu display."
chips:
  - "tela cheia"
  - "brilho"
  - "copiar HEX"
  - "copiar RGB"
  - "entrada HEX"
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
  - q: "Qual tom de verde é melhor para chroma key?"
    a: "Em uma tela, o verde puro (#00FF00) é recortado com limpeza porque fica longe dos tons de pele. Paredes pintadas e fundos de tecido usam um verde chroma mais escuro, por volta de #00B140, porque as luzes de estúdio os clareiam. Se a câmera mostrar a tela como um verde-amarelado pálido, baixe o controle de brilho até ela gravar um verde sólido e saturado."
  - q: "Posso usar meu monitor como tela verde no Zoom?"
    a: "Sim, se a tela ocupar toda a área atrás da sua cabeça no enquadramento. Abra esta página em tela cheia em um monitor grande ou TV atrás de você e, no Zoom, vá em Configurações, Planos de fundo e efeitos, escolha um fundo virtual e marque “Eu tenho uma tela verde”. No OBS, você pode adicionar um filtro Chroma Key à fonte da câmera."
  - q: "Por que aparecem linhas ou cintilação quando filmo a tela verde?"
    a: "O obturador da câmera está fora de sincronia com a atualização da tela. Ajuste a velocidade do obturador para a frequência da rede elétrica de onde você mora, 1/60 s em regiões de 60 Hz ou 1/50 s em regiões de 50 Hz, ou um múltiplo dela, e as faixas que rolam devem sumir."
  - q: "Posso baixar uma imagem de fundo verde?"
    a: "Sim. Escolha paisagem (1920×1080), retrato (1080×1920), quadrado (1080×1080) ou a resolução do seu aparelho e pressione Baixar ou a tecla D. Você recebe um PNG verde liso, útil como camada provisória ao montar um modelo que será recortado depois."
  - q: "É melhor usar tela verde ou tela azul?"
    a: "O verde é a escolha comum para câmeras digitais porque os sensores registram o verde com mais detalhe e menos ruído, então ele recorta melhor com menos luz. Escolha o azul quando a pessoa estiver de verde ou tiver elementos verdes, ou quando o reflexo verde na pele for difícil de controlar."
  - q: "Uma tela verde verifica pixels mortos no meu display?"
    a: "Sim, no canal verde. Em um campo verde sólido, um pixel cujo subpixel verde falhou aparece como um ponto preto. O verde também responde pela maior parte do brilho que percebemos, então a iluminação irregular aparece claramente nele."
updated: '2026-10-31'
---

## Como usar esta tela verde para chroma key

Esta página preenche o display com verde chroma key puro (`#00FF00`). Coloque a tela atrás do que você estiver filmando, e qualquer editor de vídeo ou app de transmissão com efeito de chroma key consegue trocar o verde por um fundo novo. Funciona melhor com assuntos menores que a tela: produtos em uma mesa, mãos demonstrando algo, um brinquedo ou boneco, ou um enquadramento de cabeça e ombros na frente de uma TV grande. Para planos de corpo inteiro, ainda é preciso um fundo de tecido ou pintado, porque nenhum monitor é grande o bastante para preencher o quadro.

1. Use o maior display que tiver, abra esta página e pressione <kbd>F</kbd> para ativar a tela cheia, sem barras do navegador cortando o verde.
2. Posicione o assunto a uma pequena distância à frente da tela, sem encostar nela. A distância reduz a luz verde que rebate no assunto.
3. Ilumine o assunto com uma luminária ou janela. A tela verde deve ser o fundo, não a principal fonte de luz.
4. Trave a exposição e o balanço de branco da câmera para que o verde mantenha o mesmo tom de um quadro para outro.
5. Se o verde parecer pálido ou amarelado na câmera, baixe o controle de brilho desta página até ele gravar um verde profundo e uniforme.
6. Adicione um efeito de chroma key no seu software: o filtro Chroma Key no OBS, o Ultra Key no Premiere Pro, o 3D Keyer no DaVinci Resolve ou o Chroma Key no CapCut.

## Como resolver problemas comuns de recorte

### Bordas verdes em volta do cabelo ou de objetos

A luz verde está vazando para o assunto. Afaste-o mais da tela, baixe o brilho da tela e use a opção de supressão de vazamento (spill) do seu editor.

### Linhas que rolam ou cintilação

O obturador da câmera está fora de sincronia com a taxa de atualização da tela. Use uma velocidade de obturador de 1/60 s em países de 60 Hz ou 1/50 s em países de 50 Hz.

### Padrões moiré

Ondulações finas aparecem quando a câmera consegue distinguir a grade de pixels da tela. Abra mais a abertura da lente para o fundo ficar um pouco desfocado ou afaste um pouco a câmera.

### Recorte irregular

Reflexos de luminárias e janelas no vidro quebram o verde. Vire a tela um pouco para longe das fontes de luz fortes ou apague a luz do cômodo que se reflete nela.

## Tela verde para transmissões e videochamadas

Um monitor grande ou uma TV atrás da sua cadeira pode funcionar como tela verde para uma webcam que enquadra cabeça e ombros. O Zoom tem a opção “Eu tenho uma tela verde” nas configurações de plano de fundo, que usa a cor sólida para um recorte mais nítido do que a remoção automática de fundo. No OBS Studio, clique com o botão direito na fonte da câmera, abra Filtros e adicione Chroma Key. Mantenha a tela atrás de você iluminada por igual e sem reflexos, e confira se nenhuma peça de roupa tem um verde parecido.

## Usar o verde para testar um display

Um campo verde sólido acende só os subpixels verdes. Um que falhou aparece como um ponto preto, e como o verde responde por cerca de 70% do brilho que o olho percebe, iluminação irregular e nuvens ficam mais fáceis de ver aqui do que no vermelho ou no azul. Compare com a [tela vermelha](tool:red-screen) e a [tela azul](tool:blue-screen) para verificar os três canais, ou use o [teste de pixels mortos com seis cores](tool:dead-pixel-test) para passar por eles em ordem. Se precisar de outra cor de recorte, a [tela de cor personalizada](tool:custom-color-screen) aceita qualquer valor HEX, RGB ou HSL.
