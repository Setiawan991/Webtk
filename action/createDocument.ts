"use server";
import { getuserData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";

import { redirect } from "next/navigation";

export const action = async (fromData: FormData): Promise<void> => {
  const dokumen = fromData.get("dokumen") as File;

  const file_name = dokumen.name;
  const { value, error }: any = await supabase.storage
    .from("dokumen")
    .upload("public/" + file_name, dokumen, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) return error;

  redirect("/dashboard");
};
