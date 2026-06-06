CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text NOT NULL,
  receita_prevista numeric,
  inadimplencia_pct numeric,
  consentimento boolean NOT NULL,
  criado_em timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT leads_consentimento_required CHECK (consentimento = true)
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead with consent"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (consentimento = true);