export interface CaseStudy {
    id: string; // URL slug
    videoMediaId: string;
    aspect?: number;
    company: string;
    industry: string;
    quote: string;
    summary: {
        problem: string;
        goal: string;
        result: string;
    };
    author: { name: string; role: string; image?: string };
    stats: { label: string; value?: string }[];
    fullStory?: string; // HTML or Markdown for the subpage
}

export const caseStudies: CaseStudy[] = [
    {
        id: "alpha-energieausweise",
        videoMediaId: "lj3rqpcrzc",
        aspect: 1.797752808988764,
        company: "Alpha Energieausweise",
        industry: "B2B SaaS / Energieberatung",
        quote: "Wer effizient skalieren will, kommt an Martic Solutions nicht vorbei. Es ist der Wahnsinn.",
        summary: {
            problem: "„Daten-Friedhof & Zeitverschwendung“ durch minderwertige Leads.",
            goal: "Strategische Skalierung: +40 % Umsatz durch KI-Lead-Intelligence.",
            result: "Wachstum auf Knopfdruck & massive Kostensenkung im Back-Office."
        },
        author: { name: "Lennart Meder", role: "Geschäftsführer" },
        stats: [
            { label: "+40% Umsatzsteigerung" },
            { label: "Massive Kostensenkung" }
        ],
        fullStory: `
            <h3>1. Die Herausforderung: „Daten-Friedhof & Zeitverschwendung“</h3>
            <p>Als B2B-SaaS-Unternehmen ist Alpha Energieausweise massiv auf Kaltakquise angewiesen. Vor der Zusammenarbeit mit Martic Solutions kämpfte das Team mit massiven Ineffizienzen:</p>
            <ul>
                <li><strong>Minderwertige Leads:</strong> Falsche Telefonnummern, inaktive E-Mails und veraltete Ansprechpartner führten zu einer hohen Frustrationsrate im Sales-Team.</li>
                <li><strong>Manuelle Vorbereitung:</strong> Das Team musste jeden Kontakt mühsam händisch recherchieren, um im Gespräch halbwegs vorbereitet zu sein.</li>
                <li><strong>Administrative Bremsen:</strong> Rechnungsstellung und Mahnwesen waren zeitintensive, manuelle Prozesse, die wertvolle Kapazitäten banden.</li>
                <li><strong>Verlorene Leads:</strong> Ohne sofortige Reaktion nach einem Web-Eintrag kühlten potenzielle Kunden zu schnell ab („Speed-to-Lead“-Problem).</li>
            </ul>

            <h3>2. Die Martic-Lösung: „Die automatisierte Sales-Engine“</h3>
            <p>Wir haben das gesamte Vertriebs- und Back-Office-System von Alpha Energieausweise auf ein neues technologisches Fundament gestellt:</p>
            <ul>
                <li><strong>High-End Lead Scraping:</strong> Implementierung eines Systems, das nur 100% verifizierte Daten liefert. Keine „toten“ Nummern mehr, sondern direkter Zugriff auf Entscheider.</li>
                <li><strong>KI-Briefing:</strong> Jede Lead-Liste wurde automatisch mit einer KI-basierten Beschreibung des Unternehmens angereichert. Das Sales-Team wusste vor dem ersten Klingeln exakt, welche Probleme der Kunde hat.</li>
                <li><strong>Back-Office Autopilot:</strong> Vollständige Automatisierung der Rechnungserstellung und des Mahnwesens.</li>
                <li><strong>Instant-Response System:</strong> Ein automatisierter Workflow sorgt dafür, dass jeder Lead, der sich einträgt, sofort kontaktiert wird – ohne manuelles Eingreifen.</li>
            </ul>

            <h3>3. Das Ergebnis: „Wachstum auf Knopfdruck“</h3>
            <p>Die Zusammenarbeit mit Martic Solutions lieferte messbare Resultate, die weit über die reine Zeitersparnis hinausgingen:</p>
            <ul>
                <li><strong>Umsatzplus:</strong> Eine Steigerung des Gesamtumsatzes um 30–40 % innerhalb weniger Monate.</li>
                <li><strong>Abschlussquote:</strong> Die individuelle Vorbereitung durch KI-Beschreibungen erhöhte die Effizienz im Verkaufsgespräch massiv.</li>
                <li><strong>Terminquote:</strong> Durch das automatisierte Nachfassen stiegen die vereinbarten Termine auf ein Rekordlevel.</li>
                <li><strong>Kostensenkung:</strong> Massive Einsparung von Personalkosten durch die Automatisierung administrativer Aufgaben.</li>
            </ul>

            <div class="bg-apex-blue/5 border-l-4 border-apex-blue p-6 my-8 italic">
                <strong>Das Martic-Statement:</strong><br>
                „Das Beispiel Alpha Energieausweise zeigt: Wer heute noch manuell Leads sucht oder Rechnungen tippt, verbrennt bares Geld. Wir haben bewiesen, dass man mit der richtigen KI-Infrastruktur nicht mehr Mitarbeiter braucht, um 40 % mehr Umsatz zu machen – man braucht nur ein besseres System.“
            </div>
        `
    },
    {
        id: "webzeugx",
        videoMediaId: "4jf315bigg",
        aspect: 1.7777777777777777,
        company: "Webzeugx",
        industry: "Webagentur Freiburg",
        quote: "Von der Erstberatung bis zur Umsetzung in nur 5 Tagen. Luka hat unsere Ideen nicht nur umgesetzt, sondern verbessert.",
        summary: {
            problem: "Instabile Server-Infrastruktur: SSL-Fehler, fehlgeschlagene Updates und ein nicht erreichbarer Dienstleister.",
            goal: "Neuer Server in 5 Werktagen + strategisch optimierte Automatisierungen.",
            result: "600€ Ersparnis/Jahr schon bei unserem ersten kleinen Projekt, stabile wartungsfreie Umgebung und effizientere Workflows. Pefektes Fundament für eine weitere Zusammenarbeit mit sehr viel Potenzial."
        },
        author: { name: "Michael Vögele", role: "Geschäftsführer" },
        stats: [
            { label: "Dienstleister mit Qualität" },
            { label: "Umsetzung in 5 Werktagen" }
        ],
        fullStory: `
            <h3>Die Herausforderung</h3>
            <p>Michael Vögele kämpfte mit einer instabilen technischen Infrastruktur. Ein externer n8n-Server verursachte ständig Probleme: SSL-Fehler, fehlgeschlagene Updates und eine mangelhafte Erreichbarkeit des Dienstleisters bremsten den Betrieb massiv aus. Hinzu kamen zu hohe monatliche Fixkosten für eine unzureichende Leistung.</p>
            
            <h3>Die Martic-Lösung</h3>
            <p>Innerhalb von nur 5 Werktagen haben wir die gesamte Server-Infrastruktur neu aufgesetzt und migriert. Wir haben die bestehenden Automatisierungsideen von Webzeugx nicht nur umgesetzt, sondern strategisch optimiert.</p>
            <ul>
                <li><strong>Infrastruktur-Upgrade:</strong> Neuer, performanter Server mit Fokus auf Stabilität.</li>
                <li><strong>Automatisierte Workflows:</strong> Implementierung von Lead-Scoring, automatisierten E-Mail-Kampagnen und Lead-Scraping.</li>
            </ul>

            <h3>Das Martic-Resultat</h3>
            <p>Sofortige Senkung der Fixkosten um knapp 600 € pro Jahr. Die neue Umgebung läuft stabil und wartungsfrei. Durch die optimierten Prozesse arbeitet das Team von Webzeugx nun mit deutlich weniger Aufwand wesentlich effizienter im Alltag.</p>

            <div class="bg-apex-blue/5 border-l-4 border-apex-blue p-6 my-8 italic">
                <strong>Kunden-Fazit:</strong><br>
                „Von der Erstberatung bis zur Umsetzung in nur 5 Tagen. Luka hat unsere Ideen nicht nur umgesetzt, sondern verbessert. Rundum glücklich und absolut empfehlenswert für jeden, der Effizienz braucht."
            </div>
        `
    },
    {
        id: "thomas-szalai",
        videoMediaId: "q64kmo3vr5",
        aspect: 1.797752808988764,
        company: "Thomas Szalai",
        industry: "Kapitalanlagevertrieb",
        quote: "Ein Riesenmehrwert: Endlich raus aus dem Content-Hamsterrad und vollautomatisierte Lead-Generierung.",
        summary: {
            problem: "Stundenlanges 'Content-Hamsterrad' (ChatGPT, Copy-Paste) ohne Resonanz.",
            goal: "Entkoppelung von Zeit & Output durch KI-Infrastruktur.",
            result: "Ein 'Content-Autopilot' & 'Vertriebs-Agent', der Leads organisiert und planbares Wachstum ermöglicht."
        },
        author: { name: "Thomas Szalai", role: "Kapitalanlagevertrieb" },
        stats: [
            { label: "Content-Autopilot: Zeit entkoppelt" },
            { label: "Automatisches Wachstum" }
        ],
        fullStory: `
            <h3>Herausforderung</h3>
            <p>Thomas Szalai stand vor dem klassischen Dilemma eines erfolgreichen Unternehmers: Dem „Content-Hamsterrad“. Die manuelle Erstellung von Social-Media-Inhalten, das ständige Experimentieren mit ChatGPT und mühsame Copy-Paste-Workflows fraßen täglich wertvolle Stunden, ohne die gewünschte Resonanz im Markt zu erzeugen. Parallel dazu erforderte der Kapitalanlagevertrieb eine konstante, hochqualitative Lead-Generierung, die manuell kaum noch skalierbar war.</p>
            <h3>Ziel</h3>
            <p>Das Ziel war die vollständige Entkoppelung von Zeit und Content-Output sowie der Aufbau einer automatisierten Vertriebspipeline. Martic Solutions implementierte eine maßgeschneiderte KI-Infrastruktur, die zwei Kernbereiche abdeckt:</p>
            <ul>
                <li><strong>Content-Autopilot:</strong> Ein Workflow, der Social-Media-Content nahezu vollständig automatisiert erstellt und ausspielt.</li>
                <li><strong>Sales-Agent:</strong> Ein intelligenter KI-Agent, der im hochsensiblen Kapitalanlage-Sektor Leads organisiert und Kundenanfragen vorqualifiziert – ohne manuellen Aufwand.</li>
            </ul>
            <h3>Ergebnis</h3>
            <p>Durch die Zusammenarbeit wurde das Unternehmen auf ein neues Effizienz-Level gehoben. Der automatisierte Workflow verwandelt die Social-Media-Präsenz in eine „Einbahnstraße“ für Sichtbarkeit, während der Sales-Agent für eine planbare Pipeline an Neukundenanfragen sorgt. Thomas Szalai kann sich nun wieder vollständig auf die strategische Beratung und den Abschluss konzentrieren, während die KI-Systeme das operative Tagesgeschäft im Hintergrund steuern.</p>
        `
    }
];
