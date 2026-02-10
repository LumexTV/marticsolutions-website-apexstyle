
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import SolutionPath from '../components/SolutionPath';
import CaseStudies from '../components/CaseStudies';
import CoreServices from '../components/CoreServices';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO />
            <Navbar />
            <main>
                <section id="hero">
                    <Hero />
                </section>
                <section id="problem">
                    <PainPoints />
                </section>
                <section id="system">
                    <SolutionPath />
                </section>
                <section id="case-studies">
                    <CaseStudies />
                </section>
                <section id="services">
                    <CoreServices />
                </section>
                <section id="faq">
                    <FAQ />
                </section>
                <section id="contact">
                    <CTA />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
