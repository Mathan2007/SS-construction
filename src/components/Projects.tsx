import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { MapPin, Maximize2, Calendar, X, Check, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Modern House',
    'Luxury Villa',
    'Duplex House',
    'Apartment',
    'Commercial Building',
  ];

  const categoryTranslationKeys: Record<string, string> = {
    'All': 'projects.cat_all',
    'Modern House': 'projects.cat_modern_house',
    'Luxury Villa': 'projects.cat_luxury_villa',
    'Duplex House': 'projects.cat_duplex_house',
    'Apartment': 'projects.cat_apartment',
    'Commercial Building': 'projects.cat_commercial_building',
  };

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-100 dark:bg-black text-neutral-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3 block">
            {t('projects.badge', 'OUR ARCHITECTURAL PORTFOLIO')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 dark:text-white text-neutral-900">
            {t('projects.title', 'Featured Projects')}
          </h2>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-gray-400 leading-relaxed tracking-wide">
            {t('projects.description', 'Explore our achievements across beautiful modern houses, custom duplexes, and premium residential spaces in Namakkal and surrounding regions. Built to perfection.')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-heading text-[10px] uppercase tracking-widest px-5 py-2.5 rounded transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gold-500 text-black font-bold shadow-lg shadow-gold-500/20'
                  : 'bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-gray-300 hover:text-gold-500 border border-transparent dark:hover:border-gold-500/10'
              }`}
            >
              {t(categoryTranslationKeys[cat] || '', cat)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/5 rounded overflow-hidden shadow-md dark:shadow-none hover:shadow-2xl hover:border-gold-500/30 dark:hover:border-gold-500/20 transition-all flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900">
                  <img
                    src={proj.image}
                    alt={t(`${proj.id}.title`, proj.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Category overlay label */}
                  <span className="absolute top-4 left-4 bg-black/80 text-gold-400 border border-gold-500/20 font-heading text-[9px] uppercase tracking-widest px-3 py-1 rounded">
                    {t(`${proj.id}.category`, proj.category)}
                  </span>

                  {/* Elegant View Overlays */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setActiveProject(proj)}
                      className="p-3 bg-gold-500 text-black rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold tracking-wide mb-2 group-hover:text-gold-500 dark:text-white text-neutral-900 transition-colors">
                      {t(`${proj.id}.title`, proj.title)}
                    </h3>
                    
                    {/* Location */}
                    <div className="flex items-center text-neutral-500 dark:text-gray-400 space-x-1.5 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span className="font-sans text-xs tracking-wide">
                        {t(`${proj.id}.location`, proj.location)}
                      </span>
                    </div>
                  </div>

                  {/* Core specifications */}
                  <div className="border-t border-neutral-200 dark:border-white/5 pt-4 mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-heading text-[9px] text-neutral-400 dark:text-gray-500 uppercase tracking-widest">
                        {t('projects.area', 'Total Area')}
                      </span>
                      <span className="font-heading text-xs font-bold text-neutral-800 dark:text-gray-200 uppercase tracking-wider mt-1">
                        {proj.area}
                      </span>
                    </div>

                    <div className="flex flex-col text-right">
                      <span className="font-heading text-[9px] text-neutral-400 dark:text-gray-500 uppercase tracking-widest">
                        {t('projects.year', 'Handover')}
                      </span>
                      <span className="font-heading text-xs font-bold text-neutral-800 dark:text-gray-200 uppercase tracking-wider mt-1">
                        {proj.completionYear}
                      </span>
                    </div>
                  </div>
                </div>

                {/* View Details full trigger block button */}
                <button
                  onClick={() => setActiveProject(proj)}
                  className="w-full py-4 border-t border-neutral-100 dark:border-white/5 text-center font-heading text-[10px] uppercase tracking-widest text-neutral-700 dark:text-gray-300 group-hover:bg-gold-500 group-hover:text-black transition-all"
                >
                  {t('projects.btn_view_details', 'View Full Details')}
                </button>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state of filtering */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-neutral-200/20 dark:bg-neutral-900/40 border border-dashed border-neutral-300 dark:border-white/10 rounded">
            <Eye className="w-8 h-8 text-gold-500/50 mx-auto mb-3" />
            <span className="font-heading text-sm uppercase tracking-widest text-neutral-500">
              {t('projects.empty', 'No matching projects listed in this segment')}
            </span>
          </div>
        )}

      </div>

      {/* Project Details Overlay Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white dark:bg-neutral-950 rounded border border-gold-500/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-black/80 text-white rounded-full hover:bg-gold-500 hover:text-black transition-colors"
                title="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto flex-1">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left Column: Image preview */}
                  <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto md:h-full bg-neutral-900">
                    <img
                      src={activeProject.image}
                      alt={t(`${activeProject.id}.title`, activeProject.title)}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
                  </div>

                  {/* Right Column: Detailed info specifications */}
                  <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between text-neutral-900 dark:text-white">
                    
                    <div>
                      {/* Badge category */}
                      <span className="font-heading text-[9px] tracking-[0.25em] text-gold-600 dark:text-gold-400 uppercase font-semibold border border-gold-500/20 px-3 py-1 rounded-full w-fit mb-4 block">
                        {t(`${activeProject.id}.category`, activeProject.category)}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
                        {t(`${activeProject.id}.title`, activeProject.title)}
                      </h3>

                      {/* Info metrics bar */}
                      <div className="grid grid-cols-3 gap-2 border-y border-neutral-200 dark:border-white/10 py-4 mb-6">
                        <div>
                          <span className="font-heading text-[8px] text-gray-500 uppercase tracking-widest block">
                            {t('projects.detail_spec_area', 'Area Block')}
                          </span>
                          <span className="font-heading text-xs font-bold text-neutral-800 dark:text-gray-200 mt-1 block">
                            {activeProject.area}
                          </span>
                        </div>
                        <div>
                          <span className="font-heading text-[8px] text-gray-500 uppercase tracking-widest block">
                            {t('projects.detail_spec_completion', 'Completion')}
                          </span>
                          <span className="font-heading text-xs font-bold text-neutral-800 dark:text-gray-200 mt-1 block">
                            {activeProject.completionYear}
                          </span>
                        </div>
                        <div>
                          <span className="font-heading text-[8px] text-gray-500 uppercase tracking-widest block">
                            {t('projects.detail_spec_location', 'Location')}
                          </span>
                          <span className="font-heading text-[10px] font-bold text-neutral-800 dark:text-gray-200 mt-1 block truncate">
                            {t(`${activeProject.id}.location`, activeProject.location).split(',')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Brief Description */}
                      <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-gray-400 leading-relaxed mb-6">
                        {t(`${activeProject.id}.description`, activeProject.description)}
                      </p>

                      {/* Custom list of built premium features */}
                      <h4 className="font-heading text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                        {t('projects.highlights', 'Included Build Highlights')}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                        {activeProject.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center space-x-2 text-xs text-neutral-700 dark:text-gray-300">
                            <Check className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                            <span>{t(`${activeProject.id}.feat-${fIdx}`, feat)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Book Consultation Trigger */}
                    <a
                      href="#contact"
                      onClick={() => setActiveProject(null)}
                      className="w-full block text-center py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-heading text-xs uppercase tracking-widest rounded font-bold shadow-md shadow-gold-500/10 transition-all"
                    >
                      {t('projects.detail_btn_consult', 'Consult On Similar Project')}
                    </a>

                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
