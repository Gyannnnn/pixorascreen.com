---
status: complete
sourceHash: c657e8d8e22a12fe
title: "Tela de cor personalizada - Seletor de cores grátis em tela cheia | PixoraScreen"
description: "Escolha qualquer cor e preencha a tela no modo tela cheia. Seletor de cores grátis com entrada HEX, RGB e HSL, favoritas salvas e testes de tela úteis para calibração."
h1: "Tela de cor personalizada: seletor de cores e teste de tela em tela cheia"
breadcrumb: "Tela de cor personalizada"
appDescription: "Escolha qualquer cor e preencha a tela no modo tela cheia. Seletor de cores grátis com entrada HEX, RGB e HSL, favoritas salvas e testes de tela úteis para calibração."
lede: "Preencha a tela com qualquer cor. Digite um valor HEX, RGB ou HSL, use o seletor de cores ou sorteie um tom aleatório, e salve como favoritas as que você gostar."
chips:
  - "tela cheia"
  - "brilho"
  - "entrada HEX"
  - "entrada RGB"
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
  - q: "Quais formatos de cor posso digitar?"
    a: "HEX com seis dígitos, com ou sem # (por exemplo, #0070F3); RGB como três números de 0 a 255 separados por vírgulas (0, 112, 243); e HSL como matiz, saturação e luminosidade (hsl(212, 100%, 48%)). Mude qualquer campo e os outros dois se atualizam para combinar."
  - q: "Minhas cores favoritas ficam salvas?"
    a: "Sim, neste navegador e neste aparelho. As favoritas ficam no armazenamento local do navegador, então continuam lá na próxima vez que você abrir a página, mas não sincronizam com outros aparelhos, e limpar os dados do site no navegador apaga todas."
  - q: "Como verifico se meu monitor esmaga os pretos?"
    a: "Coloque #0A0A0A em tela cheia, depois #141414 e então #000000. Em uma tela bem ajustada, cada passo parece um pouco diferente. Se os dois primeiros parecerem idênticos ao preto puro, o display está perdendo detalhes nas sombras; ajuste o brilho, o nível de preto ou o gama e teste de novo."
  - q: "Consigo igualar as cores de dois monitores com isso?"
    a: "Você consegue compará-los. Abra o mesmo valor HEX nas duas telas lado a lado, e as diferenças de tom e brilho ficam evidentes, o que ajuda a ajustar as configurações de cor de cada monitor. Igualar com precisão exige um calibrador de hardware, porque uma tela não consegue medir a própria luz."
  - q: "Que cor funciona como luz suave para videochamadas?"
    a: "Um branco quente como #FFF1DC é mais gentil com os tons de pele do que o branco puro. Coloque a tela um pouco acima da altura dos olhos, atrás ou ao lado da câmera, e baixe o controle de brilho até a luz parecer natural na câmera."
  - q: "Posso salvar a cor como imagem?"
    a: "Sim. Escolha paisagem (1920×1080), retrato (1080×1920), quadrado (1080×1080) ou a resolução do seu aparelho e pressione Baixar ou a tecla D. O nome do arquivo PNG inclui o código da cor."
updated: '2026-10-31'
---

## Como escolher uma cor de tela personalizada

A tela de cor personalizada começa em um azul vivo (`#0070F3`), e você pode mudar a cor de quatro jeitos:

- **Seletor de cores:** clique na amostra para abrir o seletor de cores do sistema e escolher visualmente.
- **HEX:** digite um código de seis dígitos como `#FFB347`. O `#` é opcional.
- **RGB:** digite três valores de canal de 0 a 255 separados por vírgulas, como `255, 179, 71`.
- **HSL:** digite matiz, saturação e luminosidade, como `hsl(35, 100%, 64%)`.

Cada campo atualiza os outros enquanto você digita, então dá para escolher um tom no seletor e copiar o valor HEX ou RGB exato na hora. Pressione <kbd>F</kbd> para tela cheia, <kbd>R</kbd> para uma cor aleatória e <kbd>C</kbd> para copiar o código atual.

## Qual formato usar

HEX é o formato que ferramentas web e de design como Figma, Canva e CSS esperam. RGB corresponde aos valores de canal de 0 a 255 dos editores de fotos e de muitos apps de iluminação. HSL é o mais útil para ajustar uma cor no olho: mantenha o mesmo matiz e baixe a luminosidade para ter uma versão mais escura, ou baixe a saturação para deixá-la mais suave, sem precisar adivinhar números novos.

## Salvar favoritas

Pressione o botão de favorita para guardar a cor atual na sua lista, abaixo dos controles. Clique em uma cor salva para trazê-la de volta, ou remova-a quando não precisar mais. As favoritas ficam neste navegador e neste aparelho, então um conjunto de cores para uma gravação recorrente ou uma paleta de marca fica pronto na próxima vez que você abrir a página.

## Cores úteis para testar

| Uso | Cor | Por que funciona |
|---|---|---|
| Luz suave para videochamadas | `#FFF1DC` | Um branco quente que valoriza a pele mais do que o branco puro |
| Leitura noturna, observação de estrelas | `#400000` | Um vermelho profundo e fraco que preserva a visão adaptada ao escuro |
| Prévia de modo escuro | `#121212` | O cinza-escuro que muitos temas escuros usam no lugar do preto puro |
| Teste de pretos esmagados | `#0A0A0A` | Deve parecer só um pouco acima do preto em uma tela bem ajustada |
| Teste de brancos estourados | `#F5F5F5` | Deve parecer só um pouco abaixo do branco puro, não igual a ele |
| Luz de pôr do sol | `#FFB347` | Um laranja dourado suave para um clima quente |

## Testar um display com cores específicas

Cores primárias sólidas encontram pixels com defeito, e o [teste de pixels mortos com seis cores](tool:dead-pixel-test) cobre isso de uma vez. Uma cor personalizada responde a outras perguntas. Digite a cor da sua marca para ver como ela aparece em um celular, um notebook e uma TV. Percorra valores próximos do preto para ver onde a tela deixa de mostrar detalhes nas sombras, ou valores próximos do branco para ver onde os realces estouram. Abra o mesmo código em dois monitores para ver qual deles é mais quente.

Para uma cor primária específica, a [tela vermelha](tool:red-screen), a [tela verde](tool:green-screen) e a [tela branca](tool:white-screen) têm dicas próprias. Para ver várias cores lado a lado, a [tela HEX](tool:hex-screen) mostra quatro amostras ao mesmo tempo, e a [tela de degradê](tool:gradient-screen) mistura duas cores para verificar faixas (banding).

## Baixar uma imagem de cor sólida

O botão Baixar salva um PNG da cor atual em paisagem (1920×1080), retrato (1080×1920), quadrado (1080×1080) ou na resolução exata do seu aparelho. É um jeito rápido de criar um fundo liso para papel de parede do celular, um slide ou a cartela de título de um vídeo, exatamente na cor que você escolheu.
