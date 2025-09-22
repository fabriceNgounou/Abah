"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/apropos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/contact", label: "Contact" },
  { href: "/devis", label: "Demander un devis", cta: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#0b5cab] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Mets ton logo dans /public/logo.png */}
          <img
            src="/logo.png"
            alt="Solutions Informatiques AABAH"
            className="h-8"
          />
        </Link>

        {/* Liens */}
        <nav id="main-nav" className="flex flex-wrap items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "px-3 py-2 font-medium",
                  "hover:shadow-[inset_0_-3px_0_#7fc3ff]",
                  active ? "shadow-[inset_0_-3px_0_#7fc3ff]" : "",
                  l.cta
                    ? "ml-1 rounded-md border border-white/25 hover:border-[#7fc3ff]"
                    : "",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
