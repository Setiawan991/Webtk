import { supabase } from "@/utils/supabase";

interface paramsProps {
  id: number;
  checked: String;
}

const UpdateMurid = async ({ id, checked }: paramsProps) => {
  const idmurid = id;
  const checkedmurid = checked;
};

export default UpdateMurid;