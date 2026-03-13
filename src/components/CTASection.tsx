import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de iniciar um diagnóstico para minha empresa.";

const CTASection = () => {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          Pronto para transformar a eficiência da sua{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            empresa?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Fale diretamente com um especialista e descubra a arquitetura exata para o seu cenário
          atual.
        </p>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-secondary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all hover:shadow-glow-gradient hover:scale-[1.02]"
          >
            <MessageCircle className="h-6 w-6" />
            Iniciar Diagnóstico via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
