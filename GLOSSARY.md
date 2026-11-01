# Translation Glossary

Rules every translation follows. [TRANSLATION.md](TRANSLATION.md) describes the workflow; this file fixes the wording.

## Register and variant

| Locale | Variant | Address the reader as | Notes |
|---|---|---|---|
| es | Neutral Latin American | tú | "computadora" (not "ordenador"), "celular" alongside "móvil" only where both are needed |
| pt | Brazilian | você | "tela" (not "ecrã"), "celular" |
| fr | France | vous | No-break space (U+00A0) before `: ; ! ?` and inside « »; `node scripts/i18n-fr-spaces.mjs` inserts them and the lint rejects ordinary spaces there; typographic apostrophe ’ |
| de | Germany | du | „…“ quotes; compound nouns over English loanwords where natural; „Streich“ (not „Prank“) |
| hi | Hindi (Devanagari) | आप | Common tech loanwords in Devanagari: स्क्रीन, पिक्सेल, मॉनिटर, ब्राउज़र |
| ja | Japanese | です/ます | Full-width punctuation 、。「」; katakana for established loanwords |

Product names in lists and cards use the language's own capitalization: sentence case in es/pt/fr (`Pantalla negra`, `Écran noir`), nouns capitalized in de, no case in hi/ja.

**Exception to the register:** the fake operating-system screens copy what the real OS shows, including its form of address. German Windows screens keep Windows' „Sie“ („Schalten Sie den Computer nicht aus.“), while the settings panel around them uses „du“. See *Fake-OS screens* below.

## Never translate

- Brand: **PixoraScreen**
- Color codes and units: HEX, RGB, HSL, `#ff0000`, px, Hz, nits
- Display technologies: OLED, LCD, IPS, VA, TN, HDR
- Keyboard keys are written as the key cap reads on that locale's keyboard (see Key names)

## Key names

| en | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| Space | Espacio | Espaço | Espace | Leertaste | Space | Space |
| Esc | Esc | Esc | Échap | Esc | Esc | Esc |
| Enter | Enter | Enter | Entrée | Eingabe | Enter | Enter |
| F | F | F | F | F | F | F |
| Shift | Mayús | Shift | Maj | Umschalt | Shift | Shift |
| Tab | Tab | Tab | Tab | Tab | Tab | Tab |
| Click (as a key) | Clic | Clique | Clic | Klick | क्लिक | クリック |
| Any key | Cualquier tecla | Qualquer tecla | N’importe quelle touche | Beliebige Taste | कोई भी कुंजी | 任意のキー |

## Term list

Filled in during M7 (chrome translation) and extended in M8; one row per term that recurs across tools.

| en | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| fullscreen | pantalla completa | tela cheia | plein écran | Vollbild | फुलस्क्रीन | 全画面 |
| dead pixel | píxel muerto | pixel morto | pixel mort | Pixelfehler | डेड पिक्सेल | ドット抜け |
| stuck pixel | píxel atascado | pixel preso | pixel bloqué | hängender Pixel | स्टक पिक्सेल | 輝点 |
| backlight bleed | sangrado de luz de fondo | vazamento de luz | fuite de rétroéclairage | Backlight-Bleeding | बैकलाइट ब्लीड | バックライト漏れ |
| burn-in | burn-in (quemado de pantalla) | burn-in (marcas permanentes) | burn-in (marquage) | Burn-in (Einbrennen) | बर्न-इन | 焼き付き |
| brightness | brillo | brilho | luminosité | Helligkeit | ब्राइटनेस | 明るさ |
| screen (tool name) | pantalla | tela | écran | Bildschirm | स्क्रीन | 画面 |
| screensaver | salvapantallas | protetor de tela | économiseur d’écran | Bildschirmschoner | स्क्रीनसेवर | スクリーンセーバー |
| prank | broma | pegadinha | blague | Streich | प्रैंक | いたずら |
| fake (screen) | falso/falsa | falso/falsa | faux/fausse | Fake- | फ़र्ज़ी | 偽 |
| harmless | inofensivo | inofensivo | inoffensif | harmlos | हानिरहित | 無害 |
| tool | herramienta | ferramenta | outil | Tool | टूल | ツール |
| shortcut | atajo | atalho | raccourci | Tastenkürzel | शॉर्टकट | ショートカット |
| settings | configuración | configurações | réglages | Einstellungen | सेटिंग्स | 設定 |
| subpixel | subpíxel | subpixel | sous-pixel | Subpixel | सबपिक्सेल | サブピクセル |
| color banding | bandas de color | banding (faixas de cor) | effet de bandes | Banding (Farbabstufungen) | कलर बैंडिंग | バンディング（トーンジャンプ） |
| image retention | retención de imagen | retenção de imagem | rémanence | Nachbild | इमेज रिटेंशन | 残像 |
| uneven backlight / clouding | luz de fondo desigual / nubes | luz de fondo irregular / nuvens | rétroéclairage inégal / effet nuageux | ungleichmäßige Hintergrundbeleuchtung / Clouding | असमान बैकलाइट / क्लाउडिंग | バックライトのむら / クラウディング |
| screen timeout (setting) | tiempo de espera de la pantalla | tempo limite da tela | mise en veille de l’écran | Bildschirm-Zeitlimit | स्क्रीन टाइमआउट | 画面消灯 |
| ambient | ambiental | ambiente | d’ambiance | Ambiente | एम्बिएंट | アンビエント |
| Blue Screen of Death | pantallazo azul | tela azul da morte | écran bleu de la mort | Bluescreen | ब्लू स्क्रीन ऑफ़ डेथ | ブルースクリーン |
| no download needed | sin descargas | sem precisar baixar nada | sans téléchargement | ohne Download | कुछ भी डाउनलोड करने की ज़रूरत नहीं | ダウンロード不要 |
| desktop, laptop, monitor, and TV | computadoras, laptops, monitores y televisores | computadores, notebooks, monitores e TVs | ordinateur, portable, moniteur et téléviseur | Desktop, Laptop, Monitor und Fernseher | डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी | デスクトップ、ノートPC、モニター、テレビ |

