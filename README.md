# Strnadel Motorsport — React Web

Produkční web pro karting team Strnadel Motorsport. Postaveno na Stitch designu
(brutalist motorsport / telemetry systém), rozšířeno o plné animace.

## Stack
- React 18 + Vite
- Tailwind CSS (design tokeny ze Stitch DESIGN.md — racing-blue, phosphor-yellow, racing-red)
- Framer Motion (scroll reveal, parallax hero, staggered animace, page transition)

## Nasazení na GitHub Pages

1. V `vite.config.js` zkontroluj řádek `base: '/strnadel-motorsport/'` —
   musí přesně sedět s názvem tvého GitHub repozitáře. Pokud se repo
   jmenuje jinak, uprav tento řádek.
2. Nahraj projekt na GitHub (pokud ještě nemáš repo):
   ```bash
   git init
   git add .
   git commit -m "Strnadel Motorsport web"
   git remote add origin https://github.com/TVOJE-JMENO/strnadel-motorsport.git
   git branch -M main
   git push -u origin main
   ```
3. Nasaď:
   ```bash
   npm install
   npm run deploy
   ```
4. Na GitHubu: **Settings → Pages → Build and deployment → Source:
   Deploy from a branch → Branch: `gh-pages` / `root`** → Save.
5. Web poběží na `https://TVOJE-JMENO.github.io/strnadel-motorsport/`.

## Nasazení na GitHub Pages

Repo: `https://github.com/lukasobrucnik/strnadelweb.git` — `base` ve `vite.config.js`
je už nastaven na `/strnadelweb/`.

```bash
npm install
git init
git add .
git commit -m "Strnadel Motorsport web"
git remote add origin https://github.com/lukasobrucnik/strnadelweb.git
git branch -M main
git push -u origin main

npm run deploy
```

`npm run deploy` zbuildí projekt a nahraje obsah `dist/` do speciální větve `gh-pages`.

### Důležité — nastav správný zdroj v Pages

Na GitHubu: **Settings → Pages → Build and deployment → Source:
Deploy from a branch → Branch: `gh-pages` / `(root)`** → Save.

⚠️ Pokud tam zůstane nastaveno `main` / `(root)`, GitHub Pages bude servírovat
*nezkompilované zdrojové soubory* (React/JSX), prohlížeč je neumí spustit
a uvidíš bílou stránku — proto musí být zdroj vždy `gh-pages`, ne `main`.

Web pak poběží na:
```
https://lukasobrucnik.github.io/strnadelweb/
```

## Spuštění lokálně
```bash
npm install
npm run dev
```
Otevře se na `http://localhost:5173`.

## Produkční build
```bash
npm run build
npm run preview
```

## Struktura
```
src/
├─ assets/
│  ├─ logo-white.png   ← logo Strnadel (bílá verze pro temný motiv, navbar + footer)
│  └─ logo-black.png   ← logo Strnadel (černá verze, pro případné světlé plochy)
├─ components/
│  ├─ Navbar.jsx        ← sticky nav, mobilní menu s animací
│  ├─ Hero.jsx           ← parallax hero, staggered reveal nadpisu, animovaná CTA
│  ├─ Ticker.jsx          ← nekonečný „achievement" pruh
│  ├─ TeamProfile.jsx     ← sekce „Kdo jsme" + animovaný counter „EST. 2012"
│  ├─ RacingProgram.jsx   ← kategorie + šampionáty
│  ├─ Gallery.jsx          ← „Z paddocku" — hover scale, staggered grid
│  ├─ Footer.jsx           ← patička s watermarkem a kontaktem
│  ├─ RevealOnScroll.jsx   ← obecný scroll-reveal wrapper (stagger pomocí delay)
│  ├─ AnimatedCounter.jsx  ← animovaný counter čísel (spring)
│  └─ RevSegments.jsx      ← blikající rev-limiter segmenty
├─ App.jsx               ← kompozice stránky + smooth page-load transition
├─ main.jsx
└─ index.css             ← Tailwind + utility třídy (clip-path tvary, carbon texture…)
```

## Poznámky k logu
Logo `strnadellogov2.png` bylo zpracováno (prahování + rekonstrukce alpha kanálu)
do dvou čistých verzí s transparentním pozadím:
- `logo-white.png` — použito v navbaru a patičce (web je celý v dark režimu)
- `logo-black.png` — pro případ světlého kontextu (tisk, press kit)

## Obrázky
Hero a sekce „Kdo jsme" používají originální obrázky ze Stitch exportu
(`lh3.googleusercontent.com`). Pro produkční nasazení doporučuji nahradit
vlastními fotkami a uložit lokálně do `src/assets/` + importovat stejně
jako logo.
