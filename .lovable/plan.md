

# Plano: Refatoramento completo de copy + fix de build

## 1. Fix de build — `package.json`
Alterar scripts para usar `npx vite` em vez de `vite`:
- `"dev": "npx vite"`
- `"build": "npx vite build"`
- `"preview": "npx vite preview"`

## 2. `src/components/HeroSection.tsx`
- Manter ícone `MessageCircle` (WhatsApp) no CTA
- Alterar texto do CTA para "Agendar Mapeamento de Processos"
- Manter layout, logo, divisor e proporções atuais

## 3. `src/components/ProblemSection.tsx`
- Título: "Onde a sua operação está perdendo velocidade?"
- 3 cards com ícones `FileSpreadsheet`, `RotateCcw`, `Eye`:
  - "Planilhas Frágeis e Complexas" + descrição
  - "Processos Manuais Repetitivos" + descrição
  - "Falta de Visão Centralizada" + descrição

## 4. `src/components/SolutionsHub.tsx`
- Título: "Soluções sob medida para o seu ecossistema financeiro"
- 3 cards: Digitalização, Automação, Sistemas Customizados
- Ícones: `Monitor`, `Cog`, `LayoutDashboard`
- CTAs: "Solicitar Mapeamento"

## 5. `src/components/TrustSection.tsx`
- Título: "Inteligência de negócio aliada à tecnologia."
- Texto de apoio sobre entendimento de fluxo de caixa e regras de negócio

## 6. `src/components/CTASection.tsx`
- Título: "Pronto para eliminar planilhas e automatizar sua operação?"
- CTA com ícone `MessageCircle`: "Falar com um Especialista"

## 7. `src/components/Navbar.tsx`
- CTA: "Agendar Diagnóstico" (mantendo ícone `MessageCircle`)

## 8. `src/components/Footer.tsx`
- Descrição atualizada para consultoria de tecnologia para processos financeiros

