import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Datenschutz = () => {
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
                        <h1 className="text-4xl lg:text-5xl font-bold font-playfair text-apex-navy mb-4">
                            Datenschutzerklärung
                        </h1>
                        <p className="text-gray-500 mb-12">Stand: 17. Juli 2025</p>

                        {/* 1. Verantwortlicher */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">1. Verantwortlicher</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                            <div className="text-gray-600 leading-relaxed space-y-1">
                                <p className="font-semibold text-apex-navy">Luka Martic</p>
                                <p>marticsolutions.de</p>
                                <p>Wesselstraat 10</p>
                                <p>22399 Hamburg</p>
                                <p>Deutschland</p>
                                <p>E-Mail: <a href="mailto:kontakt@marticsolutions.de" className="text-apex-blue hover:underline">kontakt@marticsolutions.de</a></p>
                            </div>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 2. Allgemeines */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">2. Allgemeines zur Datenverarbeitung</h2>
                            <div className="text-gray-600 leading-relaxed space-y-3">
                                <p>Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Ihre Daten werden von uns vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung verarbeitet.</p>
                                <p>Die Nutzung dieser Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Technische Zugriffsdaten werden automatisch erhoben (siehe Punkt 3). Weitere Daten werden nur verarbeitet, wenn Sie uns diese aktiv übermitteln – z. B. über das Kontaktformular.</p>
                            </div>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 3. Hosting */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">3. Hosting und Server-Logfiles</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">Diese Website wird betrieben auf Servern der:</p>
                            <div className="text-gray-600 leading-relaxed space-y-1 mb-6">
                                <p className="font-semibold text-apex-navy">Hetzner Online GmbH</p>
                                <p>Industriestr. 25</p>
                                <p>91710 Gunzenhausen</p>
                                <p>Deutschland</p>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">Ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO wurde abgeschlossen.</p>
                            <p className="text-gray-600 leading-relaxed font-semibold text-apex-navy mb-3">Automatisch verarbeitete Daten beim Websitebesuch:</p>
                            <ul className="text-gray-600 leading-relaxed space-y-1 list-disc list-inside mb-6">
                                <li>IP-Adresse (anonymisiert durch Kürzung des letzten Oktetts)</li>
                                <li>Datum und Uhrzeit des Zugriffs</li>
                                <li>Name der abgerufenen Datei</li>
                                <li>Referrer-URL</li>
                                <li>Browsertyp und -version</li>
                                <li>Betriebssystem</li>
                                <li>Übertragene Datenmenge</li>
                            </ul>
                            <div className="text-gray-600 leading-relaxed space-y-3">
                                <p>Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website und zur Verbesserung unseres Angebots ausgewertet. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.</p>
                                <p><span className="font-semibold text-apex-navy">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischer Sicherheit und Stabilität)</p>
                                <p><span className="font-semibold text-apex-navy">Speicherdauer:</span> 3 Monate</p>
                                <p><span className="font-semibold text-apex-navy">Drittlandübermittlung:</span> Findet nicht statt. Alle Daten werden ausschließlich innerhalb der EU verarbeitet.</p>
                            </div>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 4. Kontaktformular */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">4. Kontaktformular</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">Wenn Sie uns über das Kontaktformular kontaktieren, werden folgende Daten verarbeitet:</p>
                            <ul className="text-gray-600 leading-relaxed space-y-1 list-disc list-inside mb-6">
                                <li>Name (Pflichtfeld)</li>
                                <li>Firmenname (Pflichtfeld)</li>
                                <li>E-Mail-Adresse (Pflichtfeld)</li>
                                <li>Telefonnummer (Pflichtfeld, um Sie zurückrufen zu können)</li>
                                <li>Website oder LinkedIn-Profil (Pflichtfeld)</li>
                                <li>Nachricht (Optional)</li>
                            </ul>
                            <div className="text-gray-600 leading-relaxed space-y-3">
                                <p>Diese Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
                                <p><span className="font-semibold text-apex-navy">Rechtsgrundlagen:</span></p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung durch Absenden</li>
                                    <li>Art. 6 Abs. 1 lit. b DSGVO – zur Durchführung vorvertraglicher Maßnahmen</li>
                                </ul>
                                <p><span className="font-semibold text-apex-navy">Speicherdauer:</span> Die Daten werden für bis zu 3 Monate gespeichert, um auf Rückfragen oder Folgeanfragen reagieren zu können. Auf Wunsch löschen wir Ihre Daten früher, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
                            </div>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 5. Empfänger */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">5. Empfänger der Daten</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">Ihre personenbezogenen Daten werden grundsätzlich nicht an Dritte weitergegeben. Eine Weitergabe erfolgt nur:</p>
                            <ul className="text-gray-600 leading-relaxed space-y-1 list-disc list-inside mb-4">
                                <li>an unseren Hosting-Dienstleister Hetzner Online GmbH (siehe Punkt 3)</li>
                                <li>wenn Sie eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO)</li>
                                <li>wenn dies zur Erfüllung eines Vertrags erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO)</li>
                                <li>wenn eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">Weitere Empfänger oder Datenübermittlungen an Drittländer finden nicht statt.</p>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 6. Sicherheit */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">6. Sicherheit Ihrer Daten</h2>
                            <div className="text-gray-600 leading-relaxed space-y-3">
                                <p>Unsere Website nutzt eine verschlüsselte Verbindung via SSL/TLS ("https"). Darüber hinaus setzen wir gemeinsam mit unserem Hosting-Anbieter technische und organisatorische Maßnahmen ein, um Ihre Daten bestmöglich zu schützen.</p>
                                <p>Informationen zu den Maßnahmen von Hetzner: <a href="https://www.hetzner.com/de/rechtliches/tom" target="_blank" rel="noopener noreferrer" className="text-apex-blue hover:underline">Technische und organisatorische Maßnahmen</a></p>
                            </div>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 7. Cookies */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-6">7. Cookies und Tracking-Technologien</h2>

                            <h3 className="text-lg font-bold text-apex-navy mb-3">7.1 Verwendung von Cookies</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">Diese Website verwendet Cookies und ähnliche Technologien, um die Funktionalität der Website zu gewährleisten, Ihre Präferenzen zu speichern und die Nutzung zu analysieren.</p>

                            <h3 className="text-lg font-bold text-apex-navy mb-3">7.2 Cookie-Consent-Management</h3>
                            <div className="text-gray-600 leading-relaxed space-y-3 mb-6">
                                <p>Wir verwenden Cookiebot CMP by Usercentrics zur Verwaltung Ihrer Cookie-Einstellungen. Diese Lösung ermöglicht es Ihnen, Ihre Zustimmung zu verschiedenen Cookie-Kategorien zu erteilen oder zu verweigern.</p>
                                <p><span className="font-semibold text-apex-navy">Verarbeitete Daten:</span> Cookie-Präferenzen, Zustimmungsstatus, IP-Adresse (anonymisiert)</p>
                                <p><span className="font-semibold text-apex-navy">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)</p>
                                <p><span className="font-semibold text-apex-navy">Anbieter:</span> Usercentrics A/S, Dänemark</p>
                            </div>

                            <h3 className="text-lg font-bold text-apex-navy mb-3">7.3 Webanalyse mit Google Analytics</h3>
                            <div className="text-gray-600 leading-relaxed space-y-3 mb-6">
                                <p>Wir verwenden Google Analytics zur Analyse des Nutzerverhaltens auf unserer Website.</p>
                                <p><span className="font-semibold text-apex-navy">Verarbeitete Daten:</span> IP-Adresse (anonymisiert), Geräteinformationen, Seitenaufrufe, Verweildauer, Referrer-URL</p>
                                <p><span className="font-semibold text-apex-navy">Zweck:</span> Webseitenoptimierung, Nutzerverhalten analysieren</p>
                                <p><span className="font-semibold text-apex-navy">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                                <p><span className="font-semibold text-apex-navy">Anbieter:</span> Google LLC, USA</p>
                                <p><span className="font-semibold text-apex-navy">Speicherdauer:</span> 26 Monate</p>
                                <p><span className="font-semibold text-apex-navy">Widerspruch:</span> Sie können der Datenverarbeitung durch Google Analytics widersprechen, indem Sie das Browser-Add-on zur Deaktivierung von Google Analytics installieren oder Ihre Cookie-Einstellungen anpassen.</p>
                            </div>

                            <h3 className="text-lg font-bold text-apex-navy mb-3">7.4 Ihre Rechte und Cookie-Verwaltung</h3>
                            <div className="text-gray-600 leading-relaxed space-y-3">
                                <p>Sie haben jederzeit die Möglichkeit, Ihre Cookie-Einstellungen zu verwalten und Ihre Einwilligung zu widerrufen:</p>
                                <p className="font-semibold text-apex-navy">Cookie-Einstellungen ändern:</p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Über den Cookie-Einstellungen-Link unten links auf jeder Seite unserer Website</li>
                                    <li>Beim erneuten Besuch unserer Website über den Cookie-Banner</li>
                                    <li>In Ihren Browser-Einstellungen</li>
                                </ul>
                                <p className="font-semibold text-apex-navy">Widerruf der Einwilligung:</p>
                                <p>Sie können Ihre erteilte Einwilligung zur Verwendung von Cookies jederzeit mit Wirkung für die Zukunft widerrufen. Bereits erhobene Daten bleiben bis zum Widerruf rechtmäßig verarbeitet.</p>
                                <p className="font-semibold text-apex-navy">Technisch notwendige Cookies:</p>
                                <p>Bei technisch notwendigen Cookies ist eine Deaktivierung nicht möglich, da diese für die Grundfunktionen der Website erforderlich sind.</p>
                                <p className="font-semibold text-apex-navy">Browser-Einstellungen:</p>
                                <p>Alternativ können Sie Cookies auch direkt in Ihren Browser-Einstellungen verwalten oder vollständig deaktivieren. Beachten Sie, dass dies die Funktionalität unserer Website beeinträchtigen kann.</p>
                            </div>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 8. Ihre Rechte */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">8. Ihre Rechte</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">Sie haben als betroffene Person gemäß DSGVO folgende Rechte:</p>
                            <ul className="text-gray-600 leading-relaxed space-y-1 list-disc list-inside mb-6">
                                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                                <li>Recht auf Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                                <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed font-semibold text-apex-navy mb-3">Zuständige Aufsichtsbehörde für Hamburg:</p>
                            <div className="text-gray-600 leading-relaxed space-y-1">
                                <p>Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</p>
                                <p>Ludwig-Erhard-Str. 22, 20459 Hamburg</p>
                                <p>Telefon: +49 40 428 54 – 4040</p>
                                <p>E-Mail: <a href="mailto:mailbox@datenschutz.hamburg.de" className="text-apex-blue hover:underline">mailbox@datenschutz.hamburg.de</a></p>
                                <p><a href="https://datenschutz-hamburg.de" target="_blank" rel="noopener noreferrer" className="text-apex-blue hover:underline">datenschutz-hamburg.de</a></p>
                            </div>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 9. Externe Links */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">9. Datenschutz bei externen Links</h2>
                            <p className="text-gray-600 leading-relaxed">Unsere Website enthält Links zu externen Websites. Beim Klick auf solche Links verlassen Sie unsere Seite. Für die dort geltenden Datenschutzbestimmungen übernehmen wir keine Verantwortung. Bitte prüfen Sie die Datenschutzhinweise der jeweiligen Anbieter.</p>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* 10. Änderungen */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-apex-navy mb-4">10. Änderungen dieser Datenschutzerklärung</h2>
                            <div className="text-gray-600 leading-relaxed space-y-3">
                                <p>Diese Datenschutzerklärung kann jederzeit an geänderte gesetzliche, technische oder organisatorische Anforderungen angepasst werden. Die jeweils aktuelle Version finden Sie stets auf dieser Seite.</p>
                                <p className="font-semibold text-apex-navy">Stand dieser Erklärung: 17. Juli 2025</p>
                            </div>
                        </section>

                        <hr className="border-gray-200/60 mb-10" />

                        {/* Kontakt */}
                        <section>
                            <h2 className="text-xl font-bold text-apex-navy mb-4">Kontakt für Datenschutzanfragen</h2>
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

export default Datenschutz;
