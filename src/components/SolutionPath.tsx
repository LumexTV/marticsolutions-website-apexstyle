
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Cog, Rocket, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SolutionPath = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const steps = [
        {
            icon: Search,
            title: "Prozess-Analyse",
            subtitle: "Der Deep Dive",
            desc: "Wir identifizieren Ihre teuersten Arbeitsabläufe. Gemeinsam analysieren wir Ihre Workflows, um Zeit- und Margenfresser zu eliminieren. Das Ergebnis: Eine glasklare Roadmap zur Automatisierung.",
        },
        {
            icon: Cog,
            title: "Implementierung",
            subtitle: "Der Bau der Maschine",
            desc: "Wir bauen Ihre digitale Infrastruktur mit modernster KI. Die Lösungen werden nahtlos integriert, sodass Ihr Team ab Tag 1 entlastet wird – ohne den laufenden Betrieb zu stören.",
        },
        {
            icon: Rocket,
            title: "Autopilot",
            subtitle: "Der Hebel",
            desc: "Wir schalten auf Wachstum und optimieren für maximale Profitabilität. Skalieren Sie Kunden auf Knopfdruck, ohne dass Ihr Zeitaufwand wächst. Ihr Unternehmen arbeitet jetzt für Sie.",
        }
    ];

    return (
        <section className="bg-transparent section-padding relative" id="system">
            <div className="text-center max-w-3xl mx-auto mb-32">
                <span className="text-apex-blue font-semibold tracking-wide uppercase text-sm mb-2 block">Unser Prozess</span>
                <h2 className="text-3xl lg:text-5xl font-bold text-apex-navy mb-6">
                    In 3 Schritten vom Stress zu mehr Umsatz
                </h2>
                <p className="text-apex-gray text-lg">
                    Mit ersten Ergebnissen innerhalb weniger Wochen.
                </p>
            </div>

            <div ref={containerRef} className="relative max-w-6xl mx-auto pb-20">
                {/* Vertical Line Background (Gray) */}
                <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-1 bg-apex-border/30 -z-20 md:-translate-x-1/2 rounded-full" />

                {/* Vertical Line Progress (Blue Gradient) */}
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-apex-blue via-apex-cyan to-apex-blue -z-10 md:-translate-x-1/2 origin-top rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                />

                {/* Arrow Head - Mobile */}
                <motion.div
                    style={{ top: useTransform(scrollYProgress, (value) => `${value * 100}%`) }}
                    className="absolute left-[26px] w-8 h-8 -mt-3 z-0 text-apex-blue md:hidden"
                >
                    <ChevronDown className="w-full h-full drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" strokeWidth={3} />
                </motion.div>

                {/* Arrow Head - Desktop */}
                <motion.div
                    style={{ top: useTransform(scrollYProgress, (value) => `${value * 100}%`) }}
                    className="absolute left-1/2 w-8 h-8 -translate-x-1/2 ml-[2px] -mt-3 z-0 text-apex-blue hidden md:block"
                >
                    <ChevronDown className="w-full h-full drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" strokeWidth={3} />
                </motion.div>

                <div className="space-y-40">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`relative flex flex-col md:flex-row gap-16 lg:gap-24 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Marker on Timeline */}
                            <div className="flex-shrink-0 z-10 relative">
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-20 h-20 rounded-full bg-apex-navy flex items-center justify-center border-[6px] border-white shadow-2xl relative"
                                >
                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-apex-blue text-white font-bold flex items-center justify-center text-sm shadow-lg border-2 border-white z-20">
                                        {idx + 1}
                                    </div>

                                    <step.icon className="w-8 h-8 text-white relative z-10" />

                                    {/* Pulse effect behind marker */}
                                    <div className="absolute inset-0 rounded-full bg-apex-blue/40 animate-ping -z-10 opacity-75" />
                                </motion.div>
                            </div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className={`flex-1 w-full md:w-auto ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                            >
                                <div className="bg-white/70 backdrop-blur-xl p-10 lg:p-12 rounded-[2rem] border border-apex-cyan/30 shadow-xl shadow-apex-cyan/5 hover:shadow-[0_20px_50px_rgba(0,212,255,0.15)] hover:border-apex-cyan/50 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group">
                                    {/* Glass Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-apex-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <span className="text-apex-blue font-bold tracking-widest uppercase text-xs mb-3 block opacity-80">{step.subtitle}</span>
                                    <h3 className="text-2xl lg:text-4xl font-bold text-apex-navy mb-5 relative z-10">{step.title}</h3>
                                    <p className="text-apex-gray text-lg lg:text-xl leading-relaxed relative z-10">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </div>
                    ))}
                </div>

            </div>

            {/* Erstgespräch CTA after Timeline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mt-20"
            >
                <button
                    onClick={() => navigate('/erstgespraech')}
                    className="bg-white/40 backdrop-blur-xl border border-apex-cyan/40 text-apex-navy font-bold py-4 px-10 rounded-full shadow-lg shadow-apex-cyan/20 hover:bg-white/60 hover:border-apex-cyan/60 hover:shadow-xl hover:shadow-apex-cyan/30 transition-all"
                >
                    Jetzt Erstgespräch buchen
                </button>
            </motion.div>
        </section>
    );
};

export default SolutionPath;
