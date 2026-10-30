# Cyber Passmake

[Česky](README.cs.md)

A Czech/English teaching app for exploring leetspeak, predictable password patterns and password habits. It includes a text transformer, a 23-question quiz, a password trainer, a skills-check tab and downloadable PNG certificates.

Use made-up passwords for practice. This is an educational model, not a password manager or a security assessment. Its hand-written strength estimator is inspired by pattern detection; it does not include the zxcvbn library. Scores and certificates show completion of the exercise, not proof that a password is safe.

## Run

Open `passmake.html` directly for the application, or serve this folder:

```sh
python3 -m http.server 8138 --bind 127.0.0.1
```

Open [localhost:8138](http://localhost:8138/). No build, dependencies, account or backend is needed. Installation and offline caching require HTTPS or localhost. The root `index.html` forwards to the existing `passmake.html` entry point.

## Languages

The browser's primary language selects Czech for `cs`/`cs-*` and English otherwise. This does not use physical location. The CS/EN button stores a manual choice locally and keeps the current exercise, input and quiz progress intact. Czech and English character mappings remain available in both interface languages.

The entire interface, questions, feedback, accessible labels and certificates are translated. Czech example words and mnemonic sentences stay unchanged when the exercise depends on their spelling. English grades retain the Czech 1–5 scale (1 is best).

## Install on a phone or computer

Open the menu and choose **Install on home screen**. Supported browsers can show their native prompt. If no prompt is available, the app provides instructions.

- iPhone/iPad: Safari → Share → Add to Home Screen; leave Open as Web App enabled when offered
- Android: browser menu → Install app / Add to Home Screen
- macOS Safari: File → Add to Dock

See [Apple's instructions](https://support.apple.com/guide/iphone/iphea86e5236/ios). Wait for **Ready offline** before disconnecting. Browsers can later evict cached assets. Icons include an opaque 180 px Apple touch icon, 192/512 px PNGs, a dedicated Android maskable variant and SVG sources in `icons/`.

## Privacy

Entered text, practice passwords, student names, quiz answers and scores stay in the page's memory. Only the language preference is saved in localStorage. The service worker caches an explicit list of application files, never inputs, results or certificates. There is no analytics, remote API or CDN.

Closing a trainer certificate clears the trainer password field. Reloading starts a new session. The app cannot guarantee forensic erasure of browser or operating-system memory. Copying deliberately places text on the system clipboard. Certificate downloads include the supplied name, result and time, but never a password; choose a nickname if preferred. Author links only open when selected.

## Model and assessment limits

Leet substitutions, character-class counts and the displayed entropy score do not establish real-world password strength. Some teaching prompts illustrate predictable constructions; do not use these examples for real accounts. The quiz uses a local answer key and is inspectable, so it is not a secure examination system. Existing Czech examples and exercise thresholds are retained.

## Files

- `passmake.html`: interface, inline translations, quiz data and application logic
- `index.html`: entry-point redirect
- `manifest.webmanifest`, `sw.js`: installation metadata and offline asset cache
- `icons/`: vector sources and platform exports
- [Verification](docs/VERIFICATION.md): checks and device limitations

## License and author

MIT, copyright © 2026 Luděk Sušický. See [LICENSE](LICENSE).

Luděk Sušický: biologist and secondary-school and university teacher of computing subjects

[GitHub repository](https://github.com/siberius/passmake)
