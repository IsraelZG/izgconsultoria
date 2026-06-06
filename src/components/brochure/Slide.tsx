import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: ReactNode;
  className?: string;
  /** "light" = folha branca (padrão); "brand" = fundo navy para capa/CTA */
  variant?: "light" | "brand";
}

/**
 * Folha no formato A4. Na tela aparece como um documento; no print
 * (ver regras .izg-slide em index.css) vira exatamente uma página A4.
 */
const Slide = ({ children, className, variant = "light" }: SlideProps) => {
  return (
    <section
      className={cn(
        "izg-slide relative flex flex-col overflow-hidden",
        variant === "brand"
          ? "bg-[#0B1120] text-white"
          : "bg-white text-slate-700",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Slide;
