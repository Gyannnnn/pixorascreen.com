---
status: complete
sourceHash: 472e899ce9bbb51f
title: "Pegadinha da tela azul falsa - Simulador de BSOD do Windows 10/11 | PixoraScreen"
description: "Tela de erro falsa e realista do Windows para pegadinhas, transmissões e treinamentos técnicos. BSOD do Windows 10/11 fiel ao original, com progresso animado, 8 códigos de parada e QR code."
h1: "Pegadinha da tela azul."
breadcrumb: "Pegadinha da tela azul"
appDescription: "Tela de erro falsa e realista do Windows para pegadinhas, transmissões e treinamentos técnicos. BSOD do Windows 10/11 fiel ao original, com progresso animado, 8 códigos de parada e QR code."
lede: "Uma tela azul da morte do Windows realista, com porcentagem subindo, um código de parada aleatório e um QR code. Ela roda na aba do navegador e não altera nada no computador."
chips:
  - "tela cheia"
  - "aviso para sair"
  - "progresso animado"
  - "códigos de parada"
  - "QR code"
shortcuts:
  - keys: F
    label: "Tela cheia"
  - keys: Esc
    label: "Sair da tela cheia"
faqs:
  - q: "A tela azul falsa é segura para o meu computador?"
    a: "Sim. É uma página da web comum feita com HTML e JavaScript. Ela não instala nada, não muda nenhuma configuração e não consegue travar o computador. Pressione Esc ou feche a aba e tudo volta ao normal."
  - q: "Como saio da tela azul falsa?"
    a: "Pressione Esc para sair da tela cheia e a página volta ao normal. Em uma tela sensível ao toque, deslize para baixo a partir da borda superior ou use o gesto de voltar. Fechar a aba do navegador também encerra a pegadinha."
  - q: "Posso mudar quanto tempo o travamento falso leva?"
    a: "Sim. Clique no ícone de engrenagem antes de começar. Duração define quanto tempo a porcentagem leva para chegar a 100%, de 5 a 180 segundos, e Porcentagem inicial permite que a contagem comece em qualquer ponto entre 0% e 95%, para parecer que o travamento já está rolando há algum tempo."
  - q: "Quais códigos de parada o simulador mostra?"
    a: "Cada vez que a página carrega, ela escolhe um de oito códigos de parada reais do Windows: CRITICAL_PROCESS_DIED, SYSTEM_SERVICE_EXCEPTION, MEMORY_MANAGEMENT, IRQL_NOT_LESS_OR_EQUAL, KMODE_EXCEPTION_NOT_HANDLED, PAGE_FAULT_IN_NONPAGED_AREA, DRIVER_IRQL_NOT_LESS_OR_EQUAL ou BAD_POOL_HEADER."
  - q: "O Windows 11 ainda trava com uma tela azul?"
    a: "Depende da versão. O Windows 10 e a maioria dos PCs com Windows 11 anteriores às atualizações de 2025 mostram o visual azul recriado aqui. Em 2025, a Microsoft começou a liberar no Windows 11 uma tela de erro preta mais simples, então, em uma máquina com Windows 11 totalmente atualizado, a versão azul pode parecer menos familiar."
  - q: "Funciona em Mac, Chromebook ou celular?"
    a: "Ela roda em qualquer navegador moderno, então funciona em todos. Mesmo assim, é mais convincente em um notebook ou desktop com Windows, porque é o único lugar onde alguém espera ver uma tela de erro do Windows."
updated: '2026-10-31'
---

## Como preparar a pegadinha da tela azul

A página recria a tela de erro que o Windows mostra depois de uma falha grave: a carinha triste grande, “O seu computador teve um problema e precisa ser reiniciado”, uma porcentagem que conta até 100, um QR code e um código de parada. Tudo roda dentro da aba do navegador, então parece um travamento enquanto o computador continua funcionando normalmente por baixo.

1. Abra esta página no computador que você quer usar, de preferência um notebook ou desktop com Windows.
2. Clique no ícone de engrenagem no canto da prévia. Ajuste **Duração** para definir quanto tempo a contagem leva para chegar a 100%, entre 5 e 180 segundos, e **Porcentagem inicial** se quiser que ela comece no meio do caminho.
3. Feche o painel de configurações e pressione <kbd>F</kbd> ou o botão de tela cheia. As abas e a barra de endereço do navegador somem, e a contagem começa.
4. Leve o ponteiro do mouse até a borda da tela e deixe-o lá.
5. Quando a pegadinha tiver dado certo, pressione <kbd>Esc</kbd> para encerrá-la.

A porcentagem não sobe de forma contínua. Como na tela real, ela trava em pontos aleatórios por um ou dois segundos antes de continuar, e é isso que a torna convincente. Um novo código de parada é escolhido sempre que a página carrega.

## O que significam os códigos de parada

Os oito códigos de parada desta página são erros reais do Windows. Se você vir um em um travamento de verdade, é mais ou menos isto que ele indica:

| Código de parada | O que costuma significar |
|---|---|
| CRITICAL_PROCESS_DIED | Um processo essencial para o Windows parou inesperadamente |
| SYSTEM_SERVICE_EXCEPTION | Um serviço do sistema ou driver encontrou um erro que não conseguiu tratar |
| MEMORY_MANAGEMENT | O Windows encontrou um erro de memória, causado por RAM com defeito ou por um driver |
| IRQL_NOT_LESS_OR_EQUAL | Um driver acessou uma memória que não podia acessar naquele momento |
| DRIVER_IRQL_NOT_LESS_OR_EQUAL | A mesma falha, atribuída a um driver específico |
| KMODE_EXCEPTION_NOT_HANDLED | Um programa rodando no modo kernel travou |
| PAGE_FAULT_IN_NONPAGED_AREA | Algo tentou usar uma memória que não existia |
| BAD_POOL_HEADER | O controle interno de memória do Windows foi corrompido, muitas vezes por um driver |

## Se você vir uma tela azul de verdade

Uma única tela azul depois de atualizar um driver ou o Windows é comum e muitas vezes não volta mais. Anote o código de parada, deixe o PC reiniciar e instale as atualizações pendentes do Windows e do driver de vídeo. Se o mesmo código continuar aparecendo, procure-o no site de suporte da Microsoft, desfaça a última mudança de hardware ou de driver e execute o Diagnóstico de Memória do Windows se o código mencionar memória. Uma tela azul não apaga os seus arquivos; o computador apenas reinicia.

## Use com responsabilidade

Uma boa pegadinha termina com todo mundo rindo em um ou dois minutos. Revele logo e escolha bem o momento: não quando alguém está correndo contra um prazo ou tem trabalho não salvo que vai causar pânico. Nunca use uma tela de erro falsa para fazer alguém ligar para um número, pagar por um “conserto” ou instalar alguma coisa. Esses são os truques de golpistas de suporte técnico, e telas de erro reais nunca pedem nada disso.

## Outras telas de travamento e atualização

Para um PC mais antigo, a [tela de travamento do Windows XP](tool:windows-xp-crash) recria as caixas de erro do explorer.exe daquela época. A [tela falsa de atualização do Windows](tool:windows-update) é mais demorada: uma atualização que parece nunca terminar. A [tela de vírus falso](tool:fake-virus-screen) mostra avisos de segurança simulados em vez de um travamento, e a [tela quebrada](tool:broken-screen) faz o próprio display parecer trincado.
