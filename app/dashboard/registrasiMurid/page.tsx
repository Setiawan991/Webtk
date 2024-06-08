import Navbar from "@/components/navbar";
import PostRegistrasi from "@/components/postRegistrasi";
import Sidebar from "@/components/sidebar";


export const revalidate = 0;
const Page = () => {
  return (
    <>
      <div className="flex justify-start">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <PostRegistrasi />
        </div>
      </div>
    </>
  );
};

export default Page;