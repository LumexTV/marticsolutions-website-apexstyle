import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

// Lazy loading below-the-fold components
const PainPoints = lazy(() => import('../components/PainPoints'));
const SolutionPath = lazy(() => import('../components/SolutionPath'));
const CaseStudies = lazy(() => import('../components/CaseStudies'));
const AboutMe = lazy(() => import('../components/AboutMe'));
const CoreServices = lazy(() => import('../components/CoreServices'));
const FAQ = lazy(() => import('../components/FAQ'));
const CTA = lazy(() => import('../components/CTA'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
    return (
        <>
            <SEO />
            <Navbar />
            <main>
                <section id="hero">
                    <Hero />
                </section>
                
                <Suspense fallback={<div className="h-40 flex items-center justify-center">Lade weitere Inhalte...</div>}>
                    <section id="problem">
                        <PainPoints />
                    </section>
                    <section id="system">
                        <SolutionPath />
                    </section>
                    <section id="case-studies">
                        <CaseStudies />
                    </section>
                    <section id="about-me">
                        <AboutMe />
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
                </Suspense>
            </main>
            <Suspense fallback={<div className="h-20 bg-apex-navy"></div>}>
                <Footer />
            </Suspense>
        </>
    );
};

export default Home;
