import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import TeamProfile from './components/TeamProfile';
import RacingProgram from './components/RacingProgram';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Smooth page transition overlay při prvním načtení */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-40 h-1 bg-racing-blue origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-background min-h-screen">
        <Navbar />
        <Hero />
        <Ticker />
        <TeamProfile />
        <RacingProgram />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
