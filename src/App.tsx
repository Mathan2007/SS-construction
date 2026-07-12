import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync dark class on html tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Track scroll progress & active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // 2. Active Section Detection
      const sections = ['home', 'about', 'services', 'projects', 'process', 'testimonials', 'gallery', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is above or near mid-viewport, consider it active
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${
      isDarkMode ? 'bg-black text-white' : 'bg-neutral-50 text-neutral-900'
    }`}>
      
      {/* Intro Loader Splash Screen */}
      <Loader />

      {/* Scroll Progress Indicator Bar at the very top */}
      <div className="fixed top-0 left-0 w-full h-[3.5px] z-50 pointer-events-none">
        <div
          className="h-full gold-gradient shadow-[0_0_10px_#DCC255]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />

      {/* Sections List */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Projects />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call, WhatsApp, and Back-to-Top triggers */}
      <FloatingActions />

    </div>
  );
}
