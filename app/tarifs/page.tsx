// app/tarifs/page.tsx
export default function Tarifs() {
  const packs = [
    {
      name: "Essentiel",
      price: "99€ / mois",
      items: [
        "Support heures ouvrées",
        "Maintenance préventive",
        "Mises à jour",
      ],
    },
    {
      name: "Business",
      price: "249€ / mois",
      items: ["Support étendu", "Supervision", "Sauvegardes & PRA léger"],
    },
    {
      name: "Premium",
      price: "Sur devis",
      items: ["24/7", "SLA renforcé", "Infogérance complète"],
    },
  ];
  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc]">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Tarifs</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {packs.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-1 text-3xl font-extrabold">{p.price}</div>
              <ul className="mt-3 list-disc pl-5 text-white/70 space-y-1">
                {p.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-white/60 mt-4">
          Prix indicatifs — personnalisation sur demande.
        </p>
      </section>
    </main>
  );
}
