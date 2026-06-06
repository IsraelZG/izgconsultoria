import { useRef } from "react";
import { Layers, Users, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface JourneyStep {
  number: string;
  icon: typeof Layers;
  title: string;
  description: string;
}

const steps: JourneyStep[] = [
  {
    number: "01",
    icon: Layers,
    title: "Organizar",
    description:
      "Sistemas financeiros sob medida, digitalização e automação. Substituímos planilhas frágeis e trabalho manual por arquiteturas tecnológicas seguras.",
  },
  {
    number: "02",
    icon: Users,
    title: "Gerir",
    description:
      "Consultoria financeira e BPO. Nossos especialistas cuidam do seu contas a pagar, contas a receber e conciliação bancária.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Capitalizar e proteger",
    description:
      "Factoring, Receita Garantida, seguros e consórcios. O combustível e a proteção do seu fluxo de caixa para a operação rodar sem solavancos.",
  },
];

const JourneySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section ref={ref} id="jornada" className="relative py-24 sm:py-32 overflow-hidden">
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
            A jornada do caixa saudável
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#1E293B]/40 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.15)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-4xl font-bold text-white/10 group-hover:text-primary/20 transition-colors duration-300">
                  {step.number}
                </span>
                <div className="inline-flex rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
