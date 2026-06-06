import { Printer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InadimplenciaCalculator from "@/components/InadimplenciaCalculator";
import RevenueBrochure from "@/components/brochure/RevenueBrochure";

const ReceitaGarantida = () => {
  const exportPdf = () => window.print();

  return (
    <div className="min-h-screen bg-background print:bg-white">
      {/* Navegação — só na tela */}
      <div className="no-print">
        <Navbar />
      </div>

      {/* Intro + calculadora — só na tela (não entram no PDF) */}
      <section className="no-print px-6 pt-28 pb-4 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Receita Garantida
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Confira a apresentação completa abaixo — e exporte em PDF (A4) para enviar ou imprimir.
        </p>
        <button
          onClick={exportPdf}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]"
        >
          <Printer className="h-4 w-4" />
          Exportar PDF (A4)
        </button>
      </section>

      <div className="no-print">
        <InadimplenciaCalculator />
      </div>

      {/* Apresentação imprimível (A4) */}
      <RevenueBrochure />

      {/* Botão flutuante — só na tela */}
      <button
        onClick={exportPdf}
        className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-gradient"
        aria-label="Exportar apresentação em PDF"
      >
        <Printer className="h-4 w-4" />
        Exportar PDF
      </button>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
};

export default ReceitaGarantida;
