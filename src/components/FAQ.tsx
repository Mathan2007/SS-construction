import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_DATA } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Open the first one by default

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-900 text-white relative overflow-hidden"
    >
      {/* Absolute design decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold mb-3 block">
            {t('faq.badge', 'COMMON INQUIRIES')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed tracking-wide">
            {t('faq.description', 'Read transparent replies about our timelines, pricing policies, customization steps, and structural quality warranties.')}
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-gold-500 bg-black/60 shadow-lg shadow-gold-500/5'
                    : 'border-white/10 bg-black/40 hover:border-white/25'
                }`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${
                      isOpen ? 'text-gold-400' : 'text-gray-500'
                    }`} />
                    <span className="font-heading text-sm font-semibold tracking-wide text-white group-hover:text-gold-400">
                      {t(`${faq.id}.question`, faq.question)}
                    </span>
                  </div>

                  {/* Icon toggle */}
                  <div className={`p-1.5 rounded-full border transition-all ${
                    isOpen
                      ? 'border-gold-500 text-gold-400 bg-gold-500/10'
                      : 'border-white/10 text-gray-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed tracking-wide">
                          {t(`${faq.id}.answer`, faq.answer)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help CTA */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs text-gray-400">
            {t('faq.direct_contact', 'Have any customized structural questions or specific project constraints?')}{' '}
            <a
              href="#contact"
              className="text-gold-400 hover:text-gold-300 underline font-semibold transition-colors"
            >
              {t('faq.get_in_touch', 'Get in touch with our experts directly')}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
