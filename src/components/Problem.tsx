import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Clock, TrendingDown, DollarSign, AlertTriangle, Zap, Target, TrendingUp, Smile } from 'lucide-react';

const Problem: React.FC = () => {

  return (
    <section id="problem" className="pt-56 pb-20 bg-white relative">
      {/* Helle Hintergrund-Effekte */}
      <div className="absolute inset-0" aria-hidden="true" role="presentation">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Das <span className="text-red-500">Problem</span> kennen wir alle
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Während Sie wertvolle Zeit mit wiederkehrenden Aufgaben verbringen, 
            zieht Ihre Konkurrenz an Ihnen vorbei.
          </p>
        </motion.div>

        {/* Vorher/Nachher Vergleich - Modern & Futuristisch */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
              {/* Vorher - Links - Statisch */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Vorher
                </h3>
                <div className="space-y-4">
                  {[
                      { icon: Clock, text: '8h/Woche verschwendet', subtext: 'mit Routineaufgaben' },
                      { icon: TrendingDown, text: 'Konkurrenz zieht vorbei', subtext: 'durch Effizienz' },
                      { icon: DollarSign, text: 'Versteckte Kosten', subtext: 'durch Ineffizienz' },
                      { icon: AlertTriangle, text: 'Team überlastet', subtext: 'mit wiederkehrenden Aufgaben' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-4 bg-red-50/50 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <div className="w-8 h-8 flex items-center justify-center text-red-500 mr-4">
                          <item.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{item.text}</div>
                          <div className="text-sm text-gray-500">{item.subtext}</div>
                        </div>
                        <div className="text-red-500 text-xl font-bold ml-4">✗</div>
                      </motion.div>
                    ))}
                  </div>
              </div>

              {/* Nachher - Rechts - Slide In mit hellem Hintergrund */}
              <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center relative"
              >
                {/* Heller Hintergrund-Block mit Grün Rand */}
                <div className="absolute inset-0 bg-gray-50/50 border-2 border-green-500 rounded-2xl -m-4 shadow-lg shadow-green-500/20"></div>
                
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                    Nachher
                  </h3>
                  <div className="space-y-6">
                  <div className="space-y-4">
                  {[
                      { icon: Zap, text: '80% Zeitersparnis', subtext: 'durch Automatisierung' },
                      { icon: Target, text: 'Team fokussiert', subtext: 'auf Strategie' },
                      { icon: TrendingUp, text: 'Kosteneinsparungen', subtext: 'durch Automatisierung' },
                      { icon: Smile, text: 'Mitarbeiter zufrieden', subtext: 'mit sinnvollen Aufgaben' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-4 bg-green-50/50 rounded-lg hover:bg-green-50 transition-all"
                      >
                        <div className="w-8 h-8 flex items-center justify-center text-green-500 mr-4">
                          <item.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{item.text}</div>
                          <div className="text-sm text-gray-500">{item.subtext}</div>
                        </div>
                        <div className="text-green-500 text-xl font-bold ml-4">✓</div>
                      </motion.div>
                    ))}
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
