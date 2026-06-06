import { useRef } from "react";
import { ShieldCheck, TrendingUp, AlertTriangle, Wallet } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  {
    label: "Receita mensal prevista",
    value: "R$ 40.000",
    icon: Wallet,
    color: "text-white/70",
  },
  {
    label: "Recebido sem garantia (com ~22% de inadimplência)",
    value: "R$ 31.200",
    icon: AlertTriangle,
    color: "text-red-400",
  },
  {
    label: "Repasse garantido pela IZG",
    value: "R$ 38.000",
    icon: ShieldCheck,
    color: "text-primary",
  },
];

const GuaranteedRevenueSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id="receita-garantida" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1120]" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[200px]" />
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
            Previsibilidade total de caixa: repasse garantido todo mês.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#94A3B8]">
            A inadimplência corrói o seu fluxo de caixa, exige reajustes e gera a preocupação constante de cobrir as obrigações. Com a nossa solução, você ganha tranquilidade para gerir recursos e cumprir o orçamento — recebendo o repasse garantido independentemente de quem pagou.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-2xl border border-white/10 bg-[#1E293B]/40 backdrop-blur-md p-8 sm:p-10">
            <div className="flex items-center gap-2 mb-8">
              <div className="inline-flex rounded-lg bg-primary/10 p-2 ring-1 ring-primary/20">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">Exemplo ilustrativo</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <stat.icon className="h-4 w-4 text-[#94A3B8]" />
                    <span className="text-xs text-[#94A3B8] leading-tight">{stat.label}</span>
                  </div>
                  <p className={`font-display text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <span className="text-sm text-[#94A3B8]">Ganho real no caixa:</span>
                <span className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  +R$ 6.800/mês
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-xs text-[#64748B] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Exemplo ilustrativo. A garantia de repasse é assegurada por contrato, mediante uma taxa fixa de serviço sobre a receita, e está sujeita a análise de crédito e documentação.
        </motion.p>
      </div>
    </section>
  );
};

export default GuaranteedRevenueSection;
