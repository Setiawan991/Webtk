"use client";
import { AnimatePresence, motion } from "framer-motion";
import { AboutParallax } from "./aboutParalax";

export const products = [
  {
    title: "Moonbeam",
    link: "66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
    thumbnail: "/img/66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
  },
  {
    title: "Cursor",
    link: "66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
    thumbnail: "/img/66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
  },
  {
    title: "Rogue",
    link: "ebd7c65a-ecf0-46ee-b33a-838dd2cb32f9.jpeg",
    thumbnail: "/img/ebd7c65a-ecf0-46ee-b33a-838dd2cb32f9.jpeg",
  },

  {
    title: "Editorially",
    link: "3dc8e055-9518-455e-ab0c-8b67aa0ed2fd.jpeg",
    thumbnail: "/img/3dc8e055-9518-455e-ab0c-8b67aa0ed2fd.jpeg",
  },
  {
    title: "Editrix AI",
    link: "66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
    thumbnail: "/img/66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
  },

  {
    title: "Moonbeam",
    link: "66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
    thumbnail: "/img/66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
  },
  {
    title: "Cursor",
    link: "66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
    thumbnail: "/img/66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
  },
  {
    title: "Rogue",
    link: "ebd7c65a-ecf0-46ee-b33a-838dd2cb32f9.jpeg",
    thumbnail: "/img/ebd7c65a-ecf0-46ee-b33a-838dd2cb32f9.jpeg",
  },

  {
    title: "Editorially",
    link: "3dc8e055-9518-455e-ab0c-8b67aa0ed2fd.jpeg",
    thumbnail: "/img/3dc8e055-9518-455e-ab0c-8b67aa0ed2fd.jpeg",
  },
  {
    title: "Editrix AI",
    link: "66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
    thumbnail: "/img/66112057-cc65-4703-8fa1-90d1421e1979.jpeg",
  },
];

const AboutPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <AboutParallax products={products} />

        <div className="flex flex-col justify-center items-center w-full min-h-screen">
          <div className="p-5 ring-1 ring-white shadow-xl w-full justify-center items-center text-center">
            <p>lokasi tempat</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.2454862681175!2d107.80553584516932!3d-6.951265066635497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c4e34ef7dab5%3A0xfc88e7533be9f471!2sTaman%20Kank%20Kanak%20Pgri%20Harapan%20Bangsa!5e0!3m2!1sid!2sid!4v1716695134076!5m2!1sid!2sid"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full mt-7"
          ></iframe>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutPage;