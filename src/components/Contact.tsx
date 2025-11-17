import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefonnummer: '',
    website: '',
    firmenname: '',
    nachricht: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      alert('Bitte stimme der Datenschutzerklärung zu.');
      return;
    }

    try {
      const response = await fetch('https://n8n.marticsolutions.de/webhook/kontaktformular', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS29udGFrdGZvcm11bGFyIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NJEjO2g7LElTHVoVzGEOLOJRS7rvs5URvUHi4jdB0mo'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', telefonnummer: '', website: '', firmenname: '', nachricht: '' });
        setAgreedToTerms(false);
      } else {
        alert('Es gab einen Fehler beim Senden. Bitte versuche es erneut.');
      }
    } catch (error) {
      alert('Es gab einen Fehler beim Senden. Bitte versuche es erneut.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Subtile Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-brand-light-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bereit zu starten?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-4">
            Lassen Sie uns gemeinsam Ihre Automatisierung planen. Kostenlos und unverbindlich.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir melden uns innerhalb von 24h mit einem Terminvorschlag für ein unverbindliches Analysegespräch bei Ihnen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-light-blue focus:outline-none transition-colors"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-light-blue focus:outline-none transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="telefonnummer"
                  value={formData.telefonnummer}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-light-blue focus:outline-none transition-colors"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-900 font-semibold mb-2">
                  Firmenname *
                </label>
                <input
                  type="text"
                  id="company"
                  name="firmenname"
                  value={formData.firmenname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-light-blue focus:outline-none transition-colors"
                  placeholder="Name Ihres Unternehmens"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-gray-900 font-semibold mb-2">
                  Website *
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-light-blue focus:outline-none transition-colors"
                  placeholder="ihre-website.de"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="nachricht"
                  value={formData.nachricht}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-light-blue focus:outline-none transition-colors resize-none"
                  placeholder="Erzählen Sie uns kurz von Ihren Herausforderungen..."
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-brand-light-blue bg-white border-gray-300 rounded focus:ring-brand-light-blue focus:ring-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  Ich stimme der{' '}
                  <Link to="/datenschutz" className="text-brand-light-blue hover:text-blue-600 underline">
                    Datenschutzerklärung
                  </Link>{' '}
                  zu.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-8 bg-gradient-to-r from-brand-light-blue to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-brand-light-blue/25 transition-all duration-300"
              >
                Nachricht senden
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vielen Dank!</h3>
              <p className="text-gray-700">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;