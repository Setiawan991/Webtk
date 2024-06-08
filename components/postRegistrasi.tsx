
import { supabase } from "@/utils/supabase";
import MuridRegistrasi from "./muridRegistrasi";

interface dataProps {
  id:number
  nama: string;
  alamat: string;
  no_hp: string;
  tanggal_lahir:string
  nama_orangtua: string;
  status:string
}

const PostRegistrasi = async () => {
  let data: dataProps[] = [];

  try {
    const { data: fechedData, error } = await supabase
      .from("registrasi_murid")
      .select();
    if (error) {
      console.log(error);
    }
    data = fechedData as dataProps[];
  } catch (error) {
    console.log("error : ", error);
  }

  return (
    <>
      <MuridRegistrasi data={data} />
    </>
  );
};

export default PostRegistrasi;
