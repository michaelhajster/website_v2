import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'xahead | Professional AI Consulting & Solutions',
  description: 'xahead bietet professionelle KI-Beratung und maßgeschneiderte Lösungen für Unternehmen. Wir begleiten Sie auf Ihrem Weg zur erfolgreichen KI-Integration.',
  keywords: ['KI-Beratung', 'AI Consulting', 'Künstliche Intelligenz', 'Enterprise AI', 'KI-Lösungen', 'KI-Integration'],
  openGraph: {
    title: 'xahead | Professional AI Consulting & Solutions',
    description: 'xahead bietet professionelle KI-Beratung und maßgeschneiderte Lösungen für Unternehmen. Wir begleiten Sie auf Ihrem Weg zur erfolgreichen KI-Integration.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'xahead AI Consulting & Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'xahead | Professional AI Consulting & Solutions',
    description: 'xahead bietet professionelle KI-Beratung und maßgeschneiderte Lösungen für Unternehmen. Wir begleiten Sie auf Ihrem Weg zur erfolgreichen KI-Integration.',
    images: ['/og-image.png'],
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'xahead',
  description: 'Professional AI Consulting und Enterprise Lösungen',
  url: 'https://xahead.com',
  logo: '/og-image.png',
  areaServed: 'DE',
  sameAs: [], // Add social media links if available
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['de', 'en'],
  },
  offers: {
    '@type': 'Offer',
    itemOffered: [
      {
        '@type': 'Service',
        name: 'AI Consulting',
        description: 'Professionelle KI-Beratung für Unternehmen'
      },
      {
        '@type': 'Service',
        name: 'Enterprise AI Solutions',
        description: 'Maßgeschneiderte KI-Lösungen für Unternehmen'
      }
    ]
  }
};

export default function HomePage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="p-8 pb-24 sm:p-20 sm:pb-24 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="space-y-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              <span className="text-gradient">AI-Lösungen</span> für Ihr Unternehmen
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Wir unterstützen Sie bei der Integration von KI in Ihre Geschäftsprozesse.
              Von der Strategie bis zur Umsetzung – maßgeschneidert für Ihren Erfolg.
            </p>
          </section>

          {/* Features Section */}
          <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card group">
              <h3 className="text-xl font-semibold">Strategie & Beratung</h3>
              <p className="text-foreground/70">
                Entwickeln Sie mit uns eine maßgeschneiderte AI-Strategie für Ihr Unternehmen.
              </p>
            </div>
            
            <div className="card group">
              <h3 className="text-xl font-semibold">Implementierung</h3>
              <p className="text-foreground/70">
                Setzen Sie AI-Lösungen effizient und skalierbar in Ihrer Organisation um.
              </p>
            </div>
            
            <div className="card group">
              <h3 className="text-xl font-semibold">Optimierung</h3>
              <p className="text-foreground/70">
                Verbessern Sie kontinuierlich Ihre AI-Systeme für maximale Leistung.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die Möglichkeiten von AI für Ihr Unternehmen erkunden.
            </p>
            <div className="mt-6">
              <Button href="/contact" className="button-primary">
                Jetzt Kontakt aufnehmen
              </Button>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
