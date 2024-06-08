"use server";
import { supabase } from "@/utils/supabase";
import { error } from "console";
import { SourceTextModule } from "vm";
interface deleteProps {
  id: String | number[] | number;
}

export const DeleteMurid = async ({ id }: deleteProps) => {
  try {
    if (!id) {
      throw "undifined id";
    }
    const { data, error } = await supabase.from("murid").delete().eq("id", id);
  } catch (error) {
    return { succes: false, error: error };
  }

  return { succes: true };
};