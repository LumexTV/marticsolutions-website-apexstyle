import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  q: string;
  a: React.ReactNode;
  aText: string; // Für JSON-LD
};

const faqs: FAQItem[] = [
  {
    q: 'Was macht Martic Solutions im Bereich KI‑Automatisierung genau?',
    a: (
      <p>
        Wir planen und implementieren KI‑gestützte Prozessautomatisierung in Ihr Unternehmen – von der Analyse bis zum Go‑Live.
        Im Fokus: Backoffice‑Workflows, <strong>Speed‑to‑Lead</strong> im Vertrieb und stabile, <strong>DSGVO‑sensible</strong> Lösungen. Alles, was Sie vom Skalieren abhält und unnötig Zeit frisst.
      </p>
    ),
    aText:
      'Wir planen und implementieren KI‑gestützte Prozessautomatisierung in Ihr Unternehmen – von der Analyse bis zum Go‑Live. Fokus: Backoffice‑Workflows, Speed‑to‑Lead im Vertrieb und stabile, DSGVO‑sensible Lösungen. Alles, was Sie vom Skalieren abhält und unnötig Zeit frisst.',
  },
  {
    q: 'Für welche Unternehmen ist KI‑Automatisierung mit n8n geeignet?',
    a: (
      <p>
        Für <strong>KMU, Agenturen und wachsende Teams</strong> in DACH, die wiederkehrende Aufgaben wie E‑Mail, Dokumente, CRM und Support
        automatisieren und Ihre Vertriebsprozesse beschleunigen wollen – ohne monatelange Großprojekte.
      </p>
    ),
    aText:
      'Für KMU, Agenturen und wachsende Teams in DACH, die wiederkehrende Aufgaben wie E‑Mail, Dokumente, CRM und Support automatisieren und Vertriebsprozesse beschleunigen wollen – ohne monatelange Großprojekte.',
  },
  {
    q: 'Welche Use Cases automatisieren Sie am häufigsten?',
    a: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Backoffice: E‑Mail‑Triage, Dokument‑/Rechnungsextraktion, automatische Ablage, Reporting</li>
        <li>Vertrieb: Lead‑Intake, Lead‑Scoring, CRM‑Writeback, Speed‑to‑Lead, Follow‑up‑Sequenzen, Terminierung</li>
        <li>Social Media: Content Planung, gezielte Analyse der Konkurrenz, profesionelle Content-Erstellung, automatisierte Postings</li>
      </ul>
    ),
    aText:
      'Backoffice: E‑Mail‑Triage, Dokument-/Rechnungsextraktion, Ablage, Reporting; Social Media: Content‑Planung, gezielte Analyse der Konkurrenz, professionelle Content‑Erstellung, automatisierte Postings.',
  },
  {
    q: 'Wie läuft ein Automatisierungsprojekt ab, von KI‑Beratung bis Implementierung?',
    a: (
      <ol className="list-decimal pl-6 space-y-1">
        <li>Kostenloses Erstgespräch: Ziele, Pain Points</li>
        <li>Workshop: Workshop in dem wir Ihre größten Bottlenecks ausarbeiten und einen Fahrplan für die Zukunft kreieren</li>
        <li>Umsetzung aller geplanten Projekte, Stück für Stück, damit Sie sofort profitieren</li>
        <li>KPI‑Messung, Doku, Handover; optional kontinuierliche Verbesserung</li>
      </ol>
    ),
    aText:
      'Erstgespräch: Ziele und Pain Points; Workshop: wir arbeiten Ihre größten Bottlenecks aus und erstellen den Fahrplan; Umsetzung aller geplanten Projekte Stück für Stück, damit Sie sofort profitieren; KPI‑Messung, Doku, Handover; optional kontinuierliche Verbesserung.',
  },
  {
    q: 'Welche Ergebnisse sind realistisch mit KI‑/Prozessautomatisierung?',
    a: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Deutliche Zeitersparnis bei repetitiven Aufgaben, je nach Prozess</li>
        <li>Schnellere Lead‑Response (Speed‑to‑Lead) → mehr qualifizierte Termine</li>
        <li>Geringere Fehlerrate, stabilere Prozesse dank Monitoring/Alerts</li>
        <li>Umsatzsteigerung durch unsere ausgeklügelten Lead-Gewinnungssysteme und Social Media Posts</li>
      </ul>
    ),
    aText:
      'Zeitersparnis bei repetitiven Aufgaben, je nach Prozess; schnellere Lead‑Response (Speed‑to‑Lead); geringere Fehlerrate und stabilere Prozesse dank Monitoring/Alerts. Umsatzsteigerung durch unsere ausgeklügelten Lead-Gewinnungssysteme und Social Media Posts.',
  },
  {
    q: 'Wie messen Sie den Erfolg der Automatisierung?',
    a: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Zeit pro Vorgang, vor und nach</li>
        <li>Speed‑to‑Lead, Median und Erstkontakt</li>
        <li>Fehlerrate/Nachbearbeitungen</li>
        <li>Optional: Terminrate, No‑Show‑Rate, Tickets‑Durchlaufzeit</li>
      </ul>
    ),
    aText:
      'Zeit pro Vorgang, vor und nach; Speed‑to‑Lead, Median und Erstkontakt; Fehlerrate/Nachbearbeitungen; optional Terminrate/No‑Show‑Rate und Tickets‑Durchlaufzeit.',
  },
  {
    q: 'Ist eure KI‑Automatisierung DSGVO‑konform?',
    a: (
      <p>
        Ja, wir arbeiten <strong>DSGVO‑sensibel</strong>: Datensparsamkeit, dokumentierte Datenflüsse, Secrets‑Management, rollenbasierte Zugriffe. Hosting auf speziell eingerichteten Servern. Keine Rechtsberatung – wir setzen Ihre AVV/Vorgaben um.
      </p>
    ),
    aText:
      'Ja. DSGVO‑sensibel: Datensparsamkeit, dokumentierte Datenflüsse, Secrets‑Management, Rollenrechte. Hosting auf speziell eingerichteten Servern. Keine Rechtsberatung – Umsetzung gemäß AVV/Vorgaben.',
  },
  {
    q: 'Welche Vorteile hat n8n gegenüber anderen Tools, z. B. Zapier oder Make?',
    a: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Self‑Hosting möglich, DSGVO und Datensouveränität</li>
        <li>Hohe Flexibilität/Skalierbarkeit, tiefe Integrationen</li>
        <li>Produktionsreife durch Reliability/Observability‑Muster</li>
        <li>Kostenkontrolle bei wachsender Nutzung</li>
      </ul>
    ),
    aText:
      'Self‑Hosting, DSGVO und Datensouveränität; hohe Flexibilität/Skalierbarkeit; tiefe Integrationen; produktionsreife Reliability/Observability‑Muster; Kostenkontrolle.',
  },
  {
    q: 'Wie buche ich die kostenlose Erstberatung?',
    a: (
      <p>
        Über das <a href="#contact" className="text-brand-light-blue hover:underline">Kontaktformular</a>. Wir melden uns binnen 24h mit Terminvorschlägen.
      </p>
    ),
    aText:
      'Über das Kontaktformular. Wir melden uns binnen 24h mit Terminvorschlägen.',
  },
];

