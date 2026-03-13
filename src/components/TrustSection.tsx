import { Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBackground from "./ParallaxBackground";

const TrustSection = () => {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      <ParallaxBackground />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {[
            {
              icon: Shield,
              title: "Sigilo Absoluto",
              description: "Segurança em nível de cofre para os dados da sua empresa. Protocolos de criptografia e controle de acesso rigorosos.",
              iconBg: "bg-primary/10",
              iconColor: "text-primary",
            },
            {
              icon: Lock,
              title: "Conformidade Total",
              description: "Todas as soluções são desenvolvidas seguindo as melhores práticas de compliance, LGPD e normas regulatórias do setor financeiro.",
              iconBg: "bg-secondary/10",
              iconColor: "text-secondary",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card/50 backdrop-blur-md p-6"
            >
              <div className={`rounded-lg ${item.iconBg} p-3`}>
                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner logos */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {["Credfácil", "Vue", "Vault", "AWS", "ISO 27001"].map((name) => (
            <span
              key={name}
              className="font-display text-sm font-semibold tracking-wider text-muted-foreground uppercase"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
