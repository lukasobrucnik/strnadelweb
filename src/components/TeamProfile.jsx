import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import AnimatedCounter from './AnimatedCounter';

const KARTY = [
  {
    title: 'Technické Zázemí',
    text: 'Vlastní motorárna a mobilní servisní jednotka pro kompletní support na trati.',
    border: 'border-phosphor-yellow',
  },
  {
    title: 'Data & Koučink',
    text: 'Pokročilá analýza telemetrie MyChron/Unipro pro optimalizaci výkonu jezdce.',
    border: 'border-racing-blue',
  },
];

export default function TeamProfile() {
  return (
    <section
      id="team-profile"
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
            <h2 className="font-headline-lg text-4xl md:text-6xl text-white italic uppercase">
              TRADICE.
              <br />
              VÝKON. <span className="text-racing-blue">VIZE.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base md:text-lg">
              Strnadel Motorsport je zavedené jméno v českém a středoevropském kartingu. Naším posláním je
              poskytovat jezdcům špičkové technické zázemí založené na telemetrii a datech, které je nezbytné
              pro úspěch v moderním motorsportu. Specializujeme se na kategorie Rotax a mezinárodní třídy
              OK/KZ.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
            {KARTY.map((karta, i) => (
              <RevealOnScroll key={karta.title} delay={0.3 + i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`p-6 bg-surface-container-low border-l-4 ${karta.border} card-shear h-full`}
                >
                  <h4 className="font-headline-lg text-xl text-white uppercase italic mb-2">{karta.title}</h4>
                  <p className="font-body-md text-on-surface-variant text-sm">{karta.text}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.15} className="relative">
          <div className="absolute -top-10 -left-10 w-32 md:w-40 h-32 md:h-40 border-t-4 border-l-4 border-racing-blue opacity-50" />
          <div className="card-shear overflow-hidden border-2 border-white/5 bg-background shadow-2xl">
            <img
              alt="Strnadel Motorsport — týmové operace"
              className="w-full h-[360px] md:h-[500px] object-cover opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWnAIPLoQoM9yZcV-qzJ-zyge6AMsDSfELOsk00ILbir8nuV3GdIHAdWf4EvJ8kKz4SKgBi8H3UI_6STTCUevQmIRRq6QISk2a99F7bcyjFUf6C7XfBs1slG6wFS7TY_fht01ulFv_76S-mg-CLCVdF_AozPuzp4uW0ckzu76Ouaulz7Gc1H9hGoX9tYNVD4TIuGGxsRjQ3QwMYNkLneMX16uHNp66_693FIHtHdVqP6UCXmf7pSwLAFKyyPjJZQaqGbYIXACnxJw"
            />
          </div>
          <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 bg-racing-blue text-white px-7 md:px-10 py-6 md:py-8 btn-clip flex flex-col items-center justify-center shadow-2xl">
            <span className="font-label-sm text-2xl md:text-4xl font-black text-phosphor-yellow italic">
              <AnimatedCounter value={2012} prefix="EST. " />
            </span>
            <span className="font-label-sm text-[9px] md:text-[10px] font-bold tracking-widest uppercase mt-1">
              SOUČÁST ELITY
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
