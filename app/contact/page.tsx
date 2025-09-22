"use client";

import React from "react";

export default function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(
      "Merci ! Votre message a été simulé. (À relier ensuite avec un backend ou un CRM)."
    );
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div className="card pad">
          <h2>Contact & Devis</h2>
          <p className="muted">
            Dites-nous en plus sur votre besoin. Nous revenons vers vous avec
            une proposition personnalisée.
          </p>
          <form name="contact" method="post" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Votre nom" required />
            <input
              type="email"
              name="email"
              placeholder="Votre e-mail"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Entreprise (optionnel)"
            />
            <textarea
              name="message"
              placeholder="Décrivez votre projet : audit, maintenance, site web, téléphonie, etc."
              required
            ></textarea>
            <button className="btn secondary" type="submit">
              Envoyer la demande
            </button>
          </form>
        </div>

        <div className="card pad">
          <h2>Coordonnées</h2>
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
        </div>
      </div>
    </section>
  );
}
