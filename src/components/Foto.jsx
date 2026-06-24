import { getFotka } from '../utils/fotky';

/**
 * Univerzální komponenta pro zobrazení fotky ze složky `src/assets/fotky/<slozka>/`.
 * Pokud složka neobsahuje žádný obrázek, zobrazí se stylový placeholder s názvem složky,
 * takže webu nic nespadne a hned je vidět, kam fotka patří.
 */
export default function Foto({ slozka, alt = '', className = '', imgClassName = '' }) {
  const src = getFotka(slozka);

  if (src) {
    return (
      <div className={`foto ${className}`}>
        <img src={src} alt={alt} className={`foto__img ${imgClassName}`} />
      </div>
    );
  }

  return (
    <div className={`foto foto--placeholder ${className}`} data-nazev={`fotky/${slozka}`} aria-hidden="true" />
  );
}
