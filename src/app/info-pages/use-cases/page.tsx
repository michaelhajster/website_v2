import { ArrowRight, Search, Target, CheckCircle, Lightbulb } from "lucide-react";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";

export default function UseCasesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-5xl mx-auto space-y-16">
          {/* Header Section */}
          <section className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-gradient">Use Case Discovery Workshop</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
              Identifizieren Sie die vielversprechendsten AI-Anwendungsfälle für Ihr Unternehmen und entwickeln Sie eine klare Implementierungsstrategie.
            </p>
          </section>

          {/* Content Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Unser Ansatz</h2>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Analyse Ihrer bestehenden Prozesse und Herausforderungen</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Identifikation von Optimierungspotentialen durch AI</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Priorisierung der Use Cases nach ROI und Machbarkeit</span>
                </li>
              </ul>
            </div>

            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Ihre Vorteile</h2>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-3">
                  <Target className="h-5 w-5 flex-shrink-0" />
                  <span>Klare Roadmap für AI-Implementierungen</span>
                </li>
                <li className="flex gap-3">
                  <Target className="h-5 w-5 flex-shrink-0" />
                  <span>Fokus auf schnell realisierbare Mehrwerte</span>
                </li>
                <li className="flex gap-3">
                  <Target className="h-5 w-5 flex-shrink-0" />
                  <span>Risikominimierung durch strukturierte Evaluation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workshop Details */}
          <div className="card hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Workshop Details</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">Format</h3>
                <p className="text-foreground/70">
                  Interaktiver Workshop mit Ihrem Führungsteam und Key Stakeholdern.
                  Verfügbar als Präsenz- oder Online-Workshop.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Ergebnis</h3>
                <p className="text-foreground/70">
                  Priorisierte Liste von Use Cases mit konkreten nächsten Schritten
                  und ROI-Abschätzung.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Bereit, Ihre AI Use Cases zu identifizieren?
            </h2>
            <Button href="/contact" className="button-primary">
              Workshop anfragen
            </Button>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}