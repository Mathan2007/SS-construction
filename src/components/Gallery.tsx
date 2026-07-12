import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA } from '../data';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handlePrev = () => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev === 0 ? GALLERY_DATA.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev === GALLERY_DATA.length - 1 ? 0 : (prev as number) + 1));
  };

  const getTranslatedCategory = (category: string) => {
    const key = `gallery.cat_${category.toLowerCase().replace(/\s+/g, '_')}`;
    return t(key, category);
  };

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-900 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold mb-3 block">
            {t('gallery.badge', 'VISUAL WORK LOGS')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('gallery.title', 'Construction Work Gallery')}
          </h2>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed tracking-wide">
            {t('gallery.description', 'Browse our curated showcase of completed dream homes, elegant custom villas, and modern residential structures built to perfection.')}
          </p>
        </div>

        {/* Masonry-Style Bento Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {GALLERY_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setActiveIdx(index)}
              className="relative overflow-hidden rounded group cursor-pointer border border-white/5 break-inside-avoid bg-neutral-950 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Overlay with labels */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="font-heading text-[8px] uppercase tracking-[0.25em] text-gold-400 mb-1 font-semibold">
                  {getTranslatedCategory(item.category)}
                </span>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h4>

                {/* Micro zoom icon indicator */}
                <div className="absolute top-4 right-4 p-2 bg-black/60 text-gold-400 rounded-full scale-75 group-hover:scale-100 transition-all">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-center bg-black/98"
          >
            {/* Top Bar inside Lightbox */}
            <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex flex-col">
                <span className="font-heading text-[10px] tracking-widest text-gold-400 uppercase font-semibold">
                  SS CONSTRUCTION • {t('gallery.badge', 'WORK GALLERY')} ({activeIdx + 1} / {GALLERY_DATA.length})
                </span>
                <h3 className="font-heading text-sm uppercase tracking-wider text-white mt-1">
                  {GALLERY_DATA[activeIdx].title}
                </h3>
              </div>

              {/* Action Buttons */}
              <button
                onClick={() => setActiveIdx(null)}
                className="p-3 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 rounded-full transition-colors"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Core Image Slide */}
            <div className="relative max-w-5xl mx-auto px-4 w-full h-[65vh] flex items-center justify-center">
              
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-6 z-10 p-3 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 rounded-full transition-colors"
                title="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={GALLERY_DATA[activeIdx].image}
                  alt={GALLERY_DATA[activeIdx].title}
                  className="max-w-full max-h-full object-contain rounded-md border border-white/5"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-6 z-10 p-3 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 rounded-full transition-colors"
                title="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </div>

            {/* Bottom Category indicators */}
            <div className="absolute bottom-6 inset-x-0 text-center z-20">
              <span className="font-heading text-[9px] uppercase tracking-[0.4em] text-gold-400 bg-gold-500/10 border border-gold-500/20 px-5 py-2 rounded-full">
                {t('projects.location', 'CATEGORY')}: {getTranslatedCategory(GALLERY_DATA[activeIdx].category)}
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
