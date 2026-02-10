
import { motion } from 'framer-motion';
import { Cog, Users, Bot } from 'lucide-react';

const CoreServices = () => {
    const services = [
        {
            icon: Cog,
            title: "Prozess-Automatisierungen",
            description: "Wir eliminieren manuelle, wiederkehrende Aufgaben – damit Ihr Team sich auf wertschöpfende Arbeit konzentrieren kann. Weniger Chaos, mehr Fokus.",
            position: "top-left"
        },
        {
            icon: Users,
            title: "B2B Lead-Generierung",
            description: "Wir entwickeln skalierbare Systeme, die passende Accounts identifizieren und qualifizieren. Verifizierte Daten, vorhersehbares Umsatzwachstum.",
            position: "top-right"
        },
        {
            icon: Bot,
            title: "KI-Mitarbeiter",
            description: "Ihre digitale Belegschaft: 24/7 Mitarbeiter, die Geschäftstätigkeiten im großen Umfang übernehmen. Schnellere Ausführung, niedrigere Kosten – ohne zusätzliche Mitarbeiter.",
            position: "bottom"
        }
    ];

    return (
        <section className="bg-transparent section-padding relative overflow-hidden">
            {/* Background Gradient Circles - Moved Down */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-24">
                {/* Animated Outer Ring - Bigger */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[650px] h-[650px]"
                >
                    <svg viewBox="0 0 650 650" className="w-full h-full">
                        <defs>
                            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00d4ff" />
                                <stop offset="50%" stopColor="#0066ff" />
                                <stop offset="100%" stopColor="#00d4ff" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="325"
                            cy="325"
                            r="315"
                            fill="none"
                            stroke="url(#neonGradient)"
                            strokeWidth="3"
                            strokeDasharray="40 15"
                            opacity="0.6"
                        />
                    </svg>
                </motion.div>

                {/* Static Inner Ring - Bigger */}
                <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-apex-cyan/20" />

                {/* Center Glow - Bigger */}
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-br from-apex-cyan/25 to-apex-blue/15 blur-3xl"
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold text-apex-navy mb-4">
                        Kernangebote
                    </h2>
                    <p className="text-apex-gray text-lg max-w-2xl mx-auto">
                        Was wir für Ihr Unternehmen bauen.
                    </p>
                </motion.div>

                {/* Service Circular Layout - 3 cards at 120° intervals */}
                {/* Mobile Layout - Stacked Cards */}
                <div className="lg:hidden space-y-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="group text-left bg-gradient-to-br from-white/70 to-apex-cyan/5 backdrop-blur-2xl rounded-2xl p-6 border border-apex-cyan/30 shadow-xl shadow-apex-cyan/5 hover:shadow-2xl hover:shadow-apex-cyan/20 hover:border-apex-cyan/50 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-apex-blue to-apex-cyan flex items-center justify-center mb-4 shadow-lg shadow-apex-cyan/40 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-apex-navy mb-2">{service.title}</h3>
                                <p className="text-apex-gray leading-relaxed text-sm">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Layout - Circular */}
                <div className="relative h-[600px] w-full max-w-4xl mx-auto hidden lg:flex items-center justify-center">

                    {/* Center Faded Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="absolute z-0"
                    >
                        <img
                            src="/images/blacklogog_nobg.png"
                            alt="Martic Solutions Logo"
                            className="w-48 h-48 object-contain"
                        />
                    </motion.div>

                    {/* Service Cards Container - using grid for better positioning */}
                    <div className="absolute inset-0 grid grid-cols-3 gap-8 items-center">

                        {/* Left - B2B Leads */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="self-center"
                        >
                            <div className="group text-left bg-gradient-to-br from-white/70 to-apex-cyan/5 backdrop-blur-2xl rounded-2xl p-6 border border-apex-cyan/30 shadow-xl shadow-apex-cyan/5 hover:shadow-2xl hover:shadow-apex-cyan/20 hover:border-apex-cyan/50 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-apex-blue to-apex-cyan flex items-center justify-center mb-4 shadow-lg shadow-apex-cyan/40 group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-apex-navy mb-2">{services[1].title}</h3>
                                <p className="text-apex-gray leading-relaxed text-sm">{services[1].description}</p>
                            </div>
                        </motion.div>

                        {/* Center - Automatisierungen (positioned higher) */}
                        <div className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="-mt-20"
                            >
                                <div className="group text-center bg-gradient-to-br from-white/70 to-apex-cyan/5 backdrop-blur-2xl rounded-2xl p-6 border border-apex-cyan/30 shadow-xl shadow-apex-cyan/5 hover:shadow-2xl hover:shadow-apex-cyan/20 hover:border-apex-cyan/50 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-apex-blue to-apex-cyan flex items-center justify-center mb-4 shadow-lg shadow-apex-cyan/40 mx-auto group-hover:scale-110 transition-transform">
                                        <Cog className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-apex-navy mb-2">{services[0].title}</h3>
                                    <p className="text-apex-gray leading-relaxed text-sm">{services[0].description}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right - KI-Mitarbeiter */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="self-center"
                        >
                            <div className="group text-left bg-gradient-to-br from-white/70 to-apex-cyan/5 backdrop-blur-2xl rounded-2xl p-6 border border-apex-cyan/30 shadow-xl shadow-apex-cyan/5 hover:shadow-2xl hover:shadow-apex-cyan/20 hover:border-apex-cyan/50 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-apex-blue to-apex-cyan flex items-center justify-center mb-4 shadow-lg shadow-apex-cyan/40 group-hover:scale-110 transition-transform">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-apex-navy mb-2">{services[2].title}</h3>
                                <p className="text-apex-gray leading-relaxed text-sm">{services[2].description}</p>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section >
    );
};

export default CoreServices;
