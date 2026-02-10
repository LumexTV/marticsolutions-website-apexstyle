import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    q: "Wie schnell sind erste Ergebnisse sichtbar?",
    a: "Geschwindigkeit ist unser Markenzeichen. Während klassische Agenturen oft Monate für Konzepte brauchen, gehen unsere Systeme meist innerhalb von 14 bis 21 Tagen live. Sie sehen also oft noch im selben Monat die ersten messbaren Resultate."
  },
  {
    q: "Kann ich meine vorhandenen Tools weiter nutzen?",
    a: 'In 95 % der Fälle: Ja. Wir bauen keine neuen "Insel-Lösungen", sondern verbinden Ihre bestehende Software (CRM, E-Mail, ERP) intelligent miteinander. Wir ersetzen Ihre Tools nur dann, wenn es einen massiven strategischen Vorteil bringt.'
  },
  {
    q: "Welche Prozesse automatisieren Sie konkret?",
    a: "Wir fokussieren uns auf repetitive Zeitfresser: Lead-Recherche & Qualifizierung, CRM-Pflege, Kunden-Onboarding, Rechnungsstellung und First-Level-Support. Kurz gesagt: Alles, was manuell Zeit kostet, aber keine strategische Entscheidung erfordert."
  },
  {
    q: "Lohnt sich das Investment für mich wirklich?",
    a: "KI-Automatisierung ist kein Kostenfaktor, sondern ein Rendite-Hebel. Unsere Kunden berichten in der Regel von einer Amortisation (ROI) innerhalb von 3 bis 6 Monaten – durch gesparte Arbeitszeit und gleichzeitig steigende Abschlussquoten."
  },
  {
    q: "Brauche ich technisches Know-how?",
    a: 'Nein. Wir liefern "schlüsselfertige" Infrastruktur. Wir übernehmen Einrichtung, Hosting und Wartung. Ihr Team muss lediglich wissen, wie man die gewonnenen Leads oder Ergebnisse nutzt – und dafür erhalten Sie eine klare Einweisung.'
  },
  {
    q: "Wie sicher sind meine Unternehmensdaten?",
    a: "Sicherheit ist nicht verhandelbar. Wir arbeiten streng DSGVO-konform, nutzen Verschlüsselung auf Enterprise-Niveau und setzen auf isolierte Server-Umgebungen. Ihre Daten trainieren keine öffentlichen KI-Modelle."
  },
  {
    q: "Arbeiten Sie auch mit unserer internen IT zusammen?",
    a: 'Absolut. Wir sehen uns als "Spezial-Einheit", die Ihre interne IT entlastet. Wir übernehmen die komplexe Automatisierungs-Architektur, damit sich Ihr Tech-Team wieder auf Kernaufgaben und Strategie konzentrieren kann.'
  },
  {
    q: "Was passiert nach der Implementierung?",
    a: "Wir lassen Sie nicht allein. Auch nach dem Go-Live überwachen wir die Systeme, führen Updates durch und optimieren die Performance. Wir verstehen uns als langfristiger Partner für Ihre Skalierung."
  }
];

const AccordionItem = ({ item, isOpen, onClick, index }: { item: typeof faqData[0]; isOpen: boolean; onClick: () => void; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div
      className={`bg-white rounded-xl border transition-all duration-300 cursor-pointer group ${isOpen
        ? 'border-apex-blue/30 shadow-md shadow-apex-blue/5'
        : 'border-gray-100 shadow-sm hover:border-apex-blue/20 hover:shadow-md'
        }`}
      onClick={onClick}
    >
      {/* Question */}
      <div className="flex items-center justify-between p-6">
        <h3 className="text-lg font-medium text-apex-navy pr-8 font-outfit">{item.q}</h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
          ? 'bg-apex-blue/10 text-apex-blue rotate-0'
          : 'bg-gray-50 text-gray-400 group-hover:bg-apex-blue/5 group-hover:text-apex-blue/60'
          }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </div>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px bg-gray-100 mb-5" />
              <p className="text-gray-600 leading-relaxed font-outfit">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-transparent font-outfit">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-playfair text-apex-navy mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-apex-gray text-lg">
            Alles, was Sie vor dem ersten Gespräch wissen sollten.
          </p>
        </motion.div>

        {/* Accordion Grid: 4 rows × 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;