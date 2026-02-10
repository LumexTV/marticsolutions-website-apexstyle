
import { motion } from 'framer-motion';

const VideoSection = () => {
    return (
        <section className="bg-apex-bg section-padding">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-apex-blue font-semibold tracking-wide uppercase text-sm mb-2 block">Case Study</span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-apex-navy mb-4">
                        Alpha Energieausweise
                    </h2>
                    <p className="text-apex-gray text-lg">
                        Wie wir automatisierte Prozesse implementiert haben.
                    </p>
                </div>

                {/* Wistia Embed Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-apex-border bg-black"
                >
                    <div className="wistia_responsive_padding" style={{ padding: '55.63% 0 0 0', position: 'relative' }}>
                        <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                            <wistia-player media-id="3ff6zuaf6o" aspect="1.797752808988764"></wistia-player>
                        </div>
                    </div>
                </motion.div>

                {/* Disclaimer / Scripts injection */}
                <div className="hidden">
                    <script src="https://fast.wistia.com/player.js" async></script>
                    <script src="https://fast.wistia.com/embed/3ff6zuaf6o.js" async type="module"></script>
                    <style>{`
                        wistia-player[media-id='3ff6zuaf6o']:not(:defined) { 
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/3ff6zuaf6o/swatch'); 
                            display: block; 
                            filter: blur(5px); 
                            padding-top:55.63%; 
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

// Add type definition for custom element if using TypeScript strict mode (optional but good practice)
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'wistia-player': any;
        }
    }
}

export default VideoSection;
