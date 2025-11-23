"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const About = () => {
  return (
    <div className="relative flex flex-col min-h-screen mx-auto px-6 sm:px-6 md:px-14">
      <NavBar />

      {/* Content with semi-transparent white background */}
      <div className="flex-1 flex justify-center items-center relative m-auto">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col">
          <div className="text-center whitespace-normal mt-28 lg:px-80">
            <motion.img
              src="/spirit_lofi.gif"
              alt="Lofi Spirit"
              width="438"
              height="240"
              className="mx-auto mb-14  rounded-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <motion.h1
              className="text-main text-2xl font-bold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Brittney is a developer and designer based in Seattle, Washington.
            </motion.h1>

            <motion.p
              className="p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              She graduated from University of Washington with a Bachelor&apos;s
              degree in{" "}
              <span className="text-second underline">Applied Computing</span>{" "}
              and a minor in{" "}
              <span className="text-second underline">Informatics</span>.
            </motion.p>

            <motion.p
              className="p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              She thrives at the intersection of art, video game, and
              technology. Fueled by her love for all three, Brittney creates
              work that blends playful creativity with thoughtful innovation.
            </motion.p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
