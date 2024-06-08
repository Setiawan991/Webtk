import Link from "next/link";

const Post = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="grid grid-cols-2 gap-7 py-20 px-10 justify-center items-center  w-full">
        <Link
          href={"dashboard/myDocument"}
          className="bg-white  h-36 rounded-md shadow-xl ring-1 ring-white p-5 "
        >
          <h1 className="">dokumen saya</h1>
        </Link>
        <div className="bg-white h-36 rounded-md shadow-xl ring-1 ring-white p-5 ">
          <h1 className="">biodata saya</h1>
        </div>
        <div className="bg-white h-36 rounded-md shadow-xl ring-1 ring-white p-5 ">
          <h1 className="">progres saya</h1>
        </div>
      </div>
    </div>
  );
};

export default Post;
