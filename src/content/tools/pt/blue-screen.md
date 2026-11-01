---
status: complete
sourceHash: 02be85950d057e7e
title: "Tela azul online - Fundo e teste em tela cheia | PixoraScreen"
description: "Tela azul grátis para testes de display, fundos de videochamada e verificação de monitores. Em tela cheia, com brilho ajustável e funciona em qualquer dispositivo."
h1: "Tela azul."
breadcrumb: "Tela azul"
appDescription: "Tela azul grátis para testes de display, fundos de videochamada e verificação de monitores. Em tela cheia, com brilho ajustável e funciona em qualquer dispositivo."
lede: "Um azul saturado em tela cheia (#0066FF) para verificar o canal azul do seu display, dar a uma cena uma luz azul fria ou recortar um fundo quando o verde não funciona."
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
  - q: "Esta é a tela azul da morte do Windows?"
    a: "Não. Esta página é uma cor azul lisa para verificar displays e iluminar. Se você quer a tela de erro do Windows com a carinha triste e o código de parada, use a pegadinha da tela azul, que a recria de forma inofensiva no navegador."
  - q: "Como testo só os subpixels azuis?"
    a: "O tom padrão, #0066FF, tem um pouco de verde. Para testar só o canal azul, digite 0000FF no campo HEX. Assim cada pixel acende apenas o subpixel azul, e um morto aparece como um ponto preto."
  - q: "Por que o azul parece irregular no meu celular OLED?"
    a: "O material OLED azul envelhece mais rápido que o vermelho e o verde, então áreas que mostraram conteúdo fixo e claro por anos podem parecer um pouco mais apagadas ou quentes em um campo azul. Uma verificação rápida é inofensiva; se você vir manchas, confirme em uma tela cinza média."
  - q: "Quando usar uma tela azul em vez de uma verde?"
    a: "Use o azul quando a pessoa estiver de verde, segurar objetos verdes ou houver verde na cena, ou quando a luz verde refletida na pele for difícil de controlar. O verde costuma recortar melhor em câmeras digitais, então continua sendo a primeira opção nos outros casos."
  - q: "Por que a minha tela inteira ficou azul?"
    a: "Se a área de trabalho parecer tingida de azul, confira a predefinição de temperatura de cor do monitor (uma configuração “fria” parece azul) e qualquer filtro de cor nas opções de acessibilidade. Se o vermelho e o verde parecerem sumir por completo, reconecte ou troque o cabo de vídeo, porque um cabo danificado pode perder canais de cor."
updated: '2026-10-31'
---

## Como verificar o canal azul do seu display

O azul é a cor com menos brilho percebido: um subpixel azul totalmente aceso parece muito mais apagado aos olhos do que um vermelho ou verde na mesma potência. Por isso, defeitos no canal azul passam despercebidos facilmente no conteúdo normal, e um campo azul sólido é a melhor forma de encontrá-los.

Esta página abre em `#0066FF`, um azul forte e um pouco claro, confortável de olhar. Para um teste rigoroso só dos subpixels azuis, digite `0000FF` no campo HEX para desligar o canal verde.

1. Pressione <kbd>F</kbd> para ativar a tela cheia e aumente o brilho do aparelho.
2. Percorra a tela de perto. Um ponto preto significa que um subpixel azul está morto. Um ponto branco, ciano ou magenta significa que outro subpixel está preso aceso.
3. Confira os mesmos pontos na [tela vermelha](tool:red-screen) e na [tela verde](tool:green-screen) para saber qual canal está com defeito, ou deixe o [teste de pixels mortos com seis cores](tool:dead-pixel-test) passar por tudo.

## O azul em telas OLED

Em celulares, TVs e monitores OLED, o material azul que emite luz se desgasta mais rápido que o vermelho ou o verde. Os painéis compensam isso, mas em telas que mostraram a mesma interface clara por anos, um campo azul pode revelar manchas fracas onde ficavam uma barra de status ou um teclado. Se notar algo, confirme com os preenchimentos cinza médios do [teste de burn-in OLED](tool:oled-burn-in-test), que separam o burn-in da irregularidade normal.

## Usar o azul como luz

- **Cenas frias e noturnas:** um monitor ou tablet em azul no modo tela cheia, logo fora do enquadramento, dá ao assunto a luz fria de uma cena noturna, de um rosto iluminado por uma tela ou de um clima subaquático.
- **Setups gamer e de mesa:** uma segunda tela em azul adiciona cor ao cômodo sem fita de LED. Baixe o controle de brilho para um brilho mais calmo.
- **Contraste de cor em fotos:** luz azul de um lado e a [tela laranja](tool:orange-screen) do outro criam a iluminação dividida quente e fria comum em pôsteres de filmes.

## Tela azul para chroma key

A tela azul era o padrão de recorte antes do vídeo digital e ainda é usada quando o verde entraria em conflito com o assunto, como roupas verdes, plantas ou um logo verde. Coloque esta página em tela cheia atrás de um assunto pequeno, mantenha-o a uma pequena distância para a luz azul não vazar sobre ele e escolha o azul como cor de recorte no seu editor. Para a maioria das outras cenas, a [tela verde](tool:green-screen) recorta melhor, porque os sensores das câmeras registram o verde com mais detalhe.

## Não é a tela azul da morte

Quem procura uma tela azul muitas vezes quer a tela de erro do Windows. Esta página é só uma cor. Para a carinha triste, o código de parada e a porcentagem subindo, abra a [pegadinha da tela azul](tool:blue-screen-prank). Se o seu computador está mostrando uma de verdade, aquela página também explica o que significam os códigos de parada.
