import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProblem = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Transparentes Datenstrom-Netz */}
      <div className="absolute inset-0">
        {/* Statisches Netz aus Linien */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {/* Horizontale Linien */}
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
          
          {/* Vertikale Linien */}
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#06b6d4" strokeWidth="1" opacity="0.2" />
          <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#06b6d4" strokeWidth="1" opacity="0.2" />
          <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#06b6d4" strokeWidth="1" opacity="0.2" />
          
          {/* Diagonale Linien */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#67e8f9" strokeWidth="1" opacity="0.15" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#67e8f9" strokeWidth="1" opacity="0.15" />
        </svg>

        {/* Gelegentliche Datenströme */}
        <motion.div
          animate={{ 
            x: ["-100%", "100%"],
            opacity: [0, 0.6, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear",
            delay: 0,
            repeatDelay: 8
          }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ boxShadow: "0 0 4px #06b6d4" }}
        />
        
        <motion.div
          animate={{ 
            x: ["100%", "-100%"],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "linear",
            delay: 3,
            repeatDelay: 12
          }}
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          style={{ boxShadow: "0 0 3px #3b82f6" }}
        />

        <motion.div
          animate={{ 
            y: ["-100%", "100%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear",
            delay: 6,
            repeatDelay: 10
          }}
          className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          style={{ boxShadow: "0 0 3px #06b6d4" }}
        />

        <motion.div
          animate={{ 
            y: ["100%", "-100%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "linear",
            delay: 9,
            repeatDelay: 15
          }}
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          style={{ boxShadow: "0 0 2px #3b82f6" }}
        />

        {/* Subtile Hintergrund-Effekte */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/2 to-blue-500/2 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* DSGVO Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Shield size={16} className="text-green-400" />
              <span className="text-green-400 text-sm font-semibold">DSGVO konform!</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Wir sparen Ihrem Unternehmen{' '}
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zeit
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold mt-8">
              Mehr Umsatz | Weniger Kosten
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-2xl shadow-cyan-500/30 relative overflow-hidden group"
            >
              {/* Button Glow Effect */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative z-10">Erstgespräch kostenlos vereinbaren</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProblem}
              className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-white hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-3 group"
            >
              <span>Erfahren Sie mehr</span>
              <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Kundenbewertungen */}
          <div className="mt-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-yellow-400 text-lg"
                  >
                    ★
                  </motion.div>
                ))}
              </div>
              <span className="text-yellow-400 font-semibold text-lg">5/5</span>
              <a 
                href="https://de.trustpilot.com/review/marticsolutions.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 font-medium hover:text-cyan-400 transition-colors duration-300"
              >
                Zufriedenheit unserer Kunden
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;