import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import RevSegments from './RevSegments';
import Foto from './Foto';

const DLAZDICE = [
  { slozka: 'galerie-1', alt: 'Motokára SODI týmu Strnadel Motorsport v čele závodního pole' },
  { slozka: 'galerie-2', alt: 'Jezdec Strnadel Motorsport na motokáře SODI na okruhu Steel Ring' },
  { slozka: 'galerie-3', alt: 'Souboj dvou motokár SODI, motokárový tým Strnadel Motorsport' },
  { slozka: 'galerie-4', alt: 'Motokára Strnadel Motorsport vede skupinu v zatáčce' },
  { slozka: 'galerie-5', alt: 'Jezdec v motokáře SODI Kart Racing před výjezdem z boxů' },
  { slozka: 'galerie-6', alt: 'Tým Strnadel Motorsport při debatě s jezdcem v depu' },
  { slozka: 'galerie-7', alt: 'Mechanik Strnadel Motorsport u motokáry na startovním roštu' },
  { slozka: 'galerie-8', alt: 'Radost z výsledku v týmu Strnadel Motorsport' },
  { slozka: 'galerie-9', alt: 'Jezdec Strnadel Motorsport si nasazuje přilbu v motokáře SODI', pozice: 'center 35%' },
  { slozka: 'galerie-10', alt: 'Mechanik Strnadel Motorsport připravuje motor motokáry', pozice: 'center 22%' },
  { slozka: 'galerie-11', alt: 'Členové kartingového týmu Strnadel Motorsport v depu' },
  { slozka: 'galerie-12', alt: 'Servis motokáry v zázemí týmu Strnadel Motorsport' },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 md:py-32 bg-surface relative overflow-hidden diagonal-reverse carbon-texture">
      <div className="px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <RevealOnScroll className="space-y-4">
            <RevSegments />
            <h2 className="font-headline-lg text-4xl md:text-5xl text-white italic uppercase tracking-tighter">
              ZE ŽIVOTA <span className="text-phosphor-yellow">TÝMU</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="max-w-md border-l-2 border-racing-blue pl-6">
            <p className="font-label-sm text-on-surface-variant text-xs md:text-sm uppercase tracking-wider leading-relaxed">
              Atmosféra závodních víkendů, souboje na trati, práce mechaniků i radost z výsledků. Nahlédněte
              do zákulisí motokárového týmu Strnadel Motorsport.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {DLAZDICE.map((d, i) => (
            <RevealOnScroll key={d.slozka} delay={i * 0.06} y={20}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden card-shear border border-white/10 h-48 md:h-64"
              >
                <Foto
                  slozka={d.slozka}
                  alt={d.alt}
                  className="opacity-90"
                  imgClassName="group-hover:scale-110 transition-transform duration-700"
                  imgStyle={d.pozice ? { objectPosition: d.pozice } : undefined}
                />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
