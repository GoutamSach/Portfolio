import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animatedtext from "./components/Animatedtext";
import Link from "next/link";
import Image from "next/image";
import GitIcon from "./components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

function projects() {
  const FeaturedProjects = ({ type, image, summary, link, github, title }) => {
    return (
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{
          x: 0,
          transition: { delay: 0.7 },
          opacity: 1,
        }}
      >
        <div className=" relative  z-0 md:mb-32 mb-16 md:mt-16 mt-8">
          <div className=" relative  w-full flex md:justify-between  flex-col md:flex-row items-center rounded-3xl border border-solid  border-dark bg-light shadow-2xl md:p-8 sm:p-4 p-2">
            <div className="  absolute -z-10   rounded-3xl top-2  md:top-3 md:-right-4 -right-2 w-[100%]  bg-dark h-[100%]" />
            <Link
              className=" md:w-1/2 cursor-pointer overflow-hidden rounded-2xl "
              href={link}
            >
              <Image
                src={image}
                alt={title}
                className="w-full h-auto hover:scale-105  transition duration-300"
              />
            </Link>

            <div className=" md:w-1/2 flex flex-col md:items-start justify-between text-center md:text-left md:pl-6  ">
              <span className="  hover:underline  underline-offset-2 font-bold  sm:text-3xl text-2xl  md:text-4xl">
                {type}
              </span>

              <Link href={link}>
                <h2 className="text-primary  mt-2 font-medium w-full md:text-md  text-sm ">
                  TechStack: {title}
                </h2>
              </Link>

              <p className=" my-2 font-medium md:text-md text-sm   text-dark">
                {summary}
              </p>
              <div className="  mt-2 flex items-center justify-center gap-6 ">
                <Link
                  className="md:w-12  w-10 h-auto hover:scale-110 transition duration-300"
                  href={github}
                >
                  <GitIcon />
                </Link>

                <Link
                  className=" rounded-lg bg-dark text-light  p-2 md:px-6 px-3 hover:bg-light hover:text-dark transition font-medium duration-200 border border-dark "
                  href={link}
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="   mb-16">
        <main className="xl:px-32 md:px-16 px-6   flex w-full  items-center justify-center flex-col">
          <div className=" md:mt-16  mt-8">
            <Animatedtext text="Projects" />
          </div>
          <div className="  flex items-center flex-col  justify-center ">
            <FeaturedProjects
              title="Next "
              summary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita amet numquam. Ipsa temporibus porro repellendus voluptates odio esse quod, reprehenderit tempora deleniti."
              image={project1}
              link="/"
              github="/"
              type="A clone"
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default projects;
