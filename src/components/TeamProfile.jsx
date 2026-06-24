import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import Foto from './Foto';

const KARTY = [
  {
    title: 'Technické zázemí',
    text: 'Kompletní servis závodní techniky a profesionální podpora během závodních víkendů.',
    border: 'border-phosphor-yellow',
    slozka: 'technicke-zazemi',
  },
  {
    title: 'Data a analýza',
    text: 'Práce s telemetrií a detailní rozbory jízd pomáhají jezdcům zrychlovat a posouvat své limity.',
    border: 'border-racing-blue',
    slozka: 'data-analyza',
  },
];

export default function TeamProfile() {
  return (
    <section
      id="tym"
      className="relative bg-surface py-28 md:py-40 diagonal-shear carbon-texture overflow-hidden"
    >
      <div className="px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        <div className="space-y-8">
          <RevealOnScroll>
            <div className="flex items-center gap-4">
              <span className="w-16 h-1 bg-racing-blue" />
              <span className="font-label-sm text-racing-blue tracking-[0.3em] font-bold uppercase text-xs">
                Kdo jsme
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-white italic uppercase leading-tight">
              ZKUŠENOSTI, KTERÉ
              <br />
              POSOUVAJÍ <span className="text-racing-blue">JEZDCE VPŘED</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="space-y-5">
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base md:text-lg">
              Strnadel Motorsport je závodní tým zaměřený na výchovu talentovaných jezdců a profesionální
              podporu během celé sezóny.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base md:text-lg">
              Spojujeme dlouholeté zkušenosti, moderní techniku a individuální přístup ke každému
              závodníkovi. Naším cílem není pouze účast na závodech, ale dlouhodobý sportovní růst a
              dosahování špičkových výsledků.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
            {KARTY.map((karta, i) => (
              <RevealOnScroll key={karta.title} delay={0.3 + i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`relative overflow-hidden bg-surface-container-low border-l-4 ${karta.border} card-shear h-full`}
                >
                  <div className="h-28 relative">
                    <Foto slozka={karta.slozka} alt={karta.title} className="opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent" />
                  </div>
                  <div className="p-6 pt-2">
                    <h4 className="font-headline-lg text-xl text-white uppercase italic mb-2">{karta.title}</h4>
                    <p className="font-body-md text-on-surface-variant text-sm">{karta.text}</p>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.15} className="relative">
          <div className="absolute -top-10 -left-10 w-32 md:w-40 h-32 md:h-40 border-t-4 border-l-4 border-racing-blue opacity-50" />
          <div className="card-shear overflow-hidden border-2 border-white/5 bg-background shadow-2xl h-[360px] md:h-[500px]">
            <Foto slozka="kdo-jsme" alt="Strnadel Motorsport — týmové operace" className="opacity-90" />
          </div>
          <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 bg-racing-blue text-white px-7 md:px-10 py-6 md:py-8 btn-clip flex flex-col items-center justify-center shadow-2xl text-center">
            <span className="font-label-sm text-lg md:text-2xl font-black text-phosphor-yellow italic leading-tight">
              KAŽDOROČNĚ
              <br />
              NA TRATI
            </span>
            <span className="font-label-sm text-2xl md:text-3xl font-black text-white italic mt-1">20+ LET</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
