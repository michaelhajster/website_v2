import ContactForm from "./ContactForm";
import ContactLinks from "@/components/ContactLinks";
import PageTransition from "@/components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | xahead',
  description: 'Kontaktieren Sie xahead für Ihre KI-Beratung. Wir freuen uns darauf, Ihr Unternehmen auf dem Weg zur erfolgreichen KI-Integration zu unterstützen.',
  keywords: ['Kontakt', 'KI-Beratung', 'AI Consulting', 'Anfrage', 'Beratungsgespräch', 'KI-Projekt'],
  openGraph: {
    title: 'Kontakt | xahead',
    description: 'Kontaktieren Sie xahead für Ihre KI-Beratung. Wir freuen uns darauf, Ihr Unternehmen auf dem Weg zur erfolgreichen KI-Integration zu unterstützen.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'xahead Kontakt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt | xahead',
    description: 'Kontaktieren Sie xahead für Ihre KI-Beratung. Wir freuen uns darauf, Ihr Unternehmen auf dem Weg zur erfolgreichen KI-Integration zu unterstützen.',
    images: ['/og-image.png'],
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'xahead Kontakt',
  description: 'Kontaktieren Sie xahead für Ihre KI-Beratung.',
  publisher: {
    '@type': 'Organization',
    name: 'xahead',
    url: 'https://xahead.com'
  },
  inLanguage: 'de-DE',
  mainEntity: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['de', 'en']
  }
};

export default function ContactPage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <section className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-gradient">Kontaktieren Sie uns</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
              Lassen Sie uns gemeinsam die Möglichkeiten von AI für Ihr Unternehmen erkunden. Senden Sie uns Ihre Anfrage.
            </p>
          </section>

          {/* Contact Content */}
          <div className="space-y-8">
            <div className="card hover:shadow-lg transition-all">
              <h2 className="text-2xl font-semibold mb-6">Direkte Kontaktaufnahme</h2>
              <ContactLinks showIcons iconClassName="text-primary" containerClassName="bg-accent-blue/20" className="space-y-4" />
            </div>

            {/* Contact Form */}
            <div className="card hover:shadow-lg transition-all">
              <ContactForm />
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}