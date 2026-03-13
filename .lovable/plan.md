

# Parallax Espacial + Scroll Reveal + Logo na Navbar

## Visão Geral

Adicionar camadas de animação baseadas em scroll usando `framer-motion` em todas as seções, com parallax nos elementos de fundo e scroll reveal (fade-in + slide-up + stagger) no conteúdo. Restaurar o logo-icon na navbar.

## Dependência

- Instalar `framer-motion` (não está no projeto ainda)

## Alterações

### 1. Novo hook: `src/hooks/useScrollReveal.tsx`
- Hook reutilizável que expõe motion variants para fade-in + slide-up
- Função helper para gerar delay de stagger baseado em index

### 2. Novo componente: `src/components/ParallaxBackground.tsx`
- Componente que renderiza orbs de gradiente (ciano/púrpura) com blur intenso
- Usa `useScroll` + `useTransform` do framer-motion para mover os orbs a velocidade reduzida (parallax)
- Reutilizável em qualquer seção

### 3. `src/components/HeroSection.tsx`
- Envolver orbs de fundo existentes com `motion.div` + parallax via `useScroll`/`useTransform`
- Conteúdo principal: fade-in simples no mount (sem scroll trigger, já está visível)

### 4. `src/components/ProblemSection.tsx`
- Adicionar `ParallaxBackground` com orbs sutis
- Título: scroll reveal fade-in + slide-up via `motion.div` + `whileInView`
- Cards: scroll reveal com stagger (delay incremental por index)

### 5. `src/components/SolutionsHub.tsx`
- Parallax nos elementos de fundo existentes (gradient overlay)
- Título: scroll reveal
- Cards: stagger reveal — cada card com `transition.delay = index * 0.15`

### 6. `src/components/TrustSection.tsx`
- Parallax background sutil
- Conteúdo: scroll reveal com stagger nos trust badges

### 7. `src/components/CTASection.tsx`
- Parallax no gradient de fundo
- Conteúdo: scroll reveal

### 8. `src/components/Navbar.tsx`
- Restaurar `<img src="/logo-icon.svg" className="h-10 w-auto" />` antes dos links de navegação

## Padrão de animação (consistente em todas as seções)

```text
// Scroll Reveal (conteúdo)
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>

// Stagger (cards)
<motion.div
  ...same as above
  transition={{ delay: index * 0.15, duration: 0.6 }}
>

// Parallax (backgrounds)
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
<motion.div style={{ y }} />
```

## Performance
- `whileInView` com `viewport={{ once: true }}` — anima uma única vez
- Parallax usa apenas `transform` (GPU-accelerated, sem layout thrashing)
- Sem scroll-jacking — o usuário mantém controle total do scroll

