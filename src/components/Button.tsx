interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, children, className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center h-12 px-8 min-w-48 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors ${className}`}
    >
      {children}
    </a>
  );
} 