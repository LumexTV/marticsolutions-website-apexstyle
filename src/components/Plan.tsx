import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PhoneCall, Lightbulb, Zap, CheckCircle2 } from 'lucide-react';

const Plan: React.FC = () => {
  return (
    <section id="plan" className="py-20 bg-white relative">
      {/* Helle Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-light-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="text-brand-light-blue">Lösungen</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
            className="text-left"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full min-h-[220px] transition-all duration-300 hover:border-brand-light-blue hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center">
                  <TrendingUp className="text-brand-light-blue" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Vertriebsautomatisierung</h3>
                  <p className="text-gray-700 mb-4">Transparente, skalierbare Vertriebsprozesse – weniger manuelle Arbeit, mehr Fokus auf Abschlüsse.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Qualifizierte Leads schneller weiterleiten</li>
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Follow-ups und Terminierungen automatisieren</li>
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Pipeline-Transparenz verbessern</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 2: KI Telefonassistenten */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full min-h-[220px] transition-all duration-300 hover:border-brand-light-blue hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center">
                  <PhoneCall className="text-brand-light-blue" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">KI‑Telefonassistenten</h3>
                  <p className="text-gray-700 mb-4">Professionelle Gesprächsannahme rund um die Uhr – konsistent, hilfsbereit und markenkonform.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> 24/7 erreichbare Anrufannahme</li>
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Qualifizierte Weiterleitung und Terminbuchung</li>
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Einheitliche Gesprächsqualität</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 3: Digitalisierungsberatung */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full min-h-[220px] transition-all duration-300 hover:border-brand-light-blue hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center">
                  <Lightbulb className="text-brand-light-blue" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Digitalisierungsberatung</h3>
                  <p className="text-gray-700 mb-4">Pragmatische Roadmaps statt Buzzwords – passgenau für Ihre Abläufe und Ziele.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Prozesse aufnehmen und priorisieren</li>
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Roadmap mit schnellen, messbaren Ergebnissen</li>
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Toolauswahl und Implementierung begleiten</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 4: Prozess Automatisierung */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-left"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full min-h-[220px] transition-all duration-300 hover:border-brand-light-blue hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center">
                  <Zap className="text-brand-light-blue" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Prozessautomatisierung</h3>
                  <p className="text-gray-700 mb-4">Wiederkehrende Aufgaben zuverlässig automatisieren – konsistente Qualität und weniger Fehlerquellen.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Repetitive Aufgaben zuverlässig ausführen</li>
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Fehler reduzieren und Qualität sichern</li>
                    <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="text-brand-light-blue mt-0.5" size={18} /> Skalierbar und wartbar aufgebaut</li>
                  </ul>
                </div>
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
          <div className="bg-gradient-to-r from-brand-light-blue/10 to-blue-500/10 border border-brand-light-blue/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bereit für Ihre digitale Transformation?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, wie wir Ihr Unternehmen optimieren können.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-light-blue rounded-full"></div>
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-light-blue rounded-full"></div>
                <span>Keine Verpflichtungen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-light-blue rounded-full"></div>
                <span>Sofortiger Start möglich</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-brand-light-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-blue transition-all duration-300 shadow-xl"
            >
              Kostenlose Erstberatung
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Plan;
