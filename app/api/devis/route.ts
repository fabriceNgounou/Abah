// app/api/devis/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// On n'importe AUCUN type depuis @prisma/client ici.
// On définit des unions locales basées sur tes valeurs réelles :
const ALLOWED_SERVICE_TYPES = ["AUDIT", "RESEAUX", "WEB"] as const;
type ServiceTypeLocal = (typeof ALLOWED_SERVICE_TYPES)[number];

const DEFAULT_STATUS = "PENDING" as const; // DevisStatus attendu côté DB
type DevisStatusLocal = typeof DEFAULT_STATUS;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      company,
      contactName,
      email,
      phone,
      serviceType,
      budgetMin,
      budgetMax,
      details,
      source,
    } = body ?? {};

    if (!contactName?.trim() || !email?.trim() || !serviceType) {
      return NextResponse.json(
        { error: "contactName, email, serviceType requis" },
        { status: 400 }
      );
    }

    // Validation / normalisation du serviceType envoyé
    const svc: ServiceTypeLocal = (
      ALLOWED_SERVICE_TYPES as readonly string[]
    ).includes(String(serviceType))
      ? (serviceType as ServiceTypeLocal)
      : "WEB";

    // Cast numériques robustes (accepte string "1234")
    const bMin =
      typeof budgetMin === "number"
        ? budgetMin
        : Number.isFinite(Number(budgetMin))
        ? Number(budgetMin)
        : null;

    const bMax =
      typeof budgetMax === "number"
        ? budgetMax
        : Number.isFinite(Number(budgetMax))
        ? Number(budgetMax)
        : null;

    const saved = await prisma.devisRequest.create({
      data: {
        company: company?.toString() || null,
        contactName: contactName.toString(),
        email: email.toString(),
        phone: phone?.toString() || null,
        serviceType: svc, // ← string littérale valide pour l'enum Prisma
        budgetMin: bMin,
        budgetMax: bMax,
        details: details?.toString() || null,
        source: source?.toString() || null,
        status: DEFAULT_STATUS as DevisStatusLocal, // ← string littérale "PENDING"
      } as any, // ← évite les frictions de typings si le client Prisma côté CI n'a pas les enums
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
