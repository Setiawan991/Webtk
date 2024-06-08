import { supabase } from "@/utils/supabase";
import Link from "next/link";
interface dataProps {
  id: number;
  nama: string;
  alamat: string;
  no_hp: string;
  tanggal_lahir: string;
  nama_orangtua: string;
  status: string;
}
const Page = async () => {
  return (
    <div className="">
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="bg-fuchsia-500 text-white w-96 h-96 ring-1 ring-fuchsia-500 shadow-2xl rounded-xl ">
          <div className="flex justify-center items-center p-2">
            <h1>pendaftaran tahap 2</h1>
          </div>

          <div className="p-5">
            <p>terimakasih sudah daftar</p>

            <div>
              <p>
                selanjutnya silahkan kirinkan bukti pembayaran ke no rekening
                ini 3473249874 / bisa lakuakan pembayaran melalui dana kirim ke
                nomor ini 083474362737
              </p>
              <p>kirimkan bukti dengan atas nama siapa</p>
            </div>

            <div className="flex justify-center btn mt-10">
              <Link href={`https://wa.me/6282118297404`}>
                kirim bukti pembayaran
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
