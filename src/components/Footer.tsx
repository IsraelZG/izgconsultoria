

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2">
              <img src={logoFull} alt="IZG Assessoria e Consultoria" className="h-8 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Assessoria e Consultoria em tecnologia, finanças e contabilidade estratégica para
              empresas que querem escalar com segurança.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
              Links
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Soluções", href: "#solucoes" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Sobre", href: "#sobre" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>contato@izg.com.br</li>
              <li>CNPJ: 00.000.000/0001-00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} IZG Assessoria e Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
