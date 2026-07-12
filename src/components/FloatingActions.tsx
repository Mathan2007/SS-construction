import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Widget (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-3">
        <motion.a
          href="https://wa.me/919843611743"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3.5 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center relative group"
          title="WhatsApp Support"
        >
          {/* Pulsing Backlight */}
          <span className="absolute inset-0 rounded-full bg-green-600/40 animate-ping pointer-events-none" />
          <MessageSquare className="w-5 h-5 relative z-10" />

          {/* Luxury Hover Tooltip */}
          <span className="absolute left-14 bg-black text-green-400 border border-green-600/20 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp Live Chat
          </span>
        </motion.a>
      </div>

      {/* Back-To-Top Button (Bottom Right) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scrollTop"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-black dark:bg-neutral-900 text-gold-400 border border-gold-500/20 hover:border-gold-500/50 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />

            {/* Hover Tooltip */}
            <span className="absolute right-14 bg-black text-gold-400 border border-gold-500/20 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Back To Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

