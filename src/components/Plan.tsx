import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PhoneCall, Lightbulb, Zap } from 'lucide-react';

const Plan: React.FC = () => {
  return (
    <section id="plan" className="py-20 bg-black relative">
      {/* Subtile Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-emerald-500/2 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unsere <span className="text-cyan-400">Lösungen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Von der Prozessautomatisierung bis zur KI-Komplettlösung - 
            wir bieten maßgeschneiderte Lösungen für Ihr Unternehmen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Block 1: Sales System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <div 
              className="bg-black border border-white/20 rounded-2xl p-8 h-full min-h-[200px] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 10s ease-in-out infinite',
                animationDelay: '0s'
              }}
            >
              {/* Hover Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <TrendingUp className="text-white/80" size={32} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Sales System</h3>
                <p className="text-gray-300">
                  Automatisieren Sie Ihren Vertriebsprozess und steigern Sie Ihre Verkaufserfolge durch KI-Assistenten.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Block 2: KI Telefonassistent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div 
className="bg-black border border-white/20 rounded-2xl p-8 h-full min-h-[200px] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 10s ease-in-out infinite',
                animationDelay: '2.5s'
              }}
            >
              {/* Hover Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <PhoneCall className="text-white/80" size={32} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">KI Telefonassistent</h3>
                <p className="text-gray-300">
                  Intelligente Telefonassistenten, die 24/7 verfügbar sind und Ihre Kundenanfragen professionell bearbeiten.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Block 3: Digitalisierungsberatung */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div 
              className="bg-black border border-white/20 rounded-2xl p-8 h-full min-h-[200px] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 10s ease-in-out infinite',
                animationDelay: '5s'
              }}
            >
              {/* Hover Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <Lightbulb className="text-white/80" size={32} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Digitalisierungsberatung</h3>
                <p className="text-gray-300">
                  Strategische Beratung für Ihre digitale Transformation mit maßgeschneiderten Lösungen für Ihr Unternehmen.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Block 4: Prozess Automatisierung */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div 
              className="bg-black border border-white/20 rounded-2xl p-8 h-full min-h-[200px] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 10s ease-in-out infinite',
                animationDelay: '7.5s'
              }}
            >
              {/* Hover Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <Zap className="text-white/80" size={32} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Prozess Automatisierung</h3>
                <p className="text-gray-300">
                  Automatisieren Sie repetitive Aufgaben und steigern Sie die Effizienz Ihrer Geschäftsprozesse um bis zu 80%.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bereit für Ihre digitale Transformation?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, wie wir Ihr Unternehmen optimieren können.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Keine Verpflichtungen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Sofortiger Start möglich</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              Jetzt kostenlos beraten lassen
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Plan;
