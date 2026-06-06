import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
});

const InadimplenciaCalculator = () => {
  const [receita, setReceita] = useState<string>("");
  const [taxa, setTaxa] = useState<string>("");
  const [open, setOpen] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const receitaNum = parseFloat(receita.replace(",", "."));
  const taxaNum = parseFloat(taxa.replace(",", "."));
  const valid =
    !isNaN(receitaNum) &&
    receitaNum > 0 &&
    !isNaN(taxaNum) &&
    taxaNum > 0 &&
    taxaNum <= 100;

  const mensal = useMemo(
    () => (valid ? (receitaNum * taxaNum) / 100 : 0),
    [receitaNum, taxaNum, valid]
  );
  const anual = mensal * 12;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    const parsed = leadSchema.safeParse({ nome, email, telefone });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Verifique os dados");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      nome: parsed.data.nome,
      email: parsed.data.email,
      telefone: parsed.data.telefone,
      receita_prevista: valid ? receitaNum : null,
      inadimplencia_pct: valid ? taxaNum : null,
      consentimento: true,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Não foi possível enviar agora. Tente novamente.");
      return;
    }
    toast.success("Recebemos sua solicitação. Entraremos em contato em breve.");
    setOpen(false);
    setNome("");
    setEmail("");
    setTelefone("");
    setConsent(false);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl"
      >
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Calculadora de impacto da inadimplência
          </h2>
          <p className="mt-4 text-muted-foreground">
            Descubra quanto deixa de entrar no seu caixa todo mês.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1E293B]/40 backdrop-blur-sm p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="receita" className="text-sm text-muted-foreground">
                Receita mensal prevista (R$)
              </Label>
              <Input
                id="receita"
                type="number"
                inputMode="decimal"
                min={0}
                placeholder="Ex.: 40000"
                value={receita}
                onChange={(e) => setReceita(e.target.value)}
                className="bg-background/40 border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="taxa" className="text-sm text-muted-foreground">
                Taxa média de inadimplência (%)
              </Label>
              <Input
                id="taxa"
                type="number"
                inputMode="decimal"
                min={0}
                max={100}
                placeholder="Ex.: 22"
                value={taxa}
                onChange={(e) => setTaxa(e.target.value)}
                className="bg-background/40 border-white/10"
              />
            </div>
          </div>

          {valid && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-300 mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base text-amber-50/90 leading-relaxed">
                  Com <span className="font-semibold">{taxaNum}%</span> de inadimplência, cerca de{" "}
                  <span className="font-semibold text-amber-200">{formatBRL(mensal)}</span> deixam de entrar no seu caixa todo mês — algo em torno de{" "}
                  <span className="font-semibold text-amber-200">{formatBRL(anual)}</span> comprometendo o seu fluxo ao longo do ano.
                </p>
              </div>
            </motion.div>
          )}

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:text-primary/80 transition-colors"
            >
              Veja quanto a IZG pode garantir de repasse previsível
              <span className="font-semibold inline-flex items-center gap-1 underline underline-offset-4">
                Solicitar proposta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Solicitar proposta</DialogTitle>
            <DialogDescription>
              Preencha seus dados e um especialista financeiro entrará em contato.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required maxLength={20} />
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-background/30 p-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(v) => setConsent(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="consent" className="text-xs leading-relaxed text-muted-foreground cursor-pointer">
                Autorizo a IZG a utilizar meus dados para entrar em contato sobre esta solicitação.{" "}
                <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Política de Privacidade
                </a>
                .
              </label>
            </div>

            <DialogFooter>
              <Button type="submit" disabled={!consent || submitting} className="w-full">
                {submitting ? "Enviando..." : "Enviar solicitação"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InadimplenciaCalculator;