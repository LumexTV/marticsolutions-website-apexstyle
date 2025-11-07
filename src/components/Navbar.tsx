import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();
  
  // Prüfen ob wir auf der Hauptseite sind
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Aktuelle Sektion beim Scrollen erkennen
      const sections = ['hero', 'problem', 'plan', 'about', 'contact', 'faq'];
      const scrollPosition = window.scrollY + 100; // Offset für bessere Erkennung
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // Auf der Hauptseite: Smooth scroll zur Sektion
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Auf Unterseiten: Zur Hauptseite mit Anker navigieren
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  const getNavLinkClass = (sectionId: string) => {
    const baseClass = "transition-colors duration-200";
    const isActive = activeSection === sectionId;
    
    if (isActive) {
      return `${baseClass} text-brand-light-blue font-semibold`;
    }
    return `${baseClass} text-gray-700 hover:text-brand-light-blue`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <Logo size="md" showText={true} />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('hero')}
              className={isHomePage ? getNavLinkClass('hero') : "transition-colors duration-200 text-gray-700 hover:text-brand-light-blue"}
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className={isHomePage ? getNavLinkClass('problem') : "transition-colors duration-200 text-gray-700 hover:text-brand-light-blue"}
            >
              Das Problem
            </button>
            <button
              onClick={() => scrollToSection('plan')}
              className={isHomePage ? getNavLinkClass('plan') : "transition-colors duration-200 text-gray-700 hover:text-brand-light-blue"}
            >
              Lösungen
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={isHomePage ? getNavLinkClass('about') : "transition-colors duration-200 text-gray-700 hover:text-brand-light-blue"}
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={isHomePage ? getNavLinkClass('faq') : "transition-colors duration-200 text-gray-700 hover:text-brand-light-blue"}
            >
              FAQ
            </button>
          </div>

          {/* CTA Button - Right Side */}
          <div className="hidden md:block">
                         <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => scrollToSection('contact')}
               className="bg-brand-light-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-blue transition-all duration-300 shadow-lg"
             >
               Gratis Beratung
             </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
        >
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left transition-colors duration-200 py-2 text-gray-700 hover:text-brand-light-blue"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="block w-full text-left transition-colors duration-200 py-2 text-gray-700 hover:text-brand-light-blue"
            >
              Das Problem
            </button>
            <button
              onClick={() => scrollToSection('plan')}
              className="block w-full text-left transition-colors duration-200 py-2 text-gray-700 hover:text-brand-light-blue"
            >
              Lösungen
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left transition-colors duration-200 py-2 text-gray-700 hover:text-brand-light-blue"
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left transition-colors duration-200 py-2 text-gray-700 hover:text-brand-light-blue"
            >
              FAQ
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="w-full bg-brand-light-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue transition-all duration-300 shadow-lg"
            >
              Gratis Beratung
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;