import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logoWhite from '../assets/logo-white.png';

const LINKY = [
  { href: '#tym', label: 'O TÝMU' },
  { href: '#zavodni-program', label: 'ZÁVODNÍ PROGRAM' },
  { href: '#galerie', label: 'GALERIE' },
  { href: '#kontakt', label: 'KONTAKT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <a href="#" className="flex items-center gap-6" aria-label="Strnadel Motorsport — domů">
        <img src={logoWhite} alt="Strnadel Motorsport" className="h-9 md:h-10 w-auto object-contain" />
      </a>

      {/* Desktop navigace */}
      <div className="hidden md:flex gap-8 items-center">
        {LINKY.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-on-surface font-medium font-label-sm text-xs tracking-widest hover:text-racing-blue transition-all duration-300 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-phosphor-yellow transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Hamburger mobil */}
      <button
        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
        aria-label="Otevřít menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <motion.span
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
          className="block w-6 h-[2px] bg-white origin-center"
        />
        <motion.span
          animate={{ opacity: menuOpen ? 0 : 1 }}
          className="block w-6 h-[2px] bg-white"
        />
        <motion.span
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          className="block w-6 h-[2px] bg-white origin-center"
        />
      </button>

      {/* Mobilní menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-[64px] left-0 w-full bg-background/98 backdrop-blur-lg border-t border-white/10 flex flex-col items-start px-margin-mobile py-10 gap-8 md:hidden overflow-hidden"
          >
            {LINKY.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-2xl font-headline-lg italic uppercase text-white hover:text-phosphor-yellow transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
