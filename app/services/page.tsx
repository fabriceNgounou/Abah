// app/services/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * Page Services — version longue & descriptive
 * - Sections alternées (image gauche/droite)
 * - Détails : bénéfices, livrables, process, cas d’usage, FAQ
 * - Styles locaux alignés avec le thème AABAH
 */

export default function Services() {
  const Feature = ({
    icon,
    title,
    children,
  }: {
    icon: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="flex gap-3 items-start">
      <div className="min-w-[36px] h-[36px] grid place-items-center rounded-lg bg-[rgba(34,197,94,.1)] border border-[rgba(34,197,94,.25)] text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <div className="muted">{children}</div>
      </div>
    </div>
  );

  const Bullet = ({ children }: { children: React.ReactNode }) => (
    <li className="pl-1">{children}</li>
  );

  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc] pt-20">
      {/* HERO */}
      <section className="container mx-auto px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Nos services IT — <span className="text-[#10b981]">sécurité</span>,{" "}
          <span className="text-[#3b82f6]">réseaux</span>,{" "}
          <span className="text-[#f59e0b]">web</span> &{" "}
          <span className="text-[#a78bfa]">accompagnement</span>
        </h1>
        <p className="muted max-w-3xl mt-3">
          De l’audit de sécurité aux infrastructures réseaux & maintenance,
          jusqu’aux services de messagerie, téléphonie IP, vidéosurveillance et
          création/gestion de sites web. Nous opérons avec des engagements
          mesurables (SLA), des livrables concrets et un support multi-canal
          réactif.
        </p>

        {/* Navigation interne */}
        <nav className="flex flex-wrap gap-2 mt-6">
          {[
            ["#audit", "Audit"],
            ["#reseaux", "Réseaux & Consulting"],
            ["#maintenance", "Maintenance"],
            ["#messagerie", "Messagerie"],
            ["#telephonie", "Téléphonie"],
            ["#videosurveillance", "Vidéosurveillance"],
            ["#web", "Web Services"],
            ["#mailing", "Mailing & Social"],
            ["#formations", "Formations"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="btn !px-3 !py-2"
              style={{
                background:
                  "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </section>

      {/* ====== 1) AUDIT ====== */}
      <section id="audit" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* image à gauche */}
          <div className="card overflow-hidden rounded-2xl">
            <Image
              src="/audit.png"
              alt="Audit informatique"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
              priority
            />
          </div>

          {/* texte à droite */}
          <div className="card pad">
            <h2 className="text-2xl md:text-[30px] mb-2">Audit de sécurité</h2>
            <p className="muted">
              Nous réalisons un diagnostic complet de votre SI : configurations,
              patch management, architecture, conformité, code & processus. À
              l’issue, vous disposez d’un plan d’amélioration priorisé et d’une
              feuille de route sécurité pragmatique.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="🛡" title="Pentest & posture">
                Tests interne/externe, revue de configuration, analyse de
                surface d’exposition, recommandations actionnables.
              </Feature>
              <Feature icon="🧭" title="Feuille de route">
                Mesures correctives hiérarchisées, indicateurs de suivi, quick
                wins & chantiers structurants.
              </Feature>
              <Feature icon="🗂" title="Conformité & PCA/PRA">
                Bonnes pratiques, sauvegardes, PRA/PCA adaptés à votre
                criticité, processus d’escalade d’incident.
              </Feature>
              <Feature icon="📊" title="Livrables clairs">
                Rapport exécutif, rapport technique détaillé, backlog de
                tickets, matrices de risques.
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>Cartographie des actifs & dépendances</Bullet>
              <Bullet>
                Scans, validation manuelle & preuve d’exploitation
              </Bullet>
              <Bullet>
                Ateliers de restitution & transfert de compétences
              </Bullet>
              <Bullet>Suivi des remédiations & re-tests ciblés</Bullet>
            </ul>

            <div className="flex gap-3 mt-5">
              <Link
                href="/devis"
                className="btn inline-flex"
                style={{
                  background:
                    "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
                }}
              >
                Demander un audit
              </Link>
              <a href="#faq" className="btn inline-flex !bg-transparent border">
                Questions fréquentes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 2) RÉSEAUX & IT CONSULTING ====== */}
      <section id="reseaux" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* texte à gauche */}
          <div className="card pad md:order-1">
            <h2 className="text-2xl md:text-[30px] mb-2">
              Réseaux &amp; IT Consulting
            </h2>
            <p className="muted">
              Conception, déploiement & administration de réseaux évolutifs :
              LAN, Wi-Fi, VLAN, routage, sécurité, supervision & gouvernance.
              Nous vous accompagnons également dans vos choix IT (design,
              outillage, coûts).
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="🛜" title="Ingénierie réseau">
                Étude de site, schéma d’implantation, choix techno, politique
                d’adressage, haute dispo.
              </Feature>
              <Feature icon="🔐" title="Sécurité réseau">
                Segmentation, durcissement, IDS/IPS, VPN, WAF, politiques
                d’accès, journalisation.
              </Feature>
              <Feature icon="📈" title="Monitoring">
                Supervision proactive, alerting, capacity planning, dashboards &
                SLA.
              </Feature>
              <Feature icon="🤝" title="Conseil & gouvernance">
                Roadmap IT, optimisation de coûts, standardisation & bonnes
                pratiques.
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>Intranet, liaisons inter-sites, Wi-Fi managé</Bullet>
              <Bullet>Documentation & procédures d’exploitation</Bullet>
              <Bullet>Transfert de compétences & coaching équipes</Bullet>
              <Bullet>Support N2/N3 et astreintes si besoin</Bullet>
            </ul>
          </div>

          {/* image à droite */}
          <div className="card overflow-hidden rounded-2xl md:order-last">
            <Image
              src="/reseau-globe.png"
              alt="Conception et déploiement réseaux"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* ====== 3) MAINTENANCE ====== */}
      <section id="maintenance" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* image à gauche */}
          <div className="card overflow-hidden rounded-2xl">
            <Image
              src="/maintenance.jpg"
              alt="Maintenance & support"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </div>

          {/* texte à droite */}
          <div className="card pad">
            <h2 className="text-2xl md:text-[30px] mb-2">
              Maintenance &amp; Support
            </h2>
            <p className="muted">
              Contrats préventifs & curatifs, hotline, téléassistance et
              intervention sur site &lt; 24h. Nous assurons la continuité de
              service, la gestion d’incidents et la mise à jour de votre parc.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="🛠" title="Préventif régulier">
                Plans hebdomadaires/mensuels, inventaire, correctifs, mises à
                jour maîtrisées.
              </Feature>
              <Feature icon="⚡" title="Réactif & suivi">
                Prise en charge rapide, tickets traçables, rapport d’activité &
                REX.
              </Feature>
              <Feature icon="☁️" title="Sauvegarde & PRA">
                Vérif. des sauvegardes, restauration test, documentation PRA.
              </Feature>
              <Feature icon="👥" title="Accompagnement">
                Formation utilisateurs, guides pratiques & bonnes habitudes
                sécurité.
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>Prise en main à distance sécurisée</Bullet>
              <Bullet>Gestion des incidents matériels & logiciels</Bullet>
              <Bullet>
                Installation & mise en service de nouveaux matériels
              </Bullet>
              <Bullet>Tableau de bord & indicateurs SLA</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* ====== 4) MESSAGERIE ====== */}
      <section id="messagerie" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* texte à gauche */}
          <div className="card pad md:order-1">
            <h2 className="text-2xl md:text-[30px] mb-2">
              Messagerie d’entreprise
            </h2>
            <p className="muted">
              Plateforme de messagerie collaborative, hautement disponible, avec
              sécurité avancée, archivage et intégration mobile/Outlook. Nous
              concevons, migrons et opérons vos boîtes pro.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="📧" title="Boîtes & calendriers">
                Alias, groupes, listes, délégations, ressources & salles.
              </Feature>
              <Feature icon="🧰" title="Outils collaboratifs">
                Contacts partagés, tâches/notes, politiques de rétention,
                étiquetage.
              </Feature>
              <Feature icon="🧱" title="Sécurité & conformité">
                Anti-spam/malware, MFA, journaux, sauvegarde & e-discovery.
              </Feature>
              <Feature icon="🚚" title="Migrations">
                Audit, plan de cutover, cohabitation, bascule contrôlée &
                rollback.
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>Accompagnement utilisateurs & guides</Bullet>
              <Bullet>Monitoring santé du service & SLA</Bullet>
              <Bullet>
                Intégration mobiles (iOS, Android) & clients lourds
              </Bullet>
              <Bullet>Automatisations (règles, routage, signatures)</Bullet>
            </ul>
          </div>

          {/* image à droite */}
          <div className="card overflow-hidden rounded-2xl md:order-last">
            <Image
              src="/messagerie.jpg"
              alt="Messagerie collaborative"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* ====== 5) TÉLÉPHONIE ====== */}
      <section id="telephonie" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* image à gauche */}
          <div className="card overflow-hidden rounded-2xl">
            <Image
              src="/telephonie.jpg"
              alt="Téléphonie d’entreprise (VoIP)"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </div>

          {/* texte à droite */}
          <div className="card pad">
            <h2 className="text-2xl md:text-[30px] mb-2">
              Téléphonie d’entreprise (VoIP)
            </h2>
            <p className="muted">
              Nous dimensionnons et déployons des solutions VoIP flexibles : du
              softphone au standard avancé, avec IVR, files d’attente et
              enregistrements.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="☎️" title="Plan de numérotation">
                SDA, extensions, routages, horaires & règles d’ouverture.
              </Feature>
              <Feature icon="🎯" title="Distribution intelligente">
                ACD/queues, priorités, messages, musique d’attente, SLA.
              </Feature>
              <Feature icon="🔌" title="Interopérabilité">
                Opérateurs SIP Trunk, passerelles, intégrations CRM/helpdesk.
              </Feature>
              <Feature icon="🏠" title="Télétravail sécurisé">
                Softphones multi-plateformes, VPN, MFA, politiques posture.
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>Statistiques d’appels & rapports de performance</Bullet>
              <Bullet>Enregistrements & conformité</Bullet>
              <Bullet>Accompagnement adoption & formation</Bullet>
              <Bullet>Plan de reprise & haute disponibilité</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* ====== 6) VIDÉOSURVEILLANCE ====== */}
      <section id="videosurveillance" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* texte à gauche */}
          <div className="card pad md:order-1">
            <h2 className="text-2xl md:text-[30px] mb-2">
              Vidéosurveillance IP
            </h2>
            <p className="muted">
              Systèmes IP haute qualité, consultables en local ou à distance,
              stockage redondé et politiques d’accès sécurisées. Pilotage via
              interface unifiée.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="📹" title="Caméras & NVR">
                Sélection, implantation, alimentation (PoE), NVR/serveurs,
                rétention.
              </Feature>
              <Feature icon="🕵️" title="Accès & audit">
                Comptes, rôles, SSO/VPN, journaux d’accès & conformité.
              </Feature>
              <Feature icon="🧩" title="Intégrations">
                Contrôle d’accès, capteurs, alertes, supervision centralisée.
              </Feature>
              <Feature icon="🧯" title="Résilience">
                RAID, bascule, sauvegarde, scénarios de continuité.
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>Architecture & schéma de câblage</Bullet>
              <Bullet>Maintenance & mises à jour firmware</Bullet>
              <Bullet>Politiques de confidentialité & enregistrements</Bullet>
              <Bullet>Tableau de bord & alertes temps réel</Bullet>
            </ul>
          </div>

          {/* image à droite */}
          <div className="card overflow-hidden rounded-2xl md:order-last">
            <Image
              src="/videosurveillance.jpg"
              alt="Vidéosurveillance en entreprise"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* ====== 7) WEB SERVICES ====== */}
      <section id="web" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* image à gauche */}
          <div className="card overflow-hidden rounded-2xl">
            <Image
              src="/web-http.jpg"
              alt="Création de sites web"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </div>

          {/* texte à droite */}
          <div className="card pad">
            <h2 className="text-2xl md:text-[30px] mb-2">
              Création &amp; refonte de sites
            </h2>
            <p className="muted">
              Sites vitrines & dynamiques, hébergement, e-mails professionnels,
              nom de domaine, SEO et maintenance. Méthode cadrée de la prise de
              besoin à la mise en ligne.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="🧱" title="Cadrage & design">
                Cahier des charges, UX/UI, maquettes, design system.
              </Feature>
              <Feature icon="⚙️" title="Développement">
                Intégration, CMS/headless, sécurité & performance.
              </Feature>
              <Feature icon="🚀" title="Mise en ligne">
                Recette, SEO technique, analytics, CDN & cache.
              </Feature>
              <Feature icon="🔁" title="Suivi & évolutions">
                Maintenance applicative, correctifs & petites évolutions.
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>Rédaction & optimisation SEO on-page</Bullet>
              <Bullet>Politique de sauvegardes & staging</Bullet>
              <Bullet>Conformité (cookies, RGPD selon contexte)</Bullet>
              <Bullet>Accompagnement éditorial & calendrier</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* ====== 8) MAILING & SOCIAL ====== */}
      <section id="mailing" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* texte à gauche */}
          <div className="card pad md:order-1">
            <h2 className="text-2xl md:text-[30px] mb-2">
              Mailing &amp; Social Marketing
            </h2>
            <p className="muted">
              Fidélisez vos clients et développez votre audience avec des
              newsletters ciblées et une présence sociale cohérente.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="✉️" title="Newsletters">
                Templates brandés, listes segmentées, automation & tests A/B.
              </Feature>
              <Feature icon="📣" title="Réseaux sociaux">
                Calendrier éditorial, visuels, publications & modération.
              </Feature>
              <Feature icon="📊" title="Mesure & itération">
                Taux d’ouverture/clics, attribution, optimisation continue.
              </Feature>
              <Feature icon="🔗" title="Intégrations">
                Formulaires, CRM, pixels & conversions (si applicable).
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>Annonces ponctuelles (nouveaux prix/produits)</Bullet>
              <Bullet>Relances & nurturing</Bullet>
              <Bullet>Guides de ton & charte éditoriale</Bullet>
              <Bullet>Rapports mensuels clairs</Bullet>
            </ul>
          </div>

          {/* image à droite */}
          <div className="card overflow-hidden rounded-2xl md:order-last">
            <Image
              src="/facebook.jpg"
              alt="Campagnes sociales"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* ====== 9) FORMATIONS ====== */}
      <section id="formations" className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* image à gauche (contexte bureautique) */}
          <div className="card overflow-hidden rounded-2xl">
            <Image
              src="/messagerie.jpg"
              alt="Formations & outils"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[16/10]"
            />
          </div>

          {/* texte à droite */}
          <div className="card pad">
            <h2 className="text-2xl md:text-[30px] mb-2">Formations</h2>
            <p className="muted">
              Formations sur site (vos locaux) ou hors site (nos locaux), avec
              supports fournis et tableau de bord (planning + contenu).
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Feature icon="🧑‍💻" title="Systèmes d’exploitation">
                Windows 7/8/10 & Linux — initiation, administration de base.
              </Feature>
              <Feature icon="📐" title="Suite Office">
                Word, Excel, PowerPoint, Access — usages professionnels & bonnes
                pratiques.
              </Feature>
              <Feature icon="🌐" title="Internet & services">
                Messagerie, recherches (bases & avancées), sécurité utilisateur.
              </Feature>
              <Feature icon="🧰" title="Maintenance utilisateur">
                Sauvegardes, antivirus, hygiène numérique & dépannage courant.
              </Feature>
            </div>

            <ul className="list-disc pl-5 muted space-y-1 mt-4">
              <Bullet>
                Supports numériques/physiques remis à chaque apprenant
              </Bullet>
              <Bullet>Évaluations, attestation & plan de progression</Bullet>
              <Bullet>
                Adaptation au niveau & aux cas concrets de l’entreprise
              </Bullet>
              <Bullet>Possibilité de sessions intensives (bootcamps)</Bullet>
            </ul>

            <Link
              href="/devis"
              className="btn inline-flex mt-5"
              style={{
                background:
                  "linear-gradient(135deg,var(--accent,#10b981),#22c55e)",
              }}
            >
              Planifier une session
            </Link>
          </div>
        </div>
      </section>

      {/* ====== SLA & PROCESSUS GLOBAL ====== */}
      <section className="container mx-auto px-6 py-10">
        <div className="card pad">
          <h2 className="text-2xl md:text-[30px] mb-2">
            Engagements & processus
          </h2>
          <p className="muted">
            Nos interventions suivent un cycle clair, avec des indicateurs de
            qualité & de délai suivis dans un tableau de bord partagé.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Feature icon="📞" title="1. Prise en charge">
              Qualification &gt;1h (remote) pour les demandes contractuelles.
            </Feature>
            <Feature icon="🧪" title="2. Diagnostic">
              Analyse, reproduction, collecte d’infos, plan d’action.
            </Feature>
            <Feature icon="🧯" title="3. Remédiation">
              Correctif, test, validation, rédaction post-mortem si incident.
            </Feature>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Feature icon="⏱" title="SLA typiques">
              Remote &lt; 1h, intervention sur site &lt; 24h (jours ouvrés),
              selon contrat.
            </Feature>
            <Feature icon="📑" title="Livrables">
              CR d’intervention, rapports mensuels, backlog & roadmaps.
            </Feature>
            <Feature icon="🔁" title="Amélioration continue">
              Revues régulières, KPIs, actions préventives, formations ciblées.
            </Feature>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" className="container mx-auto px-6 py-10">
        <div className="card pad">
          <h2 className="text-2xl md:text-[30px] mb-2">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-1">
                Pouvez-vous intervenir à distance ?
              </h3>
              <p className="muted">
                Oui, la plupart des demandes sont traitées en téléassistance
                sécurisée. Nous nous déplaçons lorsque nécessaire.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Proposez-vous des contrats sur mesure ?
              </h3>
              <p className="muted">
                Absolument. Nous adaptons la couverture, les SLA et les plages
                horaires selon vos enjeux.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Pouvez-vous former nos équipes ?
              </h3>
              <p className="muted">
                Oui, des modules sur mesure (systèmes, Office, sécurité, réseau)
                sont disponibles, avec supports fournis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Accompagnez-vous la conformité ?
              </h3>
              <p className="muted">
                Nous aidons à aligner vos pratiques avec les référentiels
                applicables et à documenter les processus.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <Link
              href="/devis"
              className="btn"
              style={{
                background:
                  "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
              }}
            >
              Discuter de votre besoin
            </Link>
            <a href="#audit" className="btn !bg-transparent border">
              Voir l’audit
            </a>
          </div>
        </div>
      </section>

      {/* CTA global */}
      <section className="container mx-auto px-6 pb-14">
        <div className="card pad border border-dashed border-[rgba(138,160,201,.35)] flex flex-wrap items-center justify-between gap-4">
          <p className="subtitle !m-0">
            Un besoin précis ? Audit, déploiement réseau, messagerie,
            téléphonie, vidéosurveillance, maintenance, web ou formations.
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
        .pad {
          padding: 28px;
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
        /* Aspect ratio util (fallback si aspect-[16/10] non supporté) */
        @supports not (aspect-ratio: 16 / 10) {
          .aspect-16-10 {
            position: relative;
            padding-top: 62.5%;
          }
          .aspect-16-10 > * {
            position: absolute;
            inset: 0;
          }
        }
      `}</style>
    </main>
  );
}
