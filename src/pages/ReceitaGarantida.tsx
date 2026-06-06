import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InadimplenciaCalculator from "@/components/InadimplenciaCalculator";
import ContrastSection from "@/components/ContrastSection";
import { WHATSAPP_URL } from "@/lib/utils";

const ReceitaGarantidaHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[120px]" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Receita Garantida
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Elimine o impacto da inadimplência no seu fluxo de caixa.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Previsibilidade total: você recebe o repasse garantido todo mês, sem depender de quem pagou nem de ações de cobrança que se arrastam por anos.
        </p>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-glow-gradient hover:scale-[1.02]"
          >
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
            Quero garantir minha receita
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const ReceitaGarantida = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ReceitaGarantidaHero />
      <InadimplenciaCalculator />
      <ContrastSection />
      <Footer />
    </div>
  );
};

export default ReceitaGarantida;