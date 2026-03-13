import { Shield, Lock } from "lucide-react";

const TrustSection = () => {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-xs font-medium tracking-wider text-primary uppercase">
              Confiança & Segurança
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Metodologia validada em plataformas financeiras de{" "}
            <span className="text-primary">alta complexidade.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Experiência comprovada no desenvolvimento de ecossistemas financeiros e gestão de
            sociedades com exigência de nível bancário.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card/50 backdrop-blur-md p-6">
            <div className="rounded-lg bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Sigilo Absoluto
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Segurança em nível de cofre para os dados da sua empresa. Protocolos de
                criptografia e controle de acesso rigorosos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-border bg-card/50 backdrop-blur-md p-6">
            <div className="rounded-lg bg-secondary/10 p-3">
              <Lock className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Conformidade Total
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Todas as soluções são desenvolvidas seguindo as melhores práticas de compliance,
                LGPD e normas regulatórias do setor financeiro.
              </p>
            </div>
          </div>
        </div>

        {/* Partner logos placeholder */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-40">
          {["Credfácil", "Vue", "Vault", "AWS", "ISO 27001"].map((name) => (
            <span
              key={name}
              className="font-display text-sm font-semibold tracking-wider text-muted-foreground uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
