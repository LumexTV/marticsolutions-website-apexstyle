import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Award } from 'lucide-react';

const Guide: React.FC = () => {
  return (
    <section id="guide" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wir sind Ihr <span className="text-cyan-400">weiser Führer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Martic Solutions ist Ihr erfahrener Partner auf dem Weg zur Automatisierung. 
            Wir verstehen Ihre Herausforderungen und haben die Lösungen, die Sie brauchen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Linke Seite - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Warum wir Ihr vertrauenswürdiger Partner sind
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Erfahrung & Expertise</h4>
                  <p className="text-gray-300">
                    Über 5 Jahre Erfahrung in der Automatisierung von Geschäftsprozessen. 
                    Wir kennen die Herausforderungen und haben bewährte Lösungen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Individuelle Lösungen</h4>
                  <p className="text-gray-300">
                    Jedes Unternehmen ist einzigartig. Wir entwickeln maßgeschneiderte 
                    Automatisierungslösungen, die perfekt zu Ihren Prozessen passen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Persönliche Betreuung</h4>
                  <p className="text-gray-300">
                    Sie arbeiten direkt mit unserem Team zusammen. Wir sind für Sie da 
                    und begleiten Sie durch den gesamten Prozess.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rechte Seite - Visuell */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Unsere Erfolgsbilanz</h4>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-gray-300">Automatisierte Prozesse</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
                    <div className="text-gray-300">Zufriedene Kunden</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                    <div className="text-gray-300">Zeitersparnis</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                    <div className="text-gray-300">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Wir glauben an Ihren Erfolg
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ihr Erfolg ist unser Erfolg. Wir sind nicht nur Ihr Dienstleister, 
              sondern Ihr Partner auf dem Weg zur digitalen Transformation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              Vertrauen Sie uns Ihre Automatisierung an
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;
