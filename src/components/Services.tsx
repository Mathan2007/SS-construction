import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-900 text-white relative overflow-hidden"
    >
      {/* Decorative luxury absolute circle */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold mb-3 block">
            {t('services.badge', 'OUR SPECIALIZATION')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('services.title', 'Elite Construction Services')}
          </h2>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed tracking-wide">
            {t('services.description', 'SS Construction delivers unparalleled standards of workmanship and fine finishes. Our comprehensive capabilities encompass private residences, modern structures, and full turnkey builds.')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, index) => {
            // Dynamically resolve icon from LucideIcons
            // Fallback to Home if icon not found
            const IconComponent = (LucideIcons as any)[srv.iconName] || LucideIcons.Home;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-black/60 border border-white/10 hover:border-gold-500/40 p-6 sm:p-8 rounded flex flex-col justify-between overflow-hidden shadow-xl backdrop-blur-md"
              >
                {/* Accent hover background flare */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  {/* Icon wrapper with gold metallic pulse */}
                  <div className="p-3 bg-white/5 border border-white/10 group-hover:border-gold-500/40 rounded-md w-fit text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 mb-6">
                    <IconComponent className="w-6 h-6 transition-transform group-hover:rotate-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-semibold tracking-wide text-white group-hover:text-gold-400 transition-colors mb-3">
                    {t(`${srv.id}.title`, srv.title)}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {t(`${srv.id}.description`, srv.description)}
                  </p>
                </div>

                {/* Sub Features list inside */}
                <ul className="space-y-2 mt-auto border-t border-white/5 pt-4">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-gold-400 rounded-full" />
                      <span className="font-sans text-[10px] uppercase tracking-wider text-gray-500 group-hover:text-gray-400">
                        {t(`${srv.id}.feat-${fIdx}`, feat)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Corner accent border line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
