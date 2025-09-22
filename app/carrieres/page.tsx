// app/carrieres/page.tsx
export default function Carrieres() {
  const jobs = [
    {
      title: "Ingénieur Réseaux (H/F)",
      type: "CDI",
      location: "Douala / Remote",
    },
    {
      title: "Technicien Support N2 (H/F)",
      type: "CDI",
      location: "Yaoundé / Remote",
    },
    {
      title: "Développeur Front-end Next.js (H/F)",
      type: "Freelance",
      location: "Remote",
    },
  ];
  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8eefc]">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Carrières</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((j, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-sm text-white/60">
                {j.type} · {j.location}
              </div>
              <h3 className="text-xl font-semibold mt-1">{j.title}</h3>
              <p className="mt-2 text-white/70">
                Poste ouvert — envoyez CV & lettre à careers@aabah-it.com.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
