# Verification / Ověření

Version 2.0 · 2026-10-30

## English

Verified locally using isolated Chromium and Playwright WebKit 26.5:

- Czech primary browser language selects Czech; English and German select English
- Manual language choice persists and takes precedence; switching retains inputs, settings and quiz progress
- All 16 encoding-level/profile combinations retain their output across language changes
- All 23 quiz questions, including multiple-answer questions, can be answered correctly; final grade and certificate are produced
- Original Czech answer keys are independent of the displayed language; six stale hashes were corrected
- English text scan across introduction panels, questions, feedback, trainer, skills check, install guide and certificates
- A name containing markup is displayed literally; student names are not translated
- Canvas certificate text excludes the test password; closing the trainer certificate clears its password field
- Only the language preference is saved in localStorage; observed application requests were local GET requests
- Offline reload succeeds and starts with empty input fields
- Portrait widths 320/390/768 px, landscape 844 × 390, plus desktop 1440 px; installation dialogs fit the viewport
- iOS manual installation guide, standalone detection, simulated native-install prompt and fallback
- Direct `file://` opening and browser operation when localStorage is blocked

Mobile WebKit and desktop Chromium screenshots were visually reviewed. PNG icon dimensions and opacity were checked. Tests use synthetic practice inputs, never real credentials.

WebKit on Linux is not Safari on a physical Apple device. Installation through iOS/Android system menus, device safe-area rendering, and OS icon updates still require physical-device testing. Simulated install events verify application behavior, not completion of a real installation. The checks do not validate the password-strength model as a security product.

## Česky

V izolovaném Chromiu a WebKitu 26.5 byla ověřena automatická volba jazyka, přednost ruční volby, zachování polí a průběhu kvízu. Prošly všechny kombinace čtyř úrovní a čtyř profilů převodu, všech 23 otázek, známkování a certifikát. Opraveno bylo šest zastaralých klíčů odpovědí; vyhodnocení se stále opírá o původní české znění, nikoli překlad.

Kontrola anglických textů zahrnula úvodní panely, otázky, zpětnou vazbu, trenažér, ověření znalosti, instalaci i certifikáty. Jméno s HTML se zobrazilo jako text a nepřeložilo se. Cvičné heslo nebylo v kresleném textu certifikátu; zavření certifikátu jeho pole vymazalo. V localStorage zůstal jen jazyk a sledované požadavky byly pouze místní GET. Offline načtení fungovalo s prázdnými vstupy.

Rozložení bylo ověřeno při šířkách 320/390/768/1440 px a na šířku 844 × 390. Prošel návod iOS, detekce spuštění z plochy, simulovaná instalační výzva a její náhradní postup, přímé otevření HTML i blokované localStorage. Snímky mobilního WebKitu a desktopového Chromia byly vizuálně zkontrolovány; ověřeny byly i rozměry a neprůhlednost PNG ikon.

Skutečná instalace na fyzickém iPhonu/Androidu ani změna ikony v systému ověřeny nebyly. Linuxový WebKit nenahrazuje Safari na zařízení Apple. Tyto kontroly nepotvrzují platnost modelu síly hesel pro bezpečnostní rozhodování.
