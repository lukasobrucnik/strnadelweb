import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const KATEGORIE_A = ['Mini 60', 'OK Junior', 'OK', 'KZ2'];
const KATEGORIE_B = ['Rotax Micro Max', 'Rotax Mini Max', 'Rotax Junior', 'Rotax Senior'];

const SAMPIONATY = [
  { label: 'MISTROVSTVÍ ČESKÉ REPUBLIKY', zkr: 'MČR' },
  { label: 'MISTROVSTVÍ SLOVENSKÉ REPUBLIKY', zkr: 'MSR' },
  { label: 'MORAVSKÝ POHÁR', zkr: 'MP' },
  { label: 'SLOVENSKÝ KARTINGOVÝ POHÁR', zkr: 'SKP' },
  { label: 'ROTAX MAX CHALLENGE CENTRAL EUROPE', zkr: 'RMC-CE' },
  { label: 'ROTAX MAX EURO TROPHY', zkr: 'MISTROVSTVÍ EVROPY' },
];

export default function RacingProgram() {
  return (
    <section id="zavodni-program" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop relative z-10">
        <RevealOnScroll className="mb-16 md:mb-20">
          <h2 className="font-headline-lg text-4xl md:text-6xl text-white italic uppercase tracking-tighter mb-4">
            ZÁVODNÍ <span className="text-racing-blue">PROGRAM</span>
          </h2>
          <div className="flex gap-1 mb-8">
            <div className="w-4 h-1 bg-racing-blue" />
            <div className="w-4 h-1 bg-phosphor-yellow" />
            <div className="w-4 h-1 bg-tertiary" />
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* KATEGORIE */}
          <RevealOnScroll delay={0.05}>
            <motion.div
              whileHover={{ borderColor: 'rgba(0,71,171,0.5)' }}
              className="bg-surface-container-low border border-white/5 card-shear p-8 md:p-12 relative overflow-hidden h-full"
            >
              <h3 className="font-headline-lg text-2xl md:text-3xl text-white uppercase italic mb-8 pb-4 border-b border-racing-blue/30 inline-block pr-12">
                KATEGORIE
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <ul className="space-y-6">
                  {KATEGORIE_A.map((k) => (
                    <li key={k} className="flex items-center gap-3 font-label-sm text-white text-sm">
                      <span className="w-2 h-2 bg-phosphor-yellow shrink-0" /> {k}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-6 border-l border-white/5 pl-8">
                  {KATEGORIE_B.map((k) => (
                    <li key={k} className="flex items-center gap-3 font-label-sm text-white text-sm">
                      <span className="w-2 h-2 bg-racing-blue shrink-0" /> {k}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </RevealOnScroll>

          {/* SERIÁLY A ŠAMPIONÁTY */}
          <RevealOnScroll delay={0.15}>
            <motion.div
              whileHover={{ borderColor: 'rgba(210,240,0,0.5)' }}
              className="bg-surface-container-low border border-white/5 card-shear p-8 md:p-12 relative overflow-hidden h-full"
            >
              <h3 className="font-headline-lg text-2xl md:text-3xl text-white uppercase italic mb-8 pb-4 border-b border-phosphor-yellow/30 inline-block pr-12">
                SERIÁLY A ŠAMPIONÁTY
              </h3>
              <div className="flex flex-col gap-6">
                {SAMPIONATY.map((s, i) => (
                  <div
                    key={s.zkr}
                    className={`flex justify-between items-baseline gap-4 ${
                      i < SAMPIONATY.length - 1 ? 'border-b border-white/5 pb-5' : ''
                    }`}
                  >
                    <span className="font-label-sm text-[10px] md:text-[11px] text-on-surface-variant uppercase tracking-widest">
                      {s.label}
                    </span>
                    <span className="font-headline-lg text-base md:text-lg text-white italic shrink-0 text-right">
                      {s.zkr}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
