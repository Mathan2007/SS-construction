import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds slide interval

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3 block">
            {t('testimonials.badge', 'CLIENT SATISFACTION')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 dark:text-white text-neutral-900">
            {t('testimonials.title', 'What Our Patrons Say')}
          </h2>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-gray-400 leading-relaxed tracking-wide">
            {t('testimonials.description', 'Read real feedback from clients who trusted us with their largest asset. Complete honesty, premium finishing, and precise compliance.')}
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto relative px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Big Quote Background Decorator */}
          <div className="absolute -top-10 -left-6 text-gold-500/10 pointer-events-none select-none z-0">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/5 p-8 sm:p-12 rounded shadow-xl flex flex-col justify-between overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                {/* 5 Golden Stars */}
                <div className="flex items-center space-x-1.5 mb-6">
                  {[...Array(TESTIMONIALS_DATA[activeIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Comment Quote */}
                <p className="font-display italic text-lg sm:text-xl text-neutral-700 dark:text-gray-200 leading-relaxed mb-8 max-w-2xl">
                  &ldquo;{t(`${TESTIMONIALS_DATA[activeIdx].id}.comment`, TESTIMONIALS_DATA[activeIdx].comment)}&rdquo;
                </p>

                {/* Client Meta Info */}
                <div className="flex items-center space-x-4 mt-4">
                  <img
                    src={TESTIMONIALS_DATA[activeIdx].avatar}
                    alt={t(`${TESTIMONIALS_DATA[activeIdx].id}.name`, TESTIMONIALS_DATA[activeIdx].name)}
                    className="w-12 h-12 rounded-full border-2 border-gold-400 object-cover bg-neutral-800"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                      {t(`${TESTIMONIALS_DATA[activeIdx].id}.name`, TESTIMONIALS_DATA[activeIdx].name)}
                    </h4>
                    <p className="font-sans text-xs text-neutral-500 dark:text-gray-400">
                      {t(`${TESTIMONIALS_DATA[activeIdx].id}.role`, TESTIMONIALS_DATA[activeIdx].role)}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Bottom Controls Panel */}
            <div className="flex items-center justify-between border-t border-neutral-200 dark:border-white/5 mt-10 pt-6">
              
              {/* Bullet Indicators */}
              <div className="flex items-center space-x-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIdx === idx ? 'w-8 bg-gold-500' : 'w-2.5 bg-neutral-300 dark:bg-neutral-800'
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Manual Arrows */}
              <div className="flex space-x-3">
                <button
                  onClick={handlePrev}
                  className="p-3 border border-neutral-200 dark:border-white/10 hover:border-gold-500 rounded text-neutral-700 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                  title="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 border border-neutral-200 dark:border-white/10 hover:border-gold-500 rounded text-neutral-700 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                  title="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
