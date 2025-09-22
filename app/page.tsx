// app/apropos/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Apropos() {
  const year = new Date().getFullYear();

  return (
    // padding-top pour laisser respirer sous la Navbar sticky globale
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc] pt-20">
      {/* HERO (ex-header visuel, sans 2e nav) */}
      <section className="py-20 md:py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-[1.1fr_.9fr] items-center gap-7">
          <div className="card pad">
            <div className="flex items-center gap-3 font-bold mb-3">
              <Image
                src="/logo.png"
                alt="Logo AABAH"
                width={220}
                height={70}
                priority
              />
              <span>Solutions Informatiques AABAH</span>
            </div>

            <p className="badge">
              🔒 Audit • 🧭 Consulting • 🛜 Réseaux • 🌐 Web
            </p>
            <h1 className="title">
              Votre partenaire IT pour des systèmes{" "}
              <span style={{ color: "var(--accent,#10b981)" }}>sécurisés</span>,{" "}
              <span style={{ color: "var(--primary,#3b82f6)" }}>fiables</span>{" "}
              et{" "}
              <span style={{ color: "var(--warning,#f59e0b)" }}>
                performants
              </span>
              .
            </h1>
            <p className="subtitle">
              AABAH accompagne les PME et institutions dans l’audit de sécurité,
              la conception et la maintenance d’infrastructures réseaux, la
              téléphonie et la vidéosurveillance, ainsi que la création et
              l’hébergement de sites web — avec un support proactif 24/7.
            </p>

            <div className="badges">
              <span className="badge">Tests d’intrusion</span>
              <span className="badge">Administration de parc</span>
              <span className="badge">Support 24/7</span>
              <span className="badge">Hébergement & SEO</span>
              <span className="badge">Vente de matériels</span>
            </div>

            <div className="kpi">
              <div className="item">
                <div className="muted">SLA</div>
                <div>
                  <strong>99.9%</strong> dispo
                </div>
              </div>
              <div className="item">
                <div className="muted">Temps de prise en charge</div>
                <div>
                  <strong>&lt; 1h</strong> (remote)
                </div>
              </div>
              <div className="item">
                <div className="muted">Support</div>
                <div>
                  <strong>24/7</strong> multi-canaux
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="#services"
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
                }}
              >
                Découvrir nos services
              </Link>
              <Link
                href="/devis"
                className="btn secondary"
                style={{
                  background:
                    "linear-gradient(135deg,var(--accent,#10b981),#22c55e)",
                }}
              >
                Obtenir une estimation
              </Link>
            </div>
          </div>

          <div className="card pad" aria-label="Illustration réseau & sécurité">
            <img
              alt="Illustration réseau sécurisé"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
              className="w-full rounded-[16px]"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-[28px] mb-4">
            Nos pôles d’expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="card pad service">
              <div className="icon">🛡</div>
              <h3 className="mt-1 mb-2">Audit informatique</h3>
              <p className="muted">
                Évaluez vos risques et renforcez votre posture de sécurité.
              </p>
              <ul className="list-disc pl-5 mt-2 muted">
                <li>Audit de sécurité de SI</li>
                <li>Tests d’intrusion (pentest)</li>
                <li>Recommandations & plan d’action</li>
                <li>Politique de sauvegarde & PRA</li>
              </ul>
            </article>

            <article className="card pad service">
              <div className="icon">🛜</div>
              <h3 className="mt-1 mb-2">Réseaux & IT Solutions</h3>
              <p className="muted">
                Des infrastructures robustes, administrées et monitorées.
              </p>
              <ul className="list-disc pl-5 mt-2 muted">
                <li>Conception & déploiement (LAN/Wi-Fi)</li>
                <li>Administration de parc & serveurs</li>
                <li>Soutien technique sur site & à distance</li>
                <li>Téléphonie d’entreprise (VoIP)</li>
                <li>Vidéosurveillance IP</li>
                <li>Vente de matériels informatiques</li>
              </ul>
            </article>

            <article className="card pad service">
              <div className="icon">🌐</div>
              <h3 className="mt-1 mb-2">Web Services</h3>
              <p className="muted">Votre présence en ligne, de A à Z.</p>
              <ul className="list-disc pl-5 mt-2 muted">
                <li>Sites vitrines & dynamiques</li>
                <li>Hébergement & e-mails pro</li>
                <li>SEO & suivi</li>
                <li>Mailing list (campagnes e-mail)</li>
              </ul>
            </article>
          </div>

          <div className="card pad border border-dashed border-[rgba(138,160,201,.35)] mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="subtitle !m-0">
              Besoin d’un contrat de <strong>maintenance</strong> ou d’un{" "}
              <strong>audit</strong> rapide&nbsp;?
            </p>
            <Link
              className="btn"
              href="/devis"
              style={{
                background:
                  "linear-gradient(135deg,var(--primary,#3b82f6),#22d3ee)",
              }}
            >
              Parlons de votre projet
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
          margin-top: 18px;
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
          transition: transform 0.15s ease;
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
