import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, TrendingUp } from 'lucide-react';

const Character: React.FC = () => {
  return (
    <section id="character" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sie sind der <span className="text-cyan-400">Held</span> Ihrer Geschichte
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sie haben eine Mission: Ihr Unternehmen zu automatisieren und zu digitalisieren. 
            Wir sind hier, um Ihnen dabei zu helfen, diese Herausforderung zu meistern.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6 mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Ihre Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              Sie sehen ein Unternehmen, das effizient, modern und zukunftssicher ist. 
              Ein Unternehmen, das durch Automatisierung Zeit spart und sich auf das Wesentliche konzentrieren kann.
            </p>
          </motion.div>

          {/* Herausforderung */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6 mx-auto">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Ihre Herausforderung</h3>
            <p className="text-gray-300 leading-relaxed">
              Sie stehen vor der Aufgabe, komplexe Prozesse zu verstehen, die richtigen Lösungen zu finden 
              und alles erfolgreich zu implementieren – ohne dabei den Überblick zu verlieren.
            </p>
          </motion.div>

          {/* Ziel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Ihr Ziel</h3>
            <p className="text-gray-300 leading-relaxed">
              Sie wollen ein automatisiertes, digitales Unternehmen, das Zeit spart, 
              Kosten reduziert und Ihnen mehr Freiraum für strategische Entscheidungen gibt.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            Sie sind bereit für den nächsten Schritt. Lassen Sie uns gemeinsam Ihre Vision verwirklichen.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
          >
            Jetzt Ihre Geschichte beginnen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Character;
