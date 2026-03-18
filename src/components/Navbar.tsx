import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="shrink-0">
          <img src="/logo-icon.svg" alt="IZG" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-lg border border-primary/50 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:shadow-glow-cyan hover:border-primary"
        >
          <MessageCircle className="h-5 w-5 text-whatsapp" />
          Agendar Diagnóstico
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground" aria-label="Menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/50 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:shadow-glow-cyan"
            >
              <MessageCircle className="h-5 w-5 text-whatsapp" />
              Agendar Diagnóstico
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
