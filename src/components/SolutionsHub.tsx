import { Code, TrendingUp, Calculator, Zap, type LucideIcon } from "lucide-react";

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    icon: Code,
    title: "Software Customizado",
    description:
      "Sistemas de gestão, Superapps e plataformas descentralizadas sob medida para a sua operação.",
  },
  {
    icon: TrendingUp,
    title: "Gestão Financeira & Crédito",
    description:
      "Estruturação de caixa, captação de recursos e soluções inteligentes de crédito.",
  },
  {
    icon: Calculator,
    title: "Contabilidade Estratégica",
    description:
      "Foco em prestadores de serviço, redução tributária e conformidade fiscal completa.",
  },
  {
    icon: Zap,
    title: "Energia Inteligente",
    description:
      "Redução de custos operacionais com energia solar e infraestrutura para mobilidade.",
  },
];

const SolutionsHub = () => {
  return (
    <section id="solucoes" className="relative py-24 sm:py-32">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Um ecossistema completo para a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              eficiência do seu negócio.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-md p-8 transition-all hover:border-primary/30 hover:shadow-glow-cyan"
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {solution.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsHub;
