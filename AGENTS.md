# Cyber Passmake — Leet Speak generátor a trenér bezpečných hesel

Výuková SPA v jediném `passmake.html` (vanilla JS, žádný build, žádný backend):
generátor leet speaku (EN/CS) + trenér tvorby bezpečných hesel. Učí, proč je heslo
bezpečné (délka + třídy znaků), a jak si dlouhé heslo zapamatovat přes leet
transformaci. Hesla se nikde neukládají.

## Nadřazená pravidla — POVINNÉ ČTENÍ
Žádná pravidla v tomto souboru NENÍ náhradou za nadřazené dokumenty.
Před jakýmkoliv rozhodováním nebo první úpravou přečti:
1. `/home/lu/Dokumenty/aicoding/MASTER-AGENTS.md` — pracovní jádro aicoding
   (hranice, provedení, kontext/routování, git/verifikace/dokončení).
   Mapa projektů a operace: `governance/PROJECT-MAP.md` a `governance/PROJECT-OPERATIONS.md`.
2. `/home/lu/Dokumenty/aicoding/governance/REFLECT-AUDIT.md` — procesní audit,
   kterým se řídíme od 2026-09-06 (mód „reflect-audit“).
Obsah nadřazených souborů je závazný a přebíjí tento soubor; při konfliktu
pravidel platí přísnější.

## Projektová pravidla

### Architektura
- Celá aplikace v jediném `passmake.html`: UI, styly i data (leet mapy, profily,
  úrovně trenéra, kvízové otázky) jsou inline v jednom souboru. Žádný build.
- Data leet speaku žijí v `leetData` a souvisejících datových strukturách;
  nové znaky/náhrady doplňovat tam, ne duplikovat jinde.

### Závazná bezpečnostní pravidla
- **Hesla se nikdy neukládají** — ne do `localStorage`, ne do logů, ne do kódu
  ani do historii prohlížeče. Heslo drží jen v paměti stránky a po zavření zmizí.
- **Certifikát (PNG / PDF) nikdy neobsahuje heslo** — při jakémkoliv exportu
  certifikátu heslo nezahrnovat.
- Nepřidávat žádnou persistenci ani telemetrii, která by hesla zaznamenávala.

### Konvence
- UI texty a komentáře česky; kód, identifikátory a názvy funkcí anglicky.
- Zůstat statický a offline — fungovat z lokálního `passmake.html` (dvojklik).

## Spuštění / testy
- Aplikace je statická: otevři `passmake.html` v prohlížeči — běží offline.
- Ověření změn — ruční test:
  - převod EN i CS znaků, profily (simple / classic / hacker / random) a úrovně
    (basic → extreme),
  - per-znaková mapa + reverzní náhrady, síla hesla,
  - trenér: generátor/analýza hesla, pravidla obtížnosti, kvízová brána,
  - certifikát: export PNG, ověřit, že v obrázku není znak hesla.