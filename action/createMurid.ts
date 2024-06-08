"use server";
import { IMurid, supabase } from "@/utils/supabase";
import { redirect } from "next/navigation";

export const actionMurid = async (
  formData: FormData
): Promise<{ success: boolean; error?: string }> => {
  const nama = formData.get("nama") as string;
  const kelas = formData.get("kelas") as string;
  const foto = formData.get("foto") as string;
  const TTL = formData.get("ttl") as string;
  const alamat = formData.get("alamat") as string;

  const data: IMurid = {
    nama,
    kelas,
    foto,
    TTL,
    alamat,
  };

  const { data: insertedData, error } = await supabase
    .from("murid")
    .insert(data);
  if (error) {
    console.error("Error data:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
};