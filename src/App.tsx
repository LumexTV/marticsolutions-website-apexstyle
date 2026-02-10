import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useScroll, useTransform, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const Consultation = lazy(() => import('./pages/Consultation'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));

function App() {
  const { scrollYProgress } = useScroll();

  // Parallax effects for blobs (Global background stays here to persist across routes)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <HelmetProvider>
      <div className="min-h-screen font-sans text-apex-navy selection:bg-apex-blue selection:text-white relative overflow-hidden">
        {/* Global Background Gradient Mesh with Parallax */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <motion.div style={{ y: y1 }} className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-apex-blue/20 blur-[120px]" />
          <motion.div style={{ y: y2 }} className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-apex-cyan/20 blur-[100px]" />
          <motion.div style={{ y: y3 }} className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-apex-blue/20 blur-[120px]" />
        </div>

        <div className="relative z-10">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fallstudien/:id" element={<CaseStudyDetail />} />
              <Route path="/erstgespraech" element={<Consultation />} />
              <Route path="/danke" element={<ThankYou />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;