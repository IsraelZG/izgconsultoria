

# IZG Assessoria e Consultoria — Landing Page Build Plan

## Overview

Build a complete dark-mode "Fintech Deep Tech" landing page in React + Tailwind CSS, following the PRD specifications. The page will be a single-page layout with 7 sections, fully responsive and optimized for B2B lead conversion via WhatsApp.

## Files to Create/Modify

### 1. `index.html` — Add Google Fonts
Add `Space Grotesk` (titles) and `Inter` (body) via Google Fonts link.

### 2. `src/index.css` — Override design tokens
Replace the CSS variables with the dark Fintech palette:
- Background: `#0B1120`
- Surface: `#1E293B`
- Accent Cyan: `#00E5FF`
- Accent Purple: `#8B5CF6`
- Text: `#F8FAFC` / `#94A3B8`
- Set font families (Space Grotesk for headings, Inter for body)

### 3. `tailwind.config.ts` — Extend theme
Add custom colors (`deep-space`, `surface`, `cyan-accent`, `purple-accent`), font families, and glow box-shadow utilities.

### 4. `src/pages/Index.tsx` — Main landing page
Compose all section components in order. Single scrollable layout.

### 5. Section Components (new files):

- **`src/components/Navbar.tsx`** — Sticky header with glassmorphism (`backdrop-blur-md`), infinity icon + "IZG" wireframe logo placeholder, nav links (smooth scroll), WhatsApp CTA button.

- **`src/components/HeroSection.tsx`** — Full-viewport hero with subtle dot grid background pattern (CSS), imposing H1 headline, subheadline, gradient CTA button with WhatsApp icon and glow effect.

- **`src/components/ProblemSection.tsx`** — Headline addressing pain points + 3-column grid of glassmorphic cards (Personalização, Alta Performance, Atendimento Humano) with Lucide icons.

- **`src/components/SolutionsHub.tsx`** — Data-driven section. Define a `solutions` array of objects `{ icon, title, description }`. Render cards via `.map()` in a responsive CSS Grid (4 cols → 2 → 1). Cards use translucent backgrounds with subtle borders.

- **`src/components/TrustSection.tsx`** — Minimal authority/trust section with text about methodology, security guarantee, and a row of monochrome partner/tech logo placeholders.

- **`src/components/CTASection.tsx`** — Centered final conversion block with headline, supporting text, and large WhatsApp CTA button with glow.

- **`src/components/Footer.tsx`** — Institutional footer with quick links, email, CNPJ placeholder, and policy links.

### 6. `src/App.css` — Clear default styles
Remove Vite boilerplate styles that conflict with the dark theme.

## Key Technical Decisions

- **WhatsApp links**: Use `https://wa.me/5500000000000` as placeholder (easy to replace later).
- **Icons**: All from `lucide-react` (Infinity, Code, TrendingUp, Calculator, Zap, Shield, MessageCircle, etc.).
- **Animations**: Subtle CSS transitions on hover for cards and buttons. Glow effect via Tailwind `shadow-[0_0_20px_rgba(0,229,255,0.3)]` on hover.
- **Background pattern**: CSS radial-gradient dot grid on hero section for the "interconnected mesh" effect.
- **Responsiveness**: Mobile-first with `grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4` patterns.
- **Smooth scroll**: CSS `scroll-behavior: smooth` on html + anchor links in navbar.

## Component Data Structure (Solutions Hub)

```text
const solutions = [
  { icon: Code,        title: "Software Customizado",        description: "..." },
  { icon: TrendingUp,  title: "Gestão Financeira & Crédito", description: "..." },
  { icon: Calculator,  title: "Contabilidade Estratégica",   description: "..." },
  { icon: Zap,         title: "Energia Inteligente",         description: "..." },
]
```

Rendered via `solutions.map()` into a responsive grid of glassmorphic cards.

## Visual Architecture

```text
┌─────────────────────────────────────────┐
│  NAVBAR (sticky, glassmorphism)         │
│  [∞ IZG]  Soluções Diferenciais Contato│
├─────────────────────────────────────────┤
│  HERO (full viewport, dot grid bg)     │
│  H1 + Subheadline + CTA [WhatsApp]    │
├─────────────────────────────────────────┤
│  PROBLEM (3-col cards)                 │
├─────────────────────────────────────────┤
│  SOLUTIONS HUB (4-col dynamic grid)   │
├─────────────────────────────────────────┤
│  TRUST (text + logo bar)              │
├─────────────────────────────────────────┤
│  CTA FINAL (centered block)           │
├─────────────────────────────────────────┤
│  FOOTER                               │
└─────────────────────────────────────────┘
```

