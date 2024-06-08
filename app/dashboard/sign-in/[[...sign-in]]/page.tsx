import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex justify-center items-center mx-auto mt-10 ">
      <SignIn />
    </div>
  );
};

export default Page;
