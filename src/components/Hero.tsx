import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const words = ['Zeit', 'Geld', 'Ressourcen', 'Nerven'];
  const typingSpeed = 100;
  const deletingSpeed = 70;
  const pauseDuration = 2800;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < words[textIndex].length) {
        // Typing
        setCurrentText(words[textIndex].substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting
        setCurrentText(words[textIndex].substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === words[textIndex].length) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentIndex === 0) {
        // Move to next word
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProblem = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Subtile helle Hintergrund-Elemente */}
      <div className="absolute inset-0">
        {/* Helle dekorative Kreise statt dunkler Datenströme */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-light-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-50/20 to-brand-light-blue/10 rounded-full blur-3xl"></div>
        
        {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Parallax gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          style={{ y: scrollY * 0.5 }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-brand-light-blue/20 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          style={{ y: scrollY * 0.3 }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"
        />

        {/* Floating particles with depth */}
         {[...Array(8)].map((_, i) => (
           <motion.div
             key={i}
             animate={{ 
               y: [-20, -100 - i * 20],
               opacity: [0, 1, 0],
               scale: [0.5, 1, 0.5],
               x: [0, (i % 2 === 0 ? 20 : -20), 0]
             }}
             style={{ 
               y: scrollY * (0.1 + i * 0.05),
               left: `${10 + i * 12}%`,
               filter: `blur(${i % 3}px)`
             }}
             transition={{ 
               duration: 5 + i * 0.3, 
               repeat: Infinity, 
               ease: "easeOut",
               delay: i * 0.6
             }}
             className={`absolute bottom-0 rounded-full ${i % 3 === 0 ? 'w-3 h-3' : 'w-2 h-2'} ${i % 2 === 0 ? 'bg-brand-light-blue' : 'bg-blue-400'} opacity-60`}
           />
         ))}

        {/* Modern glass morphism elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          style={{ rotate: scrollY * 0.1 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/6 w-32 h-32 border border-brand-light-blue/10 rounded-full backdrop-blur-sm"
        />

        <motion.div
          animate={{ 
            rotate: [-360, 0],
            scale: [1.1, 1, 1.1]
          }}
          style={{ rotate: -scrollY * 0.15 }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/6 w-24 h-24 border border-blue-400/10 rounded-full backdrop-blur-sm"
        />

        {/* Subtle grid pattern with animation */}
        <motion.div
          animate={{ 
            opacity: [0.02, 0.06, 0.02],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />

        {/* Wave pattern */}
        <motion.div
          animate={{ 
            x: ["-100%", "0%"]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-[200%] h-32 opacity-10"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z\' fill=\'%233b82f6\' fill-opacity=\'0.1\'/%3E%3C/svg%3E") repeat-x',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />

        {/* Subtle floating geometric shapes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            style={{ 
              y: scrollY * (0.2 + i * 0.1),
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 1.5
            }}
            className={`absolute w-4 h-4 ${i % 2 === 0 ? 'bg-brand-light-blue/20' : 'bg-blue-400/20'} ${i % 3 === 0 ? 'rotate-45' : 'rounded-full'}`}
          />
        ))}
      </div>
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
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="flex items-center justify-center mb-8"
          >
            <motion.div
              animate={{ 
                y: [0, -3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield size={16} className="text-green-600" />
              </motion.div>
              <span className="text-green-700 text-sm font-semibold">DSGVO konform!</span>
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              Wir sparen Ihrem Unternehmen{' '}
              <span className="text-brand-light-blue inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[240px] xl:min-w-[280px] text-left relative">
                {currentText}
                <motion.span
                  aria-hidden="true"
                  role="presentation"
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [1, 0] }}
                  transition={shouldReduceMotion ? undefined : { duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="inline-block w-1 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-12 bg-brand-light-blue ml-2"
                />
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-800 font-bold mt-8"
            >
              Skalieren durch Automatisierung
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-brand-light-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-blue transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg relative overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <span className="relative z-10">Erstgespräch kostenlos vereinbaren</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight size={24} className="relative z-10" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProblem}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-brand-light-blue hover:text-brand-light-blue transition-all duration-300 inline-flex items-center justify-center space-x-3 group relative overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-light-blue/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <span className="relative z-10">Erfahren Sie mehr</span>
              <motion.div
                whileHover={{ y: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ChevronDown size={24} className="relative z-10" />
              </motion.div>
            </motion.button>
          </div>

          {/* Kundenbewertungen */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.5 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    className="text-yellow-500 text-lg cursor-pointer"
                  >
                    ★
                  </motion.div>
                ))}
              </div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-yellow-600 font-semibold text-lg"
              >
                5/5
              </motion.span>
              <motion.a 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                href="https://de.trustpilot.com/review/marticsolutions.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 font-medium hover:text-brand-light-blue transition-colors duration-300 relative group"
              >
                <span className="relative z-10">Zufriedenheit unserer Kunden</span>
                <motion.div
                  whileHover={{ scaleX: 1 }}
                  initial={{ scaleX: 0 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-light-blue origin-left"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
