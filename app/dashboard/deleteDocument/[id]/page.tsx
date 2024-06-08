import { supabase } from "@/utils/supabase";
import { redirect } from "next/navigation";

const Page = async ({ params }: any) => {
  const { id } = params;
  const decodeId = decodeURI(id);
  const { data, error } = await supabase.storage
    .from("dokumen")
    .remove(["public/" + decodeId]);

  if (data) {
    redirect("/dashboard/Document");
  } else {
    console.log(error);
  }

  return;
};

export default Page;
