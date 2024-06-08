import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";


const Page = () => {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <nav className="flex-1">
        <Navbar />
        <p>my document</p>
      </nav>
    </div>
  );
};

export default Page;