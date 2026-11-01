---
status: complete
sourceHash: 57eb745ea44d2bdc
title: "Simulador de tela do Ubuntu online - Tela falsa de atualização e inicialização do Ubuntu grátis"
description: "A clássica tela de inicialização do Ubuntu em tela cheia, o logo do Ubuntu sobre berinjela com cinco pontos pulsando, para pegadinhas com Linux, vídeos, demonstrações em sala de aula e nostalgia de desktop retrô."
h1: "Atualização do Ubuntu."
breadcrumb: "Atualização do Ubuntu"
appDescription: "Transforme qualquer tela num simulador realista de atualização falsa do Ubuntu, com animação de inicialização autêntica, barra de progresso, ciclo de reinicialização e a estética de terminal laranja do Ubuntu. Ferramenta online e gratuita de pegadinhas para demonstrações de Linux, objetos de cena em vídeos e treinamento em sala de aula. Tela cheia, atalhos de teclado e brilho ajustável. Sem download, sem instalação, sem risco."
lede: "A clássica tela de inicialização do Ubuntu em tela cheia, o logo do Ubuntu sobre um fundo berinjela com cinco pontos pulsando, para pegadinhas com Linux, cenas de vídeo e demonstrações em sala de aula."
chips:
  - "tela cheia"
  - "animação de inicialização autêntica"
  - "simulação de progresso não linear"
  - "ciclo de reinicialização"
  - "brilho"
shortcuts:
  - keys: F
    label: "Tela cheia"
  - keys: Esc
    label: "Sair da tela cheia"
faqs:
  - q: "Que tela do Ubuntu é esta?"
    a: "Ela recria a tela de inicialização que o Ubuntu mostrou por muitos anos ao ligar ou ao terminar atualizações: o logo branco do Ubuntu sobre um fundo berinjela escuro, com cinco pontos que acendem um de cada vez. É só uma imagem; não roda Linux nem altera nada no seu computador."
  - q: "Ela tem configurações, como as telas de atualização do Windows e do Mac?"
    a: "Não. Ela mostra a tela de inicialização com os pontos em loop, que é tudo o que a tela real também mostra. Para porcentagem, cenários e timers, use a tela falsa de atualização do Windows ou a de atualização do macOS."
  - q: "Por que o Ubuntu usa essa cor roxa?"
    a: "O berinjela, um roxo escuro, faz parte da identidade visual do Ubuntu desde o começo da década de 2010, aparecendo nas telas de inicialização, no fundo do terminal e na marca, ao lado do laranja característico."
  - q: "Como vejo o que uma inicialização real do Ubuntu está fazendo por trás da tela de carregamento?"
    a: "Pressione Esc enquanto a tela de inicialização estiver aparecendo. Num Ubuntu de verdade, isso troca o logo pelo registro de inicialização em texto, que mostra cada serviço conforme ele inicia e é o primeiro lugar para olhar se a inicialização travar."
  - q: "Ela convence num notebook com Windows?"
    a: "Só quem não sabe que o notebook usa Windows. Ela funciona melhor numa máquina em que as pessoas já esperam ver Linux, num laboratório de informática ou como cena num vídeo."
updated: '2026-10-31'
---

## A tela de inicialização do Ubuntu

O Ubuntu é uma das distribuições Linux mais populares, e por muitos anos a tela de inicialização dele era assim: o logotipo branco do Ubuntu centralizado sobre um fundo berinjela escuro, com uma fileira de cinco pontos embaixo acendendo um depois do outro enquanto o sistema carrega. Esta página recria essa tela em tela cheia.

1. Pressione <kbd>F</kbd>, ou o botão no canto, para preencher a tela.
2. Deixe o mouse parado; o ponteiro some depois de dois segundos.
3. Pressione <kbd>Esc</kbd> para sair da tela cheia.

Não há configurações para mudar, porque a tela real também não tem: ela simplesmente espera com os pontos até o sistema ficar pronto.

## Ideias de uso

- **Pegadinhas no laboratório de informática:** num laboratório ou escritório cheio de máquinas com Linux, uma tela de inicialização que nunca termina é uma brincadeira leve.
- **Vídeos e filmes:** um momento crível de “computador ligando” para uma cena com um usuário de Linux, uma sala de servidores ou um personagem hacker.
- **Aulas:** apresente o Linux para uma turma com a tela que muita gente vê na primeira vez que instala o Ubuntu.
- **Nostalgia:** quem usa Ubuntu há muito tempo vai reconhecer os pontos das versões da década de 2010.

## Escondendo o navegador por completo

O modo tela cheia esconde o navegador na maioria dos sistemas, mas para um laboratório de informática ou um display que fica ligado por muito tempo, o modo quiosque é ainda mais limpo. No Linux, abra o Chromium ou o Google Chrome com a opção `--kiosk` seguida do endereço desta página, e a tela de inicialização ocupa o display sem abas, barra de endereço nem botão de sair; feche com <kbd>Alt</kbd> + <kbd>F4</kbd>. No Firefox, <kbd>F11</kbd> dá uma visualização em tela cheia parecida.

## O que acontece por trás de uma tela de inicialização real do Ubuntu

Num sistema real, a tela de inicialização é desenhada por um programa chamado Plymouth, que cobre as mensagens de texto exibidas enquanto o Linux inicia. Por trás dela, o kernel carrega, os drivers detectam o seu hardware e dezenas de serviços iniciam. No Ubuntu, as atualizações normalmente são instaladas enquanto você continua trabalhando, mas algumas, como as do kernel, terminam na próxima reinicialização, por trás desta mesma tela.

Se uma máquina Ubuntu de verdade parecer travada na tela de inicialização:

1. Pressione <kbd>Esc</kbd> para trocar para o registro de inicialização em texto e ver qual etapa está esperando.
2. Espere alguns minutos se aparecer uma verificação de disco ou um serviço de rede; os dois podem demorar.
3. Se nunca continuar, reinicie e abra o menu GRUB (segure <kbd>Shift</kbd> em máquinas com BIOS antiga ou aperte <kbd>Esc</kbd> repetidamente em máquinas UEFI), escolha Opções avançadas e inicie com um kernel mais antigo ou no modo de recuperação.

Para outras telas de sistema falsas, a [tela falsa de atualização do Windows](tool:windows-update) e a [atualização do macOS](tool:macos-screen) acrescentam progresso, timers e cenários, e a [tela de atualização do Android](tool:android-update) cobre os celulares.
