import RevealOnScroll from './RevealOnScroll';
import logoWhite from '../assets/logo-white.png';

export default function Footer() {
  return (
    <footer id="kontakt" className="w-full relative overflow-hidden bg-background pt-24 md:pt-32 pb-12">
      {/* Watermark pozadí */}
      <div className="absolute inset-0 flex items-end overflow-hidden pointer-events-none z-0">
        <div className="text-watermark text-[140px] md:text-[450px] leading-none mb-[-30px] md:mb-[-100px] ml-[-20px] md:ml-[-40px] whitespace-nowrap">
          STRNADEL
        </div>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <RevealOnScroll className="flex flex-col gap-8">
            <img src={logoWhite} alt="Strnadel Motorsport" className="h-11 w-auto object-contain self-start" />
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Profesionální kartingový tým. Česká republika. Engineered for podium finishes through technical
              excellence and data-driven performance.
            </p>
            <div className="flex gap-2">
              <div className="w-10 h-[3px] bg-racing-blue" />
              <div className="w-6 h-[3px] bg-phosphor-yellow" />
              <div className="w-4 h-[3px] bg-tertiary" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08} className="flex flex-col gap-8">
            <h4 className="font-label-sm text-racing-blue tracking-[0.4em] font-black uppercase text-xs">
              NAVIGACE
            </h4>
            <div className="flex flex-col gap-4">
              {[
                ['#team-profile', 'PROFIL TÝMU'],
                ['#racing-program', 'ZÁVODNÍ PROGRAM'],
                ['#gallery', 'GALERIE'],
                ['#kontakt', 'PARTNEŘI'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-white hover:text-racing-blue transition-colors font-label-sm uppercase tracking-widest text-xs"
                >
                  {label}
                </a>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.16} className="flex flex-col gap-8">
            <h4 className="font-label-sm text-phosphor-yellow tracking-[0.4em] font-black uppercase text-xs">
              TECHNICAL
            </h4>
            <div className="flex flex-col gap-4">
              {['PRIVACY POLICY', 'TECHNICAL SPECS', 'PRESS KIT'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-white hover:text-phosphor-yellow transition-colors font-label-sm uppercase tracking-widest text-xs"
                >
                  {label}
                </a>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.24} className="flex flex-col gap-8">
            <h4 className="font-label-sm text-white tracking-[0.4em] font-black uppercase text-xs">SOCIAL</h4>
            <div className="flex gap-10">
              <a href="#" className="text-white hover:text-racing-blue transition-colors font-label-sm uppercase tracking-widest text-xs">
                INSTAGRAM
              </a>
              <a href="#" className="text-white hover:text-racing-blue transition-colors font-label-sm uppercase tracking-widest text-xs">
                FACEBOOK
              </a>
            </div>
            <div className="mt-4 p-8 bg-surface-container-low border border-white/5 btn-clip relative">
              <span className="block text-[10px] font-label-sm text-on-surface-variant mb-3 uppercase tracking-widest font-black">
                KONTAKT DIRECT
              </span>
              <a href="mailto:info@strnadelmotorsport.cz" className="text-white font-label-sm font-black text-sm block hover:text-phosphor-yellow transition-colors">
                info@strnadelmotorsport.cz
              </a>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-20 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-label-sm text-[10px] text-on-surface-variant font-bold tracking-[0.2em] uppercase text-center">
            © 2026 STRNADEL MOTORSPORT. PRECISION ENGINEERED. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6">
            <div className="flex gap-1">
              <div className="w-8 h-[2px] bg-racing-blue" />
              <div className="w-4 h-[2px] bg-phosphor-yellow" />
              <div className="w-2 h-[2px] bg-tertiary" />
            </div>
            <span className="font-label-sm text-[9px] text-white/20 italic">v.2026.06.PRO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
