
export default function Apropos() {
  return (
    <section className="min-h-screen bg-[#0b1220] text-[#e8eefc] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-center text-[#3b82f6] mb-8">
          À propos de TMTECHNOLOGY
        </h1>

        {/* Card principale */}
        <div className="bg-[#101a2f] rounded-[16px] shadow-xl p-8 space-y-6">
          <p className="text-lg leading-relaxed">
            TMTECH est une{" "}
            <span className="text-[#10b981] font-semibold">
              PME camerounaise
            </span>{" "}
            spécialisée dans la prestation de services informatiques et mobiles.
            L’informatique a toujours été une passion avant d’être un métier,
            c’est pourquoi nous nous appliquons chaque jour à offrir des{" "}
            <span className="text-[#f59e0b]">
              solutions innovantes et adaptées
            </span>{" "}
            aux besoins de nos clients.
          </p>

          <p className="text-lg leading-relaxed">
            Notre objectif est simple :{" "}
            <span className="font-semibold text-[#3b82f6]">
              garantir professionnalisme et satisfaction client
            </span>
            . Nous vous accompagnons avec des prestations de haute qualité,
            allant de la{" "}
            <span className="text-[#10b981]">sécurité informatique</span> à la{" "}
            <span className="text-[#10b981]">
              création de sites web modernes
            </span>
            , en passant par le{" "}
            <span className="text-[#10b981]">social marketing</span> et les{" "}
            <span className="text-[#10b981]">formations spécialisées</span>.
          </p>

          {/* Valeurs */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#0b1220] rounded-[16px] p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">
                Innovation
              </h3>
              <p className="text-sm text-[#8aa0c9]">
                Toujours à l’écoute des nouvelles technologies pour vous offrir
                le meilleur.
              </p>
            </div>

            <div className="bg-[#0b1220] rounded-[16px] p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#10b981] mb-2">
                Fiabilité
              </h3>
              <p className="text-sm text-[#8aa0c9]">
                Des solutions durables et robustes pour accompagner la
                croissance de votre entreprise.
              </p>
            </div>

            <div className="bg-[#0b1220] rounded-[16px] p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#f59e0b] mb-2">
                Satisfaction
              </h3>
              <p className="text-sm text-[#8aa0c9]">
                Un service centré sur vos besoins, avec comme priorité votre
                réussite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
