export const defaultMetadata = {
  title: {
    default: 'Xahead | AI Consulting',
    template: '%s | Xahead'
  },
  description: 'Xahead bietet professionelle KI-Beratung und Implementierungslösungen für Unternehmen. Spezialisiert auf RAG, autonome Agenten und angewandte KI.',
  keywords: ['KI Beratung', 'AI Consulting', 'RAG', 'Autonomous Agents', 'Applied AI', 'AI Literacy', 'KI Implementierung'],
  authors: [{ name: 'Xahead' }],
  creator: 'Xahead',
  publisher: 'Xahead',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.xahead.de',
    siteName: 'Xahead',
    title: 'Xahead | Professional AI Consulting',
    description: 'Xahead bietet professionelle KI-Beratung und Implementierungslösungen für Unternehmen. Spezialisiert auf RAG, autonome Agenten und angewandte KI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Xahead AI Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xahead | Professional AI Consulting',
    description: 'Xahead bietet professionelle KI-Beratung und Implementierungslösungen für Unternehmen.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://www.xahead.de'),
  alternates: {
    canonical: 'https://www.xahead.de'
  }
};
