import {
  ShieldCheck,
  Headphones,
  Cpu,
  Eye,
  Search,
  FileSignature,
  Banknote,
  Scale,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  Users,
  TrendingUp,
  Wallet,
  MessageCircle,
  Mail,
  Globe,
} from "lucide-react";
import Slide from "@/components/brochure/Slide";
import { WHATSAPP_URL } from "@/lib/utils";

const ACCENT = "#0e7490"; // cyan-700: legível sobre branco
const NAVY = "#0B1120";

/* Cabeçalho discreto das folhas claras */
const SlideHeader = ({ n }: { n: string }) => (
  <div className="flex items-center justify-between px-16 pt-12">
    <span className="text-sm font-semibold tracking-tight" style={{ color: NAVY }}>
      IZG <span className="font-normal text-slate-400">· Inteligência Financeira</span>
    </span>
    <span className="font-mono text-xs text-slate-400">{n}</span>
  </div>
);

const valueProps = [
  { icon: ShieldCheck, label: "Repasse garantido por contrato" },
  { icon: Headphones, label: "Cobrança especializada" },
  { icon: Cpu, label: "Tecnologia própria de gestão" },
  { icon: Eye, label: "Transparência na prestação de contas" },
];

const steps = [
  {
    icon: Search,
    title: "Análise",
    text: "Avaliamos a sua receita, o nível de inadimplência e o histórico de cobrança para desenhar a proposta certa.",
  },
  {
    icon: FileSignature,
    title: "Contrato de garantia",
    text: "Definimos a taxa fixa de serviço e as condições. Tudo claro e por escrito, antes de qualquer repasse.",
  },
  {
    icon: Banknote,
    title: "Repasse garantido",
    text: "Você recebe o valor acordado todo mês, no prazo, independentemente de quem pagou.",
  },
  {
    icon: Scale,
    title: "Gestão de cobrança",
    text: "Nossa equipe assume a cobrança extrajudicial e judicial, com apoio de tecnologia própria.",
  },
  {
    icon: ClipboardCheck,
    title: "Prestação de contas",
    text: "Acompanhamento transparente, com relatórios claros do que foi recebido e cobrado.",
  },
];

const withIZG = [
  "Repasse previsível para cumprir as obrigações do mês e o orçamento anual",
  "Fim dos reajustes motivados pela inadimplência",
  "Poder de negociação com fornecedores, com recursos em caixa",
  "Economia com custas processuais e honorários",
  "Planejamento tranquilo para obras e melhorias",
];

const withoutIZG = [
  "Inadimplência comprometendo o fluxo de caixa do mês",
  "Dívidas que se acumulam enquanto a cobrança se arrasta",
  "Reajustes recorrentes para cobrir o rombo",
  "Depreciação do patrimônio por falta de manutenção",
  "Assembleias tensas por falta de recursos",
];

const exampleStats = [
  { label: "Receita mensal prevista", value: "R$ 40.000", color: "text-slate-500" },
  { label: "Recebido sem garantia (~22% de inadimplência)", value: "R$ 31.200", color: "text-red-600" },
  { label: "Repasse garantido pela IZG", value: "R$ 38.000", color: "text-[#0e7490]" },
];

