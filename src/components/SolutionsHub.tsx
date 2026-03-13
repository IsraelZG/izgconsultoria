import { Code, TrendingUp, Calculator, Zap, ArrowRight, type LucideIcon } from "lucide-react";

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}

const solutions: Solution[] = [
  {
    icon: Code,
    title: "Software Customizado",
    description: "Sistemas de gestão, Superapps e plataformas descentralizadas sob medida para a sua operação.",
    tags: ["Sistemas Web", "Arquitetura P2P", "Dashboards"],
    link: "#contato",
  },
  {
    icon: TrendingUp,
    title: "Gestão Financeira & Crédito",
    description: "Estruturação de caixa, captação de recursos e soluções inteligentes de crédito.",
    tags: ["Capital de Giro", "Crédito com Garantia", "Antecipação"], // Produtos Credfácil entram aqui
    link: "#contato",
  },
  {
    icon: Calculator,
    title: "Contabilidade Estratégica",
    description: "Foco em prestadores de serviço, redução tributária e conformidade fiscal completa.",
    tags: ["Planejamento Tributário", "BPO Financeiro", "Abertura de Empresa"],
    link: "#contato",
  },
  {
    icon: Zap,
    title: "Energia Inteligente",
    description: "Redução de custos operacionais com energia solar e infraestrutura para mobilidade.",
    tags: ["Projetos Solares", "Carregadores EV", "Mercado Livre"],
    link: "#contato",
  },
];

const SolutionsHub = () => {
  return (
    <section id="solucoes" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background base e Grid sutil para remeter a redes/wireframes */}
      <div className="absolute inset-0 bg-[#0B1120]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/[0.03] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Um ecossistema completo para a{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">
              eficiência do seu negócio.
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">
            Soluções modulares que se adaptam à realidade da sua empresa, da arquitetura de software ao fluxo de caixa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1E293B]/40 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/30 hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.15)]"
            >
              {/* Linha de energia no topo do card (Aparece no hover) */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="mb-6 inline-flex rounded-xl bg-[#00E5FF]/10 p-3 ring-1 ring-[#00E5FF]/20 transition-colors group-hover:bg-[#00E5FF]/20">
                  <solution.icon className="h-6 w-6 text-[#00E5FF]" />
                </div>

                <h3 className="font-display text-xl font-semibold text-white">{solution.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{solution.description}</p>

                {/* Container Dinâmico de Tags (Subprodutos) */}
                {solution.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70 ring-1 ring-inset ring-white/10 transition-colors group-hover:border-[#8B5CF6]/30 group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Botão sutil de ação integrado ao componente */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={solution.link || "#"}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#00E5FF] transition-colors hover:text-[#8B5CF6]"
                >
                  Conhecer solução
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsHub;