## Fake-OS screens

Use the strings the real operating system shows in that language (Microsoft and Apple localized UI terminology), never an invented translation. Product names stay as the vendor ships them in that language (Windows Update, Insider Preview, App Store, macOS Sequoia).

| en (Windows) | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| Working on updates | Trabajando en las actualizaciones | Trabalhando nas atualizações | Travail sur les mises à jour en cours | Updates werden bearbeitet | अपडेट पर काम चल रहा है | 更新プログラムを構成しています |
| Don't turn off your computer | No apagues el equipo | Não desligue o computador | Ne pas éteindre votre ordinateur | Schalten Sie den Computer nicht aus. | अपना कंप्यूटर बंद न करें | コンピューターの電源を切らないでください |
| Restarting | Reiniciando | Reiniciando | Redémarrage | Neustart wird durchgeführt | रीस्टार्ट हो रहा है | 再起動しています |
| update (noun) | actualización | atualização | mise à jour | Update | अपडेट | 更新プログラム |
| driver | controlador | driver | pilote | Treiber | ड्राइवर | ドライバー |

| en (macOS) | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| About N minutes remaining | Quedan alrededor de N minutos | Cerca de N minutos restantes | Environ N minutes restantes | Noch ca. N Minuten | लगभग N मिनट शेष | 残り約N分 |
| Don't turn off your Mac | No apagues tu Mac | Não desligue o Mac | N’éteignez pas votre Mac | Schalte deinen Mac nicht aus | अपना Mac बंद न करें | Macの電源を切らないでください |
| Rapid Security Response | Respuesta de seguridad | Resposta de Segurança | Réponse de sécurité | Sicherheitsmaßnahme | सुरक्षा रिस्पॉन्स | セキュリティレスポンス |
| Space Gray | Gris espacial | Cinza-espacial | Gris sidéral | Space Grau | स्पेस ग्रे | スペースグレイ |

The tables below are generated from the shipped catalogs (`src/i18n/ui/<locale>.ts`) and list the anchor strings of each fake screen. Rules that apply to them:

- Windows and Chrome strings use each vendor's own register even where the app uses the informal one: German "Sie", Spanish XP "usted" (the Windows 10/11 Spanish screens use Latin American "tú", as Windows does).
- Windows XP wording follows the localized XP releases (Dr. Watson error dialog, stop screen, desktop icon names such as "Arbeitsplatz", "Poste de travail", "Mi PC").
- What a real system shows unchanged in every language stays as-is and is marked `translate="no"` in the component, so the audit skips it: product names (Internet Explorer), file names and paths (`C:\Windows\...`, `explorer.exe`, `cve_exploit.c`), threat names, stop codes and driver dump lines, terminal titles, shell prompts and code.
- Line breaks (`\n`) in stop-screen strings mimic the 80-column text screen; keep them at a similar width when editing.

| en (Chrome) | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| Deceptive site ahead | Sitio engañoso | Site enganoso à frente | Site trompeur | Achtung: Betrügerische Website | आगे धोखेबाज़ साइट है | この先は偽のサイトです |
| Go back to safety | Volver a un sitio seguro | Voltar para a segurança | Retour à la sécurité | Zurück zu sicherer Seite | सुरक्षित पेज पर वापस जाएँ | 安全なページに戻る |
| Details | Detalles | Detalhes | Détails | Details | विवरण | 詳細 |
| visit this unsafe site | visitar este sitio no seguro | acessar este site não seguro | accéder à ce site non sécurisé | diese unsichere Website aufrufen | इस असुरक्षित साइट पर जा सकते हैं | この安全でないサイトにアクセスする |

