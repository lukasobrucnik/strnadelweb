const ITEMS = [
  { dot: 'bg-racing-blue', text: '10+ LET ZKUŠENOSTÍ' },
  { dot: 'bg-phosphor-yellow', text: 'ČESKO I ZAHRANIČÍ' },
  { dot: 'bg-tertiary', text: 'PROFESIONÁLNÍ TECHNICKÉ ZÁZEMÍ' },
  { dot: 'bg-racing-blue', text: 'DATA A ANALÝZA' },
];

function Group({ ariaHidden = false }) {
  return (
    <div className="ticker-content flex items-center gap-12 shrink-0" aria-hidden={ariaHidden}>
      {ITEMS.map((item, i) => (
        <span key={i} className="font-label-sm text-on-surface-variant text-xs md:text-sm flex items-center gap-2 px-6">
          <span className={`w-1.5 h-1.5 ${item.dot}`} />
          {item.text}
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="bg-surface-container-lowest border-y border-white/5 py-4 overflow-hidden whitespace-nowrap">
      <div className="flex animate-ticker w-max">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
