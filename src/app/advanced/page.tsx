import { ArrowRight, Bot, Database, Workflow } from "lucide-react";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Solutions | xahead',
  description: 'Fortgeschrittene KI-Lösungen für Ihr Unternehmen. Von RAG über autonome Agenten bis hin zu maßgeschneiderten AI-Anwendungen.',
  keywords: ['KI-Lösungen', 'RAG', 'Autonome Agenten', 'AI-Anwendungen', 'Enterprise AI', 'Künstliche Intelligenz'],
  openGraph: {
    title: 'Advanced Solutions | xahead',
    description: 'Fortgeschrittene KI-Lösungen für Ihr Unternehmen. Von RAG über autonome Agenten bis hin zu maßgeschneiderten AI-Anwendungen.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'xahead Advanced Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Solutions | xahead',
    description: 'Fortgeschrittene KI-Lösungen für Ihr Unternehmen. Von RAG über autonome Agenten bis hin zu maßgeschneiderten AI-Anwendungen.',
    images: ['/og-image.png'],
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'xahead Advanced Solutions',
  description: 'Fortgeschrittene KI-Lösungen für Ihr Unternehmen. Von RAG über autonome Agenten bis hin zu maßgeschneiderten AI-Anwendungen.',
  provider: {
    '@type': 'Organization',
    name: 'xahead',
    url: 'https://xahead.com'
  },
  serviceType: ['AI Consulting', 'Enterprise AI Solutions'],
  areaServed: 'DE',
};

export default function AdvancedPage() {
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
              <span className="text-gradient">Advanced Solutions - Für Unternehmen,<br />
              die mit AI führend sein möchten</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
              Unsere Advanced Solutions sind für Unternehmen konzipiert, die mit AI führend sein möchten. Von Data Enrichment bis hin zu autonomen Agenten bieten wir Lösungen, die wertvolle Einblicke ermöglichen und komplexe Aufgaben effizient gestalten.
            </p>
          </section>

          {/* Services Grid */}
          <div className="grid gap-8">
            {/* RAG */}
            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Retrieval-Augmented Generation (RAG)</h2>
              <p className="text-foreground/70">
                Unsere RAG-Systeme nutzen unstrukturierte Daten, um dynamische Einblicke und Echtzeit-Entscheidungen zu ermöglichen und Ihre Daten in verwertbare Intelligenz zu verwandeln.
              </p>
              <a
                href="/info-pages/rag"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                RAG Systeme kennenlernen <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* AI Agents */}
            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Autonome AI Agents</h2>
              <p className="text-foreground/70">
                Unsere autonomen AI-Agents integrieren sich direkt in Ihre Workflows, übernehmen proaktiv Aufgaben und steigern Ihre Effizienz 24/7 durch automatisierte Prozesslösungen.
              </p>

              <a
                href="/info-pages/autonomous-agents"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Effizienz mit AI-Agents steigern <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Bereit für den nächsten Schritt mit AI?
            </h2>
            <Button href="/contact" className="button-primary">
              Kontaktieren Sie uns für individuelle Lösungen
            </Button>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}