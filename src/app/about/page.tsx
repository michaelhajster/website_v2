import { Bot, Brain, Target } from "lucide-react";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns | xahead',
  description: 'xahead ist Ihr Partner für professionelle KI-Beratung. Erfahren Sie mehr über unser Team, unsere Mission und unsere Expertise im Bereich künstlicher Intelligenz.',
  keywords: ['xahead Team', 'KI-Experten', 'AI Consulting', 'Über uns', 'KI-Beratung', 'AI Expertise'],
  openGraph: {
    title: 'Über uns | xahead',
    description: 'xahead ist Ihr Partner für professionelle KI-Beratung. Erfahren Sie mehr über unser Team, unsere Mission und unsere Expertise im Bereich künstlicher Intelligenz.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'xahead Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über uns | xahead',
    description: 'xahead ist Ihr Partner für professionelle KI-Beratung. Erfahren Sie mehr über unser Team, unsere Mission und unsere Expertise im Bereich künstlicher Intelligenz.',
    images: ['/og-image.png'],
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Über xahead',
  description: 'xahead ist Ihr Partner für professionelle KI-Beratung. Erfahren Sie mehr über unser Team, unsere Mission und unsere Expertise im Bereich künstlicher Intelligenz.',
  publisher: {
    '@type': 'Organization',
    name: 'xahead',
    url: 'https://xahead.com'
  },
  inLanguage: 'de-DE',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-5xl mx-auto space-y-16">
          {/* Header Section */}
          <section className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-gradient">Über xahead</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
              Wir sind Ihr Partner für die erfolgreiche Integration von AI in Ihr Unternehmen – von der Strategie bis zur Implementierung.
            </p>
          </section>

          {/* Mission Statement */}
          <div className="card hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4">Unsere Mission</h2>
            <p className="text-foreground/70">
              Wir machen Unternehmen fit für die AI-Revolution. Durch praxisnahe Beratung und maßgeschneiderte Lösungen helfen wir Ihnen, das volle Potenzial von AI zu erschließen und Ihre Geschäftsprozesse zukunftssicher zu gestalten.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="card hover:shadow-lg transition-all">
              <Brain className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-foreground/70">
                Fundiertes Wissen in AI-Technologien und deren praktischer Anwendung im Unternehmenskontext.
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-all">
              <Target className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Pragmatismus</h3>
              <p className="text-foreground/70">
                Fokus auf schnell realisierbare Lösungen mit messbarem Mehrwert für Ihr Unternehmen.
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-all">
              <Bot className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-foreground/70">
                Stets am Puls der Zeit mit den neuesten AI-Entwicklungen und Best Practices.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="card hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-6">Das Team</h2>
            <div className="space-y-4">
              <p className="text-foreground/70">
                Wir sind ein wachsendes Team aus AI-Experten, Entwicklern und Strategen, das Unternehmen dabei unterstützt, die Potenziale von künstlicher Intelligenz voll auszuschöpfen. Mit einem klaren Fokus auf Innovation und Effizienz gestalten wir praxisnahe Lösungen, die direkt in die Unternehmensprozesse integriert werden können.
              </p>
              <p className="text-foreground/70">
                <span className="font-bold">Unsere Vision:</span> Unternehmen jeder Größe mit den besten AI-Technologien auszustatten, um Effizienz zu steigern, neue Möglichkeiten zu eröffnen und echten Mehrwert zu schaffen. Gemeinsam gestalten wir den Weg in eine intelligente Zukunft.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Lassen Sie uns gemeinsam Ihre AI-Strategie entwickeln
            </h2>
            <Button href="/contact" className="button-primary">
              Kontaktieren Sie uns
            </Button>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}