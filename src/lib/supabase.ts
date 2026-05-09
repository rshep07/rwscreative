/**
 * Supabase Client — rwscreative.ca
 *
 * Usage:
 *   1. Create a project at https://supabase.com
 *   2. Copy your project URL and anon key to .env.local:
 *        NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
 *        NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhb...
 *   3. Import `supabase` from this file wherever you need it.
 *
 * Storage example (getting a public image URL):
 *   const { data } = supabase.storage
 *     .from('portfolio-images')
 *     .getPublicUrl('projects/luminary/hero.jpg')
 *   // data.publicUrl → use as image src
 *
 * DB migration example (replacing local data):
 *   const { data: projects } = await supabase
 *     .from('projects')
 *     .select('*')
 *     .order('published_at', { ascending: false })
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL  ?? "";
const supabaseKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Will be a no-op / throw in dev if env vars aren't set — that's fine for V1
export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Get a public URL for a file in Supabase Storage.
 * Bucket must have RLS policy allowing public reads.
 */
export function getStorageUrl(bucket: string, path: string): string {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
