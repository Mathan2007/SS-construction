import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="app-loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
      style={{ pointerEvents: progress === 100 ? 'none' : 'auto' }}
    >
      <div className="relative flex flex-col items-center max-w-xs text-center px-4">
        {/* Decorative Luxury Circle */}
        <motion.div
          className="absolute w-36 h-36 border border-gold-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        
        <motion.div
          className="absolute w-32 h-32 border-t-2 border-r border-gold-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Logo Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          <span className="font-display text-5xl font-bold tracking-widest text-gold-400">
            SS
          </span>
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gray-400 mt-2">
            Construction
          </span>
          <span className="font-sans text-[8px] tracking-[0.5em] uppercase text-gold-500/60 mt-1">
            EXCELLENCE IN CIVIL
          </span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="relative w-48 h-[2px] bg-gray-800 rounded-full overflow-hidden mt-12">
          <motion.div
            className="absolute top-0 left-0 h-full gold-gradient"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Loading status */}
        <motion.span
          className="font-mono text-[10px] uppercase text-gray-500 tracking-[0.2em] mt-3"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          Loading Integrity... {progress}%
        </motion.span>
      </div>
    </motion.div>
  );
}
