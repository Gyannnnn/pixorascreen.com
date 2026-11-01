---
status: complete
sourceHash: 1d6c9a7e21d832dd
title: "Tela de degradê online - Teste de banding e calibração em tela cheia"
description: "Um degradê suave de duas cores em tela cheia para perceber banding (faixas de cor) no monitor, celular ou TV, além de fundos em degradê personalizados que você pode baixar em PNG."
h1: "Tela de degradê."
breadcrumb: "Tela de degradê"
appDescription: "Transições de cor suaves com vários pontos pela tela inteira para testes de banding, calibração de tela e fundos ambientes. Abra em tela cheia."
lede: "Um degradê suave de duas cores em tela cheia para perceber banding e posterização em qualquer tela, e para criar fundos e papéis de parede em degradê do seu jeito."
chips:
  - "tela cheia"
  - "brilho"
  - "copiar cor"
  - "baixar papel de parede"
  - "modo ambiente"
shortcuts:
  - keys: F
    label: "Modo tela cheia"
  - keys: R
    label: "Degradê aleatório"
  - keys: C
    label: "Copiar a cor selecionada"
  - keys: D
    label: "Baixar imagem"
faqs:
  - q: "O que é banding de cor?"
    a: "Banding é quando uma mistura suave de cores mostra degraus ou faixas visíveis em vez de uma transição contínua. Acontece quando uma tela, um arquivo ou um vídeo não consegue representar tons intermediários suficientes, então tons vizinhos são arredondados para o mesmo valor e formam faixas."
  - q: "É normal ver um pouco de banding em qualquer tela?"
    a: "Sim, em degradês de baixo contraste. Um sinal padrão de 8 bits tem 256 níveis por canal de cor, então uma mistura entre duas cores parecidas pode ter só algumas dezenas de degraus distintos na tela inteira. Degraus uniformes e neutros são esperados; faixas irregulares, tingidas ou muito largas apontam para a tela ou para as configurações dela."
  - q: "Por que meu monitor mostra mais banding do que meu celular?"
    a: "Os motivos mais comuns são um painel de 6 bits que simula cor de 8 bits, uma faixa RGB limitada ou um perfil de cor errado no computador, o contraste dinâmico ou os aprimoramentos de imagem do monitor, e um gerenciamento de cor pesado. Verifique primeiro o modo de imagem do monitor e as configurações de saída do driver de vídeo."
  - q: "Posso criar meu próprio degradê?"
    a: "Sim. Clique em qualquer uma das duas amostras para escolher uma cor nova, ou digite um valor HEX, RGB ou HSL. Pressione R para um degradê aleatório de duas cores e salve o resultado como PNG com o botão Baixar."
  - q: "O degradê baixado fica igual ao da tela?"
    a: "O PNG usa as mesmas duas cores, desenhadas de canto a canto no tamanho escolhido (paisagem, retrato, quadrado ou a resolução do seu aparelho). Visualizadores de imagem e redes sociais podem comprimi-lo, e a compressão acrescenta o próprio banding, então compartilhe o arquivo original sempre que puder."
updated: '2026-10-31'
---

## Como verificar se a sua tela tem banding

Um degradê é a imagem mais difícil para uma tela mostrar com perfeição: cada coluna de pixels precisa de um tom um pouco diferente, e qualquer atalho no painel ou na cadeia do sinal transforma a mistura suave em faixas visíveis. Esta página desenha um degradê diagonal entre duas cores, de um azul vivo (`#007CF0`) até o ciano (`#00DFD8`).

1. Desative o modo noturno, os filtros de luz azul e qualquer modo de imagem “vívido” ou de contraste dinâmico.
2. Pressione <kbd>F</kbd> para ativar a tela cheia e olhe para a tela da sua distância de costume.
3. Procure faixas nítidas atravessando a mistura, e faixas tingidas de rosa ou verde.
4. Agora experimente um degradê exigente: clique na primeira amostra e digite `000000`, depois na segunda e digite `333333`. Misturas escuras e de baixo contraste são onde o banding tem mais dificuldade de se esconder.

## Como interpretar o que você vê

Em um sinal de 8 bits, cada canal de cor tem 256 níveis. Uma mistura de `#000000` a `#333333` tem só 51 degraus entre as pontas, então, em uma tela de 1920 pixels de largura, cada degrau tem mais ou menos de 30 a 40 pixels, e um olhar atento consegue vê-los em qualquer tela. Isso é matemática, não defeito. O que aponta para um problema é:

- **Degraus irregulares**, quando algumas faixas são bem mais largas que outras.
- **Degraus coloridos**, quando uma mistura cinza mostra faixas rosa, verdes ou roxas.
- **Manchas irregulares** em uma área que deveria ser suave, sinal de compressão ou processamento pesados.
- **Muito mais banding do que outra tela** mostra com as mesmas cores.

## Causas comuns e soluções

| Causa | O que tentar |
|---|---|
| Painel de 6 bits com dithering | Comum em notebooks e monitores baratos; não há o que corrigir, mas explica o resultado |
| Faixa RGB limitada (16–235) | Configure a saída do driver de vídeo para faixa completa em um monitor de computador |
| Aprimoramentos de imagem | Desative o contraste dinâmico, os modos “vívidos” e o realce de bordas |
| Perfil de cor errado | Redefina as configurações de cor do monitor e o perfil de tela do sistema operacional |
| Vídeo ou imagens comprimidos | O banding em streaming e em arquivos JPEG vem do arquivo, não da tela |

## Como criar fundos em degradê

A mesma ferramenta cria papéis de parede em degradê simples e limpos. Clique em uma amostra para escolher cada cor, pressione <kbd>R</kbd> para um par aleatório e baixe o resultado em paisagem, retrato, quadrado ou na resolução da sua tela. Misturas entre tons vizinhos, como de azul para ciano ou de laranja para rosa, ficam mais suaves e formam menos faixas do que misturas entre cores opostas, que passam por um cinza sem vida no meio. Para uma única cor sólida, use a [tela de cor personalizada](tool:custom-color-screen); para comparar quatro cores lado a lado, a [tela HEX](tool:hex-screen) mostra todas em faixas.

O banding é só uma de várias verificações de tela. Pixels com defeito aparecem melhor no [teste de pixels mortos com seis cores](tool:dead-pixel-test), e o brilho irregular, na [tela cinza](tool:grey-screen) uniforme.
