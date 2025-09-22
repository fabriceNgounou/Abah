import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const projects = await prisma.project.findMany({
    where: { isPublished: true },
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  try {
    const {
      title,
      slug,
      summary,
      content,
      coverUrl,
      tags,
      clientName,
      createdFromDevisId,
    } = await req.json();
    if (!title || !slug) {
      return NextResponse.json(
        { error: "title et slug requis" },
        { status: 400 }
      );
    }
    const created = await prisma.project.create({
      data: {
        title,
        slug,
        summary,
        content,
        coverUrl,
        clientName,
        tags: Array.isArray(tags) ? tags : [],
        isPublished: false,
        createdFromDevisId: createdFromDevisId ?? null,
      },
    });
    return NextResponse.json({ ok: true, id: created.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
