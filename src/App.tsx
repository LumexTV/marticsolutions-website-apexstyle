import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/chat-widget.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerBar from './components/PartnerBar';
import Problem from './components/Problem';
import Plan from './components/Plan';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Impressum from './pages/Impressum';
import Career from './pages/Career';


function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen overflow-x-hidden">
        <Navbar />
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
            </>
          } />
          <Route path="/datenschutz" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/karriere" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;