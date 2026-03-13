import { Fingerprint, Gauge, Users } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBackground from "./ParallaxBackground";

const problems = [
  {
    icon: Fingerprint,
    title: "Personalização Extrema",
    description:
      "Construímos ecossistemas adaptados à realidade exata da sua operação. Sem soluções de prateleira.",
  },
  {
    icon: Gauge,
    title: "Alta Performance",
    description:
      "Softwares ágeis e seguros (nível bancário), desenhados por arquitetos seniores.",
  },
  {
    icon: Users,
    title: "Atendimento Humano",
    description:
      "Consultoria de ponta a ponta com especialistas reais. Nada de chatbots genéricos.",
  },
];

const ProblemSection = () => {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32 overflow-hidden">
      <ParallaxBackground />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Sua empresa perde escala quando a tecnologia e as finanças{" "}
            <span className="text-primary">operam em silos.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group rounded-xl border border-border bg-card/50 backdrop-blur-md p-8 transition-all hover:border-primary/30 hover:shadow-glow-cyan"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
