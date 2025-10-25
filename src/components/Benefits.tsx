import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Smartphone, Settings, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Mehr Umsatz',
    description: 'Durch automatisierte Prozesse und effizientere Abläufe steigern Sie Ihren Umsatz um bis zu 40%.',
    stats: '+40% Umsatz'
  },
  {
    icon: Clock,
    title: '3x Schnellere Projekte',
    description: 'Automatisierte Workflows beschleunigen Ihre Projekte und reduzieren die Bearbeitungszeit drastisch.',
    stats: '3x Schneller'
  },
  {
    icon: Settings,
    title: '50% Weniger Kosten',
    description: 'Durch Automatisierung reduzieren Sie Personalkosten und operative Ausgaben um die Hälfte.',
    stats: '-50% Kosten'
  }
];

const Benefits = () => {
  return (
    <section id="vorteile" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4">
            Warum{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">Martic Solutions?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Wir verstehen die Herausforderungen von Unternehmen und 
            bieten Lösungen, die wirklich funktionieren.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <benefit.icon className="text-cyan-400" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white break-words pr-2">
                        {benefit.title}
                      </h3>
                      <span className="text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 px-2 py-1 sm:px-3 rounded-full flex-shrink-0 self-start shadow-lg shadow-cyan-500/25">
                        {benefit.stats}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;