

# Ajuste no HeroSection — Badge + Logo ao lado do H1

## Alterações em `src/components/HeroSection.tsx`

### 1. Badge (linha 36-38)
Trocar texto para: **"Inteligência Tecnológica e Financeira para o seu Negócio escalar."**

### 2. Layout Logo + H1 (linhas 41-46)
- Envolver logo + H1 em um container `flex flex-col md:flex-row items-center gap-4 md:gap-6`
- Lado esquerdo: `<img>` do logo (`/logo-icon.svg`, `h-14 md:h-16`) + texto "IZG" em gradiente, agrupados verticalmente
- Divisor vertical (`hidden md:block w-px h-16 bg-primary/30`) entre logo/IZG e o H1
- H1 fica à direita com `text-left` no desktop
- No mobile: `flex-col` empilha tudo centralizado
- Manter animações Framer Motion e resto da copy intactos

