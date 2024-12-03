'use client';

import ContactLinks from "./ContactLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t transition-colors border-[--border-light] mt-auto">
      <div className="max-w-5xl mx-auto px-8 py-12 sm:px-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">xahead</h3>
            <p className="text-sm text-foreground/70">
              Wir bereiten Unternehmen auf die Zukunft von AI vor.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="flex flex-col gap-2">
              <a href="/foundation" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Foundation Services
              </a>
              <a href="/advanced" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Advanced Solutions
              </a>
              <a href="/about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Über uns
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Kontakt</h3>
            <ContactLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t transition-colors border-[--border-light] text-sm text-foreground/70 flex justify-between items-center">
          <p> {year} xahead. Alle Rechte vorbehalten.</p>
          <a 
            href="/impressum" 
            className="hover:text-foreground transition-colors"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
}