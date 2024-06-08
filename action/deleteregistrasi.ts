"use server";
import { supabase } from "@/utils/supabase";

interface DeleteProps {
  id: number;
}

const DeleteMurid = async ({ id }: DeleteProps) => {
  try {
    if (!id) {
      throw new Error("ID tidak valid");
    }

    const { data, error } = await supabase
      .from("registrasi_murid")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error menghapus data:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Kesalahan tak terduga:", error);
    return { success: false, error: error };
  }
};

export default DeleteMurid;