'use client';

import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const pathname = usePathname();

  // Handle dark mode initialization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const shouldBeDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
      
      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Don't render theme toggle until we know the initial state
  if (isDark === null) {
    return null; // Or a loading state if preferred
  }

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', newMode ? 'dark' : 'light');
  };

  const navItems = [
    { href: '/', label: 'Startseite' },
    { href: '/foundation', label: 'Foundation Services' },
    { href: '/advanced', label: 'Advanced Solutions' },
    { href: '/about', label: 'Über uns' },
    { href: '/contact', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b transition-colors border-[--border-light]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={isDark ? "/symbol_white.png" : "/Symbol.png"}
            alt="xahead logo"
            width={32}
            height={32}
            className="w-8 h-8 transition-all"
          />
          <span className="font-bold text-xl">xahead</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-all relative group ${
                pathname === item.href
                  ? 'text-foreground font-medium'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full ${
                pathname === item.href ? 'w-full' : ''
              }`} />
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-foreground/[.08] rounded-full transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-foreground/[.08] rounded-full transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-foreground/[.08] rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b transition-colors border-[--border-light] md:hidden">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm transition-colors hover:text-foreground ${
                    pathname === item.href
                      ? 'text-foreground font-medium'
                      : 'text-foreground/60'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 