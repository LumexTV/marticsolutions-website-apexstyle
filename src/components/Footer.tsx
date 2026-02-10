import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-white/50 backdrop-blur-md border-t border-apex-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Left: Navigation */}
          <div>
            <h4 className="font-bold text-apex-navy mb-4">Navigation</h4>
            <ul className="space-y-3 text-apex-gray">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-apex-blue transition-colors">Start</button></li>
              <li><button onClick={() => scrollToSection('problem')} className="hover:text-apex-blue transition-colors">Problem</button></li>
              <li><button onClick={() => scrollToSection('system')} className="hover:text-apex-blue transition-colors">Lösung</button></li>
              <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-apex-blue transition-colors">Fallstudien</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-apex-blue transition-colors">FAQ</button></li>
              <li><Link to="/erstgespraech" className="hover:text-apex-blue transition-colors">Potenzialanalyse</Link></li>
            </ul>
          </div>

          {/* Center: Martic Solutions */}
          <div className="text-center">
            <Link to="/" className="inline-block mb-6">
              <Logo size="md" showText={true} />
            </Link>
            <p className="text-apex-gray max-w-sm mx-auto leading-relaxed">
              Wir transformieren B2B-Unternehmen durch intelligente Automatisierungssysteme.
              Weniger manueller Aufwand, mehr strategisches Wachstum.
            </p>
          </div>

          {/* Right: Rechtlich */}
          <div className="md:text-right">
            <h4 className="font-bold text-apex-navy mb-4">Rechtliches & Kontakt</h4>
            <ul className="space-y-3 text-apex-gray">
              <li><Link to="/impressum" className="hover:text-apex-blue transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-apex-blue transition-colors">Datenschutz</Link></li>
              <li><a href="mailto:kontakt@marticsolutions.de" className="hover:text-apex-blue transition-colors">Kontakt</a></li>
              <li><a href="mailto:jobs@martic-solutions.com" className="hover:text-apex-blue transition-colors">Karriere</a></li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6 md:justify-end">
              <a
                href="https://www.linkedin.com/in/lukamrtc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-apex-navy hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@lukamrtc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-apex-navy hover:scale-110 transition-all duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-apex-border pt-8 text-center">
          <p className="text-apex-gray text-sm">
            &copy; {new Date().getFullYear()} Martic Solutions. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;