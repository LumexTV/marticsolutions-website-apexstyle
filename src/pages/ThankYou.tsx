import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle2, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const ThankYou = () => {
    useEffect(() => {
        const playerScript = document.createElement('script');
        playerScript.src = 'https://fast.wistia.com/player.js';
        playerScript.async = true;
        document.head.appendChild(playerScript);

        const embedScript = document.createElement('script');
        embedScript.src = 'https://fast.wistia.com/embed/vn3e0fusgm.js';
        embedScript.async = true;
        embedScript.type = 'module';
        document.head.appendChild(embedScript);

        return () => {
            document.head.removeChild(playerScript);
            document.head.removeChild(embedScript);
        };
    }, []);

    return (
        <div className="min-h-screen bg-apex-bg flex flex-col relative overflow-hidden font-sans">
            <Helmet>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17952698959"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-17952698959');
                    `}
                </script>
            </Helmet>
            <SEO
                title="Vielen Dank! - Martic Solutions"
                description="Vielen Dank für Ihre Anfrage."
                noindex={true}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-apex-blue/20 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-apex-cyan/20 rounded-full blur-[100px] mix-blend-multiply" />
            </div>

            <div className="flex-grow flex flex-col items-center px-4 pt-6 pb-4 relative z-10">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                >
                    <Link to="/">
                        <Logo size="md" showText={true} />
                    </Link>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-5xl bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 md:p-8 relative z-10 shadow-2xl shadow-apex-blue/10"
                >
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-apex-navy">
                            Vielen Dank für Ihre Anfrage!
                        </h1>
                        <p className="text-base text-apex-gray max-w-xl mx-auto">
                            Ihre Anfrage ist erfolgreich bei uns eingegangen.
                        </p>
                    </div>

                    {/* Video - full width */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto mb-6"
                    >
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-lg overflow-hidden">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `
                                        <style>
                                            wistia-player[media-id='vn3e0fusgm']:not(:defined) {
                                                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/vn3e0fusgm/swatch');
                                                display: block;
                                                filter: blur(5px);
                                                padding-top: 56.25%;
                                            }
                                        </style>
                                        <wistia-player media-id="vn3e0fusgm" aspect="1.7777777777777777"></wistia-player>
                                    `
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Steps - horizontal row below video */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                        {[
                            { icon: CheckCircle2, title: 'Anfrage eingereicht', desc: 'Ihre Anfrage wurde soeben eingesendet und ist erfolgreich bei mir eingegangen. Die Bearbeitung beginnt in Kürze.', delay: 0.3 },
                            { icon: Clock, title: '48 Stunden Bearbeitung', desc: 'Ich überprüfe Ihre Anfrage i.d.R. werktags innerhalb von 48 Stunden und schaue, ob und vor allem wie ich Ihnen weiterhelfen kann.', delay: 0.4 },
                            { icon: Phone, title: 'Termin vereinbaren', desc: 'Ich kontaktiere Sie, um einen Termin für ein Beratungsgespräch zu vereinbaren. Stellen Sie bitte sicher, dass Sie in den nächsten Tagen telefonisch erreichbar sind.', delay: 0.5 },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: step.delay }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl flex items-center justify-center text-apex-blue mb-2 shadow-sm">
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-semibold text-apex-navy mb-1">{step.title}</span>
                                <p className="text-sm text-apex-gray leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Back Link */}
                    <div className="text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-apex-navy text-sm font-semibold hover:text-apex-blue transition-colors relative group"
                        >
                            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="relative">
                                Zurück zur Startseite
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apex-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ThankYou;
