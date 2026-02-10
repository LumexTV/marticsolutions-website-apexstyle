import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'problem', 'system', 'case-studies', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'hero', label: 'Start' },
    { id: 'problem', label: 'Problem' },
    { id: 'system', label: 'System' },
    { id: 'case-studies', label: 'Fallstudien' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled || isOpen
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-apex-border/50 py-3'
          : 'bg-transparent py-5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('hero')}>
            <Logo size="md" showText={true} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-200 
                  ${activeSection === link.id
                    ? 'text-apex-blue'
                    : 'text-apex-gray hover:text-apex-navy'
                  }`}
              >
                {link.label}
              </button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/erstgespraech')}
              className="bg-apex-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-apex-navy-light transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses Erstgepräch
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-apex-navy"
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
          className="md:hidden bg-white border-t border-apex-border"
        >
          <div className="px-6 py-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-center py-2 text-apex-navy font-medium hover:text-apex-blue transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { navigate('/erstgespraech'); setIsOpen(false); }}
              className="w-full bg-apex-blue text-white px-6 py-3 rounded-full font-bold shadow-lg"
            >
              Kostenloses Erstgepräch
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
