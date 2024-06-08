import { supabase } from "@/utils/supabase";
import UpdateRegister from "./updateRegister";
interface paramProps {
  id: number;
}

const UpdateServerSide = async ({ id }: paramProps) => {
  const { data, error } = await supabase
    .from("registrasi_murid")
    .select("*")
    .eq("id", id)
    .single();
  console.log(data);

  return (
    <>
      <UpdateRegister data={data} />
    </>
  );
};

export default UpdateServerSide;