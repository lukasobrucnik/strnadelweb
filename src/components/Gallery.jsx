import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import RevSegments from './RevSegments';
import Foto from './Foto';

const DLAZDICE = [
  'galerie-1',
  'galerie-2',
  'galerie-3',
  'galerie-4',
  'galerie-5',
  'galerie-6',
  'galerie-7',
  'galerie-8',
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
              Atmosféra závodních víkendů, napětí na startu, práce mechaniků i radost z výsledků. Nahlédněte
              do zákulisí Strnadel Motorsport.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {DLAZDICE.map((slozka, i) => (
            <RevealOnScroll key={slozka} delay={i * 0.06} y={20}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden card-shear border border-white/10 h-48 md:h-64"
              >
                <Foto
                  slozka={slozka}
                  alt={`Strnadel Motorsport — fotografie z paddocku`}
                  className="opacity-90"
                  imgClassName="group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
