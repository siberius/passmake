# Cyber Passmake — Leet Speak generátor a trenér bezpečných hesel

Výuková jednostránková aplikace (SPA) v jediném souboru `passmake.html`
(vanilla JS, žádný build, žádný backend). Spojuje generátor leet speaku
(EN/CZ) s trenérem tvorby bezpečných hesel. Učí, proč je heslo bezpečné
(délka + třídy znaků), a jak si dlouhé heslo zapamatovat přes leet transformaci.

## Bezpečnostní zásady

- Hesla se nikde neukládají — ani na disk, ani do `localStorage`, ani do logů,
  ani do kódu, ani do historie prohlížeče.
- Heslo drží pouze paměť stránky a po zavření okna je nenávratně smazáno.
- Certifikát (PNG / PDF) nikdy neobsahuje heslo.
- Aplikace nic neposílá po síti a nesbírá žádnou telemetrii.

## Spuštění

1. Dvojklikem otevři `passmake.html` v prohlížeči.
2. Funguje offline, není potřeba server ani instalace.

## Licence

MIT — viz soubor `LICENSE`.

## Autor

Luděk Sušický — biolog, středoškolský a vysokoškolský učitel informatických předmětů.

## Repozitář

https://github.com/siberius/passmake
