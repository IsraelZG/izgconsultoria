import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/utils";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background Layer */}
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

      {/* Content with fade-in on mount */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          <img src="/logo-full.svg" alt="IZG Consultoria" className="h-24 w-auto sm:h-28 md:h-36 lg:h-44 shrink-0" />

          <div className="hidden md:block w-1 self-stretch rounded-full bg-gradient-to-b from-primary to-secondary opacity-60" />

          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl md:text-left">
            Inteligência Tecnológica e Financeira para o seu Negócio{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">escalar.</span>
          </h1>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Unimos desenvolvimento de software sob medida, gestão financeira e contabilidade com um atendimento 100%
          humano para resolver as dores reais da sua operação.
        </p>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-secondary to-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-glow-gradient hover:scale-[1.02]"
          >
            <MessageCircle className="h-7 w-7 text-primary-foreground" />
            Solicitar Diagnóstico Gratuito
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
