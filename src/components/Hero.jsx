import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const titleLine = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};
const letter = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

function AnimatedWord({ text, className }) {
  return (
    <motion.span variants={titleLine} initial="hidden" animate="visible" className={`inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={letter} className="inline-block" style={{ transformPerspective: 600 }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.85]);

  return (
    <header ref={ref} className="relative h-screen w-full flex items-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
        <img
          alt="Strnadel Motorsport — karting v akci"
          className="w-full h-full object-cover opacity-40"
          src="https://lh3.googleusercontent.com/aida/AP1WRLtmDordrY5UELfPWpyBUPFjPdgow8pHYoXC3NcqVeQxn2lvgMckbGiX2uFrXdU7JGdwMXFcRGDfPhI-n2uPm-9vRqBHKrVK7s4LVMQ2NtoaMfztglyvoGcy8lfteKgmSprgRdiSzaAYvlP0DGXJ6wY9NkdJ5X6UehZbC-kXJ_OVd-cKbaz3O4o2un0S_UYVhyYzj7bFINihjaowKGZPAjcGjqqUKdbbGtHKpl5XOdefxNG0jd9zHoyWAIU"
        />
        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        <div className="absolute inset-0 livery-overlay pointer-events-none opacity-30" />
      </motion.div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 bg-racing-blue text-white font-label-sm text-xs px-4 py-1 mb-8 italic btn-clip"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-phosphor-yellow"
          />
          Karting Team
        </motion.div>

        <h1 className="font-headline-lg text-[44px] md:text-[100px] leading-tight italic font-black uppercase tracking-tighter text-white drop-shadow-2xl">
          <AnimatedWord text="STRNADEL" />
          <br />
          <AnimatedWord text="MOTORSPORT" className="text-phosphor-yellow" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="font-body-md text-on-surface max-w-xl mt-8 mb-12 border-l-4 border-racing-blue pl-6 text-lg md:text-xl"
        >
          Profesionální platforma pro rozvoj talentů a technickou excelenci v kartingu. Představení týmové
          struktury a závodních cílů pro aktuální sezónu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-wrap gap-6"
        >
          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-racing-blue text-white font-label-sm font-black text-base md:text-lg px-10 md:px-12 py-4 md:py-5 btn-clip hover:bg-phosphor-yellow hover:text-background transition-colors duration-300 text-center"
            href="#racing-program"
          >
            POZNEJTE TÝM
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white/20 bg-white/5 backdrop-blur-sm text-white font-label-sm font-bold text-base md:text-lg px-10 md:px-12 py-4 md:py-5 btn-clip hover:bg-white/10 transition-colors text-center"
            href="#gallery"
          >
            GALERIE
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-on-surface-variant"
      >
        <span className="font-label-sm text-[10px] tracking-widest uppercase">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-racing-blue to-transparent" />
      </motion.div>
    </header>
  );
}
