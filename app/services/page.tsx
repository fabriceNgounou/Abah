// app/services/page.tsx
export default function Services() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc]">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Nos services</h1>

        {/* Audit */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
          <h2 className="text-2xl font-semibold">Audit informatique</h2>
          <p className="mt-2 text-white/70">
            Diagnostic clair et détaillé de votre SI : sécurité, tests
            d’intrusion, conformité, recommandations et plan d’action.
          </p>
        </div>

        {/* Réseaux & IT Solutions */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
          <h2 className="text-2xl font-semibold">Réseaux & IT Solutions</h2>
          <ul className="mt-2 grid md:grid-cols-2 gap-x-8 gap-y-2 text-white/70 list-disc pl-5">
            <li>IT Consulting (conseil, suivi, assistance)</li>
            <li>Conception & déploiement LAN / Wi-Fi / câblage</li>
            <li>Administration de parc & serveurs</li>
            <li>
              Maintenance préventive & curative, hotline & prise en main à
              distance
            </li>
            <li>Téléphonie d’entreprise (VoIP)</li>
            <li>Vidéosurveillance IP</li>
            <li>Solutions de messagerie d’entreprise</li>
            <li>Soutien technique 24/7</li>
            <li>Vente de matériels informatiques</li>
          </ul>
        </div>

        {/* Web services */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Web Services</h2>
          <ul className="mt-2 list-disc pl-5 text-white/70 space-y-1">
            <li>Création de sites vitrines & dynamiques</li>
            <li>Hébergement & référencement (SEO), emails pro</li>
            <li>Mailing list / campagnes e-mail</li>
          </ul>
        </div>

        <p className="sr-only">
          Contenu inspiré de votre document d’offre de services.
        </p>
      </section>
    </main>
  );
}
