import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-900 text-white overflow-hidden relative"
    >
      {/* Decorative Blueprint grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold mb-3 block">
            {t('process.badge', 'THE BLUEPRINT OF EXECUTION')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('process.title', 'Our Construction Process')}
          </h2>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed tracking-wide">
            {t('process.description', 'We follow a rigid seven-step methodology to transform your lifestyle aspirations into precise structural realities. Every step is logged on your customer portal.')}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[1.5px] bg-gradient-to-r from-gold-500/20 via-gold-500/50 to-gold-500/20 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = (LucideIcons as any)[step.iconName] || LucideIcons.Compass;
              // Normalize step key format (e.g., "process.step_1")
              const stepNumberInt = parseInt(step.number, 10);

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  
                  {/* Step Node with Pulsing Ring */}
                  <div className="relative mb-6">
                    {/* Ring */}
                    <div className="absolute inset-0 rounded-full border border-gold-500/30 scale-125 group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Inner Circle Node */}
                    <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-black border-2 border-gold-400 text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 shadow-lg shadow-gold-500/10">
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-2 bg-gold-500 text-black font-heading font-bold text-[9px] px-1.5 py-0.5 rounded-full shadow-md z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Text Details */}
                  <h3 className="font-heading text-xs uppercase tracking-widest font-bold text-white group-hover:text-gold-400 transition-colors mb-3">
                    {t(`process.step_${stepNumberInt}`, step.title)}
                  </h3>

                  <p className="font-sans text-[11px] text-gray-400 leading-relaxed px-2">
                    {t(`process.step_${stepNumberInt}_desc`, step.description)}
                  </p>

                  {/* Flow Arrow pointing down on mobile */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="lg:hidden mt-4 text-gold-500/30">
                      <LucideIcons.ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Process Trust Disclaimer */}
        <div className="mt-20 p-6 bg-black/40 border border-gold-500/10 rounded max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center gap-6 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
            <div className="p-2.5 bg-gold-500/10 rounded text-gold-400 mb-3 sm:mb-0">
              <LucideIcons.ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                {t('process.guarantee_title', 'Guaranteed Fixed-Price Contracts')}
              </h4>
              <p className="font-sans text-[11px] text-gray-400 mt-1">
                {t('process.guarantee_desc', 'Once planning is approved, we lock in costs. There are zero unnotified cost overruns.')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
