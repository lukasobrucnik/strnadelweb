/**
 * Automatické načítání fotek ze složek src/assets/fotky/<nazev-slozky>/.
 *
 * Stačí do podsložky nahrát JEDEN obrázek s JAKÝMKOLI názvem (jpg/jpeg/png/webp/gif/avif)
 * — Vite ho při buildu automaticky najde a použije na příslušném místě webu.
 * Pokud je ve složce víc obrázků, použije se první v abecedním pořadí.
 * Pokud je složka prázdná, funkce vrátí null a zobrazí se placeholder.
 */
const moduly = import.meta.glob(
  '/src/assets/fotky/**/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,gif,GIF,avif,AVIF}',
  { eager: true, import: 'default' }
);

const mapaSlozek = {};

for (const cesta in moduly) {
  const shoda = cesta.match(/\/fotky\/([^/]+)\//);
  if (shoda) {
    const slozka = shoda[1];
    // Pokud je ve složce víc souborů, vezme se první (abecedně) a zbytek se ignoruje.
    if (!mapaSlozek[slozka] || cesta < mapaSlozek[slozka].cesta) {
      mapaSlozek[slozka] = { url: moduly[cesta], cesta };
    }
  }
}

/**
 * Vrátí URL obrázku pro danou složku, nebo null, pokud je složka prázdná.
 * @param {string} slozka - např. "hero", "kdo-jsme", "galerie-1"
 */
export function getFotka(slozka) {
  return mapaSlozek[slozka]?.url || null;
}
