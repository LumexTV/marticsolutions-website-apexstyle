
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import { caseStudies } from '../data/caseStudies';
import { useEffect } from 'react';

const CaseStudyDetail = () => {
    const { id } = useParams<{ id: string }>();
    const study = caseStudies.find(s => s.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (study) {
            const script1 = document.createElement("script");
            script1.src = "https://fast.wistia.com/player.js";
            script1.async = true;
            document.body.appendChild(script1);

            const script2 = document.createElement("script");
            script2.src = `https://fast.wistia.com/embed/${study.videoMediaId}.js`;
            script2.async = true;
            script2.type = "module";
            document.body.appendChild(script2);

            return () => {
                document.body.removeChild(script1);
                document.body.removeChild(script2);
            }
        }
    }, [study]);

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-apex-bg text-apex-navy">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Fallstudie nicht gefunden 😕</h1>
                    <Link to="/" className="text-apex-blue hover:underline">Zurück zur Startseite</Link>
                </div>
            </div>
        );
    }

    // Default aspect ratio if not provided
    const aspect = study.aspect || 1.797752808988764;
    const paddingPercentage = (1 / aspect * 100).toFixed(2);

    return (
        <div className="min-h-screen font-sans text-apex-navy selection:bg-apex-blue selection:text-white relative bg-apex-bg overflow-hidden">
            <SEO
                title={`${study.company} - Fallstudie | Martic Solutions`}
                description={study.summary.problem} // used summary.problem as challenge might not be in the type
            />

            {/* Global Background Elements (Reused from App) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-apex-blue/5 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-apex-cyan/5 blur-[100px]" />
            </div>

            <Navbar />

            <main className="relative z-10 pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">

                    {/* Back Link */}
                    <Link to="/" className="inline-flex items-center gap-2 text-apex-gray hover:text-apex-blue transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <span className="text-apex-blue font-bold tracking-wide uppercase text-sm mb-3 block">{study.industry}</span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-apex-navy mb-6 leading-tight">
                            "{study.quote}"
                        </h1>
                        <div className="flex items-center gap-4">
                            {/* Author Avatar Placeholder if we had one, otherwise initials or just text */}
                            <div>
                                <p className="font-bold text-lg">{study.author.name}</p>
                                <p className="text-apex-gray">{study.author.role} @ {study.company}</p>
                            </div>
                        </div>
                    </header>

                    {/* Video Section */}
                    <div className="mb-16">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-black">
                            <div className="wistia_responsive_padding" style={{ padding: `${paddingPercentage}% 0 0 0`, position: 'relative' }}>
                                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                                    <wistia-player media-id={study.videoMediaId} aspect={aspect.toString()}></wistia-player>
                                </div>
                            </div>
                            <style>{`
                                wistia-player[media-id='${study.videoMediaId}']:not(:defined) { 
                                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${study.videoMediaId}/swatch'); 
                                    display: block; 
                                    filter: blur(5px); 
                                    padding-top:${paddingPercentage}%; 
                                }
                            `}</style>
                        </div>
                    </div>

                    {/* Structured Summary Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-slate-300" />
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Herausforderung</h4>
                            <p className="text-apex-navy font-medium leading-relaxed">{study.summary.problem}</p>
                        </div>
                        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-apex-blue/30 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-apex-blue to-apex-cyan" />
                            <h4 className="text-xs font-bold text-apex-blue uppercase tracking-widest mb-3">Lösung</h4>
                            <p className="text-apex-navy font-medium leading-relaxed">{study.summary.goal}</p>
                        </div>
                        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-apex-cyan/30 shadow-lg relative overflow-hidden group hover:shadow-xl hover:shadow-apex-cyan/10 transition-all">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-apex-cyan to-[#4ade80]" />
                            <h4 className="text-xs font-bold text-apex-cyan-dark uppercase tracking-widest mb-3">Ergebnis</h4>
                            <p className="text-apex-navy font-medium leading-relaxed">{study.summary.result}</p>
                        </div>
                    </div>

                    {/* Full Story Content */}
                    <article className="prose prose-lg max-w-none mb-20
                        prose-headings:font-bold prose-headings:text-apex-navy
                        prose-h3:text-xl prose-h3:mt-14 prose-h3:mb-6 prose-h3:relative prose-h3:pl-5
                        prose-p:text-slate-800 prose-p:leading-relaxed prose-p:mb-6
                        prose-ul:my-6 prose-li:text-slate-800 prose-li:mb-3
                        prose-strong:text-slate-900 prose-strong:font-bold">
                        {/* Custom H3 Styling with Neon Glow */}
                        <style>{`
                            article h3 {
                                position: relative;
                                padding-left: 1.25rem;
                            }
                            article h3::before {
                                content: '';
                                position: absolute;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                width: 4px;
                                background: linear-gradient(180deg, #00d4ff, #0066ff);
                                border-radius: 4px;
                                box-shadow: 0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3);
                            }
                            article p {
                                color: #1e293b;
                                margin-bottom: 1.5rem;
                            }
                            article ul {
                                padding-left: 1.5rem;
                                margin-bottom: 1.5rem;
                            }
                            article li {
                                color: #1e293b;
                                margin-bottom: 0.75rem;
                            }
                            article li::marker {
                                color: #00d4ff;
                            }
                            article strong {
                                color: #0f172a;
                                font-weight: 700;
                            }
                        `}</style>
                        <div dangerouslySetInnerHTML={{ __html: study.fullStory || '' }} />
                    </article>

                    <CTA />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CaseStudyDetail;
