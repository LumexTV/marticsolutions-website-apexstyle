import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Clock, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const About: React.FC = () => {
  const [currentTextTestimonial, setCurrentTextTestimonial] = useState(0);
  const [counters, setCounters] = useState({ umsatz: 0, projekte: 0, zeit: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Counter Animation mit Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);


            const animateCounter = (target: number, key: keyof typeof counters, duration: number = 2000) => {
              let current = 0;
              const steps = 60;
              const stepDuration = duration / steps;
              const increment = target / steps;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
              }, stepDuration);
            };

            // Start animations with different durations
            animateCounter(40, 'umsatz', 2500); // 2.5 seconds
            animateCounter(3, 'projekte', 2000); // 2 seconds (3x bleibt)
            animateCounter(90, 'zeit', 3000); // 3 seconds
          }
        });
      },
      { threshold: 0.5 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [hasAnimated]);

  const textTestimonials = [
    {
      id: 1,
      name: " Fabio Basler",
      company: "Academy Fabio Basler",
      text: "Die Umsetzung war professionell, schnell und zuverlässig. Ich bin sehr zufrieden mit der Arbeit von Martic Solutions, ich würde sie jedem empfehlen."
    },
    {
      id: 2,
      name: "Angelo Arena",
      company: "",
      text: "Martic Solutions hat uns geholfen, unsere lästigen Aufgaben zu automatisieren. Wir profitieren täglich von den Automatisierungen."
    },
    {
      id: 3,
      name: "Lennard Meder",
      company: "Alpha Energieausweis",
      text: "Durch die Automatisierung konnten wir viele Kosten sparen und konnten tatsächlich automatisiert erhöhte Umsätze erzielen!"
    },
    {
      id: 4,
      name: "Walter Hommelsheim",
      company: "Herz über Kopf",
      text: "Die Anpassungen wurden schnell umgesetzt und die Systeme laufen stabil. Für uns ein verlässlicher Partner, mit dem wir gerne weiterarbeiten."
    }
  ];

  const nextTextTestimonial = () => {
    setCurrentTextTestimonial((prev) => (prev + 1) % textTestimonials.length);
  };

  const prevTextTestimonial = () => {
    setCurrentTextTestimonial((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);
  };
  const keyMetrics = [
    {
      icon: TrendingUp,
      number: `${counters.umsatz}%`,
      title: 'Mehr Umsatz'
    },
    {
      icon: Zap,
      number: `${counters.projekte}x`,
      title: 'Schnellere Projektabwicklung'
    },
    {
      icon: Clock,
      number: `${counters.zeit}h`,
      title: 'Zeit sparen pro Woche'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Subtile Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-light-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-light-blue/5 to-blue-300/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={metricsRef} className="grid md:grid-cols-3 gap-12 mb-16">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <metric.icon className="w-8 h-8 text-brand-light-blue" />
                <div className="text-6xl font-bold text-gray-900 bg-gradient-to-r from-brand-light-blue to-blue-500 bg-clip-text text-transparent">
                  {metric.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                {metric.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Was unsere <span className="text-brand-light-blue">Kunden</span> sagen
            </h2>
          </motion.div>

          {/* Video Testimonials - Fixed Layout */}
          <div className="space-y-16">
            {/* Video Testimonial 1 - Video Links, Text Rechts */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:ml-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl overflow-hidden h-80 border border-gray-200">
                  <iframe
                    src="https://www.youtube.com/embed/4c1EuuJiGGk?rel=0&modestbranding=1&showinfo=0"
                    title="Kunden Testimonial 1"
                    className="w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-brand-light-blue/10 to-blue-100/20 border border-brand-light-blue/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl text-brand-light-blue mb-6">"</div>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      Mit Martic Solutions konnten wir nicht nur Zeit sparen, sondern auch unsere Kosten senken. Die Umsetzung war schnell und die Beratung individuell perfekt angepasst.
                    </p>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Michael Vögele</h4>
                      <a
                        href="https://webzeugx.agency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-light-blue font-semibold hover:text-brand-blue transition-colors duration-300"
                      >
                        Webzeugx Webagentur
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Video Testimonial 2 - Text Links, Video Rechts (Alpha Energieausweise) */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:mr-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-brand-light-blue/10 to-blue-100/20 border border-brand-light-blue/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl text-brand-light-blue mb-6">"</div>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      Wir haben unsere Leadgenerierung automatisiert, wordurch wir enorme Kosten sparen. Zudem haben wir nun neue Systeme, die unsere Umsätze um 40% steigern.
                    </p>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Lennard Meder</h4>
                      <a
                        href="https://alpha-energieausweis.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-light-blue font-semibold hover:text-brand-blue transition-colors duration-300"
                      >
                        Alpha Energieausweis
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl overflow-hidden h-80 border border-gray-200">
                  <iframe
                    src="https://www.youtube.com/embed/tcDBXXDK4LI?rel=0&modestbranding=1&showinfo=0"
                    title="Kunden Testimonial 2"
                    className="w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </div>

            {/* Video Testimonial 3 - Video Links, Text Rechts (Thomas Szalai) */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:mr-8">
              {/* Video links */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl overflow-hidden h-80 border border-gray-200">
                  <iframe
                    src="https://www.youtube.com/embed/SjBqsP5naxs?rel=0&modestbranding=1&showinfo=0"
                    title="Kunden Testimonial 3"
                    className="w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>

              {/* Text rechts */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-brand-light-blue/10 to-blue-100/20 border border-brand-light-blue/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl text-brand-light-blue mb-6">"</div>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      Mit den KI-Workflows von Martic Solutions sparen wir Zeit beim Social Media, erhalten mehr qualifizierte Kundenanfragen und steigern unseren Umsatz.
                    </p>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Thomas Szalai</h4>
                      <a
                        href="https://www.linkedin.com/in/thomas-szalai-1372b8352/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-light-blue font-semibold hover:text-brand-blue transition-colors duration-300"
                      >
                        Immobilienmakler
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text Testimonials - Swipeable */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Weitere <span className="text-brand-light-blue">Erfolgsgeschichten</span>
              </h3>
            </motion.div>

            <div className="max-w-6xl mx-auto relative">
              <div className="flex items-center justify-center">
                {/* Left Block - Previous Testimonial */}
                <div className="hidden md:block w-1/3 px-4">
                  <div className="opacity-40 scale-85 transition-all duration-500 ease-in-out">
                    <div className="bg-gradient-to-br from-brand-light-blue/5 to-blue-100/10 border border-brand-light-blue/10 rounded-2xl p-6">
                      <div className="text-center">
                        <div className="text-3xl text-brand-light-blue/30 mb-4">"</div>
                        <p className="text-base text-gray-500 mb-6 leading-relaxed">
                          {textTestimonials[(currentTextTestimonial - 1 + textTestimonials.length) % textTestimonials.length].text}
                        </p>
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="text-base font-bold text-gray-600 mb-1">
                            {textTestimonials[(currentTextTestimonial - 1 + textTestimonials.length) % textTestimonials.length].name}
                          </h4>
                          <p className="text-brand-light-blue/30 text-xs font-semibold">
                            {textTestimonials[(currentTextTestimonial - 1 + textTestimonials.length) % textTestimonials.length].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Block - Current Testimonial */}
                <div className="w-full md:w-1/3 px-4">
                  <div className="opacity-100 scale-100">
                    <div className="bg-gradient-to-br from-brand-light-blue/10 to-blue-100/20 border border-brand-light-blue/20 rounded-2xl p-6">
                      <div className="text-center">
                        <div className="text-4xl text-brand-light-blue mb-4">"</div>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          {textTestimonials[currentTextTestimonial].text}
                        </p>
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">
                            {textTestimonials[currentTextTestimonial].name}
                          </h4>
                          <p className="text-brand-light-blue text-sm font-semibold">
                            {textTestimonials[currentTextTestimonial].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Block - Next Testimonial */}
                <div className="hidden md:block w-1/3 px-4">
                  <div className="opacity-40 scale-85 transition-all duration-500 ease-in-out">
                    <div className="bg-gradient-to-br from-brand-light-blue/5 to-blue-100/10 border border-brand-light-blue/10 rounded-2xl p-6">
                      <div className="text-center">
                        <div className="text-3xl text-brand-light-blue/30 mb-4">"</div>
                        <p className="text-base text-gray-500 mb-6 leading-relaxed">
                          {textTestimonials[(currentTextTestimonial + 1) % textTestimonials.length].text}
                        </p>
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="text-base font-bold text-gray-600 mb-1">
                            {textTestimonials[(currentTextTestimonial + 1) % textTestimonials.length].name}
                          </h4>
                          <p className="text-brand-light-blue/30 text-xs font-semibold">
                            {textTestimonials[(currentTextTestimonial + 1) % textTestimonials.length].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTextTestimonial}
                aria-label="Vorherige Erfolgsgeschichte"
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>
              <button
                onClick={nextTextTestimonial}
                aria-label="Nächste Erfolgsgeschichte"
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
