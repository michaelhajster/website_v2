import { Mail, Phone } from "lucide-react";

interface ContactLinksProps {
  showIcons?: boolean;
  className?: string;
  iconClassName?: string;
  containerClassName?: string;
}

export default function ContactLinks({ 
  showIcons = false, 
  className = '',
  iconClassName = '',
  containerClassName = ''
}: ContactLinksProps) {
  const links = [
    {
      href: "tel:+491777868189",
      text: "+49 1777 868 189",
      icon: <Phone className={`h-5 w-5 ${iconClassName}`} />
    },
    {
      href: "mailto:contact@xahead.com",
      text: "contact@xahead.com",
      icon: <Mail className={`h-5 w-5 ${iconClassName}`} />
    }
  ];

  return (
    <div className={`space-y-2 ${className}`}>
      {links.map(({ href, text, icon }) => (
        <a
          key={href}
          href={href}
          className={`${showIcons ? 'flex items-center gap-3' : 'block'} text-sm text-foreground/70 hover:text-foreground transition-colors`}
        >
          {showIcons && (
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${containerClassName}`}>
              {icon}
            </div>
          )}
          <span>{text}</span>
        </a>
      ))}
    </div>
  );
}