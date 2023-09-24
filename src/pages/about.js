import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animatedtext from "./components/Animatedtext";
import Image from "next/image";
import profilepic from "../../public/images/profile/developer-pic-2.png";
import Skills from "./components/Skills";
import Experiance from "./components/Experiance";
import { motion } from "framer-motion";

function about() {
  const quote = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, staggerChildren: 0.5 },
    },
  };
  return (
    <>
      <Navbar />
      <div className=" md:mt-16 mt-4 relative  xl:px-32 px-4 sm:px-8 md:px-16 text-dark w-full min-h-screen ">
        <main className=" relative z-10 md:flex md:w-full  md:items-center md:justify-center md:flex-col">
          <Animatedtext text={"A Passionate Developer!"} />
          <div className=" relative flex md:flex-row flex-col-reverse justify-center items-center md:items-start    md:mt-32 mt-4 sm:mt-16 md:gap-32">
            <motion.div
              variants={quote}
              initial="initial"
              animate="animate"
              className=" basis-1/2 "
            >
              <h2 className="mt-16 md:mt-0 mb-3 text-lg font-bold text-dark/75 text-center md:text-left">
                BIOGRAPGY
              </h2>
              <p className=" text-sm md:text-md font-medium text-center md:text-left ">
                Lorem ipsum <b>dolor sit amet</b> dolor sit amet consectetur
                adipisicing elit. Nemo fuga non consequatur ab neque. Deserunt
                aliquam eius sint rerum quo, consequuntur dolor aperiam aut
                voluptas veniam ratione quisquam veritatis illo hic
                necessitatibus sed dolores soluta animi reprehenderit amet omnis
                et optio sapiente iste. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Autem, eos?
              </p>

              <p className="text-sm md:text-md font-medium text-center md:text-left">
                Perferendis iste tempore odit doloribus voluptatem eos. Et
                consectetur dicta excepturi officia ut nobis, quaerat ad
                recusandae sed deserunt. Velit veniam ad, labore nemo accusamus
                mollitia cum vero libero consequatur dignissimos ex quibusdam
                totam explicabo veritatis provident reprehenderit earum? Odio
                eos nem.
              </p>

              <p className="text-sm md:text-md font-medium text-center">
                veniam tenetur asperiores possimus sed iusto laborum corporis
                sunt architecto fugit delectus sapiente qui repudiandae.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                transition: { delay: 0.7 },
                opacity: 1,
              }}
            >
              <div className="max-w-[50vh]">
                <div className=" basis-1/2 bg-light relative  flex items-center   rounded-2xl border-2 border-dark border-solid p-8 w-full  h-max ">
                  <div className=" absolute -z-10 rounded-2xl  top-3 -right-3  w-[102%]   bg-dark h-[102%] " />

                  <Image
                    className="  rounded-2xl   w-full  h-auto "
                    alt="profile"
                    src={profilepic}
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <Skills />

          <Experiance />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default about;
