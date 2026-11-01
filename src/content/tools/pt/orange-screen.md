---
status: complete
sourceHash: bf1eac1f2289d6ff
title: "Tela laranja - Teste grátis em tela cheia | PixoraScreen"
description: "Teste de tela laranja grátis para verificar monitores e pixels mortos, além de iluminação ambiente e fotografia. Em tela cheia, com controle de brilho e funciona em qualquer dispositivo."
h1: "Tela laranja: teste de tela e iluminação em tela cheia"
breadcrumb: "Tela laranja"
appDescription: "Teste de tela laranja grátis para verificar monitores e pixels mortos, além de iluminação ambiente e fotografia. Em tela cheia, com controle de brilho e funciona em qualquer dispositivo."
lede: "Um laranja quente em tela cheia (#FF8A00) para verificar os canais vermelho e verde do seu display e para criar uma luz âmbar em fotos, vídeos e ambientes à noite."
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
  - q: "O que um teste de tela laranja consegue mostrar?"
    a: "O laranja acende os subpixels vermelhos na potência máxima e os verdes em cerca da metade, com o azul desligado. Ele mostra defeitos nos canais vermelho e verde e variações de cor no painel, mas não testa o azul. Para isso, use a tela azul ou o teste de pixels mortos com seis cores."
  - q: "Por que a minha tela está ficando laranja?"
    a: "Quase sempre é um filtro de luz azul. Luz noturna no Windows, Night Shift no iPhone e no Mac e os modos de conforto visual ou de leitura no Android deixam a tela mais quente, muitas vezes com horário programado para o pôr do sol. Desative o recurso ou mude o horário nas configurações de tela, e as cores normais voltam."
  - q: "Posso usar uma tela laranja como luz quente?"
    a: "Sim. Um laranja em tela cheia dá um brilho âmbar parecido com luz de vela ou de pôr do sol, sem nenhuma luz azul. Diminua com o controle de brilho para uma luz suave à noite, ou deixe forte e perto do assunto para um contorno de luz quente em fotos."
  - q: "Qual é o código HEX deste laranja?"
    a: "Esta página usa #FF8A00, que é RGB 255, 138, 0. Para comparar, a cor CSS chamada “orange” é #FFA500 e “darkorange” é #FF8C00. Você pode digitar qualquer outro tom nos campos HEX, RGB ou HSL."
  - q: "O que é a tela laranja da morte?"
    a: "Alguns PCs com Windows já mostraram uma versão laranja da tela de erro no lugar da azul de sempre, geralmente ligada a drivers de vídeo ou a hardware com defeito. Isso não tem nada a ver com esta página. Trate como qualquer tela de erro: anote o código de parada e atualize ou reverta o driver de vídeo."
  - q: "Posso baixar uma imagem de fundo laranja?"
    a: "Sim. Escolha paisagem (1920×1080), retrato (1080×1920), quadrado (1080×1080) ou a resolução do seu aparelho e pressione Baixar ou a tecla D para salvar um PNG laranja sólido."
updated: '2026-10-31'
---

## Como fazer um teste de tela laranja

O laranja é uma cor misturada: esta página mostra `#FF8A00`, que acende os subpixels vermelhos na potência máxima, os verdes em cerca da metade e deixa o azul desligado. Essa mistura o torna útil para uma tarefa diferente da das cores primárias puras. Ele verifica dois canais de uma vez e mostra com que uniformidade o painel reproduz um brilho intermediário de verde, que é onde alguns painéis puxam para o amarelo ou o vermelho em certas áreas.

1. Desative Luz noturna, Night Shift ou qualquer modo de conforto visual. Esses filtros puxam todas as cores para o laranja e esconderiam o que você está procurando.
2. Abra a página, pressione <kbd>F</kbd> para ativar a tela cheia e coloque o aparelho em um brilho alto.
3. Percorra a tela inteira procurando áreas mais amareladas ou mais avermelhadas que o resto.
4. Chegue mais perto e procure pontos isolados de uma cor diferente do entorno.

## Como interpretar os resultados

- **Um ponto esverdeado ou escuro:** o subpixel vermelho naquele lugar falhou, sobrando só o verde fraco.
- **Um ponto de vermelho mais profundo:** o subpixel verde não está acendendo.
- **Um ponto rosa-claro ou esbranquiçado:** um subpixel azul está preso aceso, somando um azul que não deveria estar ali.
- **Áreas amarelas ou vermelhas na tela:** reprodução de cor irregular, comum nas bordas de painéis LCD mais baratos e em telas com a luz de fundo envelhecida.

Como o laranja deixa o azul desligado, ele não mostra um subpixel azul morto. Verifique esse canal na [tela azul](tool:blue-screen), compare só o canal vermelho na [tela vermelha](tool:red-screen) ou use o [teste de pixels mortos com seis cores](tool:dead-pixel-test) para cobrir tudo de uma vez.

## O laranja como luz quente

Uma luz laranja sem nada de azul tem um efeito diferente de uma lâmpada branca, e uma tela permite colocá-la exatamente onde você quer.

- **Visual de pôr do sol em fotos:** um tablet ou notebook em laranja no modo tela cheia, logo fora do enquadramento e ao lado de um rosto, dá dentro de casa a luz lateral quente da hora dourada. Apague as luzes do cômodo e deixe a tela laranja ser a única luz daquele lado.
- **Clima para a noite:** uma TV ou um monitor com pouco brilho dá um brilho âmbar tranquilo para relaxar, sem o azul da luz branca.
- **Decoração de época e festas:** vitrines de outono, janelas de Halloween e lives temáticas combinam com uma tela laranja sólida.
- **Fotos de produto e de comida:** um fundo quente embaixo de uma garrafa, uma bebida ou doces de forno acrescenta cor sem edição.

Para um tom mais suave e dourado, experimente a [tela amarela](tool:yellow-screen) ou digite um tom como `#FFB347` na [tela de cor personalizada](tool:custom-color-screen).

## Salvar um fundo laranja

O botão Baixar exporta um PNG laranja sólido em paisagem (1920×1080), retrato (1080×1920), quadrado (1080×1080) ou na resolução exata da sua tela. O nome do arquivo inclui o código HEX, o que ajuda quando você está combinando cores em um projeto. Copiar HEX e Copiar RGB colocam os valores exatos na área de transferência para ferramentas de design.
