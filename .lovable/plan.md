

# Ajuste no HeroSection — Divisor + Proporção 33/66

## Alteração em `src/components/HeroSection.tsx` (linhas 41-50)

1. Adicionar o divisor vertical gradiente entre o logo e o H1
2. Aplicar `md:w-1/3` no container do logo e `md:w-2/3` no H1 para a proporção 33%/66%

```tsx
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
  <div className="md:w-1/3 flex justify-center shrink-0">
    <img src="/logo-full.svg" alt="IZG Consultoria" className="h-24 w-auto sm:h-28 md:h-36 lg:h-44" />
  </div>

  <div className="hidden md:block w-1 self-stretch rounded-full bg-gradient-to-b from-primary to-secondary opacity-60" />

  <h1 className="md:w-2/3 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl md:text-left">
    Transformamos seus processos manuais em{" "}
    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      softwares de alta performance.
    </span>
  </h1>
</div>
```

