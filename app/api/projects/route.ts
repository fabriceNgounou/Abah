// app/api/projects/route.ts
export const runtime = "nodejs";

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
    const payload = await req.json();
    let {
      title,
      slug,
      summary,
      content,
      coverUrl,
      tags,
      clientName,
      createdFromDevisId,
      isPublished, // facultatif
    } = payload ?? {};

    if (!title?.trim() || !slug?.trim()) {
      return NextResponse.json(
        { error: "title et slug requis" },
        { status: 400 }
      );
    }

    // Nettoyage
    title = String(title).trim();
    slug = String(slug).trim().toLowerCase();

    // tags: toujours un tableau de strings
    const tagsArray: string[] = Array.isArray(tags)
      ? tags.map((t: unknown) => String(t))
      : typeof tags === "string" && tags.length
      ? tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

    const created = await prisma.project.create({
      data: {
        title,
        slug,
        summary: summary ? String(summary) : null,
        content: content ? String(content) : null,
        coverUrl: coverUrl ? String(coverUrl) : null,
        clientName: clientName ? String(clientName) : null,
        tags: tagsArray,
        isPublished: Boolean(isPublished) || false,
        createdFromDevisId: createdFromDevisId ?? null,
      },
    });

    return NextResponse.json({ ok: true, id: created.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
