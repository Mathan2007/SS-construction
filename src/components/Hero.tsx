import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data';
import { ArrowRight, ChevronDown, Award, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Image with Ken Burns / zoom effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
          }}
        />
        {/* Luxury dark linear gradients to blend background with UI text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      {/* Floating Sparkles / Particles for premium feel */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-gold-200/50 rounded-full animate-ping duration-1000" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-gold-400/40 rounded-full animate-ping duration-[3000ms]" />
        <div className="absolute bottom-1/4 left-1/5 w-1 h-1 bg-gold-100/60 rounded-full animate-ping duration-[2000ms]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          
          {/* Tagline / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center space-x-2 border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold">
              {t('hero.badge', 'PREMIUM LUXURY BUILDERS')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            {t('hero.headline', 'Building Your Dream Home with ')}{' '}
            <span className="gold-text-gradient block sm:inline">
              {t('hero.headline_span', 'Quality, Trust & Excellence')}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-sans text-sm sm:text-base md:text-lg text-gray-300 tracking-wide leading-relaxed mb-10 max-w-2xl"
          >
            {t('hero.subheading', 'We specialize in residential construction, villa construction, renovations, commercial buildings, and turnkey house projects with superior quality and on-time delivery.')}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-heading text-xs uppercase tracking-[0.2em] px-8 py-4 rounded font-bold shadow-lg shadow-gold-500/20 transition-all duration-300"
            >
              <span>{t('hero.btn_quote', 'Get Free Quote')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 border border-white/20 hover:border-gold-400 hover:bg-gold-500/10 text-white hover:text-gold-400 font-heading text-xs uppercase tracking-[0.2em] px-8 py-4 rounded transition-all duration-300"
            >
              <span>{t('hero.btn_projects', 'View Our Projects')}</span>
            </a>
          </motion.div>

          {/* Symmetrical Mini Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="font-heading text-[10px] uppercase tracking-widest text-gray-400">
                {t('hero.stat_quality', '100% Quality')}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="font-heading text-[10px] uppercase tracking-widest text-gray-400">
                {t('hero.stat_licensed', 'Licensed Team')}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="font-heading text-[10px] uppercase tracking-widest text-gray-400">
                {t('hero.stat_families', '500+ Families')}
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Pulsing down chevron to prompt scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="font-heading text-[8px] text-gray-500 uppercase tracking-[0.3em] mb-1">
          {t('hero.explore', 'Explore SS')}
        </span>
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gold-400 hover:text-gold-300"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
}
