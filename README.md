# Strnadel Motorsport — React Web

Produkční web pro karting team Strnadel Motorsport. Postaveno na Stitch designu
(brutalist motorsport / telemetry systém), rozšířeno o plné animace.

## Stack
- React 18 + Vite
- Tailwind CSS (design tokeny — racing-blue, phosphor-yellow, racing-red)
- Framer Motion (scroll reveal, parallax hero, staggered animace, page transition)

## Vlastní doména (strnadelmotorsport.cz)

`base` ve `vite.config.js` je nastaven na `/` (web běží z rootu domény) a v
`public/CNAME` je uložen název domény — při každém `npm run deploy` se automaticky
zahrne do nasazení.

### Nastavení DNS u WEDOSu
V administraci domény u WEDOSu (DNS záznamy) nastav:

| Typ   | Název | Hodnota                          |
|-------|-------|-----------------------------------|
| A     | @     | 185.199.108.153                   |
| A     | @     | 185.199.109.153                   |
| A     | @     | 185.199.110.153                   |
| A     | @     | 185.199.111.153                   |
| CNAME | www   | lukasobrucnik.github.io           |

(Toto jsou oficiální IP adresy GitHub Pages — nemění se.)

### Nastavení na GitHubu
**Settings → Pages → Custom domain** → zadej `strnadelmotorsport.cz` → Save.
Po ověření DNS (může trvat několik minut až hodin) zaškrtni **Enforce HTTPS**.

## Google Search Console

1. Na [search.google.com/search-console](https://search.google.com/search-console)
   přidej vlastnictví typu **„Domain"** (`strnadelmotorsport.cz`).
2. Google vygeneruje **TXT záznam** — vlož ho do DNS u WEDOSu (typ `TXT`, název `@`,
   hodnota přesně podle Google). Tahle metoda ověří celou doménu (http/https/www)
   najednou a nevyžaduje žádnou úpravu kódu.
3. Po ověření v Search Console přidej **Sitemap**: `https://strnadelmotorsport.cz/sitemap.xml`
   (soubor je součástí webu, viz `public/sitemap.xml`).
4. Alternativa bez DNS: vlastnictví typu „URL prefix" + metoda „HTML tag" — Google
   ti dá řádek `<meta name="google-site-verification" content="...">`, který vložíš
   do `index.html` (místo je tam připravené a označené komentářem).

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
je nastaven na `/` (kvůli vlastní doméně, viz sekce výše).

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

Web pak poběží na (po nastavení DNS, viz sekce „Vlastní doména" výše):
```
https://strnadelmotorsport.cz/
```
(Než se DNS propíše, bude funkční i adresa `https://lukasobrucnik.github.io/strnadelweb/`.)

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
