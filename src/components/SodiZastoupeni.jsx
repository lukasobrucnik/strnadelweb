import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import Foto from './Foto';
import sodiLogo from '../assets/sodi-logo-white.png';

const SLUZBY = [
  'Prodej nových závodních motokár SODI',
  'Náhradní díly, servis a technická podpora',
  'Poradenství s výběrem šasi a podpora na závodech',
];

export default function SodiZastoupeni() {
  return (
    <section id="sodi" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full flex h-1" aria-hidden="true">
        <div className="flex-1 bg-racing-blue" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-racing-red" />
      </div>

      <div className="px-margin-mobile md:px-margin-desktop grid md:grid-cols-[1.2fr_0.8fr] gap-14 md:gap-24 items-center relative z-10">
        <div className="space-y-8">
          <RevealOnScroll>
            <img
              src={sodiLogo}
              alt="SODI Kart Racing"
              width="737"
              height="147"
              loading="lazy"
              className="h-10 md:h-12 w-auto"
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-white italic uppercase leading-tight tracking-tighter">
              Výhradní zastoupení <span className="text-phosphor-yellow">SODI</span>
              <br />
              pro Českou republiku
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.16}>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base md:text-lg max-w-xl border-l-4 border-racing-blue pl-6">
              Strnadel Motorsport je výhradním zástupcem francouzské značky SODI Kart Racing pro Českou
              republiku. Motokáry SODI prodáváme a servisujeme jako tým, který na nich sám závodí.
            </p>
          </RevealOnScroll>

          <ul className="space-y-4">
            {SLUZBY.map((s, i) => (
              <RevealOnScroll key={s} delay={0.22 + i * 0.08} y={16}>
                <li className="flex items-center gap-4 font-label-sm text-white text-sm uppercase tracking-wider">
                  <span className="w-2 h-2 bg-phosphor-yellow shrink-0" />
                  {s}
                </li>
              </RevealOnScroll>
            ))}
          </ul>

          <RevealOnScroll delay={0.45} className="flex flex-wrap gap-6 pt-2">
            <motion.a
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#kontakt"
              className="bg-phosphor-yellow text-background font-label-sm font-black text-base px-10 py-4 btn-clip hover:bg-white transition-colors duration-300 text-center"
            >
              POPTAT MOTOKÁRU SODI
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://sodi.cz/"
              target="_blank"
              rel="noopener"
              className="border border-white/20 bg-white/5 text-white font-label-sm font-bold text-base px-10 py-4 btn-clip hover:bg-white/10 transition-colors text-center"
            >
              SODI.CZ →
            </motion.a>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.15} className="relative">
          <div className="absolute -top-8 -right-6 w-28 md:w-36 h-28 md:h-36 border-t-4 border-r-4 border-phosphor-yellow opacity-60" />
          <div className="card-shear overflow-hidden border-2 border-white/5 h-[420px] md:h-[560px]">
            <Foto
              slozka="sodi"
              alt="Jezdec v kombinéze SODI Kart Racing v motokáře SODI"
              imgStyle={{ objectPosition: 'center 70%' }}
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