const faqData = [
    {
        question: "Was genau macht Martic Solutions?",
        answer: "Wir sind darauf spezialisiert, durch maßgeschneiderte Automatisierungslösungen die Effizienz von Unternehmen zu steigern. Wir analysieren Ihre wiederkehrenden Aufgaben und entwickeln Systeme, die diese automatisch, zuverlässig und skalierbar für Sie erledigen."
    },
    {
        question: "Für wen sind Ihre Dienstleistungen gedacht?",
        answer: "Unsere Dienstleistungen richten sich an kleine und mittelständische Unternehmen (KMU), die ihre internen Prozesse optimieren, manuelle Fehler reduzieren und ihr Team von repetitiven Aufgaben entlasten möchten, um sich auf wertschöpfende Tätigkeiten zu konzentrieren."
    },
    {
        question: "Welche konkreten Ergebnisse kann ich erwarten?",
        answer: "Sie können eine signifikante Reduzierung des manuellen Aufwands, eine schnellere Abwicklung von Prozessen, eine Minimierung von Fehlern und eine bessere Skalierbarkeit Ihrer Abläufe erwarten. Dadurch werden Ressourcen frei, die Sie für strategisches Wachstum nutzen können."
    },
    {
        question: "Wie lange dauert es, bis ich Ergebnisse sehe?",
        answer: "Die ersten Ergebnisse sind oft schon innerhalb weniger Wochen sichtbar, abhängig von der Komplexität der zu automatisierenden Prozesse. In unserer Erstberatung geben wir Ihnen eine realistische Einschätzung des Zeitrahmens für Ihr spezifisches Projekt."
    },
    {
        question: "Was kostet die Zusammenarbeit?",
        answer: "Die Kosten sind projektbasiert und richten sich nach dem Umfang und der Komplexität der Automatisierung. Wir bieten eine kostenlose Erstberatung an, um Ihre Anforderungen zu verstehen und Ihnen ein transparentes, unverbindliches Angebot zu unterbreiten."
    },
    {
        question: "Wie schützen Sie meine Unternehmensdaten?",
        answer: "Datenschutz hat für uns höchste Priorität. Wir setzen auf sichere, bewährte Technologien wie n8n, die eine Datenverarbeitung auf eigenen Servern oder in zertifizierten deutschen Rechenzentren ermöglichen. Alle Maßnahmen entsprechen den DSGVO-Richtlinien."
    },
    {
        question: "Bieten Sie auch individuelle Lösungen an?",
        answer: "Ja, absolut. Jede unserer Lösungen ist maßgeschneidert. Wir beginnen mit einer gründlichen Analyse Ihrer bestehenden Prozesse, um eine Automatisierung zu entwickeln, die perfekt auf Ihre individuellen Bedürfnisse und Systemlandschaften zugeschnitten ist."
    },
    {
        question: "Wie beginnen wir die Zusammenarbeit?",
        answer: "Der erste Schritt ist ein kostenloses und unverbindliches Beratungsgespräch. Buchen Sie einfach einen Termin über unser Kontaktformular. In diesem Gespräch klären wir Ihre Ziele und prüfen, wie wir Sie am besten unterstützen können."
    },
    {
        question: "Warum sollte ich mich für n8n und nicht für eine andere Plattform entscheiden?",
        answer: "n8n ist eine extrem flexible und erweiterbare Open-Source-Plattform. Sie ermöglicht eine hohe Anpassbarkeit, ist kosteneffizienter als viele Konkurrenzprodukte und gibt Ihnen die volle Kontrolle über Ihre Daten, da sie selbst gehostet werden kann."
    }
];

