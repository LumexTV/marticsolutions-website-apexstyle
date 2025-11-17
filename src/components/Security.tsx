import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Lock, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'DSGVO-konform & Hosting in Deutschland',
    description: 'Alle Daten werden ausschließlich in deutschen Rechenzentren gespeichert und verarbeitet.',
    highlight: 'Made in Germany'
  },
  {
    icon: Lock,
    title: 'Ihre Daten bleiben in Ihrer Hand',
    description: 'Sie behalten die volle Kontrolle über Ihre Unternehmensdaten. Keine Weitergabe an Dritte.',
    highlight: '100% Datenschutz'
  },
  {
    icon: Server,
    title: 'Keine versteckten Cloud-Abhängigkeiten',
    description: 'Transparente Infrastruktur ohne versteckte Verbindungen zu ausländischen Cloud-Anbietern.',
    highlight: 'Vollständig transparent'
  }
];

const certifications = [
  'DSGVO-konform'
];

const Security = () => {
  return (
    <section id="sicherheit" className="py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4">
            Sicherheit &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">Datenschutz</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Vertrauen ist die Basis jeder Geschäftsbeziehung. Deshalb setzen 
            wir auf höchste Sicherheitsstandards und transparente Prozesse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-cyan-400" size={32} />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-400 text-black text-sm font-bold px-3 py-1 rounded-full shadow-lg shadow-green-400/25">
                    {feature.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 break-words">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <Shield className="text-cyan-400 mx-auto mb-4" size={48} />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400">
              Ihr Vertrauen ist unser Auftrag
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              Wir entwickeln sichere Software-Lösungen für deutsche Unternehmen. 
              Ihre Daten sind bei uns in den besten Händen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;