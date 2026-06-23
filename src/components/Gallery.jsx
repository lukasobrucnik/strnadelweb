import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import RevSegments from './RevSegments';

const DLAZDICE = [
  {
    type: 'image',
    src: 'https://lh3.googleusercontent.com/aida/AP1WRLtmDordrY5UELfPWpyBUPFjPdgow8pHYoXC3NcqVeQxn2lvgMckbGiX2uFrXdU7JGdwMXFcRGDfPhI-n2uPm-9vRqBHKrVK7s4LVMQ2NtoaMfztglyvoGcy8lfteKgmSprgRdiSzaAYvlP0DGXJ6wY9NkdJ5X6UehZbC-kXJ_OVd-cKbaz3O4o2un0S_UYVhyYzj7bFINihjaowKGZPAjcGjqqUKdbbGtHKpl5XOdefxNG0jd9zHoyWAIU',
    alt: 'Atmosféra paddocku',
    border: 'border-white/10',
    bg: 'bg-background',
  },
  { type: 'icon', icon: '📷', border: 'border-racing-blue/30', bg: 'bg-surface-container-low', livery: true },
  { type: 'icon', icon: '📊', border: 'border-white/10', bg: 'bg-background' },
  { type: 'icon', icon: '🔧', border: 'border-white/10', bg: 'bg-surface-container-low' },
  { type: 'icon', icon: '⚡', border: 'border-white/10', bg: 'bg-background' },
  { type: 'icon', icon: '⏱', border: 'border-phosphor-yellow/30', bg: 'bg-surface-container-low' },
  { type: 'icon', icon: '🏁', border: 'border-white/10', bg: 'bg-background' },
  { type: 'icon', icon: '⚙', border: 'border-white/10', bg: 'bg-surface-container-low' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface relative overflow-hidden diagonal-reverse carbon-texture">
      <div className="px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <RevealOnScroll className="space-y-4">
            <RevSegments />
            <h2 className="font-headline-lg text-4xl md:text-5xl text-white italic uppercase tracking-tighter">
              Z <span className="text-phosphor-yellow">PADDOCKU</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="max-w-md border-l-2 border-racing-blue pl-6">
            <p className="font-label-sm text-on-surface-variant text-xs md:text-sm uppercase tracking-wider leading-relaxed">
              Atmosféra, emoce a technický detail. Pohled do zákulisí našeho týmu během závodních víkendů.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {DLAZDICE.map((d, i) => (
            <RevealOnScroll key={i} delay={i * 0.06} y={20}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative group overflow-hidden card-shear border ${d.border} ${d.bg} h-48 md:h-64 flex items-center justify-center`}
              >
                {d.type === 'image' ? (
                  <img
                    alt={d.alt}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-700"
                    src={d.src}
                  />
                ) : (
                  <>
                    {d.livery && <div className="absolute inset-0 livery-overlay opacity-20" />}
                    <span className="text-3xl md:text-4xl opacity-25 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500">
                      {d.icon}
                    </span>
                  </>
                )}
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
