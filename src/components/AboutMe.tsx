import { motion } from 'framer-motion';
import { ArrowRight, UserCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-transparent section-padding overflow-hidden relative" id="about-me">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full relative"
                    >
                        {/* Decorative Background for Image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-apex-cyan/20 to-apex-blue/20 rounded-3xl transform -rotate-3 scale-105" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 aspect-[4/5] lg:aspect-square">
                            <img
                                src="/images/website_image.webp"
                                alt="Über mich"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 mb-6">
                            <UserCircle2 className="w-4 h-4 text-apex-blue" />
                            <span className="text-sm font-bold tracking-wider text-apex-navy uppercase">Der Kopf hinter dem System</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold text-apex-navy mb-6 leading-tight">
                            Hi, ich bin <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-blue to-apex-cyan">Luka Martic.</span>
                        </h2>

                        <div className="space-y-4 text-lg text-apex-gray mb-8 leading-relaxed">
                            <p>
                                Mein Ursprung liegt in der Beratung und Implementierung von komplexen <strong className="text-apex-navy font-bold">KI-Automatisierungen und Digitalisierungsprozessen</strong> für Unternehmen und Agenturen. Das war mein Hauptgeschäft und ist bis heute meine technische Basis.
                            </p>
                            <p>
                                Der Wendepunkt kam aus eigenem Schmerz: Um Kunden für meine Automatisierungs-Projekte zu gewinnen, verbrachte ich unzählige mühsame Stunden mit manueller Kaltakquise und Lead-Recherche. Also tat ich das, was ich am besten kann, und baute mir ein automatisiertes KI-System zur Leadgenerierung.
                            </p>
                            <p>
                                Das Setup lieferte so extrem passgenaue B2B-Leads, dass in über <strong className="text-apex-navy font-bold">25 umgesetzten KI-Projekten</strong> bald auch meine Kunden genau dieses System haben wollten.
                            </p>
                            <p>
                                Heute verschmelzen diese beiden Welten, Automatisierung und Leadgenerierung, nahtlos miteinander. Mit über <strong className="text-apex-navy font-bold">500.000 gescrapten B2B-Leads</strong> liefern wir dir nicht die fertige Akquise, sondern durch intelligente Prozesse exakt den Rohstoff, den dein Vertrieb braucht: <strong className="text-apex-navy font-bold">perfekt qualifizierte Leads</strong>.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button
                                onClick={() => navigate('/erstgespraech')}
                                className="w-full sm:w-auto bg-apex-navy text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-apex-navy/20 hover:bg-apex-blue hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                            >
                                Lernen wir uns kennen
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            {/* <button
                                onClick={() => navigate('/ueber-mich')}
                                className="w-full sm:w-auto bg-white/50 backdrop-blur-xl border border-apex-navy/10 text-apex-navy font-bold py-4 px-8 rounded-full shadow-sm hover:bg-white/80 hover:shadow-md transition-all"
                            >
                                Meine ganze Story
                            </button> */}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
