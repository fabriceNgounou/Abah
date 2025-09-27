// app/apropos/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Apropos() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc] pt-20">
      {/* HERO */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-[1.05fr_.95fr] items-center gap-7">
          <div className="card pad">
            <div className="flex items-center gap-3 font-bold mb-3">
              <Image
                src="/logo.png"
                alt="Logo AABAH"
                width={200}
                height={60}
                priority
              />
              <span>Solutions Informatiques AABAH</span>
            </div>

            <p className="badge">
              🔒 Audit • 🧭 Consulting • 🛜 Réseaux • 🌐 Web
            </p>

            <h1 className="title">
              Nous sécurisons, modernisons et{" "}
              <span style={{ color: "var(--accent,#10b981)" }}>optimisons</span>{" "}
              votre système d’information.
            </h1>

            <p className="subtitle">
              De l’audit de sécurité aux réseaux & maintenance, de la messagerie
              pro à la téléphonie et la vidéosurveillance, jusqu’à la création
              de sites web et aux formations : AABAH accompagne les PME et
              institutions avec un suivi proactif.
            </p>

            <div className="badges">
              <span className="badge">Pentest & recommandations</span>
              <span className="badge">Administration de parc</span>
              <span className="badge">Support à distance & on-site</span>
              <span className="badge">Hébergement & e-mails pro</span>
              <span className="badge">SEO & mailing list</span>
            </div>

            <div className="kpi mt-4">
              <div className="item">
                <div className="muted">Prise en charge</div>
                <div>
                  <strong>&lt; 1h</strong> (remote)
                </div>
              </div>
              <div className="item">
                <div className="muted">Disponibilité</div>
                <div>
                  <strong>24/7</strong> multi-canaux
                </div>
              </div>
              <div className="item">
                <div className="muted">Sérénité</div>
                <div>
                  <strong>PRA/Backups</strong> cadrés
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="#domaines"
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
                }}
              >
                Découvrir nos expertises
              </Link>
              <Link
                href="/devis"
                className="btn secondary"
                style={{
                  background:
                    "linear-gradient(135deg,var(--accent,#10b981),#22c55e)",
                }}
              >
                Obtenir un devis
              </Link>
            </div>
          </div>

          <div className="card pad" aria-label="Illustration réseau & sécurité">
            <Image
              src="/reseau-globe.png"
              alt="Réseau & infrastructure"
              width={900}
              height={600}
              className="w-full h-auto rounded-[16px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section id="about" className="section">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div className="card pad">
            <h2 className="text-2xl md:text-[28px] mb-3">Qui sommes-nous ?</h2>
            <p className="muted">
              AABAH est une PME spécialisée dans les prestations informatiques
              et mobiles. L’informatique est une passion avant d’être notre
              métier ; nous visons des services de qualité et des solutions
              innovantes, adaptées à vos besoins (audit, réseaux, maintenance,
              web, etc.). Notre objectif : votre satisfaction durable.{" "}
              {/* PDF-based */}
            </p>
            <div className="mt-4">
              <ul className="list-disc pl-5 muted space-y-1">
                <li>Audit informatique (sécurité & tests d’intrusion)</li>
                <li>
                  Réseaux & IT Solutions (consulting, maintenance, messagerie)
                </li>
                <li>Téléphonie d’entreprise & vidéosurveillance IP</li>
                <li>Web services (sites, mailing list, social marketing)</li>
                <li>
                  Formations (Office, réseaux & systèmes, internet & services)
                </li>
              </ul>
            </div>
          </div>
          <div className="card pad">
            <Image
              src="/parc.png"
              alt="Gestion de parc de bout en bout"
              width={900}
              height={700}
              className="w-full h-auto rounded-[16px]"
            />
          </div>
        </div>
      </section>


      {/* RÉFÉRENCES */}
      <section id="references" className="section">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-[28px] mb-4">
            Références (extraits)
          </h2>
          <div className="card pad overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-[var(--muted,#8aa0c9)]">
                <tr>
                  <th className="py-2 pr-3">Entreprise</th>
                  <th className="py-2">Prestations</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {[
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
                    "Déploiement parc • Maintenance • Social Marketing",
                  ],
                  ["AT GRAPHILINE INDUSTRY", "Maintenance informatique"],
                  [
                    "ASCOMFISC S.A.R.L",
                    "Admin & maintenance parc • Fourniture d’équipements",
                  ],
                  ["ETS TEGA ECLAIRAGE", "Révision & maintenance du parc"],
                ].map(([c, p], i) => (
                  <tr
                    key={i}
                    className="border-t border-[rgba(138,160,201,.15)]"
                  >
                    <td className="py-2 pr-3">{c}</td>
                    <td className="py-2">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card pad border border-dashed border-[rgba(138,160,201,.35)] mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="subtitle !m-0">
              Besoin d’un <strong>audit</strong>, d’une{" "}
              <strong>maintenance</strong> ou d’un
              <strong> déploiement réseau</strong> ?
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
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(138,160,201,.15)] py-7 text-[var(--muted,#8aa0c9)]">
        <div className="container mx-auto px-6 flex flex-wrap justify-between gap-3">
          <div>
            © {year} Solutions Informatiques AABAH. Tous droits réservés.
          </div>
          <div className="muted">
            Mentions légales · Politique de confidentialité
          </div>
        </div>
      </footer>

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
        .title {
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .subtitle {
          font-size: clamp(14px, 2.5vw, 18px);
          margin: 0 0 20px;
          color: var(--muted);
        }
        .muted {
          color: var(--muted);
        }
        .card {
          background: radial-gradient(
              1200px 600px at 10% -10%,
              rgba(59, 130, 246, 0.15),
              transparent
            ),
            linear-gradient(
              180deg,
              rgba(16, 26, 47, 0.9),
              rgba(16, 26, 47, 0.7)
            );
          border: 1px solid rgba(138, 160, 201, 0.18);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }
        .pad {
          padding: 28px;
        }
        .kpi {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .kpi .item {
          background: rgba(16, 26, 47, 0.9);
          border: 1px solid rgba(138, 160, 201, 0.15);
          padding: 14px;
          border-radius: 14px;
          text-align: center;
        }
        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 12px 0 4px;
        }
        .badge {
          border: 1px solid rgba(138, 160, 201, 0.25);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 13px;
          background: linear-gradient(
            180deg,
            rgba(16, 26, 47, 0.7),
            rgba(16, 26, 47, 0.5)
          );
        }
        .service .icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--accent), #34d399);
          margin-bottom: 12px;
        }
        .section {
          padding: 42px 0;
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
        }
        .btn:hover {
          transform: translateY(-1px);
        }
        .btn.secondary {
          box-shadow: 0 6px 24px rgba(34, 197, 94, 0.35);
        }
        @media (max-width: 950px) {
          .kpi {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </main>
  );
}
