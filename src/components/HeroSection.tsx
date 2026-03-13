import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um diagnóstico gratuito.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(186 100% 50% / 0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <img src="/logo-full.svg" alt="IZG Consultoria" className="h-24 w-auto sm:h-28 md:h-36 lg:h-44 shrink-0" />

          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl md:text-left">
            Inteligência Tecnológica e Financeira para o seu Negócio{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              escalar.
            </span>
          </h1>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Unimos desenvolvimento de software sob medida, gestão financeira e contabilidade com um
          atendimento 100% humano para resolver as dores reais da sua operação.
        </p>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-glow-gradient hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
