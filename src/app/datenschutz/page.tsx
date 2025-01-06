import PageTransition from "@/components/PageTransition";

export default function DatenschutzPage() {
  return (
    <PageTransition>
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-3xl mx-auto space-y-16">
          {/* Heading */}
          <section className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-gradient">Datenschutzerklärung</span>
            </h1>
          </section>

          {/* Section 1: Verantwortliche Stelle */}
          <div className="card hover:shadow-lg transition-all space-y-4 p-6">
            <h2 className="text-2xl font-semibold">1. Verantwortliche Stelle</h2>
            <p className="text-foreground/70">
              DATAlovers AG<br />
              Untermainkai 1<br />
              60311 Frankfurt am Main<br />
              E-Mail: office@datalovers.com<br />
              Telefon: +49 1777 868 189<br />
              <br />
              Vorstand: Prof. Dr. Peter Gentsch<br />
              Gerichtsstand: Frankfurt<br />
              HRB: HRB 128955 / AG FFM<br />
              Steuer-Nr.: 26/653/01521
            </p>
          </div>

          {/* Section 2: Erhebung und Speicherung */}
          <div className="card hover:shadow-lg transition-all space-y-4 p-6">
            <h2 className="text-2xl font-semibold">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-foreground/70">
              Wir erfassen personenbezogene Daten (Name, E-Mail-Adresse, Telefonnummer usw.), 
              wenn Sie unsere Website nutzen, ein Formular ausfüllen oder uns direkt kontaktieren. 
              Diese Daten werden nach den Grundsätzen der DSGVO vertraulich verarbeitet und nur 
              für den jeweiligen Zweck verwendet.
            </p>
          </div>

          {/* Section 3: Verwendung von Daten */}
          <div className="card hover:shadow-lg transition-all space-y-4 p-6">
            <h2 className="text-2xl font-semibold">3. Verwendung von Daten</h2>
            <p className="text-foreground/70">
              Wir nutzen die erhobenen Daten ausschließlich zur Kommunikation mit Ihnen, 
              zur Abwicklung unserer Beratungsleistungen und gegebenenfalls zur technischen 
              Verbesserung unserer Services. Eine Weitergabe an Dritte erfolgt nur, wenn dies 
              gesetzlich erlaubt oder von Ihnen ausdrücklich gewünscht ist.
            </p>
          </div>

          {/* Section 4: Rechte nach DSGVO */}
          <div className="card hover:shadow-lg transition-all space-y-4 p-6">
            <h2 className="text-2xl font-semibold">4. Rechte nach DSGVO</h2>
            <p className="text-foreground/70">
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
              Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
              Widerspruch (Art. 21 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO). 
              Bitte richten Sie entsprechende Anfragen an: contact@xahead.com.
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-foreground/70">
            Hinweis: Diese Datenschutzerklärung ist ein Beispiel. Stellen Sie sicher, 
            dass Ihr finaler Text alle geltenden rechtlichen Anforderungen erfüllt.
          </p>
        </main>
      </div>
    </PageTransition>
  );
} 