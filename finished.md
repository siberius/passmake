# finished.md — passmake

## 2026-09-28 — Bio bez koncové tečky (commit `8957e1d`, auto-backup 10:30)
- `passmake.html` (Kredit) + `README.md`: popisek „biolog, středoškolský a vysokoškolský učitel informatických předmětů" bez tečky na konci (master pravidlo); zrcadleno do `school/passmake.html`.
- Ověření: cílená kontrola řádků + shoda zrcadel (`diff -q`); FTP upload na `vibemaker.cz/school/`.

## 2026-09-27 — LICENSE: doložka o AI anglicky (commit `ff11105`, push origin main)
- Česká „Poznámka k autorství" přeložena do angličtiny („Authorship note: Generative AI tools were used…").

## 2026-09-27 — LICENSE: doložka o generativní AI (commit `786857b`, push origin main)
- `LICENSE` doplněna o českou doložku: při vývoji byly využity nástroje generativní AI; návrh výukového obsahu, úpravy a odpovědnost za výslednou podobu náleží autorovi.

## 2026-09-27 — README.md, LICENSE (MIT), .gitignore (commit c214db842dc9948e78314996831b3ad470ac4ee8)
- Výsledek: vytvořeny 3 nové soubory (README.md, LICENSE, .gitignore), pushnuto na origin/main.
- Oblast: dokumentace + licence + git hygiena (beze změny kódu aplikace).
- Ověření: `git status --short` ukazoval jen zamýšlené nové soubory; `git ls-tree -r origin/main --name-only` po pushi obsahuje .gitignore, AGENTS.md, LICENSE, README.md, opencode.json, passmake.html; autor v passmake.html je Luděk Sušický (shoda, MIT LICENSE vytvořena dle zadání; v HTML je navíc zmínka GPLv3 na ř. 765 a 2579 a MIT v patičce na ř. 1129).
