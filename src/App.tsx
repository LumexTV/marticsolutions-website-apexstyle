import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/chat-widget.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const PartnerBar = React.lazy(() => import('./components/PartnerBar'));
const Problem = React.lazy(() => import('./components/Problem'));
const Plan = React.lazy(() => import('./components/Plan'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Footer = React.lazy(() => import('./components/Footer'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Impressum = React.lazy(() => import('./pages/Impressum'));


function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<div className="px-6 py-12" aria-busy="true"></div>}>
          <main id="main-content" role="main">
            <Routes>
              <Route path="/" element={
                <>
                  {/* Ansprechende Website-Struktur */}
                  <Hero />           {/* 1. Hero (Oneliner, CTA, Bild) */}
                  <PartnerBar />     {/* 1.5. Partner Leiste */}
                  <Problem />        {/* 2. Das Problem */}
                  <Plan />           {/* 3. Die Lösungen */}
                  <About />          {/* 4. Über uns/Warum wir */}
                  <Contact />        {/* 5. Footer/Kontakt */}
                  <FAQ />            {/* 6. FAQ */}
                </>
              } />
              <Route path="/datenschutz" element={<PrivacyPolicy />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;