import { ArrowRight, BookOpen, Brain, CheckCircle, Lightbulb } from "lucide-react";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Literacy | xahead',
  description: 'Entwickeln Sie ein fundiertes Verständnis für KI. Unsere AI Literacy Programme helfen Ihrem Team, die Grundlagen und Möglichkeiten von KI zu verstehen.',
  keywords: ['AI Literacy', 'KI-Schulung', 'KI-Verständnis', 'KI-Bildung', 'KI-Training', 'Künstliche Intelligenz'],
  openGraph: {
    title: 'AI Literacy | xahead',
    description: 'Entwickeln Sie ein fundiertes Verständnis für KI. Unsere AI Literacy Programme helfen Ihrem Team, die Grundlagen und Möglichkeiten von KI zu verstehen.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'xahead AI Literacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Literacy | xahead',
    description: 'Entwickeln Sie ein fundiertes Verständnis für KI. Unsere AI Literacy Programme helfen Ihrem Team, die Grundlagen und Möglichkeiten von KI zu verstehen.',
    images: ['/og-image.png'],
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'AI Literacy | xahead',
  description: 'Entwickeln Sie ein fundiertes Verständnis für KI. Unsere AI Literacy Programme helfen Ihrem Team, die Grundlagen und Möglichkeiten von KI zu verstehen.',
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
  keywords: ['AI Literacy', 'KI-Schulung', 'KI-Verständnis', 'KI-Bildung'],
  about: {
    '@type': 'Thing',
    name: 'Artificial Intelligence Education'
  }
};

export default function AILiteracyPage() {
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
              <span className="text-gradient">AI Literacy Workshop</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
              Verstehen Sie die Grundlagen der AI-Technologie und ihre Anwendungsmöglichkeiten in Ihrem Unternehmen.
            </p>
          </section>

          {/* Content Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Was Sie lernen</h2>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Grundlegende Konzepte und Funktionsweisen von AI-Systemen</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Aktuelle AI-Technologien und ihre praktischen Anwendungen</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Chancen und Herausforderungen beim Einsatz von AI</span>
                </li>
              </ul>
            </div>

            <div className="card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Für wen geeignet</h2>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Führungskräfte und Entscheidungsträger</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Teams, die AI-Technologien einsetzen möchten</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  <span>Unternehmen am Anfang ihrer AI-Reise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workshop Details */}
          <div className="card hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Workshop Details</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">Format</h3>
                <p className="text-foreground/70">
                  Interaktiver Workshop mit praktischen Übungen und Diskussionen. 
                  Verfügbar als Präsenz- oder Online-Workshop.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Dauer</h3>
                <p className="text-foreground/70">
                  1-2 Tage, abhängig von Ihren spezifischen Anforderungen
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Bereit, Ihre AI Literacy zu erweitern?
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