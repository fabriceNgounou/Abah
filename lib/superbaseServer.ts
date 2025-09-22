// lib/supabaseServer.ts
import { createClient } from "@supabase/supabase-js";

export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE!;
  if (!url || !serviceKey) throw new Error("Supabase env vars manquantes");
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}
