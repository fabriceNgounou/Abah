// app/devis/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type ServiceType = "AUDIT" | "RESEAUX" | "WEB";

export default function Devis() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | string>(null);
  const [err, setErr] = useState<null | string>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // mapping des champs du formulaire → payload API
    const payload = {
      company: formData.get("company")?.toString() || undefined,
      contactName: formData.get("contactName")!.toString(),
      email: formData.get("email")!.toString(),
      phone: formData.get("phone")?.toString() || undefined,
      serviceType: formData.get("serviceType")!.toString() as ServiceType,
      budgetMin: formData.get("budgetMin")
        ? Number(formData.get("budgetMin"))
        : undefined,
      budgetMax: formData.get("budgetMax")
        ? Number(formData.get("budgetMax"))
        : undefined,
      details: formData.get("details")!.toString(),
      source: "site",
    };

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Erreur inconnue");
      setOk("Merci ! Votre demande a été envoyée.");
      form.reset();
    } catch (e: any) {
      setErr(e.message ?? "Échec de l’envoi");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc]">
      <section className="container mx-auto px-6 py-16 max-w-3xl text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.png"
            alt="Solutions AABAH Logo"
            width={400}
            height={120}
            priority
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">Demande de devis</h1>
        <p className="text-white/70 mb-6">
          Décrivez votre besoin (audit, réseaux, web, etc.).
        </p>

        {/* Messages */}
        {ok && (
          <div className="mb-4 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-left">
            {ok}
          </div>
        )}
        {err && (
          <div className="mb-4 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-left">
            {err}
          </div>
        )}

        <form onSubmit={onSubmit} className="grid gap-3 text-left">
          <div className="flex items-center gap-4">
            <h4 className="whitespace-nowrap">Nom / Entreprise</h4>
            <input
              name="company"
              className="flex-1 rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
              placeholder="Nom / Entreprise (optionnel)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h4>Contact</h4>
              <input
                name="contactName"
                className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
                placeholder="Votre nom complet"
                required
              />
            </div>

            <div>
              <h4>E-mail</h4>
              <input
                name="email"
                className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
                type="email"
                placeholder="E-mail"
                required
              />
            </div>
          </div>

          <div>
            <h4>Téléphone :</h4>
            <input
              name="phone"
              className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
              placeholder="Téléphone (optionnel)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <h4>Type de service</h4>
              {/* Mappe sur l’ENUM: AUDIT | RESEAUX | WEB */}
              <select
                name="serviceType"
                className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
                required
                defaultValue="AUDIT"
              >
                <option value="AUDIT">Audit</option>
                <option value="RESEAUX">Réseaux & IT</option>
                <option value="WEB">Web</option>
              </select>
            </div>

            <div>
              <h4>Budget min (FCFA/CAD)</h4>
              <input
                name="budgetMin"
                type="number"
                min={0}
                className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
                placeholder="0"
              />
            </div>

            <div>
              <h4>Budget max (FCFA/CAD)</h4>
              <input
                name="budgetMax"
                type="number"
                min={0}
                className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3"
                placeholder="ex: 100000"
              />
            </div>
          </div>

          <div>
            <h4>Détails du projet…</h4>
            <textarea
              name="details"
              className="w-full rounded-xl border border-white/15 bg-[#0e1830] px-4 py-3 min-h-[140px]"
              placeholder="Décrivez votre besoin…"
              required
            />
          </div>

          <button
            disabled={loading}
            className="mt-4 rounded-full px-5 py-3 font-semibold text-white disabled:opacity-60"
            style={{ background: "linear-gradient(135deg,#10b981,#22c55e)" }}
          >
            {loading ? "Envoi en cours…" : "Envoyer la demande"}
          </button>
        </form>
      </section>
    </main>
  );
}
