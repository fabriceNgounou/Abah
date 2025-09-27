// app/projets/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Projets & Références — basé sur l'offre PDF
 * - Cartes projets détaillées (besoin → solution → livrables → impact)
 * - Filtres par domaine (Réseaux, Sécurité, Web, Messagerie, Téléphonie, etc.)
 * - Références clients issues de l'annexe (table)
 * - Styles cohérents avec le thème du site
 */

type Project = {
  title: string;
  tag: string; // domaine
  image: string;
  summary: string;
  deliverables: string[];
  steps?: string[];
  impact?: string[];
};

export default function Projets() {
  // --- Projets issus des domaines du PDF (Audit, Réseaux/IT, Maintenance, Messagerie, Téléphonie, Vidéosurveillance, Web, Mailing/Social, Formations)
  const projects: Project[] = [
    {
      title: "Audit de sécurité & tests d’intrusion",
      tag: "Sécurité",
      image: "/audit.png",
      summary:
        "Diagnostic clair de la sécurité du SI : configurations, patching, architecture, conformité et code. Feuille de route sécurité et plan d’amélioration priorisé.",
      deliverables: [
        "Rapport exécutif & technique",
        "Pentest interne/externe",
        "Revue de configuration & architecture",
        "Backlog priorisé + feuille de route",
        "Politique de sauvegarde & PRA",
      ],
      steps: [
        "Cartographie des actifs & exposition",
        "Tests (automatisés + manuels)",
        "Analyse de logs & corrélation",
        "Restitution & transfert de compétences",
        "Re-tests ciblés après remédiation",
      ],
      impact: [
        "Réduction du risque opérationnel",
        "Mise en conformité progressive",
        "Amélioration de la résilience",
      ],
    },
    {
      title: "Déploiement LAN/Wi-Fi multi-site",
      tag: "Réseaux & IT",
      image: "/reseau-globe.png",
      summary:
        "Conception et déploiement d’infrastructures réseaux (câblage, LAN, Wi-Fi, intranet) avec documentation, supervision et haute disponibilité.",
      deliverables: [
        "Étude de site & schéma d’installation",
        "Câblage, brassage, plan d’adressage",
        "Configuration VLAN, QoS, sécurité",
        "Monitoring & alerting",
        "Dossier d’exploitation",
      ],
      steps: [
        "Visite & étude des lieux",
        "Choix techno (filaire/Wi-Fi)",
        "Mise en service & tests",
        "Transfert de compétences",
      ],
      impact: [
        "Couverture fiable",
        "Perf. et sécurité accrues",
        "Exploitation simplifiée",
      ],
    },
    {
      title: "Administration d’infrastructures réseau",
      tag: "Réseaux & IT",
      image: "/parc.png",
      summary:
        "Opérations récurrentes pour garantir la disponibilité : supervision, correctifs, sauvegardes, documentation et astreintes selon contrat.",
      deliverables: [
        "Supervision proactive & tableaux de bord",
        "Politiques de mise à jour",
        "Sauvegardes & restauration test",
        "Procédures d’exploitation",
      ],
      impact: ["Moins d’incidents", "MTTR réduit", "Traçabilité & conformité"],
    },
    {
      title: "Maintenance informatique & support utilisateurs",
      tag: "Maintenance",
      image: "/maintenance.jpg",
      summary:
        "Contrats préventifs/curatifs, hotline et téléassistance. Déplacement sur site < 24h si nécessaire. Mise en service de nouveaux matériels.",
      deliverables: [
        "Planning hebdo/mensuel",
        "Hotline & prise en main à distance",
        "Formation du personnel",
        "Gestion des sauvegardes",
        "Sécurisation des données",
      ],
      steps: [
        "Ticketing & qualification",
        "Diagnostic & résolution",
        "Compte-rendu & REX",
      ],
      impact: [
        "Disponibilité accrue",
        "Productivité améliorée",
        "Coûts maîtrisés",
      ],
    },
    {
      title: "Messagerie d’entreprise (service collaboratif)",
      tag: "Messagerie",
      image: "/messagerie.jpg",
      summary:
        "Plateforme e-mail hautement disponible avec sécurité avancée, archivage, intégrations mobiles/Outlook et gouvernance.",
      deliverables: [
        "Boîtes pro, alias, groupes & listes",
        "Anti-spam/anti-malware, sauvegarde",
        "Archivage & rétention",
        "Migrations & intégrations",
      ],
      impact: [
        "Disponibilité & conformité",
        "Collaboration renforcée",
        "Adoption guidée",
      ],
    },
    {
      title: "Téléphonie d’entreprise (VoIP)",
      tag: "Téléphonie",
      image: "/telephonie.jpg",
      summary:
        "Dimensionnement et déploiement VoIP (IVR, files d’attente, enregistrements). Interop opérateurs via SIP Trunk et télétravail sécurisé.",
      deliverables: [
        "Plan de numérotation & routages",
        "ACD/queues, messages & horaires",
        "Intégrations CRM/helpdesk",
        "Softphones & politiques d’accès",
      ],
      impact: [
        "Expérience appelants améliorée",
        "Suivi KPI & SLA",
        "Flexibilité (remote)",
      ],
    },
    {
      title: "Vidéosurveillance IP — sites sensibles",
      tag: "Sécurité",
      image: "/videosurveillance.jpg",
      summary:
        "Système IP consultable en local/nomade, qualité d’image et fiabilité maximales, stockage redondé et accès sécurisés.",
      deliverables: [
        "Caméras IP & NVR/serveurs",
        "Architecture & rétention",
        "Accès SSO/VPN & journaux",
        "Supervision & alertes",
      ],
      impact: [
        "Traçabilité accrue",
        "Prévention & enquête",
        "Conformité renforcée",
      ],
    },
    {
      title: "Création de site vitrine + hébergement & SEO",
      tag: "Web",
      image: "/web-http.jpg",
      summary:
        "Site vitrine aux normes en vigueur avec hébergement annuel, domaine, e-mails pro, SEO de base et accompagnement au contenu.",
      deliverables: [
        "Cahier des charges & maquettes",
        "Développement & tests",
        "Mise en ligne & analytics",
        "Maintenance & mises à jour",
      ],
      steps: [
        "Recueil des besoins",
        "Conception & intégration",
        "Recette & publication",
        "Formation & transfert",
      ],
      impact: ["Visibilité", "Crédibilité", "Leads entrants"],
    },
    {
      title: "Refonte de site web (optimisation & modernisation)",
      tag: "Web",
      image: "/web-http.jpg",
      summary:
        "Relookage et optimisation d’un site existant : performance, SEO, accessibilité, conformité et amélioration de l’UX.",
      deliverables: [
        "Audit & backlog d’améliorations",
        "Nouveau design system",
        "Optimisations techniques/SEO",
        "Plan de migration & redirections",
      ],
      impact: [
        "Meilleurs scores Core Web Vitals",
        "SEO up",
        "Conversion améliorée",
      ],
    },
    {
      title: "Mailing list & annonces ponctuelles",
      tag: "Mailing & Social",
      image: "/messagerie.jpg",
      summary:
        "Campagnes e-mail pour fidéliser, relancer ou annoncer de nouveaux produits/tarifs. Templates brandés & segmentation.",
      deliverables: [
        "Newsletters mensuelles",
        "Templates & charte visuelle",
        "Suivi ouverture/clics",
        "Optimisation continue",
      ],
      impact: ["Fidélisation", "Activation prospects", "Mesure ROI"],
    },
    {
      title: "Social marketing — présence & animation",
      tag: "Mailing & Social",
      image: "/facebook.jpg",
      summary:
        "Promotion de l’activité, annonces d’événements, animation de communauté via les réseaux sociaux (Facebook, Twitter…).",
      deliverables: [
        "Calendrier éditorial",
        "Création visuels & posts",
        "Modération & reporting",
        "Campagnes sponsorisées (selon besoin)",
      ],
      impact: ["Audience qualifiée", "Notoriété", "Trafic vers le site"],
    },
    {
      title: "Formations — Systèmes, Office, Internet & Maintenance",
      tag: "Formations",
      image: "/messagerie.jpg",
      summary:
        "Modules opérationnels sur site ou hors site : Windows/Linux, Office (Word/Excel/PowerPoint/Access), Internet & sécurité, maintenance utilisateur.",
      deliverables: [
        "Supports remis aux apprenants",
        "Tableau de bord (planning + contenu)",
        "Évaluations & attestations",
        "Adaptation au niveau",
      ],
      impact: [
        "Montée en compétences",
        "Moins d’incidents",
        "Autonomie accrue",
      ],
    },
  ];

  // --- Références (PDF : annexe “Nos Références”)
  const references: Array<[string, string]> = [
    ["ENEO CAMEROON S.A", "Contrôle d’accès"],
    ["DOMAYO FARMING S.A", "Maintenance informatique"],
    ["ALUTOLE S.A", "Maintenance informatique"],
    ["ST Expertise Comptable", "Maintenance informatique"],
    ["STUDELY S.A.R.L", "Maintenance informatique"],
    ["CLS AUDIT CONSEIL S.A.R.L", "Maintenance informatique"],
    ["PICOM S.A.R.L", "Maintenance informatique"],
    ["GOLDEN PREMIUM S.A.R.L", "Maintenance informatique"],
    ["ETS TCHAMGOUE SAHA ELIE", "Maintenance informatique"],
    ["COPROTEV S.A.R.L", "Maintenance informatique"],
    [
      "MOBICOMT S.A.R.L",
      "Conception & déploiement du parc · Maintenance · Social marketing",
    ],
    ["AT GRAPHILINE INDUSTRY", "Maintenance informatique"],
    [
      "ASCOMFISC S.A.R.L",
      "Admin & maintenance du parc · Fourniture d’équipements",
    ],
    ["ETS TEGA ECLAIRAGE", "Révision & maintenance du parc"],
  ];

  // --- Filtres par tags
  const allTags = useMemo(
    () => ["Tous", ...Array.from(new Set(projects.map((p) => p.tag)))],
    [projects]
  );
  const [activeTag, setActiveTag] = useState<string>("Tous");

  const filtered = useMemo(
    () =>
      activeTag === "Tous"
        ? projects
        : projects.filter((p) => p.tag === activeTag),
    [activeTag, projects]
  );

  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc] pt-20">
      {/* HERO */}
      <section className="container mx-auto px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Projets & Références
        </h1>
        <p className="muted max-w-3xl">
          Exemples de réalisations et prestations typiques : audit de sécurité,
          réseaux & IT, maintenance, messagerie, téléphonie d’entreprise,
          vidéosurveillance IP, web, campagnes e-mailing et social marketing,
          ainsi que formations opérationnelles.
        </p>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mt-5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`btn !px-3 !py-2 ${
                activeTag === tag ? "" : "opacity-80"
              }`}
              style={{
                background:
                  "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* GRID PROJETS */}
      <section className="container mx-auto px-6 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <article key={i} className="card overflow-hidden rounded-2xl">
              <div className="relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={800}
                  className="w-full h-44 md:h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0" />
                <div className="absolute bottom-2 left-3 text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20">
                  {p.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/80">{p.summary}</p>

                {/* Livrables */}
                {p.deliverables?.length ? (
                  <>
                    <h4 className="mt-3 font-semibold">Livrables</h4>
                    <ul className="list-disc pl-5 text-white/75 space-y-1 mt-1">
                      {p.deliverables.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {/* Étapes */}
                {p.steps?.length ? (
                  <>
                    <h4 className="mt-3 font-semibold">Étapes clés</h4>
                    <ol className="list-decimal pl-5 text-white/75 space-y-1 mt-1">
                      {p.steps.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ol>
                  </>
                ) : null}

                {/* Impact */}
                {p.impact?.length ? (
                  <>
                    <h4 className="mt-3 font-semibold">Impact</h4>
                    <ul className="list-disc pl-5 text-white/75 space-y-1 mt-1">
                      {p.impact.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <div className="mt-4 flex gap-2">
                  <Link
                    href="/devis"
                    className="btn inline-flex"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
                    }}
                  >
                    Discuter d’un projet
                  </Link>
                  <a
                    href="#references"
                    className="btn inline-flex !bg-transparent border"
                  >
                    Voir nos références
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION “ÉTUDE DE CAS” (exemple détaillé) */}
      <section className="container mx-auto px-6 py-10">
        <div className="card pad">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-[28px] mb-2">
                Étude de cas — « LAN/Wi-Fi multi-site »
              </h2>
              <p className="muted">
                Objectif : couvrir plusieurs bâtiments avec un réseau fiable,
                segmenté et sécurisé (VLAN, QoS), avec supervision et procédures
                d’exploitation.
              </p>
              <ul className="list-disc pl-5 muted mt-2 space-y-1">
                <li>Visite de site & schéma d’implantation</li>
                <li>Brassage, plan d’adressage, VLAN & politiques d’accès</li>
                <li>Contrôleurs Wi-Fi & points d’accès managés</li>
                <li>Monitoring & alerting — documentation d’exploitation</li>
              </ul>
              <p className="muted mt-2">
                Résultat : disponibilité renforcée, performance accrue et
                simplification des opérations quotidiennes.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/reseau-globe.png"
                  alt="Étude de cas réseaux"
                  width={1400}
                  height={900}
                  className="w-full h-full object-cover aspect-[16/10]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉFÉRENCES */}
      <section id="references" className="container mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-[28px] mb-4">Quelques références</h2>
        <div className="card pad overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[var(--muted,#8aa0c9)]">
              <tr>
                <th className="py-2 pr-3">Entreprise</th>
                <th className="py-2">Prestations</th>
              </tr>
            </thead>
            <tbody className="align-top">
              {references.map(([c, p], idx) => (
                <tr
                  key={idx}
                  className="border-t border-[rgba(138,160,201,.15)]"
                >
                  <td className="py-2 pr-3">{c}</td>
                  <td className="py-2">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted mt-3">
            Liste extraite de l’offre de prestations — maintenance, réseaux,
            contrôle d’accès, social marketing et fourniture d’équipements.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="container mx-auto px-6 pb-16">
        <div className="card pad border border-dashed border-[rgba(138,160,201,.35)] flex flex-wrap items-center justify-between gap-4">
          <p className="subtitle !m-0">
            Vous avez un projet similaire (audit, réseaux, téléphonie, web,
            etc.) ?
          </p>
          <Link
            className="btn"
            href="/devis"
            style={{
              background:
                "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
            }}
          >
            Demander un devis
          </Link>
        </div>
      </section>

      {/* Styles locaux */}
      <style jsx>{`
        :root {
          --bg: #0b1220;
          --card: #101a2f;
          --muted: #8aa0c9;
          --text: #e8eefc;
          --primary: #3b82f6;
          --accent: #10b981;
          --warning: #f59e0b;
          --radius: 16px;
          --shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
        }
        .muted {
          color: var(--muted);
        }
        .subtitle {
          color: var(--muted);
        }
        .card {
          background: radial-gradient(
              1200px 600px at 10% -10%,
              rgba(59, 130, 246, 0.12),
              transparent
            ),
            linear-gradient(
              180deg,
              rgba(16, 26, 47, 0.92),
              rgba(16, 26, 47, 0.72)
            );
          border: 1px solid rgba(138, 160, 201, 0.18);
          box-shadow: var(--shadow);
          border-radius: 16px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 600;
          color: white;
          box-shadow: 0 6px 24px rgba(34, 211, 238, 0.35);
          transition: transform 0.15s;
          border: 1px solid transparent;
        }
        .btn:hover {
          transform: translateY(-1px);
        }
        .btn.border {
          border-color: rgba(138, 160, 201, 0.35);
          color: var(--muted);
        }
      `}</style>
    </main>
  );
}
