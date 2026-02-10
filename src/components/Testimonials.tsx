
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            company: "TechFlow Agency",
            person: "Markus W.",
            role: "CEO",
            problem: "Hoher manueller Aufwand im Lead-Mangement.",
            goal: "Automatisierte Qualifizierung.",
            result: "+40% mehr qualifizierte Leads.",
            stat: "40%",
        },
        {
            company: "CreativeScale",
            person: "Sarah L.",
            role: "Operations Manager",
            problem: "Chaos bei Projektübergaben.",
            goal: "Nahtloses Projektmanagement.",
            result: "20 Stunden/Woche gespart.",
            stat: "20h",
        },
        {
            company: "DataDriven GmbH",
            person: "Tom K.",
            role: "Founder",
            problem: "Langsamer Kundensupport.",
            goal: "24/7 AI Support Integrieren.",
            result: "90% aller Anfragen automatisiert.",
            stat: "90%",
        }
    ];

    return (
        <section className="bg-transparent section-padding relative overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-apex-navy mb-6">Ergebnisse sagen mehr als Worte</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="card-base relative group">
                        <Quote className="absolute top-6 right-6 w-8 h-8 text-apex-border group-hover:text-apex-blue/20 transition-colors" />

                        <div className="mb-6">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-apex-blue to-apex-cyan mb-2">
                                {t.stat}
                            </div>
                            <p className="text-sm font-semibold text-apex-navy uppercase tracking-wider">Verbesserung</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div>
                                <span className="text-xs font-bold text-apex-gray uppercase block mb-1">Problem</span>
                                <p className="text-apex-navy text-sm">{t.problem}</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-apex-gray uppercase block mb-1">Lösung</span>
                                <p className="text-apex-navy text-sm font-medium">{t.result}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-apex-border/50">
                            <div className="w-10 h-10 rounded-full bg-apex-navy flex items-center justify-center text-white font-bold">
                                {t.person[0]}
                            </div>
                            <div>
                                <div className="font-bold text-apex-navy">{t.person}</div>
                                <div className="text-xs text-apex-gray">{t.role}, {t.company}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
