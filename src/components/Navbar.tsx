import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, PhoneCall, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

export default function Navbar({ isDarkMode, toggleDarkMode, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home', 'Home'), href: '#home' },
    { name: t('nav.about', 'About'), href: '#about' },
    { name: t('nav.services', 'Services'), href: '#services' },
    { name: t('nav.projects', 'Projects'), href: '#projects' },
    { name: t('nav.process', 'Process'), href: '#process' },
    { name: t('nav.testimonials', 'Testimonials'), href: '#testimonials' },
    { name: t('nav.gallery', 'Gallery'), href: '#gallery' },
    { name: t('nav.contact', 'Contact'), href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? isDarkMode
              ? 'bg-black/95 border-b border-gold-500/10 shadow-lg py-3'
              : 'bg-white/95 border-b border-gold-500/10 shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <span className="font-display text-2xl font-bold tracking-widest text-gold-400 group-hover:text-gold-300 transition-colors">
                SS
              </span>
              <div className="flex flex-col">
                <span className={`font-heading text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${
                  isScrolled 
                    ? isDarkMode ? 'text-white' : 'text-black' 
                    : 'text-white'
                }`}>
                  {language === 'ta' ? 'கட்டுமானம்' : 'Construction'}
                </span>
                <span className="font-sans text-[7px] tracking-[0.3em] text-gold-500/80 uppercase">
                  {language === 'ta' ? 'சிறந்த தரம், என்றும்!' : 'Excellence Built In'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-heading text-xs uppercase tracking-widest transition-all relative py-1 hover:text-gold-400 ${
                      isActive
                        ? 'text-gold-400 font-medium'
                        : isScrolled
                          ? isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          : 'text-gray-200'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border text-[10px] font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                  isScrolled
                    ? isDarkMode
                      ? 'border-gray-800 text-gold-400 bg-gray-950 hover:border-gold-500/30'
                      : 'border-gray-200 text-gold-600 bg-gray-100 hover:border-gold-500/30'
                    : 'border-white/20 text-gold-400 bg-black/40 hover:border-gold-500/30'
                }`}
                title="Switch Language"
              >
                <Globe className="w-3 h-3 mr-1" />
                <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
              </button>

              {/* Dark/Light mode toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full border transition-all ${
                  isScrolled
                    ? isDarkMode
                      ? 'border-gray-800 text-gold-400 hover:bg-gray-950'
                      : 'border-gray-200 text-gold-500 hover:bg-gray-100'
                    : 'border-white/20 text-gold-400 hover:bg-white/10'
                }`}
                title="Toggle visual theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>


            </div>

            {/* Mobile Actions and Hamburger Menu */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center px-2 py-1 rounded border text-[9px] font-heading font-bold uppercase tracking-wide transition-all ${
                  isScrolled
                    ? isDarkMode
                      ? 'border-gray-800 text-gold-400 bg-gray-950'
                      : 'border-gray-200 text-gold-600 bg-gray-100'
                    : 'border-white/20 text-gold-400 bg-black/40'
                }`}
                title="Switch Language"
              >
                <Globe className="w-2.5 h-2.5 mr-1" />
                <span>{language === 'en' ? 'தமிழ்' : 'EN'}</span>
              </button>

              {/* Dark Mode toggle for mobile */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full border transition-all ${
                  isScrolled
                    ? isDarkMode
                      ? 'border-gray-800 text-gold-400 bg-gray-950'
                      : 'border-gray-200 text-gold-500 bg-gray-100'
                    : 'border-white/20 text-gold-400 bg-black/40'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Mobile Hamburger toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md border transition-all ${
                  isScrolled
                    ? isDarkMode
                      ? 'border-gray-800 text-white bg-gray-950'
                      : 'border-gray-200 text-black bg-gray-100'
                    : 'border-white/20 text-white bg-black/40'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-x-0 top-[65px] z-30 p-6 lg:hidden border-b transition-colors shadow-2xl ${
              isDarkMode
                ? 'bg-black/98 border-gold-500/10'
                : 'bg-white/98 border-gold-500/10'
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-heading text-sm uppercase tracking-widest py-2 border-b border-transparent transition-all hover:text-gold-400 ${
                      isActive
                        ? 'text-gold-400 font-bold border-b-gold-400'
                        : isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
