// app/projets/page.tsx
export default function Projets() {
  const projets = [
    { title: "Déploiement LAN/Wi-Fi multi-site", tag: "Réseaux & IT" },
    { title: "Mise en place téléphonie VoIP", tag: "Téléphonie d’entreprise" },
    { title: "Site vitrine + SEO", tag: "Web" },
    { title: "Vidéosurveillance IP", tag: "Sécurité" },
  ];
  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc]">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Projets & Références</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projets.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-sm text-white/60">{p.tag}</div>
              <h3 className="text-xl font-semibold mt-1">{p.title}</h3>
              <p className="mt-2 text-white/70">
                Brève description du besoin, de la solution et de l’impact.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
