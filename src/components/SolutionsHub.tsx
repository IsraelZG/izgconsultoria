import { useRef } from "react";
import { Code, TrendingUp, Calculator, Zap, ArrowRight, type LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    tags: ["Capital de Giro", "Crédito com Garantia", "Antecipação"],
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section ref={ref} id="solucoes" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[#0B1120]" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.08] to-transparent" />
        <div className="absolute top-1/3 -left-40 w-[800px] h-[800px] rounded-full bg-primary/15 blur-[180px]" />
        <div className="absolute bottom-1/3 -right-40 w-[800px] h-[800px] rounded-full bg-secondary/15 blur-[180px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Um ecossistema completo para a{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">
              eficiência do seu negócio.
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">
            Soluções modulares que se adaptam à realidade da sua empresa, da arquitetura de software ao fluxo de caixa.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1E293B]/40 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/30 hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.15)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="mb-6 inline-flex rounded-xl bg-[#00E5FF]/10 p-3 ring-1 ring-[#00E5FF]/20 transition-colors group-hover:bg-[#00E5FF]/20">
                  <solution.icon className="h-6 w-6 text-[#00E5FF]" />
                </div>

                <h3 className="font-display text-xl font-semibold text-white">{solution.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{solution.description}</p>

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

              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={solution.link || "#"}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#00E5FF] transition-colors hover:text-[#8B5CF6]"
                >
                  Conhecer solução
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsHub;
