import { ArrowRight, Bot, Database } from "lucide-react";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RAG Solutions | xahead',
  description: 'Retrieval-Augmented Generation (RAG) Lösungen für Ihr Unternehmen. Verbinden Sie Ihre Daten mit KI für präzisere und relevantere Antworten.',
  keywords: ['RAG', 'Retrieval-Augmented Generation', 'KI-Lösungen', 'Datenintegration', 'Enterprise AI', 'Künstliche Intelligenz'],
  openGraph: {
    title: 'RAG Solutions | xahead',
    description: 'Retrieval-Augmented Generation (RAG) Lösungen für Ihr Unternehmen. Verbinden Sie Ihre Daten mit KI für präzisere und relevantere Antworten.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'xahead RAG Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAG Solutions | xahead',
    description: 'Retrieval-Augmented Generation (RAG) Lösungen für Ihr Unternehmen. Verbinden Sie Ihre Daten mit KI für präzisere und relevantere Antworten.',
    images: ['/og-image.png'],
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'RAG Solutions | xahead',
  description: 'Retrieval-Augmented Generation (RAG) Lösungen für Ihr Unternehmen. Verbinden Sie Ihre Daten mit KI für präzisere und relevantere Antworten.',
  author: {
    '@type': 'Organization',
    name: 'xahead',
    url: 'https://xahead.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'xahead',
    url: 'https://xahead.com'
  },
  inLanguage: 'de-DE',
  keywords: ['RAG', 'Retrieval-Augmented Generation', 'KI-Lösungen', 'Datenintegration'],
};

export default function RAGPage() {
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
              <span className="text-gradient">Retrieval-Augmented Generation (RAG)</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
              Transformieren Sie Ihre unstrukturierten Daten in verwertbare Intelligenz mit unseren maßgeschneiderten RAG-Systemen.
            </p>
          </section>

          {/* Content Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Vorteile von RAG</h2>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Präzise Antworten basierend auf Ihren eigenen Daten</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Reduzierte Halluzinationen durch Faktenverankerung</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Echtzeit-Updates ohne Neutraining des Modells</span>
                </li>
              </ul>
            </div>

            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Anwendungsfälle</h2>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-3">
                  <Bot className="h-5 w-5 flex-shrink-0" />
                  <span>Intelligente Dokumentensuche und -analyse</span>
                </li>
                <li className="flex gap-3">
                  <Bot className="h-5 w-5 flex-shrink-0" />
                  <span>Automatisierte Kundenbetreuung mit Kontext</span>
                </li>
                <li className="flex gap-3">
                  <Bot className="h-5 w-5 flex-shrink-0" />
                  <span>Wissensmanagement und Entscheidungsunterstützung</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Implementation Process */}
          <div className="card hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Implementierungsprozess</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <h3 className="font-medium mb-2">1. Analyse & Design</h3>
                <p className="text-foreground/70">
                  Evaluation Ihrer Datenquellen und Anforderungen. Entwicklung einer 
                  maßgeschneiderten RAG-Architektur.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">2. Integration</h3>
                <p className="text-foreground/70">
                  Implementierung des RAG-Systems und Anbindung an Ihre bestehende 
                  Infrastruktur.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">3. Optimierung</h3>
                <p className="text-foreground/70">
                  Kontinuierliche Verbesserung der Retrieval-Qualität und 
                  Systemperformance.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Bereit, Ihre Daten intelligent zu nutzen?
            </h2>
            <Button href="/contact" className="button-primary">
              Jetzt RAG-System implementieren
            </Button>
          </section>
        </main>
      </div>
    </PageTransition>
  );
} 