
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { supabase } from "@/utils/supabase";

const Page = async ({ params }: any) => {
  const { keyword } = params;
  const decode = decodeURI(keyword);

  const { data, error } = await supabase
    .from("dokumen")
    .select("*")
    .textSearch("public", decode);

  return (
    <>
      {data?.map((event) => {
        <div className="flex justify-start">
          <Sidebar />
          <nav className="flex-1">
            <Navbar />
          </nav>
        </div>;
      })}
    </>
  );
};
export default Page;