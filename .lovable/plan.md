
# Centralizar WhatsApp URL e Estilizar Ícone

## Alterações

### 1. `src/lib/utils.ts`
- Adicionar constante `WHATSAPP_URL` centralizada com URL correta
- Adicionar constante `WHATSAPP_COLOR` para a cor verde do WhatsApp (#25D366)

### 2. `tailwind.config.ts`
- Adicionar cor `whatsapp: "#25D366"` nas configurações de cores

### 3. `src/components/HeroSection.tsx`
- Importar `WHATSAPP_URL` de utils
- Aumentar ícone: `h-6 w-6` → `h-7 w-7`
- Adicionar cor verde WhatsApp via classe `text-whatsapp`

### 4. `src/components/CTASection.tsx`
- Importar `WHATSAPP_URL` de utils
- Aumentar ícone: `h-6 w-6` → `h-7 w-7`
- Adicionar cor verde WhatsApp via classe `text-whatsapp`

### 5. `src/components/Navbar.tsx`
- Importar `WHATSAPP_URL` de utils
- Aumentar ícones: `h-4 w-4` → `h-5 w-5` (desktop e mobile)
- Adicionar cor verde WhatsApp via classe `text-whatsapp`

URL final: `https://wa.me/5547988449215?text=Olá! Gostaria de saber mais sobre os serviços da IZG.` (usada no Navbar, mais completa)
