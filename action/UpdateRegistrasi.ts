"use server";
import { supabase } from "@/utils/supabase";

interface DataProps {
  id: number;
  nama: string;
  alamat: string;
  no_hp: string;
  tanggal_lahir: string;
  status: string;
  nama_orangtua: string;
}

const UpdateRegistrasi = async (data: DataProps) => {
  const { id, nama, alamat, no_hp, tanggal_lahir, status, nama_orangtua } =
    data;

  try {
    const { data, error } = await supabase
      .from("registrasi_murid")
      .update({ nama, alamat, no_hp, tanggal_lahir, status, nama_orangtua })
      .eq("id", id);
    if (error) {
      return { success: false, error: error };
    }

    return { success: true, data: data };
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
};
export default UpdateRegistrasi;