import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home', 'Home'), href: '#home' },
    { name: t('nav.about', 'About Us'), href: '#about' },
    { name: t('nav.services', 'Services'), href: '#services' },
    { name: t('nav.projects', 'Portfolio'), href: '#projects' },
    { name: t('nav.process', 'Our Process'), href: '#process' },
    { name: t('nav.contact', 'Contact Us'), href: '#contact' },
  ];

  const services = [
    { name: t('contact.type_house', 'House Construction'), href: '#services' },
    { name: t('contact.type_villa', 'Villa Construction'), href: '#services' },
    { name: t('contact.type_commercial', 'Commercial Buildings'), href: '#services' },
    { name: t('contact.type_renovation', 'Home Renovation'), href: '#services' },
    { name: t('contact.type_core', 'Structural Framing Work'), href: '#services' },
    { name: t('contact.type_turnkey', 'Turnkey Handover Solutions'), href: '#services' },
  ];

  return (
    <footer
      id="footer"
      className="bg-black text-white border-t border-gold-500/10 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10 text-left">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center space-x-2 mb-6 group">
              <span className="font-display text-3xl font-bold tracking-widest text-gold-400 group-hover:text-gold-300 transition-colors">
                SS
              </span>
              <div className="flex flex-col">
                <span className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-white">
                  Construction
                </span>
                <span className="font-sans text-[8px] tracking-[0.3em] text-gold-500/80 uppercase">
                  {t('footer.excellence', 'Excellence Built In')}
                </span>
              </div>
            </a>

            <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6">
              {t('footer.description', 'A decade of constructing magnificent villas, structural framing, residential duplexes, and premium homes. Built upon trust, concrete quality, and absolute transparency.')}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com', label: 'Facebook' },
                { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com', label: 'Twitter' },
                { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com', label: 'Instagram' },
                { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={soc.label}
                  className="p-2.5 bg-neutral-900 border border-white/10 rounded hover:border-gold-500 hover:text-gold-400 transition-all text-gray-400"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-6">
              {t('footer.quick_links', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-6">
              {t('footer.our_services', 'Our Services')}
            </h4>
            <ul className="space-y-3">
              {services.map((srv) => (
                <li key={srv.name}>
                  <a
                    href={srv.href}
                    className="font-sans text-xs text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {srv.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Address / contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-6">
              {t('footer.office_header', 'Corporate Office')}
            </h4>
            <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
              {t('contact.office_address', 'Bodinaickenpatti, Namakkal, Tamil Nadu, India')}
            </p>
            <div className="space-y-2 font-sans text-xs text-gray-400">
              <p>
                T: <a href="tel:+919443754830" className="hover:text-gold-400 transition-colors">+91 94437 54830</a>
              </p>
              <p>
                W: <a href="https://wa.me/919443754830" className="hover:text-gold-400 transition-colors">+91 94437 54830</a>
              </p>
              <p>
                E: <a href="mailto:ssconstruction830@gmail.com" className="hover:text-gold-400 transition-colors">ssconstruction830@gmail.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 SS Construction. {t('footer.copyright', 'All Rights Reserved.')}</p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-gold-400 transition-colors">{t('footer.policy', 'Privacy Policy')}</a>
            <a href="#about" className="hover:text-gold-400 transition-colors">{t('footer.terms', 'Terms of Work')}</a>
            <a href="#about" className="hover:text-gold-400 transition-colors">{t('footer.sitemap', 'Sitemap')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
