# Strnadel Motorsport — React Web

Produkční web pro karting team Strnadel Motorsport. Postaveno na Stitch designu
(brutalist motorsport / telemetry systém), rozšířeno o plné animace.

## Stack
- React 18 + Vite
- Tailwind CSS (design tokeny — racing-blue, phosphor-yellow, racing-red)
- Framer Motion (scroll reveal, parallax hero, staggered animace, page transition)

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

## Nasazení na GitHub Pages

Repo: `https://github.com/lukasobrucnik/strnadelweb.git` — `base` ve `vite.config.js`
je už nastaven na `/strnadelweb/`.

```bash
npm install
git add .
git commit -m "Update web"
git push

npm run deploy
```

`npm run deploy` zbuildí projekt a nahraje obsah `dist/` do speciální větve `gh-pages`.

### Důležité — zdroj v Pages musí být `gh-pages`

Na GitHubu: **Settings → Pages → Build and deployment → Source:
Deploy from a branch → Branch: `gh-pages` / `(root)`** → Save.

⚠️ Pokud tam zůstane `main` / `(root)`, GitHub Pages bude servírovat
*nezkompilované zdrojové soubory* (React/JSX), prohlížeč je neumí spustit
a uvidíš bílou stránku — zdroj musí být vždy `gh-pages`, ne `main`.

Web pak poběží na:
```
https://lukasobrucnik.github.io/strnadelweb/
```

## Struktura
```
src/
├─ assets/
│  ├─ logo-white.png   ← logo Strnadel (bílá verze pro temný motiv, navbar + footer)
│  ├─ logo-black.png   ← logo Strnadel (černá verze, pro případné světlé plochy)
│  └─ fotky/            ← SEM nahráváš vlastní fotky (viz níže)
├─ components/
│  ├─ Navbar.jsx        ← sticky nav, mobilní menu s animací
│  ├─ Hero.jsx           ← parallax hero, staggered reveal nadpisu, animovaná CTA
│  ├─ Ticker.jsx          ← nekonečný „achievement" pruh
│  ├─ Stats.jsx            ← 4 statistiky (animovaný counter „10+ let")
│  ├─ TeamProfile.jsx       ← sekce „Kdo jsme" + 2 karty (Technické zázemí, Data a analýza)
│  ├─ RacingProgram.jsx      ← Kategorie + Seriály a šampionáty
│  ├─ Gallery.jsx             ← „Ze života týmu" — 8 fotek v gridu
│  ├─ Footer.jsx                ← patička s navigací, dokumenty, kontaktem
│  ├─ Foto.jsx                   ← univerzální komponenta — fotka ze složky, nebo placeholder
│  ├─ RevealOnScroll.jsx          ← obecný scroll-reveal wrapper (stagger pomocí delay)
│  ├─ AnimatedCounter.jsx          ← animovaný counter čísel (spring)
│  └─ RevSegments.jsx               ← blikající rev-limiter segmenty
├─ utils/fotky.js        ← automatické vyhledání fotek ve složkách (import.meta.glob)
├─ App.jsx               ← kompozice stránky + smooth page-load transition
├─ main.jsx
└─ index.css             ← Tailwind + utility třídy (clip-path tvary, carbon texture…)
```

## Jak nahrát vlastní fotky (DŮLEŽITÉ)

V `src/assets/fotky/` najdeš podsložky pro každé místo na webu, kde se zobrazuje fotka:

```
fotky/
├─ hero/                  ← pozadí úvodní (hero) sekce
├─ kdo-jsme/               ← velká fotka v sekci „Kdo jsme"
├─ technicke-zazemi/        ← fotka v kartě „Technické zázemí"
├─ data-analyza/             ← fotka v kartě „Data a analýza"
└─ galerie-1/ … galerie-8/    ← 8 fotek v sekci „Ze života týmu"
```

**Stačí do dané podsložky nahrát JEDEN obrázek s JAKÝMKOLI názvem** (`.jpg`, `.jpeg`,
`.png`, `.webp`, `.gif`, `.avif`) — web ho automaticky najde a zobrazí na správném místě.
Nemusíš nic přejmenovávat ani upravovat v kódu.

- Dokud je složka prázdná, zobrazí se stylový placeholder s názvem složky (nic se
  nerozbije, jen je vidět, že tam fotka chybí).
- Pokud nahraješ víc fotek do jedné složky, použije se jen jedna (první podle
  abecedy) — doporučuji v každé složce mít vždy jen jeden soubor.
- Po nahrání fotek je potřeba projekt znovu zbuildit a nasadit (`npm run build` /
  `npm run deploy`), aby se změny promítly na živém webu.

## Poznámky k logu
Logo `strnadellogov2.png` bylo zpracováno (prahování + rekonstrukce alpha kanálu)
do dvou čistých verzí s transparentním pozadím:
- `logo-white.png` — použito v navbaru a patičce (web je celý v dark režimu)
- `logo-black.png` — pro případ světlého kontextu (tisk, press kit)
