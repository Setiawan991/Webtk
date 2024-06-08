import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";



const Page = () => {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <nav className="flex-1">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="font-bold text-xl">
            maaf halaman ini masih dalam pengembangan
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Page;