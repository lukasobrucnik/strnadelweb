import { useEffect, useState } from 'react';

const BARVY = ['rev-active-blue', 'rev-active-blue', 'rev-active-yellow', 'rev-active-red'];

export default function RevSegments() {
  const [flicker, setFlicker] = useState([false, false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(BARVY.map(() => Math.random() > 0.92));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-1">
      {BARVY.map((barva, i) => (
        <div
          key={i}
          className={`rev-segment ${barva} transition-opacity duration-100 ${flicker[i] ? 'opacity-30' : 'opacity-100'}`}
        />
      ))}
    </div>
  );
}
