---
status: complete
sourceHash: 3d004954ba04ab2a
title: "Teste de tela HEX online - Prévia de códigos de cor e paletas em tela cheia"
description: "Veja códigos de cor HEX e paletas de 4 cores em tela cheia. Compare cores de marca lado a lado, confira tons de modo escuro como #121212 e baixe imagens da paleta."
h1: "Tela HEX."
breadcrumb: "Tela HEX"
appDescription: "Veja códigos de cor HEX de CSS exatos em tela cheia. Teste cores de marca, compare paletas de 4 cores, confira tons de modo escuro (#121212, #000000) e baixe papéis de parede em 4K."
lede: "Veja códigos de cor HEX exatos em tela cheia, compare até quatro cores lado a lado, confira tons de modo escuro e baixe a paleta como imagem."
chips:
  - "tela cheia"
  - "brilho"
  - "entrada HEX e RGB"
  - "copiar HEX"
  - "predefinições HEX"
shortcuts:
  - keys: F
    label: "Modo tela cheia"
  - keys: R
    label: "Paleta aleatória de 4 cores"
  - keys: C
    label: "Copiar o código HEX selecionado"
  - keys: D
    label: "Baixar imagem da paleta"
faqs:
  - q: "Como mudo uma das quatro cores?"
    a: "Clique na amostra que você quer mudar; ela vira a cor selecionada. Depois escolha uma cor nova no seletor ou digite um valor HEX, RGB ou HSL. Só a faixa selecionada muda, e C copia o código HEX dela."
  - q: "Quais formatos HEX a tela aceita?"
    a: "Códigos de seis dígitos, com ou sem o # inicial, como #7C3AED ou 7c3aed. A forma abreviada de três dígitos, como #FFF, e os códigos de oito dígitos com transparência não são aceitos; escreva #FFF como #FFFFFF."
  - q: "Por que temas escuros usam #121212 em vez de preto puro?"
    a: "O preto puro deixa a elevação e as sombras invisíveis e pode parecer duro ao lado de texto branco. Em telas OLED, pixels pretos puros ficam desligados, e religá-los durante a rolagem pode deixar um borrão rápido. Um cinza bem escuro como #121212 evita as duas coisas, e é por isso que o Material Design o recomenda."
  - q: "A cor da minha marca vai ficar igual em todas as telas?"
    a: "Não exatamente. Um código HEX descreve uma cor no padrão sRGB, mas as telas variam em brilho, ponto branco e gama de cores, e telas de gama ampla podem deixar as cores mais saturadas. Conferir a paleta em tela cheia em vários aparelhos mostra a variação que o seu público vai ver."
  - q: "Posso baixar a minha paleta?"
    a: "Sim. Pressione D ou o botão Baixar para salvar as quatro cores como faixas verticais em um PNG, em paisagem, retrato, quadrado ou na resolução do seu aparelho. O nome do arquivo traz os quatro códigos HEX."
updated: '2026-10-31'
---

## Como ver as cores em tamanho real

As cores parecem diferentes em uma amostra pequena e preenchendo a tela inteira. Um tom que parece calmo no seletor de cores pode ficar berrante como fundo inteiro, e duas cores que se distinguem bem como pontos podem se confundir em áreas grandes. A tela HEX mostra até quatro cores como faixas altas pela tela inteira, para você avaliá-las no tamanho em que elas realmente vão ser usadas.

Ela abre com uma paleta de exemplo: quase preto `#171717`, violeta `#7C3AED`, rosa-choque `#FF0080` e âmbar `#F9CB28`.

1. Clique na amostra de uma faixa para selecioná-la e depois digite um código HEX ou escolha uma cor.
2. Repita nas outras faixas, ou pressione <kbd>R</kbd> para começar de uma paleta aleatória.
3. Pressione <kbd>F</kbd> para ativar a tela cheia e olhe a paleta de uma distância normal.
4. Pressione <kbd>C</kbd> para copiar o código da cor selecionada e <kbd>D</kbd> para salvar a paleta como imagem.

## Como conferir uma paleta de marca ou de interface

- **Compare entre aparelhos.** Abra a mesma paleta em um notebook, um celular e uma TV. Cores que combinam em uma tela podem brigar ou ficar desbotadas em outra.
- **Observe as cores vizinhas.** Duas cores saturadas lado a lado, como vermelho ao lado de azul, podem parecer vibrar na borda. Faixas grandes deixam isso fácil de notar antes que vá parar em um design.
- **Confira os tons escuros.** Tons quase pretos que se diferenciam bem em um bom monitor podem se fundir em uma tela mais barata. Se duas faixas escuras parecerem idênticas, dê mais contraste a elas.
- **Lembre-se do contraste do texto.** As faixas mostram como as cores se relacionam como superfícies, mas um texto legível também precisa de contraste suficiente com o fundo. Confira os pares de texto com um verificador de contraste WCAG.

## Tons de modo escuro

A linha de predefinições inclui os dois fundos de modo escuro mais comuns. **Preto OLED** (`#000000`) desliga totalmente os pixels OLED. **Modo escuro** (`#121212`) é o cinza bem escuro recomendado pelo Material Design: ele mantém visíveis as sombras e as superfícies elevadas, parece mais suave ao lado de texto branco e evita o leve borrão que algumas telas OLED mostram quando pixels pretos puros acendem durante a rolagem. Coloque os dois na tela, um ao lado do outro, para ver qual combina com o seu design. As predefinições também incluem um azul vivo (`#0070F3`) e o branco, e o botão “Paleta dividida em 4 cores” volta à paleta inicial.

## Como os códigos HEX funcionam

Um código HEX como `#7C3AED` são três pares de dígitos para o vermelho, o verde e o azul, cada um de `00` (desligado) a `FF` (máximo). Assim, `#FF0000` é vermelho puro, `#000000` é preto e `#FFFFFF` é branco. Cada par é um número de 0 a 255 escrito em base 16, e é por isso que a mesma cor também pode ser escrita como RGB `124, 58, 237`.

Para preencher a tela com uma única cor em vez de quatro, use a [tela de cor personalizada](tool:custom-color-screen). Para uma mistura suave entre duas cores, a [tela de degradê](tool:gradient-screen) mostra a transição e qualquer banding ao longo dela, e a [tela RGB](tool:rgb-screen) compara as primárias puras do display.
