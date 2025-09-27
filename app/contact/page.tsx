"use client";

import React, { useRef, useState, useEffect } from "react";

export default function ContactSection() {
  const [description, setDescription] = useState("");
  const [chars, setChars] = useState(0);
  const MAX = 800;

  const taRef = useRef<HTMLTextAreaElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(
      "Merci ! Votre message a été simulé. (À relier ensuite avec un backend ou un CRM)."
    );
  }

  // Auto-redimensionnement du textarea
  useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, [description]);

  const quickChips = [
    "Audit de sécurité",
    "Réseau / Wi-Fi",
    "Maintenance & support",
    "Messagerie d’entreprise",
    "Téléphonie VoIP",
    "Vidéosurveillance IP",
    "Site web & SEO",
  ];

  return (
    <section id="contact" className="section">
      <div className="container contact">
        {/* FORMULAIRE */}
        <div className="card pad">
          <h2 className="title">Contact & Devis</h2>
          <p className="muted">
            Dites-nous en plus sur votre besoin. Nous revenons vers vous avec
            une proposition personnalisée.
          </p>

          <form
            name="contact"
            method="post"
            onSubmit={handleSubmit}
            className="form"
          >
            <div className="grid md:grid-cols-2 gap-3">
              <div className="field">
                <label htmlFor="name">Votre nom</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ex. Marie Dupont"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Votre e-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ex. marie@exemple.com"
                  required
                />
              </div>
              <div>
                <h4>Téléphone :</h4>
                <input
                  name="phone"
                  className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
                  placeholder="Téléphone (optionnel)"
                />
              </div>
              <div className="field md:col-span-2">
                <label htmlFor="company">
                  Entreprise <span className="muted">(optionnel)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Ex. AABAH"
                />
              </div>
            </div>

            {/* CHIPS RAPIDES */}
            <div className="chips">
              {quickChips.map((c) => (
                <button
                  key={c}
                  type="button"
                  className="chip"
                  onClick={() =>
                    setDescription((prev) =>
                      prev
                        ? prev + (prev.endsWith("\n") ? "" : "\n") + "• " + c
                        : "• " + c
                    )
                  }
                >
                  {c}
                </button>
              ))}
            </div>

            {/* TEXTAREA DESCRIPTION */}
            <div className="field">
              <label htmlFor="description">Description du projet</label>
              <textarea
                id="description"
                name="description"
                ref={taRef}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setChars(e.target.value.length);
                }}
                placeholder="Décrivez votre projet : audit de sécurité, déploiement réseau, messagerie, téléphonie, vidéosurveillance, site web & SEO… 
Précisez vos objectifs, contraintes, délais, budget indicatif."
                required
                maxLength={MAX}
                className="desc"
              />
              <div className="counter">
                <div
                  className="bar"
                  style={{ width: `${(chars / MAX) * 100}%` }}
                />
                <span>
                  {chars}/{MAX}
                </span>
              </div>
            </div>

            <button className="btn secondary" type="submit">
              Envoyer la demande
            </button>
          </form>
        </div>

        {/* COORDONNÉES */}
        <div className="card pad">
          <h2 className="title">Coordonnées</h2>
          <p>
            📞 <strong>+1 (343) 558-4430</strong>
          </p>
          <p>
            ✉ <strong>contact@aabah-it.com</strong>
          </p>
          <p>🕘 Support 24/7 — contrat de maintenance</p>

          <div className="badge inline-block mt-2">
            Intervention sur site & à distance
          </div>
          <div className="badge inline-block mt-2">
            Partenariats matériels & cloud
          </div>

          <div className="tips">
            <p className="muted">
              Astuce : pour une estimation rapide, indiquez le nombre
              d’utilisateurs/postes, les sites concernés et votre objectif
              prioritaire (sécurité, performance, coûts…).
            </p>
          </div>
        </div>
      </div>

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
        .section {
          padding: 42px 0;
        }
        .container.contact {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 16px;
          padding: 0 24px;
        }
        @media (max-width: 960px) {
          .container.contact {
            grid-template-columns: 1fr;
          }
        }
        .title {
          font-size: clamp(22px, 2.8vw, 28px);
          margin: 0 0 6px;
        }
        .muted {
          color: var(--muted);
        }

        .card {
          background: radial-gradient(
              1000px 500px at 10% -10%,
              rgba(59, 130, 246, 0.15),
              transparent
            ),
            linear-gradient(
              180deg,
              rgba(16, 26, 47, 0.92),
              rgba(16, 26, 47, 0.74)
            );
          border: 1px solid rgba(138, 160, 201, 0.18);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }
        .pad {
          padding: 26px;
        }

        .form {
          margin-top: 12px;
          display: grid;
          gap: 14px;
        }
        .field {
          display: grid;
          gap: 8px;
        }
        label {
          font-weight: 600;
          font-size: 14px;
        }
        input,
        textarea {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(138, 160, 201, 0.22);
          background: linear-gradient(
            180deg,
            rgba(16, 26, 47, 0.75),
            rgba(16, 26, 47, 0.6)
          );
          color: var(--text);
          padding: 12px 14px;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s, transform 0.05s;
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(232, 238, 252, 0.55);
        }
        input:focus,
        textarea:focus {
          border-color: rgba(59, 130, 246, 0.55);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
        }
        textarea.desc {
          min-height: 120px;
          max-height: 420px;
          resize: vertical;
          line-height: 1.45;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }
        .chip {
          border: 1px solid rgba(138, 160, 201, 0.25);
          background: linear-gradient(
            180deg,
            rgba(16, 26, 47, 0.72),
            rgba(16, 26, 47, 0.55)
          );
          color: var(--text);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 13px;
          transition: transform 0.1s ease, box-shadow 0.15s ease;
        }
        .chip:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(34, 211, 238, 0.15);
        }

        .counter {
          position: relative;
          margin-top: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: var(--muted);
        }
        .counter .bar {
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--primary), #22d3ee);
          transition: width 0.15s ease;
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
          background: linear-gradient(135deg, var(--accent), #22c55e);
          border: 1px solid rgba(34, 197, 94, 0.35);
        }
        .btn.secondary {
          background: linear-gradient(135deg, var(--primary), #22d3ee);
          border-color: rgba(59, 130, 246, 0.35);
        }
        .btn:hover {
          transform: translateY(-1px);
        }

        .badge {
          border: 1px solid rgba(138, 160, 201, 0.25);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 13px;
          background: linear-gradient(
            180deg,
            rgba(16, 26, 47, 0.7),
            rgba(16, 26, 47, 0.55)
          );
          color: var(--text);
        }

        .tips {
          margin-top: 14px;
          padding: 12px;
          border-radius: 12px;
          border: 1px dashed rgba(138, 160, 201, 0.3);
          background: linear-gradient(
            180deg,
            rgba(16, 26, 47, 0.6),
            rgba(16, 26, 47, 0.5)
          );
        }
      `}</style>
    </section>
  );
}
