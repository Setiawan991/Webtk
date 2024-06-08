"use client";
import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import { TextGenerateEffect } from "./blog";
import { CardBody, CardContainer, CardItem } from "./card3d";
import { FlipWords } from "./flipWord";

const LandingPage = () => {
  const words = ["ceria", "gembira", "setia", "tangguh"];

  const wordsBlog =
    "Harapan bangsa adalah taman kanak-kanak yang penuh keceriaan dan  semangat belajar, di mana anak-anak tidak hanya bermain danberinteraksi, tetapi juga menumbuhkan nilai-nilai kebangsaan yang kuat. Di sini, mereka mendapatkan pendidikan dasar yang membentuk karakter, kecerdasan, dan integritas. Dengan demikian, mereka dipersiapkan menjadi generasi penerus yang mampu menghadapi tantangan masa depan dengan pengetahuan, keterampilan, dan moral yang tinggi, serta semangat untuk berkontribusi bagi kemajuan bangsa dan negara";

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const image = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <div className="flex items-center justify-between p-4">
          <p>image</p>
        </div>
        <div className="flex justify-center w-full min-h-screen  items-center ">
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex flex-col text-start p-20">
              <h1 className=" text-3xl font-bold md:text-5xl">
                Web TK Harapan Bangsa <FlipWords words={words} />
              </h1>
              <p className="mt-10">
                Website ini dibangun dengan tujuan untuk memperlihatkan profil
                lengkap dari TK Harapan Bangsa, sehingga para pengunjung dapat
                dengan mudah mendapatkan informasi tentang program pendidikan,
                dan kegiatan yang diselenggarakan di TK tersebut.
              </p>
            </div>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className=" flex justify-center p-5 items-center"
            >
              <motion.img
                variants={image}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                src="/img/3dc8e055-9518-455e-ab0c-8b67aa0ed2fd.jpeg"
                className=" w-72 h-72 flex justify-center object-cover items-center hover:cursor-pointer rounded-full shadow-xl ring-8  ring-fuchsia-500"
              ></motion.img>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center flex-col  w-full mt-10 ">
          <div className="flex justify-center w-full bg-fuchsia-500 ring-1 ring-fuchsia-500 shadow-2xl">
            <h1 className="text-center flex items-center p-5 text-xl text-white ">
              blog
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen justify-center items-center ">
            <motion.div>
              <CardContainer>
                <CardBody className="w-96 h-auto ring-1 ring-white shadow-2xl  mt-10 p-5 rounded-xl hover:bg-fuchsia-500 transition-all ease-in-out hover:text-white">
                  <CardItem translateZ="50" className="text-xl ">
                    <div>Taman kanak kanak</div>
                  </CardItem>

                  <CardItem translateZ="60" className="">
                    <div>harapan bangsa</div>
                  </CardItem>

                  <CardItem translateZ="100" className="">
                    <motion.img
                      variants={image}
                      initial="hidden"
                      animate="show"
                      src="/img/ebd7c65a-ecf0-46ee-b33a-838dd2cb32f9.jpeg/"
                      alt=""
                      className="rounded-xl"
                    />
                  </CardItem>

                  <CardItem className="flex gap-3 mt-3 justify-end  w-full">
                    <div className=" btn shadow-xl text-green-500 hover:text-white hover:bg-black ">
                      <a href="">hubungi kami</a>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
            <div className="mb-10 md:mb-1">
              <TextGenerateEffect words={wordsBlog} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;
