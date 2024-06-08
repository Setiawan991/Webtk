import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Table from "@/components/tabel";
import { supabase } from "@/utils/supabase";

export const revalidate = 0;

const Page = async ({ params }: any) => {
  const kelas = params.tipe;
  const { data, error }: any = await supabase
    .from("murid")
    .select()
    .eq("kelas", kelas);

  return (
    <>
      <div className="flex justify-start">
        <Sidebar />
        <nav className="flex-1">
          <Navbar />
          <div className="p-10">
            <Table data={data} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Page;
