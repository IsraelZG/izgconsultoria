import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/utils";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="contato" className="relative py-24 sm:py-32 overflow-hidden">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[180px]" />
      </motion.div>

      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          Pronto para eliminar planilhas e automatizar sua{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">operação?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Fale diretamente com um especialista e descubra a arquitetura exata para o seu cenário atual.
        </p>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-secondary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all hover:shadow-glow-gradient hover:scale-[1.02]"
          >
            <MessageCircle className="h-7 w-7 text-primary-foreground" />
            Falar com um Especialista
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
