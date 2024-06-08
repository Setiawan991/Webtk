import FormMurid from "@/components/formMurid";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Table from "@/components/tabel";
import { supabase } from "@/utils/supabase";

const Page = async () => {
  let data = [];
  try {
    const { data: fechingData, error }: any = await supabase
      .from("murid")
      .select();
    data = fechingData;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="flex justify-start">
      <Sidebar />
      <nav className="flex-1">
        <Navbar />
        <div className="p-8">
          <div className="mb-8">
            <FormMurid />
          </div>
          <Table data={data} />
        </div>
      </nav>
    </div>
  );
};

export default Page;
