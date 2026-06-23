# Strnadel Motorsport — web

Statický web (HTML5 + CSS + trochu JS). Žádné sestavování, stačí otevřít.

## Spuštění
- Otevři `index.html` v prohlížeči (dvojklik), nebo nahraj celou složku na hosting.

## Struktura
```
strnadel-motorsport/
├─ index.html        ← hlavní stránka (hero s nekonečně běžícím modrým pruhem)
├─ tym.html          ← podstránka Tým
├─ serialy.html      ← podstránka Seriály
├─ galerie.html      ← podstránka Galerie (s lightboxem)
├─ kontakt.html      ← podstránka Kontakt (s formulářem)
├─ css/
│  └─ styl.css       ← veškerý vzhled
├─ js/
│  └─ skript.js      ← mobilní menu, rok v patičce, reveal animace, lightbox
└─ fotky/
   ├─ README.txt     ← názvy souborů fotek (důležité!)
   └─ (sem nahraj fotky)
```

## Fotky
Otevři `fotky/README.txt`. Nahraj obrázky přesně pojmenované
(`hero.jpg`, `logo.png`, `galerie-1.jpg` …). Dokud soubor chybí,
ukazuje se placeholder s názvem — nic nerozbiješ.

## Co je hotové
- Responzivní (mobile-first) + mobilní hamburger menu
- Přístupnost: skip-link, focus stavy, alt texty, `prefers-reduced-motion`
- Nekonečně scrollující „ticker“ pruh, ken-burns hero, hover efekty
- Reálné odkazy na seriály (moravsky-pohar.cz, rmc-ce.com, rotaxmaxchallenge-eurotrophy.com)
