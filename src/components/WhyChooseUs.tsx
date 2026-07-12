import { motion } from 'motion/react';
import { WHY_CHOOSE_US_DATA } from '../data';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section
      id="why-choose-us"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-20">
          <div className="lg:col-span-6">
            <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3 block">
              {t('wcu.badge', 'OUR CREDENTIALS')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight dark:text-white text-neutral-900">
              {t('wcu.title', 'Why Discerning Clients Trust SS Construction')}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-gray-400 leading-relaxed tracking-wide">
              {t('wcu.description', 'We stand apart through our commitment to pure structural integrity, legal compliance, and elite finishing. Our protocols ensure your dream build is protected forever.')}
            </p>
          </div>
        </div>

        {/* Split Section: Interactive image/illustration + Grid of benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Grid list of values (8 Cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US_DATA.map((item, idx) => {
              const IconComponent = (LucideIcons as any)[item.iconName] || LucideIcons.Compass;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded hover:border-gold-500/30 dark:hover:border-gold-500/20 transition-all shadow-md dark:shadow-none hover:shadow-lg group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2.5 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-md group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-gray-200">
                        {t(`${item.id}.title`, item.title)}
                      </h3>
                    </div>
                    <p className="font-sans text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                      {t(`${item.id}.description`, item.description)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Premium Construction Poster Card */}
          <div className="lg:col-span-4 h-full flex items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px] lg:h-full bg-black text-white p-8 rounded border border-gold-500/20 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Construction Blueprints background pattern */}
              <div className="absolute inset-0 bg-cover bg-center opacity-30 select-none mix-blend-overlay" style={{ backgroundImage: `url('https://picsum.photos/seed/drafting/600/800')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-0" />

              <div className="relative z-10">
                <span className="font-heading text-[10px] tracking-[0.4em] text-gold-400 uppercase font-semibold">
                  {t('wcu.policy_badge', 'SITE POLICY')}
                </span>
                <h4 className="font-display text-2xl font-bold tracking-tight text-white mt-4 leading-snug">
                  {t('wcu.policy_title', 'Uncompromising Standards of Construction Integrity')}
                </h4>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 shrink-0" />
                  <p className="font-sans text-xs text-gray-300">
                    {t('wcu.policy_bullet_1', 'We exclusively load Grade FE-550 TMT reinforced structural steel.')}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 shrink-0" />
                  <p className="font-sans text-xs text-gray-300">
                    {t('wcu.policy_bullet_2', 'Third-party concrete cylinder compression crushing tests are certified at 28-day intervals.')}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 shrink-0" />
                  <p className="font-sans text-xs text-gray-300">
                    {t('wcu.policy_bullet_3', 'All pipelines undergo high-pressure hydraulic tests before plaster seals are poured.')}
                  </p>
                </div>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-heading text-[9px] uppercase tracking-widest text-gray-400">
                    {t('wcu.policy_footer_label', 'Structural Vetting')}
                  </span>
                  <span className="font-heading text-xs uppercase tracking-wider text-gold-400 font-bold mt-1">
                    {t('wcu.policy_footer_status', '100% SECURE')}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  REG: SS-8012-C
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
