import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const Problem: React.FC = () => {

  return (
    <section id="problem" className="pt-80 pb-20 bg-black relative">
      {/* Subtile Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-500/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orange-500/2 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Das <span className="text-red-400">Problem</span> kennen wir alle
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Während du wertvolle Zeit mit wiederkehrenden Aufgaben verbringst, 
            zieht deine Konkurrenz an dir vorbei.
          </p>
        </motion.div>

        {/* Vorher/Nachher Vergleich - Modern & Futuristisch */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
              {/* Vorher - Links - Statisch */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Vorher
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border-2 border-red-400 rounded-full flex items-center justify-center shadow-lg shadow-red-400/50">
                      <X size={16} className="text-red-400" />
                    </div>
                    <span className="text-gray-300 text-lg">Stunden mit manuellen Aufgaben verschwenden</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border-2 border-red-400 rounded-full flex items-center justify-center shadow-lg shadow-red-400/50">
                      <X size={16} className="text-red-400" />
                    </div>
                    <span className="text-gray-300 text-lg">Team überlastet mit Routineaufgaben</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border-2 border-red-400 rounded-full flex items-center justify-center shadow-lg shadow-red-400/50">
                      <X size={16} className="text-red-400" />
                    </div>
                    <span className="text-gray-300 text-lg">Häufige Fehler durch manuelle Prozesse</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border-2 border-red-400 rounded-full flex items-center justify-center shadow-lg shadow-red-400/50">
                      <X size={16} className="text-red-400" />
                    </div>
                    <span className="text-gray-300 text-lg">Wettbewerbsnachteil durch Ineffizienz</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border-2 border-red-400 rounded-full flex items-center justify-center shadow-lg shadow-red-400/50">
                      <X size={16} className="text-red-400" />
                    </div>
                    <span className="text-gray-300 text-lg">Hohe Personalkosten für repetitive Tätigkeiten</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border-2 border-red-400 rounded-full flex items-center justify-center shadow-lg shadow-red-400/50">
                      <X size={16} className="text-red-400" />
                    </div>
                    <span className="text-gray-300 text-lg">Verpasste Chancen durch Zeitmangel</span>
                  </div>
                </div>
              </div>

              {/* Nachher - Rechts - Slide In mit grauem Hintergrund */}
              <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center relative"
              >
                {/* Grauer Hintergrund-Block mit Neon-Grün Rand */}
                <div className="absolute inset-0 bg-gray-800/30 border-2 border-green-400 rounded-2xl -m-4 shadow-lg shadow-green-400/50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Nachher
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                        <Check size={16} className="text-green-400" />
                      </div>
                      <span className="text-gray-300 text-lg">80% Zeitersparnis durch Automatisierung</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                        <Check size={16} className="text-green-400" />
                      </div>
                      <span className="text-gray-300 text-lg">Team fokussiert auf strategische Aufgaben</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                        <Check size={16} className="text-green-400" />
                      </div>
                      <span className="text-gray-300 text-lg">Minimale Fehler durch standardisierte Prozesse</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                        <Check size={16} className="text-green-400" />
                      </div>
                      <span className="text-gray-300 text-lg">Wettbewerbsvorteil durch Effizienz</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                        <Check size={16} className="text-green-400" />
                      </div>
                      <span className="text-gray-300 text-lg">Reduzierte Kosten und höhere Produktivität</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                        <Check size={16} className="text-green-400" />
                      </div>
                      <span className="text-gray-300 text-lg">Mehr Zeit für Wachstum und Innovation</span>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
