
import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ArrowDown, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!dashboardRef.current) return;
    const rect = dashboardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0 to 1
    const y = (e.clientY - rect.top) / rect.height;   // 0 to 1
    const rotateX = (0.5 - y) * 16;  // -8 to +8 degrees
    const rotateY = (x - 0.5) * 16;  // -8 to +8 degrees
    setTilt({
      rotateX,
      rotateY,
      x: (x - 0.5) * 20,   // parallax offset for floating cards
      y: (y - 0.5) * 20,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  }, []);

  const scrollToProblem = () => {
    const element = document.getElementById('problem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-transparent isolate pt-24 pb-16 lg:pb-32 lg:pt-32 font-outfit">

      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apex-blue/10 text-apex-blue text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apex-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-apex-blue"></span>
                </span>
                Für innovative B2B-Unternehmen
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-playfair text-apex-navy leading-tight mb-8">
                Erhöhen sie, <br />
                endlich wieder  <span className="text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-[#102a63] drop-shadow-sm pb-1">
                  ihre Margen.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-apex-navy max-w-3xl leading-relaxed">
                Während Ihre Konkurrenz auf die <strong className="font-semibold">Mitarbeiter wartet</strong>, automatisieren Sie. <strong className="font-semibold">Mehr Projekte, höhere Margen, schnellere Umsetzung</strong> – KI gibt Ihnen den <strong className="font-semibold">Vorsprung</strong>, den andere nie aufholen.              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/erstgespraech')}
                className="bg-white/40 backdrop-blur-xl border border-white/60 text-apex-navy font-bold py-4 px-8 rounded-full shadow-lg shadow-apex-blue/10 hover:bg-white/60 hover:border-white/80 hover:shadow-xl hover:shadow-apex-blue/20 transition-all flex items-center justify-center gap-2 group"
              >
                Kostenloses Strategiegespräch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToProblem}
                className="bg-white/20 backdrop-blur-lg border border-white/30 text-apex-navy font-semibold py-4 px-8 rounded-full hover:bg-white/30 hover:border-apex-cyan/30 transition-all flex items-center justify-center gap-2 group"
              >
                Mehr erfahren
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-apex-border/50">
              {[
                "25+ KI-Projekte",
                "100% DSGVO konform",
                "5.0 Kundenzufriedenheit"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-apex-gray font-medium">
                  <CheckCircle2 className="w-4 h-4 text-apex-blue" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content - 3D Flip Card Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center [perspective:2000px]"
          >
            <div
              ref={dashboardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-xl group [perspective:2000px]"
            >

              {/* Background ambient glow */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/10 blur-[80px] rounded-full" />

              {/* ===== TILT CONTAINER ===== */}
              <div
                className="relative transition-transform duration-100 ease-out"
                style={{
                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >

                {/* ===== FLIP WRAPPER ===== */}
                <div className="relative w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:shadow-2xl">

                  {/* === FRONT FACE (Original Dashboard) === */}
                  <div className="[backface-visibility:hidden] relative bg-white/80 backdrop-blur-2xl border border-white/70 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.5)] overflow-hidden">
                    {/* Dashboard Top Bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100/80">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-5 bg-gray-100 rounded-md" />
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      {/* Sidebar */}
                      <div className="w-12 border-r border-gray-100/80 py-4 flex flex-col items-center gap-4">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 opacity-90" />
                        <div className="w-5 h-5 rounded bg-gray-200/60" />
                        <div className="w-5 h-5 rounded bg-gray-200/60" />
                        <div className="w-5 h-5 rounded bg-cyan-100 border border-cyan-200/50" />
                        <div className="w-5 h-5 rounded bg-gray-200/60" />
                      </div>

                      {/* Main Content Area */}
                      <div className="flex-1 p-4 space-y-3">

                        {/* KPI Row */}
                        <div className="grid grid-cols-3 gap-2.5">
                          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3 border border-cyan-100/50">
                            <div className="text-[9px] text-gray-400 font-medium mb-1">Umsatz</div>
                            <div className="text-base font-bold text-apex-navy">€247K</div>
                            <div className="flex items-center gap-0.5 mt-0.5">
                              <svg className="w-2.5 h-2.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
                              <span className="text-[8px] font-semibold text-emerald-500">+40%</span>
                            </div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 border border-gray-100">
                            <div className="text-[9px] text-gray-400 font-medium mb-1">Leads</div>
                            <div className="text-base font-bold text-apex-navy">1,284</div>
                            <div className="flex items-center gap-0.5 mt-0.5">
                              <svg className="w-2.5 h-2.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
                              <span className="text-[8px] font-semibold text-emerald-500">+28%</span>
                            </div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 border border-gray-100">
                            <div className="text-[9px] text-gray-400 font-medium mb-1">Zeitersparnis</div>
                            <div className="text-base font-bold text-apex-navy">22,5h</div>
                            <div className="flex items-center gap-0.5 mt-0.5">
                              <svg className="w-2.5 h-2.5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
                              <span className="text-[8px] font-semibold text-cyan-500">/Woche</span>
                            </div>
                          </div>
                        </div>

                        {/* Chart Area */}
                        <div className="bg-white/50 rounded-lg border border-gray-100 p-3">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[9px] font-semibold text-gray-500">Umsatzentwicklung</span>
                            <div className="flex gap-1">
                              <div className="px-1.5 py-0.5 rounded text-[7px] font-medium bg-cyan-100 text-cyan-600">6M</div>
                              <div className="px-1.5 py-0.5 rounded text-[7px] font-medium bg-gray-100 text-gray-400">12M</div>
                            </div>
                          </div>
                          {/* SVG Line Chart */}
                          <svg className="w-full h-24" viewBox="0 0 300 80" fill="none">
                            <defs>
                              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgba(6,182,212,0.15)" />
                                <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
                            <line x1="0" y1="40" x2="300" y2="40" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
                            <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
                            <path d="M0 65 L30 58 L60 62 L90 50 L120 45 L150 38 L180 30 L210 25 L240 18 L270 15 L300 8 L300 80 L0 80 Z" fill="url(#chartFill)" />
                            <path d="M0 65 L30 58 L60 62 L90 50 L120 45 L150 38 L180 30 L210 25 L240 18 L270 15 L300 8" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#06B6D4" />
                                <stop offset="100%" stopColor="#3B82F6" />
                              </linearGradient>
                            </defs>
                            <circle cx="300" cy="8" r="3" fill="#3B82F6" />
                            <circle cx="300" cy="8" r="5" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
                          </svg>
                        </div>

                        {/* Bar Chart + Mini Table Row */}
                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="bg-white/50 rounded-lg border border-gray-100 p-3">
                            <span className="text-[9px] font-semibold text-gray-500 mb-2 block">Automations</span>
                            <div className="flex items-end gap-1.5 h-14">
                              {[35, 50, 45, 65, 55, 80, 70, 90, 85, 95].map((h, i) => (
                                <div
                                  key={i}
                                  className="flex-1 rounded-sm"
                                  style={{
                                    background: i >= 7 ? 'linear-gradient(to top, #06B6D4, #3B82F6)' : 'rgba(6,182,212,0.2)',
                                    height: `${h}%`,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="bg-white/50 rounded-lg border border-gray-100 p-3">
                            <span className="text-[9px] font-semibold text-gray-500 mb-2 block">Status</span>
                            <div className="space-y-1.5">
                              {[
                                { label: 'E-Mail Flow', status: true },
                                { label: 'Lead Scoring', status: true },
                                { label: 'CRM Sync', status: true },
                                { label: 'Reporting', status: true },
                              ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                  <span className="text-[8px] text-gray-500">{item.label}</span>
                                  <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span className="text-[7px] font-medium text-emerald-500">Live</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* === BACK FACE (Premium Glass Design) === */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-slate-900/95 backdrop-blur-2xl rounded-2xl p-12 flex flex-col items-center justify-center text-center shadow-2xl border border-white/10 overflow-hidden">

                    {/* Subtle Glass Reflection/Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                      <div className="space-y-4">
                        <h3 className="text-3xl lg:text-5xl font-light font-playfair text-white leading-tight">
                          Wer 2026 nicht <br />
                          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">automatisiert</span>,
                        </h3>
                        <h3 className="text-3xl lg:text-5xl font-light font-playfair text-white leading-tight">
                          ist 2027 irrelevant.
                        </h3>
                      </div>

                      <div className="w-16 h-[1px] bg-white/20 my-2" />

                      <button onClick={() => navigate('/erstgespraech')} className="px-8 py-3 rounded-full bg-white text-apex-navy font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-2 group/btn mt-4">
                        Jetzt starten
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Cards (Only visible on front, fading out on hover/flip?) 
                  Actually, let's keep them but maybe move them with the tilt.
                  Since we are preserving 3d, if we don't put them inside the flip wrapper, they will float above.
                  Let's flip them away or hide them on group hover used css opacity.
              */}
              <div className="absolute -top-6 -right-6 z-30 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 pointer-events-none">
                <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-lg font-bold text-apex-navy leading-tight">+40%</span>
                      <span className="text-[10px] font-medium text-gray-500">Umsatz</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 z-30 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 pointer-events-none">
                <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-xl px-4 py-2.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </div>
                    <span className="text-sm font-semibold text-apex-navy">Vollautomatisiert</span>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
