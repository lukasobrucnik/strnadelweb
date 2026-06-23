import { motion } from 'framer-motion';

/**
 * Obecný wrapper pro scroll-reveal animace s podporou staggeru.
 * delay v sekundách — použij index * 0.1 pro staggered efekt v listech.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 32,
  duration = 0.7,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