const RevenueBrochure = () => {
  return (
    <div className="izg-deck">
      {/* ---------- 1 · CAPA ---------- */}
      <Slide variant="brand">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(186 100% 50% / 0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative flex flex-1 flex-col px-16 py-16">
          <img src="/logo-full.svg" alt="IZG" className="h-11 w-auto" />

          <div className="mt-auto">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Garantia de Receita
            </span>
            <h1 className="mt-4 font-display text-6xl font-bold leading-[1.05] tracking-tight">
              Receita
              <br />
              Garantida
            </h1>
            <p className="mt-6 max-w-md text-2xl font-light leading-snug text-white/90">
              Previsibilidade total do seu caixa, todo mês.
            </p>
            <p className="mt-3 max-w-md text-base text-white/60">
              A inadimplência deixa de ser problema do seu condomínio ou da sua empresa.
            </p>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-10">
            {valueProps.map((v) => (
              <div key={v.label} className="flex items-center gap-3">
                <v.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-white/85">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ---------- 2 · O QUE É ---------- */}
      <Slide>
        <SlideHeader n="01" />
        <div className="flex flex-1 flex-col justify-center px-16 py-16">
          <h2 className="font-display text-4xl font-bold leading-tight" style={{ color: NAVY }}>
            Previsibilidade e
            <br />
            segurança financeira
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              A IZG repassa o valor acordado da sua receita{" "}
              <strong style={{ color: NAVY }}>todo mês, no prazo</strong> — independentemente de
              quem pagou. A oscilação da inadimplência deixa de afetar o seu fluxo de caixa.
            </p>
            <p>
              Assumimos toda a <strong style={{ color: NAVY }}>gestão da cobrança</strong>,
              extrajudicial e judicial, com o apoio de tecnologia própria de gestão financeira.
            </p>
            <p>
              Você recebe mediante uma{" "}
              <strong style={{ color: NAVY }}>taxa fixa de serviço</strong> sobre a receita, com
              prestação de contas transparente. Sem surpresas, sem letras miúdas.
            </p>
          </div>
          <div
            className="mt-10 rounded-xl border-l-4 p-6"
            style={{ borderColor: ACCENT, backgroundColor: "#f0f9fb" }}
          >
            <p className="text-base font-medium" style={{ color: NAVY }}>
              O resultado: caixa previsível para cumprir obrigações, planejar e crescer — sem
              depender de ações de cobrança que se arrastam por anos.
            </p>
          </div>
        </div>
      </Slide>

      {/* ---------- 3 · COMO FUNCIONA ---------- */}
      <Slide>
        <SlideHeader n="02" />
        <div className="flex flex-1 flex-col px-16 py-16">
          <h2 className="font-display text-4xl font-bold" style={{ color: NAVY }}>
            Como funciona
          </h2>
          <p className="mt-3 text-slate-500">Um processo claro, do diagnóstico ao repasse.</p>

          <div className="mt-10 flex-1 space-y-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: NAVY }}
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                  {i < steps.length - 1 && <div className="mt-1 w-px flex-1 bg-slate-200" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold" style={{ color: ACCENT }}>
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold" style={{ color: NAVY }}>
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-base leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ---------- 4 · COM × SEM ---------- */}
      <Slide>
        <SlideHeader n="03" />
        <div className="flex flex-1 flex-col px-16 py-16">
          <h2 className="font-display text-4xl font-bold" style={{ color: NAVY }}>
            Com a IZG, ou sem a IZG
          </h2>
          <p className="mt-3 text-slate-500">A diferença no dia a dia da sua gestão.</p>

          <div className="mt-10 grid flex-1 grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#0e7490]/20 bg-[#f0f9fb] p-7">
              <div className="mb-5 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" style={{ color: ACCENT }} />
                <span className="font-display text-lg font-bold" style={{ color: NAVY }}>
                  Com a IZG
                </span>
              </div>
              <ul className="space-y-4">
                {withIZG.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="mb-5 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-slate-400" />
                <span className="font-display text-lg font-bold text-slate-500">Sem a IZG</span>
              </div>
              <ul className="space-y-4">
                {withoutIZG.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-slate-500">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* ---------- 5 · PARA QUEM ---------- */}
      <Slide>
        <SlideHeader n="04" />
        <div className="flex flex-1 flex-col px-16 py-16">
          <h2 className="font-display text-4xl font-bold" style={{ color: NAVY }}>
            Benefícios para todos
          </h2>
          <p className="mt-3 text-slate-500">Do gestor ao morador, do diretor ao aluno.</p>

          <div className="mt-10 grid flex-1 grid-cols-2 gap-10">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Building2 className="h-7 w-7" style={{ color: ACCENT }} />
                <h3 className="font-display text-xl font-bold" style={{ color: NAVY }}>
                  Para o condomínio / empresa
                </h3>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
                <li>• Recebimento previsível, mês após mês</li>
                <li>• Fim dos transtornos causados pela inadimplência</li>
                <li>• Previsibilidade para manutenções e investimentos</li>
                <li>• Economia com custas e honorários de cobrança</li>
                <li>• Mais transparência na prestação de contas</li>
              </ul>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Users className="h-7 w-7" style={{ color: ACCENT }} />
                <h3 className="font-display text-xl font-bold" style={{ color: NAVY }}>
                  Para o morador / cliente
                </h3>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
                <li>• Sem reajustes extras para cobrir a inadimplência de terceiros</li>
                <li>• Patrimônio preservado pela manutenção em dia</li>
                <li>• Atendimento humano e negociação personalizada</li>
                <li>• Condições especiais para regularização</li>
                <li>• Relação mais saudável com a gestão</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* ---------- 6 · EXEMPLO ---------- */}
      <Slide>
        <SlideHeader n="05" />
        <div className="flex flex-1 flex-col justify-center px-16 py-16">
          <h2 className="font-display text-4xl font-bold" style={{ color: NAVY }}>
            Exemplo ilustrativo
          </h2>
          <p className="mt-3 text-slate-500">
            O impacto da garantia no caixa de um condomínio com inadimplência média.
          </p>

          <div className="mt-10 rounded-2xl border border-slate-200 p-10 shadow-sm">
            <div className="grid grid-cols-3 gap-6">
              {exampleStats.map((s) => (
                <div key={s.label}>
                  <div className="mb-2 flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-slate-400" />
                    <span className="text-xs leading-tight text-slate-500">{s.label}</span>
                  </div>
                  <p className={`font-display text-2xl font-bold ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 border-t border-slate-100 pt-8">
              <TrendingUp className="h-7 w-7" style={{ color: ACCENT }} />
              <span className="text-base text-slate-500">Ganho real no caixa:</span>
              <span className="font-display text-4xl font-bold" style={{ color: ACCENT }}>
                +R$ 6.800/mês
              </span>
            </div>
          </div>

          <p className="mt-8 text-center text-xs leading-relaxed text-slate-400">
            Exemplo ilustrativo. A garantia de repasse é assegurada por contrato, mediante uma taxa
            fixa de serviço sobre a receita, e está sujeita a análise de crédito e documentação.
          </p>
        </div>
      </Slide>

      {/* ---------- 7 · CTA ---------- */}
      <Slide variant="brand">
        <div className="relative flex flex-1 flex-col items-center justify-center px-16 py-16 text-center">
          <img src="/logo-full.svg" alt="IZG" className="h-12 w-auto" />
          <h2 className="mt-12 font-display text-5xl font-bold leading-tight">
            Vamos conversar?
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/70">
            Solicite uma proposta sob medida e descubra quanto a IZG pode garantir de repasse
            previsível para o seu caixa.
          </p>

          <div className="mt-12 space-y-4 text-left">
            <a href={WHATSAPP_URL} className="flex items-center gap-4 text-white/90">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-lg">WhatsApp: (47) 99931-6123</span>
            </a>
            <div className="flex items-center gap-4 text-white/90">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-lg">contato@izgconsultoria.com.br</span>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-lg">izgconsultoria.com.br</span>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default RevenueBrochure;
