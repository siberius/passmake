# Cyber Passmake

[English](README.md)

Česká a anglická výuková aplikace pro leetspeak, rozpoznávání předvídatelných hesel a práci s hesly. Obsahuje převodník textu, kvíz s 23 otázkami, trenažér, ověření znalosti a PNG certifikáty.

Procvičuj na smyšlených heslech. Jde o výukový model, nikoli správce hesel nebo bezpečnostní audit. Vlastní zjednodušený analyzátor se inspiruje rozpoznáváním vzorů; knihovnu zxcvbn neobsahuje. Skóre ani certifikát nepotvrzují bezpečnost hesla.

## Spuštění

Otevři `passmake.html` dvojklikem, nebo spusť ve složce:

```sh
python3 -m http.server 8138 --bind 127.0.0.1
```

Potom otevři [localhost:8138](http://localhost:8138/). Aplikace nepotřebuje sestavení, účet, backend ani instalaci závislostí. Přidání na plochu a cache vyžadují HTTPS nebo localhost. Kořenový `index.html` odkazuje na zachovaný vstup `passmake.html`.

## Jazyky

Při prvním otevření rozhoduje hlavní jazyk prohlížeče: české nastavení zvolí češtinu, ostatní angličtinu. Poloha se nezjišťuje. Přepínač EN/CS si pamatuje ruční volbu a zachová zadaný text, rozehraný kvíz i nastavení. Česká a anglická znaková mapa jsou dostupné v obou jazycích rozhraní.

Přeložené jsou otázky, vysvětlení, popisky, nápověda i certifikáty. České příklady slov a paměťové věty zůstávají, pokud je úloha závislá na jejich zápisu. Známkování používá českou stupnici 1–5 i v angličtině.

## Přidání na plochu

V menu zvol **Instalovat na plochu**. Podporované prohlížeče otevřou systémovou výzvu, jinak aplikace nabídne návod.

- iPhone/iPad: Safari → Sdílet → Přidat na plochu, případně ponechat Otevřít jako webovou aplikaci
- Android: nabídka prohlížeče → Instalovat aplikaci / Přidat na plochu
- macOS Safari: Soubor → Přidat do Docku

Podrobnosti uvádí [návod Applu](https://support.apple.com/guide/iphone/iphea86e5236/ios). Před odpojením vyčkej na **Připraveno bez internetu**. Prohlížeč může cache později odstranit. Sada ikon obsahuje neprůhlednou 180px ikonu pro iPhone, PNG 192/512 px, samostatný bezpečný ořez pro Android a vektorové zdroje v `icons/`.

## Soukromí

Texty, cvičná hesla, jména, odpovědi i výsledky zůstávají v paměti stránky. Do localStorage se ukládá pouze jazyk. Service worker ukládá výhradně seznam souborů aplikace, nikdy vstupy ani certifikáty. Aplikace nemá analytiku, vzdálené API ani CDN.

Zavření certifikátu trenažéru vymaže jeho heslové pole. Obnovení stránky zahájí novou relaci. Aplikace nemůže zaručit forenzní odstranění dat z paměti prohlížeče či systému. Kopírování na vyžádání předá text systémové schránce. Stažený certifikát obsahuje zadané jméno, výsledek a čas, nikdy heslo; lze použít přezdívku. Odkazy autora se otevírají až kliknutím.

## Omezení modelu a hodnocení

Leet, počet tříd znaků ani odhad entropie samy nepotvrzují bezpečnost hesla. Některé náměty slouží k ukázce předvídatelných konstrukcí a nejsou doporučením pro reálné účty. Lokální klíč kvízu lze prohlédnout, nejde o zabezpečený zkouškový systém. Původní české příklady a prahy cvičení zůstávají zachované.

## Soubory

- `passmake.html`: rozhraní, překlady, otázky a logika aplikace
- `index.html`: přesměrování na vstup aplikace
- `manifest.webmanifest`, `sw.js`: instalace a cache souborů
- `icons/`: vektorové zdroje a mobilní varianty
- [Ověření](docs/VERIFICATION.md): provedené kontroly a omezení testování

## Licence a autor

MIT, copyright © 2026 Luděk Sušický. Viz [LICENSE](LICENSE).

Luděk Sušický: biolog, středoškolský a vysokoškolský učitel informatických předmětů

[Repozitář na GitHubu](https://github.com/siberius/passmake)
