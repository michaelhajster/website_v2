import './globals.css'
import { Inter } from 'next/font/google'
import { defaultMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/chat/ChatWidget';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="xahead" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-background text-foreground`}>
        <Header />
        <div className="pt-16 flex-grow">{children}</div>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
