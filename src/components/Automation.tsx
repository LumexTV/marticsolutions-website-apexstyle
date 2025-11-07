import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, FileText, Calendar, Workflow } from 'lucide-react';

const automationFeatures = [
  {
    icon: BarChart3,
    title: 'Skaliert wiederkehrende Aufgaben zuverlässig',
    description: 'Zuverlässig im Hintergrund ausgeführt – entlastet von Routinetätigkeiten und schafft Zeit für Kernaufgaben.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: FileText,
    title: 'KI-Agenten für Dokumente',
    description: 'Automatische Erstellung von Angeboten, Rechnungen und Berichten – maßgeschneidert für Ihr Unternehmen.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Calendar,
    title: 'Smarte Terminplanung',
    description: 'Kundentermine und interne Abstimmungen koordiniert – transparent und verlässlich.',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    icon: Workflow,
    title: 'Automatisierte Workflows',
    description: 'Routineaufgaben standardisiert abbilden – konsistente Abläufe und weniger Fehlerquellen.',
    color: 'from-blue-400 to-cyan-400'
  }
];

const Automation = () => {
  return (
    <section id="automatisierung" className="py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4">
            Unsere Lösungen –{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Ihre Zeitersparnis</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Entdecken Sie, wie KI-Automatisierung Ihr Unternehmen 
            effizienter und profitabler macht.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-xl hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 break-words">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-500/30 shadow-xl text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400">
              Mehr Zeit für echte Arbeit
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              Während die KI Ihre Büroarbeit erledigt, konzentrieren Sie sich 
              auf das, was Sie am besten können – Ihr Kerngeschäft.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 sm:px-8 py-3 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm sm:text-base shadow-lg"
            >
              Kostenlose Erstberatung
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Automation;