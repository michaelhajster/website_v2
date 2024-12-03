import PageTransition from "@/components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | xahead',
  description: 'Impressum und rechtliche Informationen von xahead.',
  openGraph: {
    title: 'Impressum | xahead',
    description: 'Impressum und rechtliche Informationen von xahead.',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function ImpressumPage() {
  return (
    <PageTransition>
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-3xl mx-auto space-y-16">
          {/* Header Section */}
          <section className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-gradient">Impressum</span>
            </h1>
          </section>

          {/* Content Section */}
          <div className="card hover:shadow-lg transition-all space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-foreground/80">
                <p>DATAlovers AG</p>
                <p>Untermainkai 1</p>
                <p>60311 Frankfurt/ Main</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Kontakt</h2>
              <div className="space-y-2 text-foreground/80">
                <p>E-Mail: office@datalovers.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Vertretungsberechtigte Person</h2>
              <div className="space-y-2 text-foreground/80">
                <p>Vorstand: Prof. Dr. Peter Gentsch</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Registereintrag</h2>
              <div className="space-y-2 text-foreground/80">
                <p>Gerichtsstand: Frankfurt</p>
                <p>HRB: HRB 128955/ AG FFM</p>
                <p>Steuer-Nr.: 26/653/01521</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}