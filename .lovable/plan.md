

# Refatoramento Completo de Copy e Estrutura da Landing Page

## Resumo

Atualizar toda a copy e iconografia da landing page para refletir o posicionamento de consultoria de tecnologia focada em transformação de processos financeiros manuais em sistemas web automatizados. Mantém stack, animações e estética atuais.

## Arquivos a alterar

### 1. `src/components/HeroSection.tsx`
- Adicionar badge acima do H1: "Consultoria em Tecnologia & Automação Financeira"
- H1: "Transformamos seus processos financeiros manuais em softwares de alta performance."
- Subtítulo: "Substituímos planilhas complexas e rotinas operacionais lentas por sistemas sob medida..."
- Remover layout lado-a-lado com logo (mover logo só pro navbar/footer)
- CTA: "Agendar Mapeamento de Processos" (manter link WhatsApp)

### 2. `src/components/ProblemSection.tsx`
- Título: "Onde a sua operação está perdendo velocidade?"
- 3 cards com novos ícones:
  - `FileSpreadsheet` — "Planilhas Frágeis e Complexas"
  - `RefreshCw` — "Processos Manuais Repetitivos"
  - `Eye` — "Falta de Visão Centralizada"
- Textos descritivos conforme especificado

### 3. `src/components/SolutionsHub.tsx`
- Título: "Soluções sob medida para o seu ecossistema financeiro"
- Reduzir de 4 para 3 cards (grid `lg:grid-cols-3`):
  - `FileCode` — "Digitalização de Planilhas e Processos"
  - `Bot` — "Automação de Rotinas Financeiras"
  - `Settings` — "Sistemas de Gestão Customizados"
- Tags atualizadas para cada serviço
- Remover subtítulo genérico antigo

### 4. `src/components/TrustSection.tsx`
- Título: "Inteligência de negócio aliada à tecnologia."
- Texto de apoio: "Não apenas escrevemos código. Nós entendemos profundamente de fluxo de caixa..."
- Manter os 2 trust badges (Sigilo Absoluto, Conformidade Total) — conteúdo já alinhado

### 5. `src/components/CTASection.tsx`
- Título: "Pronto para eliminar processos manuais e ganhar eficiência real?"
- Subtítulo: "Fale com um dos nossos especialistas e agende um mapeamento dos processos da sua empresa."
- CTA: "Agendar Diagnóstico" com ícone WhatsApp

### 6. `src/components/Navbar.tsx`
- CTA do navbar: "Falar com Especialista" (já está correto)
- Links de navegação permanecem

### 7. `src/components/Footer.tsx`
- Atualizar descrição da empresa para refletir novo posicionamento (consultoria de tecnologia para processos financeiros)

## Não altera
- Stack (React, Tailwind, Framer Motion)
- Paleta de cores e tema
- Animações de scroll e parallax
- Estrutura de componentes e roteamento
- Configuração do WhatsApp

