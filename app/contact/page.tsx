import Link from "next/link";

import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/(frontend)/card3d";
import ModalDaftar from "./modalDaftar";
import ButtonHandle from "./buttonHandle";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
        <CardContainer>
          <CardBody className="w-72 h-auto ring-1 ring-white shadow-2xl p-5 rounded-xl hover:bg-fuchsia-500 transition-all ease-in-out hover:text-white">
            <CardItem
              translateZ="60"
              className="mb-5 text-center flex justify-center w-full"
            >
              <p>TK HARAPAN BANGSA</p>
            </CardItem>
            <CardItem translateZ="100" className="">
              <Image
                className="hover:scale-100 hover:cursor-pointer"
                src={"/img/66112057-cc65-4703-8fa1-90d1421e1979.jpeg"}
                width={300}
                height={300}
                alt="harapan bangsa"
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        <div className="p-10">
          <h1 className="font-bold text-lg">pendaftaraan TK Harapan bangsa</h1>
          <p className="">
            Bergabunglah dengan kami untuk memberikan pendidikan berkualitas dan
            pengalaman belajar yang menyenangkan bagi buah hati Anda.
          </p>
          <p className="py-5">kirim pesan dan hubungi ke nomer di bawah ini</p>
          <div className="flex gap-4">
            <ButtonHandle />
          </div>
          <div className="py-5 flex gap-6 flex-col">
            <Link href={"https://wa.me/6282118297404"}>
              <WhatsappLogo size={32} />
            </Link>

            <div>
              <ModalDaftar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
