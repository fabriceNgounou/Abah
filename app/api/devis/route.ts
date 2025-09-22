// app/api/devis/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import type { Prisma } from "@prisma/client";

// Autorisations côté API (ajuste à tes valeurs réelles du schema)
const ALLOWED_SERVICE_TYPES: readonly Prisma.$Enums.ServiceType[] = [
  "AUDIT",
  "RESEAUX",
  "WEB",
] as const;

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

    // Normalisation / validation "serviceType"
    const svc: Prisma.$Enums.ServiceType = (
      ALLOWED_SERVICE_TYPES as readonly string[]
    ).includes(serviceType)
      ? (serviceType as Prisma.$Enums.ServiceType)
      : "WEB";

    // Optionnel: cast numérique sûr
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
        serviceType: svc,
        budgetMin: bMin,
        budgetMax: bMax,
        details: details?.toString() || null,
        source: source?.toString() || null,
        status: "PENDING" as Prisma.$Enums.DevisStatus, // ← au lieu d'importer DevisStatus
      },
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
