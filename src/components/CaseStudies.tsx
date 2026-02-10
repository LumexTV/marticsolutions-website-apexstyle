
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const CaseStudyCard = ({ study, isReversed }: { study: any, isReversed: boolean }) => {

    // Default aspect ratio if not provided
    const aspect = study.aspect || 1.797752808988764;
    const paddingPercentage = (1 / aspect * 100).toFixed(2);

    return (
        <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-32 last:mb-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

            {/* Text Side */}
            <div className="flex-1 text-left contents lg:block">

                {/* Quote Section - Always first */}
                <div className="order-1 lg:order-none mb-2 lg:mb-0 w-full">
                    {/* Header Info */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-apex-navy mb-1">{study.company}</h3>
                        <p className="text-sm font-semibold tracking-wider text-apex-gray uppercase opacity-70">{study.industry}</p>
                    </div>

                    {/* Main Quote */}
                    <blockquote className="text-2xl lg:text-4xl font-bold text-apex-navy leading-tight mb-4 lg:mb-8">
                        "{study.quote}"
                    </blockquote>
                </div>

                {/* Details Section - After video on mobile, below quote on desktop */}
                <div className="order-3 lg:order-none w-full">
                    {/* Structured Summary */}
                    <div className="space-y-4 mb-8">
                        <div>
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Herausforderung</h4>
                            <p className="text-apex-gray leading-relaxed">{study.summary.problem}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-apex-blue uppercase tracking-wide mb-1">Lösung</h4>
                            <p className="text-apex-gray leading-relaxed">{study.summary.goal}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-apex-cyan-dark uppercase tracking-wide mb-1">Ergebnis</h4>
                            <p className="text-apex-gray leading-relaxed">{study.summary.result}</p>
                        </div>
                    </div>

                    {/* Author Info */}
                    <div className="mb-8">
                        <p className="text-apex-navy font-bold">{study.author.name}</p>
                        <p className="text-sm text-apex-gray">{study.author.role}</p>
                    </div>

                    {/* CTA Link to Subpage */}
                    <Link to={`/fallstudien/${study.id}`} className="inline-flex items-center gap-2 text-apex-blue font-bold hover:text-apex-cyan transition-colors group">
                        Ganze Fallstudie lesen
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Media Side - Between quote and details on mobile */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full order-2 lg:order-none"
            >
                {/* Video Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-black mb-8 group">
                    {/* Wistia Embed Code Structure */}
                    <div className="wistia_responsive_padding" style={{ padding: `${paddingPercentage}% 0 0 0`, position: 'relative' }}>
                        <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                            <wistia-player media-id={study.videoMediaId} aspect={aspect.toString()}></wistia-player>
                        </div>
                    </div>
                    {/* INJECT STYLES for this specific video */}
                    <style>{`
                        wistia-player[media-id='${study.videoMediaId}']:not(:defined) { 
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${study.videoMediaId}/swatch'); 
                            display: block; 
                            filter: blur(5px); 
                            padding-top:${paddingPercentage}%; 
                        }
                    `}</style>
                </div>

                {/* Stats / Highlight Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.stats.slice(0, 2).map((stat: any, idx: number) => (
                        <div key={idx} className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/60 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-apex-blue/10 p-1.5 rounded-full text-apex-blue flex-shrink-0">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <span className="text-apex-navy font-medium text-sm leading-snug">
                                {stat.label} {stat.value && <span className="block font-bold">{stat.value}</span>}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
};

const CaseStudies = () => {
    const navigate = useNavigate();
    // Load Wistia scripts once
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.src = "https://fast.wistia.com/player.js";
        script1.async = true;
        document.body.appendChild(script1);

        // Preload generic if needed
        return () => {
            document.body.removeChild(script1);
        };
    }, []);

    return (
        <section className="bg-transparent section-padding" id="case-studies">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl lg:text-5xl font-bold text-apex-navy mb-6">
                        Ergebnisse, die für sich sprechen
                    </h2>
                    <p className="text-apex-gray text-lg max-w-2xl mx-auto">
                        Keine leeren Versprechen. Hier sind echte Resultate unserer Partner.
                    </p>
                </div>

                {caseStudies.map((study, idx) => (
                    <CaseStudyCard
                        key={study.id}
                        study={study}
                        isReversed={idx % 2 === 1}
                    />
                ))}

                {/* Erstgespräch CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-apex-gray mb-6">Bereit für ähnliche Ergebnisse?</p>
                    <button
                        onClick={() => navigate('/erstgespraech')}
                        className="bg-white/50 backdrop-blur-xl border border-apex-cyan/40 text-apex-navy font-bold py-4 px-10 rounded-full shadow-lg shadow-apex-cyan/20 hover:bg-white/70 hover:border-apex-cyan/60 hover:shadow-xl hover:shadow-apex-cyan/30 transition-all"
                    >
                        Kostenloses Erstgespräch buchen
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default CaseStudies;
