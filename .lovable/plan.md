

# Logo destaque na Hero Section

## Proposta

Colocar o **logo completo (logo + "IZG")** em tamanho grande no topo da Hero Section, logo acima do headline. Isso cria um impacto visual forte de marca assim que o visitante chega na página.

Para a **Navbar**, duas opções:

1. **Remover o logo da navbar** e deixar apenas os links de navegação + CTA — a navbar fica mais limpa e minimalista
2. **Manter o ícone pequeno** na navbar como está

## Alterações

### `src/components/HeroSection.tsx`
- Adicionar `<img src="/logo-full.svg" />` centralizado acima do H1
- Tamanho grande: `h-20 sm:h-24 md:h-28` com `mb-8` de espaçamento
- Manter todo o restante (headline, subtítulo, CTA)

### `src/components/Navbar.tsx` (opcional)
- Remover o logo da navbar, mantendo apenas links + botão CTA
- Ou manter como está — o logo pequeno na navbar não conflita

## Resultado visual

```text
┌─────────────────────────────────────┐
│  NAVBAR (sem logo, apenas links)    │
├─────────────────────────────────────┤
│                                     │
│        [LOGO+IZG grande]            │
│                                     │
│   H1: Inteligência Tecnológica...   │
│   Subtítulo                         │
│   [CTA WhatsApp]                    │
│                                     │
└─────────────────────────────────────┘
```

