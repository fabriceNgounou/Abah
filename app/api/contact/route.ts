// app/api/contact/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "name, email, message requis" },
        { status: 400 }
      );
    }

    const saved = await prisma.contactMessage.create({
      data: {
        name: String(name),
        email: String(email),
        phone: phone ? String(phone) : null,
        subject: subject ? String(subject) : null,
        message: String(message),
      },
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