const AccordionItem = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 dark:text-gray-100 focus:outline-none"
            aria-expanded={isOpen}
        >
            <span>{item.question}</span>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <ChevronDown className="w-6 h-6 text-blue-500" />
            </motion.div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    role="region"
                    aria-labelledby="faq-question"
                >
                    <div className="pt-4 pb-2 text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-gray-800 p-4 rounded-lg mt-2">
                        {item.answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.aText,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-brand-light-blue/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Antworten auf die wichtigsten Fragen zu KI-Automatisierung, n8n und unserer Zusammenarbeit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <dl className="space-y-5">
            {faqs.map((item, idx) => {
              const isOpen = openIndexes.includes(idx);
              const regionId = `faq-panel-${idx}`;
              return (
                <div key={idx} className="border border-gray-200/80 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-b from-white to-blue-50 backdrop-blur-sm">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={regionId}
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light-blue focus-visible:ring-offset-2 rounded-xl group"
                  >
                    <dt className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">{item.q}</dt>
                    <ChevronDown
                      className={`text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      size={22}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        id={regionId}
                        role="region"
                        initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                        animate={{ height: 'auto', opacity: 1, paddingTop: '0.5rem', paddingBottom: '1.5rem' }}
                        exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-6 text-gray-700 leading-relaxed overflow-hidden bg-blue-50 rounded-b-xl border-t border-blue-100"
                      >
                        <div className="prose max-w-none">
                          {item.a}
                        </div>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </dl>
        </motion.div>

        <div className="text-center mt-16">
          <a href="#contact" className="inline-block bg-brand-light-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Jetzt kostenloses Potenzialgespräch buchen
          </a>
        </div>

        {/* JSON-LD für FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </section>
  );
};

export default FAQ;