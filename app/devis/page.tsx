// app/devis/page.tsx
"use client";

import Image from "next/image";

export default function Devis() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Merci ! Votre demande de devis a bien été envoyée (démo).");
  }

  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc]">
      <section className="container mx-auto px-6 py-16 max-w-3xl text-center">

        {/* ✅ Logo en haut de la page */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.png"        // ton logo placé dans /public/logo.png
            alt="TMTECH Logo"
            width={400}            // tu peux ajuster la taille
            height={120}
            priority
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">Demande de devis</h1>
        <p className="text-white/70 mb-6">
          Décrivez votre besoin (audit, réseaux, téléphonie, vidéosurveillance,
          site web, maintenance…).
        </p>

        <form onSubmit={onSubmit} className="grid gap-3 text-left">
          <div className="flex items-center gap-4">
            <h4 className="whitespace-nowrap">Nom / Entreprise</h4>
            <input
              className="flex-1 rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
              placeholder="Nom / Entreprise"
              required
            />
          </div>

          <div>
            <h4>E-mail</h4>
            <input
              className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
              type="email"
              placeholder="E-mail"
              required
            />
          </div>

          <div>
            <h4>Téléphone :</h4>
            <input
              className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
              placeholder="Téléphone (optionnel)"
            />
          </div>

          <div>
            <h4>Typologie du problème :</h4>
            <select className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3">
              <option>Audit</option>
              <option>Réseaux & IT</option>
              <option>Web</option>
              <option>Téléphonie</option>
              <option>Vidéosurveillance</option>
              <option>Messagerie</option>
            </select>
          </div>
          
          <div>
            <h4>Détails du projet…</h4>
            <textarea
              className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3 min-h-[140px]"
              placeholder="Détails du projet…"
              required
            />
          </div>

          <button
            className="mt-4 rounded-full px-5 py-3 font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#10b981,#22c55e)" }}
          >
            Envoyer la demande
          </button>
        </form>
      </section>
    </main>
  );
}
