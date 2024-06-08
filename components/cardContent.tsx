import Link from "next/link";
import FormMurid from "./formMurid";

const Post = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="flex-1 w-full">
        <h1 className="text-black p-10">dashboard</h1>
      </div>
      <div className="grid grid-cols-1 gap-7  px-10 justify-center items-center  w-full md:grid-cols-2">
        <Link
          href={"dashboard/Document"}
          className="bg-white  h-36 rounded-md shadow-xl ring-1 ring-white p-5 "
        >
          <h1 className="">semua dokumen</h1>
        </Link>
        <div className="bg-white h-36 rounded-md shadow-xl ring-1 ring-white p-5 ">
          <Link href={""}>
            <h1 className="">jadwal</h1>
          </Link>
        </div>
        <div className="bg-white h-36 rounded-md shadow-xl ring-1 ring-white p-5 ">
          <Link href={"/dashboard/dataAnak/statistik"}>
            <h1 className="">statistik data anak</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
