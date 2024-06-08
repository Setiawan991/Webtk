"use client";
import DeleteRegistrasi from "@/action/deleteregistrasi";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { toast } from "sonner";

const DeleteRegister = ({ params }: any) => {
  console.log(params);
  const router = useRouter();

  useEffect(() => {
    const deleteData = async () => {
      try {
        const delRegis = await DeleteRegistrasi(params);
        if (delRegis.success == true) {
          toast.success("berhasil di hapus");
          router.push("/dashboard/registrasiMurid");
        } else {
          toast.error("gagal di hapus");
        }
      } catch (error) {
        console.log("error : ", error);
      }
    };
    deleteData();
  }, []);

  return null;
};

export default DeleteRegister;
