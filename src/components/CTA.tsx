import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white section-padding pb-32 relative overflow-hidden font-outfit rounded-3xl -mb-8">

            {/* ── Background Neon Glow Blobs ── */}
            {/* Primary: Vibrant Cyan/Blue blob, centered behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-apex-blue/30 rounded-full blur-[150px] pointer-events-none" />
            {/* Secondary: Offset Cyan accent for asymmetry & depth */}
            <div className="absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-apex-cyan/25 rounded-full blur-[120px] pointer-events-none" />
            {/* Tertiary: Soft warm accent for color complexity */}
            <div className="absolute bottom-[15%] left-[30%] w-[350px] h-[350px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

            {/* ── Glass Card Container ── */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative z-10 max-w-4xl mx-auto px-4"
            >
                <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-2xl p-10 md:p-16 text-center">

                    {/* Inner subtle glow that bleeds through the glass */}
                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-apex-cyan/10 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-apex-blue/10 rounded-full blur-[80px]" />
                    </div>

                    {/* Content — sits above inner glows */}
                    <div className="relative z-10">

                        {/* Headline: Serif, Bold, High Contrast */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-4xl lg:text-6xl font-bold font-playfair text-apex-navy mb-8 leading-tight"
                        >
                            Machen Sie Ihr Unternehmen bereit für die Zukunft.
                        </motion.h2>

                        {/* Subtext: Sans-Serif, Light, Clean */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="text-xl text-apex-gray font-light mb-14 max-w-3xl mx-auto leading-relaxed"
                        >
                            Integrieren Sie KI-Workflows, die Ihre Effizienz verdoppeln und Kosten halbieren. Der Schritt vom manuellen Betrieb zum automatisierten Marktführer ist nur ein Gespräch entfernt.
                        </motion.p>

                        {/* Primary Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                        >
                            <button
                                onClick={() => navigate('/erstgespraech')}
                                className="bg-white/40 backdrop-blur-xl border border-apex-blue/30 text-apex-navy font-bold py-5 px-10 rounded-full shadow-lg shadow-apex-blue/20 hover:bg-white/60 hover:border-apex-blue/50 hover:shadow-xl hover:shadow-apex-blue/30 hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 mx-auto group"
                            >
                                Kostenlose Machbarkeits-Analyse starten
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </button>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
