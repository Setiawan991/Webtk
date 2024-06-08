import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";



const Page = () => {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className=" min-h-screen flex-col items-center justify-center">
          <div className="grid grid-cols-10">
            <div className="col-span-8">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;