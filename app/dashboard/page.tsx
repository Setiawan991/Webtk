import Post from "@/components/Post";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";


const Page = () => {
  return (
    <>
      <div className="flex justify-start">
        <Sidebar />
        <nav className="flex-1">
          <Navbar />
          <Post />
        </nav>
      </div>
    </>
  );
};

export default Page;