| en (Windows Security) | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| Windows Security | Seguridad de Windows | Segurança do Windows | Sécurité Windows | Windows-Sicherheit | Windows सुरक्षा | Windows セキュリティ |
| Virus & threat protection | Protección antivirus y contra amenazas | Proteção contra vírus e ameaças | Protection contre les virus et menaces | Viren- & Bedrohungsschutz | वायरस और ख़तरे से सुरक्षा | ウイルスと脅威の防止 |
| Severe threats found. | Se encontraron amenazas graves. | Ameaças graves encontradas. | Menaces graves détectées. | Schwerwiegende Bedrohungen gefunden. | गंभीर ख़तरे मिले हैं। | 重大な脅威が見つかりました。 |
| Current threats | Amenazas actuales | Ameaças atuais | Menaces actuelles | Aktuelle Bedrohungen | मौजूदा ख़तरे | 現在の脅威 |
| Start actions | Iniciar acciones | Iniciar ações | Lancer les actions | Aktionen starten | कार्रवाई शुरू करें | 操作の開始 |
| Trojan | Troyano | Cavalo de Troia | Cheval de Troie | Trojaner | ट्रोजन | トロイの木馬 |

| en (Windows 10/11 stop screen) | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you. | Tu PC tuvo un problema y debe reiniciarse. Solo estamos recopilando información sobre el error y luego la reiniciaremos por ti. | O seu computador teve um problema e precisa ser reiniciado. Estamos coletando algumas informações sobre o erro e, em seguida, reiniciaremos para você. | Votre ordinateur a rencontré un problème et doit redémarrer. Nous collectons simplement des informations relatives aux erreurs, puis nous allons redémarrer l’ordinateur. | Auf Ihrem PC ist ein Problem aufgetreten. Er muss neu gestartet werden. Wir sammeln nur einige Fehlerinformationen, und dann wird ein Neustart für Sie ausgeführt. | आपके PC में कोई समस्या आई है और इसे पुनः आरंभ करना होगा। हम बस कुछ त्रुटि जानकारी एकत्र कर रहे हैं, और फिर हम आपके लिए इसे पुनः आरंभ करेंगे। | 問題が発生したため、PC を再起動する必要があります。エラー情報を収集しています。自動的に再起動します。 |
| {pct}% complete | {pct}% completado | {pct}% concluído | {pct} % effectué | {pct} % abgeschlossen | {pct}% पूर्ण | {pct}% 完了 |
| If you call a support person, give them this info: | Si llamas a un técnico de soporte, dale esta información: | Se você ligar para um técnico de suporte, forneça estas informações: | Si vous appelez un support technique, donnez-lui les informations suivantes : | Wenn Sie sich an einen Supportmitarbeiter wenden, geben Sie diese Informationen an: | यदि आप किसी सहायता प्रतिनिधि को कॉल करते हैं, तो उन्हें यह जानकारी दें: | サポート担当者に連絡する場合は、この情報を伝えてください： |
| Stop code: | Código de detención: | Código de parada: | Code d’arrêt : | Stoppcode: | स्टॉप कोड: | 停止コード： |

| en (Windows XP) | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| My Computer | Mi PC | Meu computador | Poste de travail | Arbeitsplatz | मेरा कंप्यूटर | マイ コンピュータ |
| My Documents | Mis documentos | Meus documentos | Mes documents | Eigene Dateien | मेरे दस्तावेज़ | マイ ドキュメント |
| Recycle Bin | Papelera de reciclaje | Lixeira | Corbeille | Papierkorb | रीसायकल बिन | ごみ箱 |
| start | Inicio | Iniciar | démarrer | Start | प्रारंभ | スタート |
| explorer.exe has encountered a problem and needs to close. | explorer.exe ha detectado un problema y debe cerrarse. | O explorer.exe encontrou um problema e precisa ser fechado. | explorer.exe a rencontré un problème et doit fermer. | explorer.exe hat ein Problem festgestellt und muss beendet werden. | explorer.exe में कोई समस्या आई है और इसे बंद करना होगा। | 問題が発生したため、explorer.exe を終了します。 |
| Send Error Report | Enviar informe de errores | Enviar relatório de erros | Envoyer le rapport d’erreurs | Problembericht senden | त्रुटि रिपोर्ट भेजें | エラー報告を送信する |
| Don't Send | No enviar | Não enviar | Ne pas envoyer | Nicht senden | न भेजें | 送信しない |
| A problem has been detected and Windows has been shut down to prevent damage to your computer. | Se ha detectado un problema y se ha apagado Windows para evitar daños al equipo. | Foi detectado um problema e o Windows foi desligado para evitar danos ao computador. | Un problème a été détecté et Windows a été arrêté pour éviter que votre ordinateur ne soit endommagé. | Es wurde ein Problem festgestellt, und Windows wurde heruntergefahren, damit der Computer nicht beschädigt wird. | एक समस्या का पता चला है और आपके कंप्यूटर को नुकसान से बचाने के लिए Windows को बंद कर दिया गया है। | 問題が検出されたため、コンピュータへの損傷を防ぐために Windows をシャットダウンしました。 |
