import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Shield, UserCheck, Calendar, CheckSquare, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SS_CONSTRUCTION_LOGO } from '../imageAssets';


interface StatProps {
  target: number;
  suffix: string;
  label: string;
  icon: ReactNode;
}

function AnimatedCounter({ target, suffix, label, icon }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="p-6 bg-white/5 dark:bg-neutral-900/40 border border-gold-500/10 rounded backdrop-blur-sm hover:border-gold-500/30 transition-all group flex flex-col items-center text-center"
    >
      <div className="p-3 bg-gold-500/10 text-gold-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-gold-400 transition-colors">
        {count}
        {suffix}
      </span>
      <span className="font-heading text-xs uppercase tracking-widest text-gray-400 mt-2">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();

  const features = [
    { text: t('about.val_materials', 'Quality Materials'), icon: <Shield className="w-4 h-4 text-gold-400" /> },
    { text: t('about.val_workers', 'Skilled Workers'), icon: <UserCheck className="w-4 h-4 text-gold-400" /> },
    { text: t('about.val_delivery', 'On-Time Delivery'), icon: <Clock className="w-4 h-4 text-gold-400" /> },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Luxury Visual Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-lg overflow-hidden border border-gold-500/10 shadow-2xl bg-white dark:bg-white flex items-center justify-center p-8 h-[500px]"
            >
              <img

                src={SS_CONSTRUCTION_LOGO}
                alt="SS Construction logo"
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
              {/* Gold gradient borders */}
              <div className="absolute inset-0 border border-gold-500/20 pointer-events-none" />
            </motion.div>

            {/* Absolute Decorative Gold Box behind the main image */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold-500/30 z-0 hidden sm:block" />
          </div>

          {/* Right: Content Column */}
          <div className="flex flex-col justify-center">
            
            {/* Super header */}
            <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-500 font-semibold mb-3">
              {t('about.badge', 'PRESTIGIOUS LEGACY')}
            </span>

            {/* Main Title */}
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6 dark:text-white text-neutral-900">
              {t('about.title', 'About SS Construction')}
            </h2>

            {/* Paragraph */}
            <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-gray-300 leading-relaxed tracking-wide mb-8">
              {t('about.description', 'SS Construction is committed to delivering high-quality construction services with honesty, precision, and customer satisfaction. From foundation to finishing, we build strong, beautiful, and durable homes that last for generations.')}
            </p>

            {/* Core Values Badge Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-3 bg-neutral-200/50 dark:bg-neutral-900/60 border border-neutral-300/20 dark:border-white/5 rounded-md"
                >
                  <div className="shrink-0">{item.icon}</div>
                  <span className="font-heading text-xs uppercase tracking-widest font-semibold dark:text-gray-200 text-neutral-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote of Integrity */}
            <div className="border-l-2 border-gold-500 pl-4 py-1.5 bg-gold-500/5 rounded-r">
              <p className="font-display italic text-xs sm:text-sm text-neutral-600 dark:text-gray-400">
                {t('about.quote', '“Building structures that hold dreams requires not just high-grade cement, but absolute transparency and uncompromising craftsmanship.”')}
              </p>
              <p className="font-heading text-[10px] uppercase tracking-widest text-gold-500 font-semibold mt-2">
                {t('about.quote_author', '— SS Construction Team')}
              </p>
            </div>

          </div>

        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-24 pt-16 border-t border-neutral-300/20 dark:border-white/10">
          <AnimatedCounter
            target={10}
            suffix="+"
            label={t('about.stat_experience', 'Years Experience')}
            icon={<Calendar className="w-5 h-5" />}
          />
          <AnimatedCounter
            target={250}
            suffix="+"
            label={t('about.stat_completed', 'Completed Projects')}
            icon={<CheckSquare className="w-5 h-5" />}
          />
          <AnimatedCounter
            target={500}
            suffix="+"
            label={t('about.stat_families_stat', 'Happy Families')}
            icon={<UserCheck className="w-5 h-5" />}
          />
        </div>

      </div>
    </section>
  );
}
