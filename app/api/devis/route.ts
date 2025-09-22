import { NextResponse } from "next/server";
import { prisma } from "@/lib/db"; // ✅ chemin corrigé
import { DevisStatus, ServiceType } from "@prisma/client";

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
    } = body;

    if (!contactName || !email || !serviceType) {
      return NextResponse.json(
        { error: "contactName, email, serviceType requis" },
        { status: 400 }
      );
    }

    // Validation simple serviceType
    const svc: ServiceType = ["AUDIT", "RESEAUX", "WEB"].includes(serviceType)
      ? serviceType
      : "WEB";

    const saved = await prisma.devisRequest.create({
      data: {
        company,
        contactName,
        email,
        phone,
        serviceType: svc,
        budgetMin,
        budgetMax,
        details,
        source,
        status: DevisStatus.PENDING,
      },
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
