import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const Consultation = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        salutation: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        website: '',
        employees: '',
        message: ''
    });
    const [privacyConsent, setPrivacyConsent] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const totalSteps = 3;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateStep = (currentStep: number) => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        if (currentStep === 1) {
            if (!formData.salutation) newErrors.salutation = 'Bitte wählen Sie eine Anrede.';
            if (!formData.firstName.trim()) newErrors.firstName = 'Bitte geben Sie Ihren Vornamen ein.';
            if (!formData.lastName.trim()) newErrors.lastName = 'Bitte geben Sie Ihren Nachnamen ein.';
        } else if (currentStep === 2) {
            if (!formData.email.trim()) {
                newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
            }
            if (!formData.phone.trim()) newErrors.phone = 'Bitte geben Sie Ihre Handynummer ein.';
        } else if (currentStep === 3) {
            if (!formData.website.trim()) newErrors.website = 'Bitte geben Sie Ihre Firmenwebsite ein.';
            if (!formData.employees) newErrors.employees = 'Bitte wählen Sie die Anzahl der Mitarbeiter.';
            if (!privacyConsent) newErrors.privacyConsent = 'Bitte stimmen Sie den Datenschutzbedingungen zu.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            isValid = false;
        } else {
            setErrors({});
        }

        return isValid;
    };

    const handleNext = () => {
        if (isNavigating) return;
        if (validateStep(step)) {
            setIsNavigating(true);
            setStep(prev => Math.min(prev + 1, totalSteps));
            window.scrollTo(0, 0);
            setTimeout(() => setIsNavigating(false), 500);
        }
    };

    const handleBack = () => {
        if (isNavigating) return;
        setStep(prev => Math.max(prev - 1, 1));
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isNavigating) return;

        if (step < totalSteps) {
            handleNext();
            return;
        }

        if (validateStep(step)) {
            setIsLoading(true);
            try {
                await fetch('https://n8n.marticsolutions.de/webhook/erstgespraech_formular', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                        timestamp: new Date().toISOString(),
                    }),
                });

                navigate('/danke');
            } catch (error) {
                console.error('Webhook error:', error);
                navigate('/danke');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-apex-bg text-apex-navy flex flex-col relative overflow-hidden font-sans">
            <SEO
                title="Kostenloses Erstgespräch - Martic Solutions"
                description="Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch zur KI-Automatisierung."
            />
            <Navbar />



            {/* Background Elements - Stronger Neon & Glass */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-apex-blue/20 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-apex-cyan/20 rounded-full blur-[100px] mix-blend-multiply" />
                <div className="absolute opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-apex-blue/10 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="flex-grow flex flex-col items-center justify-center p-4 pt-32 pb-52 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-2xl bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-apex-blue/10"
                >
                    {/* Header */}
                    <div className="text-center mb-10">
                        <span className="text-apex-blue font-semibold tracking-wide uppercase text-xs mb-2 block">Strategisches Erstgespräch</span>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-apex-navy">
                            Lassen Sie uns starten.
                        </h1>
                        <p className="text-apex-gray text-lg max-w-lg mx-auto leading-relaxed">
                            Damit wir uns optimal vorbereiten können, benötigen wir noch ein paar Informationen zu Ihrem Unternehmen.
                        </p>
                    </div>

                    {/* Custom Progress Bar */}
                    <div className="relative w-full h-1.5 bg-gray-100 rounded-full mb-12 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-apex-blue to-apex-cyan"
                            initial={{ width: 0 }}
                            animate={{ width: `${((step) / totalSteps) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-apex-navy">
                                            Anrede
                                        </label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Herr', 'Frau'].map((opt) => (
                                                <label
                                                    key={opt}
                                                    className={`
                              flex items-center justify-center px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200
                              ${formData.salutation === opt
                                                            ? 'bg-apex-blue/5 border-apex-blue text-apex-blue font-semibold shadow-inner'
                                                            : 'bg-white border-apex-border hover:border-apex-blue/30 text-gray-500'}
                            `}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="salutation"
                                                        value={opt}
                                                        checked={formData.salutation === opt}
                                                        onChange={handleChange}
                                                        className="hidden"
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                        {errors.salutation && <p className="text-red-500 text-xs mt-1 font-medium">{errors.salutation}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-bold text-apex-navy">Vorname</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`w-full bg-white border ${errors.firstName ? 'border-red-500' : 'border-apex-border'} rounded-xl px-4 py-3.5 text-apex-navy placeholder:text-gray-400 focus:outline-none focus:border-apex-blue focus:ring-4 focus:ring-apex-blue/5 transition-all shadow-sm`}
                                                placeholder="Max"
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.firstName}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-bold text-apex-navy">Nachname</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`w-full bg-white border ${errors.lastName ? 'border-red-500' : 'border-apex-border'} rounded-xl px-4 py-3.5 text-apex-navy placeholder:text-gray-400 focus:outline-none focus:border-apex-blue focus:ring-4 focus:ring-apex-blue/5 transition-all shadow-sm`}
                                                placeholder="Mustermann"
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.lastName}</p>}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-apex-navy">E-Mail-Adresse</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-apex-border'} rounded-xl px-4 py-3.5 text-apex-navy placeholder:text-gray-400 focus:outline-none focus:border-apex-blue focus:ring-4 focus:ring-apex-blue/5 transition-all shadow-sm`}
                                            placeholder="max@unternehmen.de"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="block text-sm font-bold text-apex-navy">Handynummer</label>
                                            <span className="text-xs text-apex-gray">Für Rückfragen</span>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full bg-white border ${errors.phone ? 'border-red-500' : 'border-apex-border'} rounded-xl px-4 py-3.5 text-apex-navy placeholder:text-gray-400 focus:outline-none focus:border-apex-blue focus:ring-4 focus:ring-apex-blue/5 transition-all shadow-sm`}
                                            placeholder="+49 123 456789"
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-apex-navy">Firmenwebsite</label>
                                        <input
                                            type="text"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            className={`w-full bg-white border ${errors.website ? 'border-red-500' : 'border-apex-border'} rounded-xl px-4 py-3.5 text-apex-navy placeholder:text-gray-400 focus:outline-none focus:border-apex-blue focus:ring-4 focus:ring-apex-blue/5 transition-all shadow-sm`}
                                            placeholder="unternehmen.de"
                                        />
                                        {errors.website && <p className="text-red-500 text-xs mt-1 font-medium">{errors.website}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-apex-navy">Anzahl Mitarbeiter</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['1', '2-10', '10-50', '50+'].map((option) => (
                                                <label
                                                    key={option}
                                                    className={`
                              flex items-center justify-center px-4 py-3 rounded-xl border cursor-pointer transition-all
                              ${formData.employees === option
                                                            ? 'bg-apex-blue/5 border-apex-blue text-apex-blue font-bold shadow-inner'
                                                            : 'bg-white border-apex-border hover:border-apex-blue/30 text-apex-gray hover:text-apex-navy'}
                            `}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="employees"
                                                        value={option}
                                                        checked={formData.employees === option}
                                                        onChange={handleChange}
                                                        className="hidden"
                                                    />
                                                    <span className="text-sm">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.employees && <p className="text-red-500 text-xs mt-1 font-medium">{errors.employees}</p>}
                                    </div>

                                    {/* Optional Message */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="block text-sm font-bold text-apex-navy">Nachricht</label>
                                            <span className="text-xs text-apex-gray">Optional</span>
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                            className="w-full bg-white border border-apex-border rounded-xl px-4 py-3.5 text-apex-navy placeholder:text-gray-400 focus:outline-none focus:border-apex-blue focus:ring-4 focus:ring-apex-blue/5 transition-all shadow-sm resize-none h-24"
                                            placeholder="Gibt es etwas, das wir vorab wissen sollten?"
                                        />
                                    </div>

                                    {/* Privacy Consent */}
                                    <div className="space-y-2 pt-2">
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={privacyConsent}
                                                onChange={(e) => {
                                                    setPrivacyConsent(e.target.checked);
                                                    if (errors.privacyConsent) {
                                                        setErrors(prev => {
                                                            const newErrors = { ...prev };
                                                            delete newErrors.privacyConsent;
                                                            return newErrors;
                                                        });
                                                    }
                                                }}
                                                className="mt-1 w-4 h-4 rounded border-apex-border text-apex-blue focus:ring-apex-blue/20 cursor-pointer"
                                            />
                                            <span className="text-sm text-gray-600 leading-relaxed">
                                                Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                                                <a href="/datenschutz" target="_blank" className="text-apex-blue hover:underline font-medium">Datenschutzerklärung</a>{' '}
                                                zu.
                                            </span>
                                        </label>
                                        {errors.privacyConsent && <p className="text-red-500 text-xs mt-1 font-medium">{errors.privacyConsent}</p>}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    disabled={isNavigating || isLoading}
                                    className="flex items-center text-apex-gray hover:text-apex-navy transition-colors px-2 py-2 font-medium disabled:opacity-50"
                                >
                                    <ChevronLeft className="w-5 h-5 mr-1" /> Zurück
                                </button>
                            ) : (
                                <div />
                            )}

                            {step < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    disabled={isLoading || isNavigating}
                                    className={`group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-apex-navy rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apex-navy hover:bg-apex-navy-light hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>Weiter <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isLoading || isNavigating}
                                    className={`group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-apex-blue rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apex-blue hover:shadow-lg hover:shadow-apex-blue/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>Anfrage absenden <CheckCircle2 className="w-5 h-5 ml-2" /></>
                                    )}
                                </button>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Consultation;
