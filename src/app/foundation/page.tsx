import { ArrowRight, BookOpen, Search, Wand2 } from "lucide-react";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foundation Services | xahead',
  description: 'Grundlegende KI-Services für Ihr Unternehmen. Von der AI Literacy bis zur Use Case Discovery - wir begleiten Sie auf Ihrem Weg zur KI-Integration.',
  keywords: ['KI-Services', 'AI Literacy', 'Use Case Discovery', 'KI-Integration', 'KI-Beratung', 'KI-Strategie'],
  openGraph: {
    title: 'Foundation Services | xahead',
    description: 'Grundlegende KI-Services für Ihr Unternehmen. Von der AI Literacy bis zur Use Case Discovery - wir begleiten Sie auf Ihrem Weg zur KI-Integration.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'xahead Foundation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Services | xahead',
    description: 'Grundlegende KI-Services für Ihr Unternehmen. Von der AI Literacy bis zur Use Case Discovery - wir begleiten Sie auf Ihrem Weg zur KI-Integration.',
    images: ['/og-image.png'],
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'xahead Foundation Services',
  description: 'Grundlegende KI-Services für Ihr Unternehmen. Von der AI Literacy bis zur Use Case Discovery - wir begleiten Sie auf Ihrem Weg zur KI-Integration.',
  provider: {
    '@type': 'Organization',
    name: 'xahead',
    url: 'https://xahead.com'
  },
  serviceType: ['AI Consulting', 'AI Literacy', 'Use Case Discovery'],
  areaServed: 'DE',
};

export default function FoundationPage() {
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
              <span className="text-gradient">Foundation Services - Bauen Sie AI Literacy und Strategie auf</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
              Unsere Grundlagen-Workshops vermitteln Ihrem Team die Werkzeuge, um die Möglichkeiten von AI zu verstehen. Sie ermöglichen fundierte Entscheidungen und eine strategische Implementierung. Perfekt für Unternehmen, die ihre AI-Reise beginnen oder internes Wissen erweitern möchten.
            </p>
          </section>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* AI Literacy Workshop */}
            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">AI Literacy Workshop</h2>
              <p className="text-foreground/70">
                Verstehen Sie die Grundlagen der AI-Technologie und ihre Anwendungsmöglichkeiten in Ihrem Unternehmen.
              </p>
              <a
                href="/info-pages/ai-literacy"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Erweitern Sie Ihre AI Literacy <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Use Case Discovery */}
            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Use Case Discovery</h2>
              <p className="text-foreground/70">
                Identifizieren Sie die vielversprechendsten AI-Anwendungsfälle für Ihr Unternehmen.
              </p>
              <a
                href="/info-pages/use-cases"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                AI-Anwendungsfälle aufdecken <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Prompt Optimization */}
            <div className="card hover:shadow-lg transition-all sm:col-span-2">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <Wand2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Prompt Optimization</h2>
              <p className="text-foreground/70">
                Für Unternehmen, die Generative AI-Anwendungen bereits aktiv erkunden, bieten wir Prompt Optimization. Wir helfen Ihnen, AI-Prompts zu optimieren, um unmittelbaren Mehrwert zu erzielen.
              </p>
              <a
                href="/info-pages/applied-ai"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Prompt-Ergebnisse optimieren <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Bereit für den nächsten Schritt?
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