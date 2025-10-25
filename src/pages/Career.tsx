import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Code, TrendingUp, MapPin, Clock, Mail } from 'lucide-react';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobOpenings = [
    {
      id: 'vertriebler',
      title: 'Vertriebler (m/w/d)',
      type: 'Vollzeit',
      location: 'Remote / Hamburg',
      department: 'Sales',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Wir suchen einen motivierten Vertriebler, der unsere KI-Lösungen erfolgreich an Unternehmen vermarktet.',
      responsibilities: [
        'Akquise neuer Kunden im B2B-Bereich',
        'Beratung von Unternehmen bei der Implementierung von KI-Workflows',
        'Entwicklung von Verkaufsstrategien und -prozessen',
        'Pflege bestehender Kundenbeziehungen',
        'Teilnahme an Messen und Networking-Events',
        'Erstellung von Angeboten und Vertragsverhandlungen'
      ],
      requirements: [
        'Erfahrung im B2B-Vertrieb (mind. 2 Jahre)',
        'Kenntnisse im Bereich KI/Automation von Vorteil',
        'Ausgezeichnete Kommunikationsfähigkeiten',
        'Selbstständige und zielorientierte Arbeitsweise',
        'Deutsch und Englisch fließend',
        'Führerschein Klasse B'
      ],
      benefits: [
        'Attraktive Provision und Grundgehalt',
        'Flexible Arbeitszeiten und Remote-Möglichkeiten',
        'Moderne Arbeitsausstattung',
        'Weiterbildungsmöglichkeiten',
        'Team-Events und Incentives',
        'Karriereentwicklungsmöglichkeiten'
      ]
    },
    {
      id: 'ki-entwickler',
      title: 'KI-Entwickler (m/w/d)',
      type: 'Vollzeit',
      location: 'Remote / Hamburg',
      department: 'Development',
      icon: <Code className="w-6 h-6" />,
      description: 'Wir suchen einen erfahrenen KI-Entwickler, der innovative Automationslösungen für unsere Kunden entwickelt.',
      responsibilities: [
        'Entwicklung von KI-Workflows und Automationslösungen',
        'Integration verschiedener APIs und Plattformen',
        'Optimierung bestehender KI-Modelle',
        'Beratung von Kunden bei technischen Implementierungen',
        'Dokumentation und Testing von Lösungen',
        'Weiterentwicklung unserer Produktpalette'
      ],
      requirements: [
        'Studium in Informatik, KI oder ähnlichem Bereich',
        'Erfahrung mit Python, JavaScript/TypeScript',
        'Kenntnisse in Machine Learning und NLP',
        'Erfahrung mit APIs und Webhooks',
        'Kenntnisse in Cloud-Plattformen (AWS, Azure, GCP)',
        'Problemlösungsorientierte Denkweise'
      ],
      benefits: [
        'Competitive Gehaltspaket',
        'Flexible Arbeitszeiten und Remote-Möglichkeiten',
        'Moderne Entwicklungsumgebung',
        'Konferenz-Besuche und Weiterbildung',
        'Innovative Projekte und Technologien',
        'Flache Hierarchien und eigenverantwortliches Arbeiten'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Karriere bei Martic Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Werde Teil unseres Teams und hilf uns dabei, Unternehmen mit innovativen KI-Lösungen zu revolutionieren.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 md:gap-12"
        >
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 md:p-10 shadow-2xl shadow-cyan-500/10 rounded-xl border border-cyan-500/20"
            >
              {/* Job Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    {job.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{job.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {job.department}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.a
                  href={`mailto:karriere@marticsolutions.de?subject=Bewerbung für ${job.title}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Jetzt bewerben
                </motion.a>
              </div>

              {/* Job Description */}
              <div className="mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">{job.description}</p>
              </div>

              {/* Job Details Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Responsibilities */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Aufgaben
                  </h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Anforderungen
                  </h3>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/80 backdrop-blur-sm p-8 shadow-2xl shadow-cyan-500/10 rounded-xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Interesse an einer Zusammenarbeit?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Auch wenn keine passende Stelle dabei ist, freuen wir uns über Initiativbewerbungen von talentierten Menschen, die unsere Vision teilen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:karriere@marticsolutions.de"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Initiativbewerbung
              </motion.a>
              <motion.a
                href="tel:+4917647663929"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                +49 176 47663929
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;
