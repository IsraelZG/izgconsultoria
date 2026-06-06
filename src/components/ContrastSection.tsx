import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const withoutItems = [
  "Preocupação constante com recursos para as obrigações",
  "Dívidas que se acumulam",
  "Reajustes motivados pela inadimplência",
  "Depreciação do patrimônio por falta de manutenção",
];

const withItems = [
  "Tranquilidade para cumprir o orçamento",
  "Fim dos reajustes causados pela inadimplência",
  "Poder de negociação com fornecedores",
  "Economia com custas processuais e honorários",
];

const ContrastSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            O impacto da inadimplência no seu dia a dia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sem a IZG */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.08] bg-[#1E293B]/30 backdrop-blur-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/40">
                <Minus className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Sem a IZG
              </h3>
            </div>
            <ul className="space-y-4">
              {withoutItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Com a IZG */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Com a IZG
              </h3>
            </div>
            <ul className="space-y-4">
              {withItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
