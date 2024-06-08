import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface IMurid {
  nama: String | undefined;
  kelas: String | null | undefined;
  foto: String | undefined;
  TTL: String | undefined;
  alamat: String | undefined;
}

export interface RegistrasiMurid {
  nama: String | undefined;
  alamat: String | undefined;
  no_hp: String | undefined;
  tanggal_lahir: String | undefined
  nama_orangtua: String | undefined;
  status: String| undefined
}