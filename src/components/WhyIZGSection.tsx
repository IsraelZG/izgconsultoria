import { useRef } from "react";
import { Cpu, Landmark, Scale } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const pillars = [
  {
    icon: Cpu,
    label: "Tecnologia",
    description: "Infraestrutura digital sob medida, com segurança e escalabilidade.",
  },
  {
    icon: Landmark,
    label: "Finanças",
    description: "Domínio profundo de fluxo de caixa, crédito e estruturação.",
  },
  {
    icon: Scale,
    label: "Jurídico",
    description: "Conformidade e segurança contratual em cada operação.",
  },
];

const WhyIZGSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id="por-que-a-izg" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1120]" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] leading-tight">
              Nascemos na interseção exata entre tecnologia e finanças.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#94A3B8]">
              Diferente de fábricas de software genéricas ou factorings tradicionais, nós dominamos os dois lados. Entendemos a fundo as estruturas financeiras e jurídicas do mercado brasileiro e construímos a infraestrutura tecnológica que sustenta tudo isso — com segurança, tecnologia e capital.
            </p>
          </motion.div>

          {/* Coluna gráfica — pilares */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.25 + index * 0.12, duration: 0.5, ease: "easeOut" }}
                  className="group flex items-start gap-5 rounded-xl border border-white/[0.08] bg-[#1E293B]/30 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-[#1E293B]/50"
                >
                  <div className="mt-0.5 inline-flex shrink-0 rounded-lg bg-primary/10 p-2.5 ring-1 ring-primary/20">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {pillar.label}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#94A3B8]">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Linha decorativa sutil */}
            <div className="absolute -left-6 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyIZGSection;
