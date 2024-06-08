import Navbar from "@/components/navbar";
import PostFile from "@/components/postFile";
import Sidebar from "@/components/sidebar";

export const revalidate = 0;
const Page = () => {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <nav className="flex-1">
        <Navbar />
        <PostFile />
      </nav>
    </div>
  );
};

export default Page;
