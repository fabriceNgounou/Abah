import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

const ALLOWED_SERVICE_TYPES = ["AUDIT", "RESEAUX", "WEB"] as const;
type ServiceTypeLocal = (typeof ALLOWED_SERVICE_TYPES)[number];

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
        { error: "contactName, email et serviceType sont requis" },
        { status: 400 }
      );
    }

    const svc: ServiceTypeLocal = (
      ALLOWED_SERVICE_TYPES as readonly string[]
    ).includes(String(serviceType))
      ? (serviceType as ServiceTypeLocal)
      : "WEB";

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
        company: company ?? null,
        contactName,
        email,
        phone: phone ?? null,
        serviceType: svc, // enum Prisma: AUDIT | RESEAUX | WEB
        budgetMin: bMin ?? null, // Int? → number | null
        budgetMax: bMax ?? null,
        details: details ?? null,
        source: source ?? "site",
        // status: PENDING (défaut dans le modèle)
      },
      select: { id: true },
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (e: any) {
    console.error("Erreur API /api/devis:", e);
    // expose la vraie cause en dev (pratique pour toi)
    return NextResponse.json(
      { error: e?.message || "Erreur serveur" },
      { status: 500 }
    );
  }
}
