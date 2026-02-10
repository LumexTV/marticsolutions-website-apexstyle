
import { motion } from 'framer-motion';
import { TrendingUp, Users, Wallet, ArrowRight, Ban, CheckCircle2, Lock, Target } from 'lucide-react';

const PainPoints = () => {
    const points = [
        {
            icon: TrendingUp,
            title: "Die Skalierungs-Falle",
            problem: "Jeder neue Kunde wird zur Belastung. Ihr Erfolg skaliert aktuell nicht Ihren Profit, sondern nur Ihr operatives Chaos.",
            wish: "Profitables Skalieren ohne Mehraufwand. Ihr Umsatz vervielfacht sich, während Ihr neues System die operative Last übernimmt."
        },
        {
            icon: Lock,
            title: "Gefangen im Hamsterrad",
            problem: "Sie stecken so tief im Tagesgeschäft, dass jede Entscheidung über Ihren Tisch läuft. Sie sind der Flaschenhals.",
            wish: "Endlich wieder AM Unternehmen arbeiten: Sie konzentrieren sich auf Vision und Strategie – das, was Sie wirklich wollen."
        },
        {
            icon: Users,
            title: "Die Experten-Verschwendung",
            problem: "Hochbezahlte Fachkräfte verschwenden Stunden mit 'Copy-Paste'-Workflows statt Strategie.",
            wish: "Ihre Umsätze erhöhen sich automatisch, da ihre Mitarbeiter produktiver sind und sich auf das Wesentliche konzentrieren können."
        },
        {
            icon: Target,
            title: "Die 'Blindflug'-Akquise",
            problem: "Ihr Sales-Team verschwendet 70% der Zeit mit Recherche und Kaltakquise, die zum Scheitern verurteilt ist.",
            wish: "Ihr Vertriebsteam spricht nur noch mit qualifizierten Leads und schließt Deals ab."
        },
        {
            icon: Wallet,
            title: "Der Margen-Killer",
            problem: "Manuelle Prozesse und Fehler verbrennen bei jedem Projekt einen Teil Ihres Gewinns.",
            wish: "Wir senken die operativen Kosten pro Kunde, sodass Ihre Marge mit jedem neuen Abschluss wächst."
        }
    ];

    return (
        <section className="bg-transparent section-padding relative overflow-hidden" id="problem">

            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl lg:text-5xl font-bold text-apex-navy mb-6">
                        Wachstum ohne Kollaps
                    </h2>
                    <p className="text-lg text-apex-gray">
                        Vom Flaschenhals zur Hochleistungs-Maschine.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Header Row (Desktop only) */}
                    <div className="hidden lg:grid grid-cols-12 gap-8 text-sm font-bold uppercase tracking-wider text-apex-gray px-8">
                        <div className="col-span-4 text-center opacity-50">Status Quo</div>
                        <div className="col-span-4 text-center opacity-50">Transformation</div>
                        <div className="col-span-4 text-center text-apex-blue flex items-center justify-center gap-2">
                            Ihr neuer Standard
                        </div>
                    </div>

                    {points.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                        >
                            {/* Mobile visual connector line */}
                            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-100 via-gray-200 to-blue-100 -z-10"></div>

                            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                                {/* LEFT: Problem (Status Quo) */}
                                <div className="lg:col-span-4 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-red-200 shadow-sm relative overflow-hidden group hover:border-red-400 transition-colors">
                                    <div className="lg:hidden flex items-center gap-3 mb-4 text-red-500 font-bold uppercase text-xs tracking-wider">
                                        <Ban className="w-4 h-4" /> Status Quo
                                    </div>
                                    <p className="text-apex-gray font-medium leading-relaxed">
                                        "{point.problem}"
                                    </p>
                                </div>

                                {/* CENTER: The Topic / Connector */}
                                <div className="lg:col-span-4 flex flex-col items-center justify-center text-center py-2 lg:py-0 relative">
                                    {/* Connecting animated arrow for desktop */}
                                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-gray-200 to-apex-blue/30 -z-10"></div>
                                    <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-apex-border items-center justify-center text-gray-300 z-0 shadow-sm">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>

                                    <div className="relative z-10 px-4">
                                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/80 backdrop-blur-sm border border-apex-border/50 shadow-md flex items-center justify-center text-apex-navy mb-3 mx-auto relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-apex-blue/5 to-apex-cyan/5 opacity-50"></div>
                                            <point.icon className="w-6 h-6 lg:w-7 lg:h-7 relative z-10" />
                                        </div>
                                        <h3 className="text-base lg:text-lg font-bold text-apex-navy">
                                            {point.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* RIGHT: Solution (New Standard) */}
                                <div className="lg:col-span-4 bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-apex-cyan/30 shadow-lg shadow-apex-cyan/10 relative overflow-hidden group hover:border-apex-cyan/50 hover:shadow-xl hover:shadow-apex-cyan/20 transition-all">
                                    {/* Subtle internal gradient matching Hero */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-apex-cyan/5 to-apex-blue/5 opacity-100 pointer-events-none" />

                                    <div className="lg:hidden flex items-center gap-3 mb-4 text-apex-blue font-bold uppercase text-xs tracking-wider">
                                        <CheckCircle2 className="w-4 h-4" /> Ihr neuer Standard
                                    </div>
                                    <p className="text-apex-navy font-semibold leading-relaxed relative z-10">
                                        "{point.wish}"
                                    </p>
                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
                                        <CheckCircle2 className="w-16 h-16 text-apex-cyan" />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
