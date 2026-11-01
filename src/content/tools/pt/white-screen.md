---
status: complete
sourceHash: e40dabe36b7bb0ce
title: "Tela branca - Teste grátis em tela cheia | PixoraScreen"
description: "Faça um teste de tela branca grátis para encontrar pixels mortos, vazamento de luz em telas LCD e tons de cor. Em tela cheia, com controle de brilho e funciona em qualquer dispositivo."
h1: "Tela branca: teste grátis em tela cheia para encontrar pixels mortos"
breadcrumb: "Tela branca"
appDescription: "Faça um teste de tela branca grátis para encontrar pixels mortos, vazamento de luz em telas LCD e tons de cor. Em tela cheia, com controle de brilho e funciona em qualquer dispositivo."
lede: "Uma tela cheia em branco puro para conferir a limpeza da tela, iluminar suavemente, inspecionar displays e servir de luz de preenchimento em fotos."
chips:
  - "tela cheia"
  - "brilho"
  - "copiar HEX"
  - "copiar RGB"
  - "seletor de cores"
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
  - q: "Que cor um subpixel morto mostra em uma tela branca?"
    a: "O branco é vermelho, verde e azul na potência máxima, então um pixel sem um deles mostra a mistura dos outros dois. Um subpixel azul morto parece amarelo, um vermelho morto parece ciano e um verde morto parece magenta. Um pixel totalmente morto parece preto."
  - q: "Por que a tela branca parece amarelada ou azulada?"
    a: "Normalmente é uma configuração do display que está tingindo a imagem. Luz noturna no Windows, Night Shift e True Tone em aparelhos Apple e os modos de conforto visual ou de leitura no Android deixam a imagem mais quente. Desative-os e confira a predefinição de temperatura de cor do monitor; um modo 6500K ou “sRGB” dá o branco mais neutro."
  - q: "Uma tela branca conserta um pixel preso?"
    a: "Não. Uma imagem branca parada não muda um pixel preso. Alternar cores rapidamente sobre o ponto ou massageá-lo de leve com um pano macio às vezes solta um pixel preso, mas não há garantia, e nenhum software ressuscita um pixel morto."
  - q: "O teste de tela branca é seguro para uma tela OLED?"
    a: "Sim, em sessões normais de teste de poucos minutos. O burn-in se acumula quando a mesma imagem fica na tela por centenas de horas. Mantenha curtas as sessões de branco no brilho máximo em celulares, que também escurecem sozinhos para proteger o painel."
  - q: "Posso usar um tablet como mesa de luz para decalcar?"
    a: "Sim. Deixe a tela em branco no modo tela cheia, aumente o brilho e coloque o papel por cima. Ponha uma folha de plástico transparente entre o papel e o vidro e decalque com pouca pressão; apertar com força uma tela LCD pode deixar marcas temporárias."
  - q: "O controle de brilho deixa a tela mais clara que o máximo dela?"
    a: "Não. O branco já é a coisa mais clara que seu display consegue mostrar com a luz de fundo atual. O controle escurece a imagem até 20%, e o reforço acima de 100% só clareia as cores que ainda não estão no brilho máximo. Para ter mais luz, aumente o brilho do próprio aparelho."
updated: '2026-10-31'
---

## Como fazer um teste de tela branca

Um teste de tela branca deixa todos os pixels em branco puro (`#ffffff`), ou seja, todos os subpixels vermelhos, verdes e azuis do painel trabalham na potência máxima. Tudo o que não acompanha fica visível: um pixel que nunca acende, um canto mais apagado que o resto ou um branco puxado para o amarelo ou o azul. É a verificação mais rápida para um notebook novo, um monitor usado ou um celular depois da troca de tela.

1. Limpe o vidro primeiro. No branco, poeira e marcas de dedo parecem exatamente pixels escuros.
2. Desative Luz noturna, Night Shift, True Tone e qualquer modo de conforto visual, porque eles tingem o branco de propósito.
3. Coloque o display em um brilho alto e pressione <kbd>F</kbd> ou o botão de tela cheia.
4. Percorra a tela por partes a uma distância normal e depois chegue mais perto.
5. Em uma tela pequena e nítida de celular ou notebook, use o zoom da câmera do celular como lupa. Um único pixel morto em um display de alta densidade é menor que um grão de sal.
6. Pressione <kbd>Esc</kbd> quando terminar.

## O que a tela branca mostra

### Pixels e subpixels mortos

Um pixel totalmente morto é um ponto preto. Um pixel que perdeu só um subpixel mostra uma cor: amarelo se faltar o azul, ciano se faltar o vermelho e magenta se faltar o verde. Essa cor diz exatamente qual subpixel falhou.

### Brilho irregular

Em painéis LCD, um campo branco mostra cantos apagados, faixas mais escuras e áreas onde a luz de fundo é mais fraca. TVs grandes também podem mostrar faixas verticais ou horizontais fracas, o chamado efeito de tela suja (dirty screen effect); um campo cinza médio como a [tela cinza](tool:grey-screen) deixa isso mais fácil de ver.

### Tom e balanço de branco

O branco deve parecer neutro, como papel à luz do dia. Coloque duas telas lado a lado nesta página e as diferenças de temperatura de cor ficam óbvias, o que ajuda a igualar monitores em uma configuração com duas telas.

### Poeira e manchas

Um fundo claro e uniforme realça cada marca de dedo e cada risco, então é um bom momento para limpar a tela antes de testar qualquer outra coisa.

## O que ela não consegue mostrar

O branco esconde o defeito oposto: um pixel preso sempre aceso fica invisível em um campo branco. Procure esses na [tela preta](tool:black-screen), que também mostra o vazamento de luz muito melhor. Para uma inspeção completa, o [teste de pixels mortos com seis cores](tool:dead-pixel-test) passa por preto, branco, vermelho, verde, azul e cinza em sequência, e o [teste de burn-in OLED](tool:oled-burn-in-test) usa níveis de cinza em que a retenção de imagem é mais fácil de perceber.

## Usar a tela branca como luz

- **Mesa de luz para decalque:** um tablet ou notebook em branco total atrás de um papel fino permite decalcar um desenho ou letras. Um plástico transparente evita que o lápis marque o vidro.
- **Conferir negativos e slides:** segure um negativo ou slide contra a tela acesa para procurar poeira e arranhões antes de digitalizá-lo.
- **Luz de preenchimento em videochamadas:** um monitor ou tablet sobrando em branco total, posicionado um pouco acima do rosto, suaviza as sombras. Se o branco puro parecer duro demais, escolha um branco quente como `#FFF1DC` na [tela de cor personalizada](tool:custom-color-screen).
- **Fotos de produto:** uma tela branca atrás de um objeto pequeno de vidro ou plástico cria um fundo limpo e iluminado por igual.

## Observações para telas OLED

Branco total no brilho máximo é o que mais exige de um painel OLED, por isso os celulares escurecem automaticamente grandes áreas brancas para proteger a tela. Um teste de poucos minutos é inofensivo; o burn-in vem da mesma imagem exibida por centenas de horas. O botão Baixar salva um PNG branco em 1920×1080, 1080×1920, 1080×1080 ou na resolução do seu aparelho, caso você precise de um fundo branco para um documento ou vídeo.
