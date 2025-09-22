-- Extensions utiles (Supabase a souvent pgcrypto déjà actif, on sécurise)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

/* =========================
   ENUMS
   ========================= */
DO $$ BEGIN
  CREATE TYPE public.service_type AS ENUM ('AUDIT','RESEAUX','WEB');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.devis_status AS ENUM ('PENDING','APPROVED','REJECTED');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;


/* =========================
   RBAC (roles / users)
   ========================= */
CREATE TABLE IF NOT EXISTS public.roles (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,              -- 'admin','editor','viewer'
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.users_roles (
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  role_id INT  REFERENCES public.roles(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, role_id)
);


/* =========================
   MEDIA
   ========================= */
CREATE TABLE IF NOT EXISTS public.media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url TEXT NOT NULL,
  alt TEXT,
  width INT,
  height INT,
  mime TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);


/* =========================
   CMS: pages, posts
   ========================= */
CREATE TABLE IF NOT EXISTS public.pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content JSONB,
  cover_id UUID REFERENCES public.media(id),
  seo_title TEXT,
  seo_description TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_by UUID REFERENCES public.users(id),
  updated_by UUID REFERENCES public.users(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.post_categories (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS public.post_tags (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content JSONB,
  cover_id UUID REFERENCES public.media(id),
  category_id INT REFERENCES public.post_categories(id),
  seo_title TEXT,
  seo_description TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_by UUID REFERENCES public.users(id),
  updated_by UUID REFERENCES public.users(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.posts_tags (
  post_id UUID REFERENCES public.posts(id) ON DELETE CASCADE,
  tag_id  INT  REFERENCES public.post_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);


/* =========================
   SERVICES & PORTFOLIO
   ========================= */
CREATE TABLE IF NOT EXISTS public.service_categories (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,           -- Audit, Réseaux & IT, Maintenance, etc.
  slug TEXT UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id INT REFERENCES public.service_categories(id) ON DELETE SET NULL,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_description TEXT,
  details JSONB,                       -- listes / offres
  icon VARCHAR(64),
  cover_id UUID REFERENCES public.media(id),
  order_index INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ⚠️ On garde UNE table "projects" (pas de doublon "Project")
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  client_name TEXT,
  location TEXT,
  summary TEXT,
  content JSONB,
  cover_id UUID REFERENCES public.media(id),
  started_on DATE,
  finished_on DATE,
  -- lien optionnel vers une demande de devis (si projet issu d'un devis)
  created_from_devis_id UUID,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.project_services (
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, service_id)
);


/* =========================
   TEMOIGNAGES / FAQ
   ========================= */
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name TEXT NOT NULL,
  author_role TEXT,
  company TEXT,
  quote TEXT NOT NULL,
  author_avatar_id UUID REFERENCES public.media(id),
  rating INT CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);


/* =========================
   CONTACTS / DEVIS / NEWSLETTER
   ========================= */
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  service_slug TEXT,
  status TEXT DEFAULT 'new',              -- new|read|replied|archived
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Demandes de devis (ex-"DevisRequest") en snake_case
CREATE TABLE IF NOT EXISTS public.devis_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_type public.service_type NOT NULL,
  budget_min NUMERIC(12,2),
  budget_max NUMERIC(12,2),
  details TEXT,
  source TEXT,
  status public.devis_status NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- FK du projet vers la demande de devis (remplace l'ancien "Project_createdFromDevisId_fkey")
ALTER TABLE public.projects
  ADD CONSTRAINT projects_created_from_devis_fk
  FOREIGN KEY (created_from_devis_id)
  REFERENCES public.devis_requests(id)
  ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX IF NOT EXISTS projects_updated_at_idx ON public.projects(updated_at);

CREATE TABLE IF NOT EXISTS public.quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_slug TEXT,
  budget_min NUMERIC(12,2),
  budget_max NUMERIC(12,2),
  details TEXT,
  status TEXT DEFAULT 'new',              -- new|qualified|proposed|won|lost
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  confirmed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now()
);


/* =========================
   FORMATIONS
   ========================= */
CREATE TABLE IF NOT EXISTS public.training_categories (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,             -- SE, MS OF, ISA, MSI
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS public.training_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id INT REFERENCES public.training_categories(id) ON DELETE SET NULL,
  code TEXT UNIQUE NOT NULL,             -- ex: 'SE 003'
  title TEXT NOT NULL,
  description TEXT,
  duration_hours INT,
  level TEXT,                            -- débutant/intermédiaire/avancé
  created_at TIMESTAMPTZ DEFAULT now()
);


/* =========================
   SETTINGS (clé/valeur)
   ========================= */
CREATE TABLE IF NOT EXISTS public.settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);


/* =========================
   SEEDS DE BASE
   ========================= */
-- Catégories de services
INSERT INTO public.service_categories (name, slug) VALUES
('Audit Informatique','audit'),
('Réseaux & IT Solutions','reseaux-it'),
('Maintenance Informatique','maintenance'),
('Messagerie d’entreprise','messagerie'),
('Téléphonie d’entreprise','telephonie'),
('Vidéosurveillance','videosurveillance'),
('Web Services','web'),
('Formations','formations')
ON CONFLICT (slug) DO NOTHING;

-- Catégories de formation
INSERT INTO public.training_categories (code, name) VALUES
('SE','Systèmes d’exploitation'),
('MS OF','Microsoft Office'),
('ISA','Internet & Services associés'),
('MSI','Maintenance informatique')
ON CONFLICT (code) DO NOTHING;

-- Modules (exemples)
INSERT INTO public.training_modules (category_id, code, title)
SELECT id,'SE 003','Initiation Windows 10'
FROM public.training_categories WHERE code='SE'
ON CONFLICT (code) DO NOTHING;

INSERT INTO public.training_modules (category_id, code, title)
SELECT id,'MS OF 2','Excel pour travaux professionnels'
FROM public.training_categories WHERE code='MS OF'
ON CONFLICT (code) DO NOTHING;

INSERT INTO public.training_modules (category_id, code, title)
SELECT id,'ISA 001','Internet, messagerie & recherches rapides'
FROM public.training_categories WHERE code='ISA'
ON CONFLICT (code) DO NOTHING;

INSERT INTO public.training_modules (category_id, code, title)
SELECT id,'MSI 002','Sécurité informatique en environnement pro'
FROM public.training_categories WHERE code='MSI'
ON CONFLICT (code) DO NOTHING;
