import RevealOnScroll from './RevealOnScroll';
import AnimatedCounter from './AnimatedCounter';

const STATY = [
  { typ: 'counter', value: 25, suffix: '+', label: 'LET ZKUŠENOSTÍ' },
  { typ: 'counter', value: 250, suffix: '+', label: 'ODJETÝCH ZÁVODŮ' },
  { typ: 'text', value: 'ČESKO', label: 'I ZAHRANIČÍ' },
  { typ: 'text', value: 'PROFI', label: 'TECHNICKÉ ZÁZEMÍ' },
];

export default function Stats() {
  return (
    <section className="staty bg-background border-y border-white/5" aria-label="Statistiky týmu">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
        {STATY.map((s, i) => (
          <RevealOnScroll key={s.label} delay={i * 0.08} className="p-8 md:p-12 text-center">
            <div className="font-headline-lg italic font-black text-3xl md:text-5xl text-white">
              {s.typ === 'counter' ? (
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              ) : (
                s.value
              )}
            </div>
            <div className="font-label-sm text-racing-blue tracking-[0.2em] uppercase text-[11px] md:text-xs mt-3">
              {s.label}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
