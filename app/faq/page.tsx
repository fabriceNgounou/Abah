// app/faq/page.tsx
export default function FAQ() {
  const items = [
    {
      q: "Intervenez-vous à distance et sur site ?",
      a: "Oui. Nous proposons les deux, avec SLA défini au contrat.",
    },
    {
      q: "Assurez-vous un support 24/7 ?",
      a: "Oui, via hotline et prise en charge à distance selon votre pack.",
    },
    {
      q: "Faites-vous l’hébergement et les emails ?",
      a: "Oui. Hébergement, domaines, e-mails pro et configuration.",
    },
    {
      q: "Proposez-vous la vidéosurveillance IP ?",
      a: "Oui, de l’audit au déploiement et à la maintenance.",
    },
  ];
  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc]">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>
        <div className="space-y-3">
          {items.map((it, i) => (
            <details
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <summary className="cursor-pointer font-semibold">{it.q}</summary>
              <p className="mt-2 text-white/70">{it.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
