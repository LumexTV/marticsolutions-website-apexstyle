import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Impressum = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen font-outfit pt-32 pb-20 px-4 relative">

        {/* Neon Blue Glow Background */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-apex-blue/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-apex-cyan/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Glass Container */}
        <div className="relative z-10 max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-2xl p-10 md:p-16">

          {/* Inner Glows */}
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-apex-cyan/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-apex-blue/10 rounded-full blur-[80px]" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold font-playfair text-apex-navy mb-12">
              Impressum
            </h1>

            {/* Angaben gemäß § 5 TMG */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-apex-navy mb-4">Angaben gemäß § 5 TMG:</h2>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p className="font-semibold text-apex-navy">Luka Martic</p>
                <p>Einzelunternehmen</p>
                <p>Wesselstraat 10</p>
                <p>22399 Hamburg</p>
                <p>Deutschland</p>
                <p className="mt-4">Telefon: <a href="tel:+4917647663929" className="text-apex-blue hover:underline">+49 176 47663929</a></p>
                <p>E-Mail: <a href="mailto:kontakt@marticsolutions.de" className="text-apex-blue hover:underline">kontakt@marticsolutions.de</a></p>
                <p>Website: <a href="https://www.marticsolutions.de" className="text-apex-blue hover:underline">www.marticsolutions.de</a></p>
              </div>
            </section>

            <hr className="border-gray-200/60 mb-10" />

            {/* Verantwortlich */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-apex-navy mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p className="font-semibold text-apex-navy">Luka Martic</p>
                <p>Wesselstraat 10</p>
                <p>22399 Hamburg</p>
                <p>Deutschland</p>
              </div>
            </section>

            <hr className="border-gray-200/60 mb-10" />

            {/* Umsatzsteuer-ID */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-apex-navy mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-600">DE455607026</p>
            </section>

            <hr className="border-gray-200/60 mb-10" />

            {/* Haftungsausschluss */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-apex-navy mb-6">Haftungsausschluss</h2>

              <h3 className="text-lg font-bold text-apex-navy mb-3">Haftung für Inhalte</h3>
              <div className="text-gray-600 leading-relaxed space-y-3 mb-8">
                <p>Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
                <p>Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
              </div>

              <h3 className="text-lg font-bold text-apex-navy mb-3">Haftung für Links</h3>
              <div className="text-gray-600 leading-relaxed space-y-3 mb-8">
                <p>Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.</p>
                <p>Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
                <p>Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.</p>
                <p>Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>
              </div>

              <h3 className="text-lg font-bold text-apex-navy mb-3">Urheberrecht</h3>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
                <p>Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                <p>Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet.</p>
                <p>Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis.</p>
                <p>Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>
              </div>
            </section>

            <hr className="border-gray-200/60 mb-10" />

            {/* VSBG */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-apex-navy mb-4">Information zur Verbraucherstreitbeilegung (VSBG)</h2>
              <p className="text-gray-600 leading-relaxed">
                Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und nicht bereit.
              </p>
            </section>

            <hr className="border-gray-200/60 mb-10" />

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-bold text-apex-navy mb-4">Kontakt für Impressumsanfragen</h2>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p className="font-semibold text-apex-navy">Luka Martic</p>
                <p>E-Mail: <a href="mailto:kontakt@marticsolutions.de" className="text-apex-blue hover:underline">kontakt@marticsolutions.de</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Impressum;
