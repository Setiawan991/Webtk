"use server";
import { RegistrasiMurid, supabase } from "@/utils/supabase";

const actionRegistrasiMurid = async (
  formData: FormData
): Promise<{ success: boolean; error?: string }> => {
  const nama = formData.get("nama") as string;
  const alamat = formData.get("alamat") as string;
  const no_hp = formData.get("no_hp") as string;
  const tanggal_lahir = formData.get("tanggal_lahir") as string;
  const nama_orangtua = formData.get("nama_orangtua") as string;
  const status = formData.get("status") as string;

  const data: RegistrasiMurid = {
    nama,
    alamat,
    no_hp,
    tanggal_lahir,
    nama_orangtua,
    status,
  };
  try {
    const { data: fechedData, error } = await supabase
      .from("registrasi_murid")
      .insert(data);
    if (error) {
      console.error("Error data:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    throw error;
  }
};
export default actionRegistrasiMurid;
