import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const location = useLocation();
  
  // Prüfen ob wir auf der Hauptseite sind
  const isHomePage = location.pathname === '/';
  
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
  };
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="mb-6 inline-block">
              <Logo size="md" showText={true} />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Wir automatisieren Ihre Prozesse mit modernster Technologie und geben Ihnen 
              die Zeit zurück, die Sie für Wachstum brauchen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('problem')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Das Problem
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('plan')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Lösungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Über uns
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Martic Solutions. Alle Rechte vorbehalten.
          </p>
        </div>
        
        {/* Iubenda Script für Datenschutzerklärung und Cookie-Richtlinie */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function (w,d) {
              var loader = function () {
                var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
                s.src="https://cdn.iubenda.com/iubenda.js"; 
                tag.parentNode.insertBefore(s,tag);
              }; 
              if(w.addEventListener){
                w.addEventListener("load", loader, false);
              }else if(w.attachEvent){
                w.attachEvent("onload", loader);
              }else{
                w.onload = loader;
              }
            })(window, document);
          `
        }} />
      </div>
    </footer>
  );
};

export default Footer;