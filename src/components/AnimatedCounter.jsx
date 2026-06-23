import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Animovaný counter čísel pro statistiky (např. 12, 2012, 10).
 * `value` = cílové číslo, `prefix`/`suffix` = text kolem (např. "+", "EST.").
 */
export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1.6, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest).toLocaleString('cs-CZ'));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
