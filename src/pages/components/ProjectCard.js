import React from "react";
import Link from "next/link";
import Image from "next/image";
import GitIcon from "../components/Icons";
import { motion } from "framer-motion";

function ProjectCard({ type, image, summary1, summary2, link, github, title }) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{
        x: 0,
        transition: { delay: 0.7 },
        opacity: 1,
      }}
    >
      <div className=" relative  z-0 md:mb-20 mb-16 md:mt-16 mt-8">
        <div className=" relative  w-full flex md:justify-between  flex-col md:flex-row items-center md:rounded-3xl rounded-2xl border border-solid  border-dark bg-light shadow-2xl md:p-8 sm:p-6 p-4">
          <div className="  absolute -z-10 md:rounded-3xl rounded-2xl top-2  md:top-3 md:-right-4 -right-2 w-[100%]  bg-dark h-[100%]" />
          <Link
            href={link ?? ""}
            className=" md:w-1/2 cursor-pointer overflow-hidden md:rounded-2xl rounded-lg "
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={image}
              alt={title}
              className="w-full h-auto   hover:scale-105  transition duration-300"
            />
          </Link>

          <div className=" md:w-1/2 flex flex-col md:items-start justify-between text-center md:text-left md:pl-6  ">
            <span className="  hover:underline  underline-offset-2 font-bold  sm:text-3xl text-2xl mt-8  md:mt-0 md:text-4xl">
              {type}
            </span>

            <Link href={link ?? ""}>
              <div className="text-primary  mt-4 font-medium w-full md:text-base  text-sm ">
                <b>TechStack:</b>
                {title}
              </div>
            </Link>

            <p className=" my-2 font-medium md:text-base text-sm hidden sm:inline-block  text-dark">
              {summary1}
              <br />
              {summary2}
            </p>
            <div className="  mt-2 flex items-center justify-center gap-6 ">
              <Link
                href={github ?? ""}
                className="md:w-12  w-10 h-auto hover:scale-110 transition duration-300"
              >
                <GitIcon />
              </Link>

              <Link
                href={link ?? ""}
                className=" rounded-lg bg-dark text-light text-sm md:text-base  p-2 md:px-6 px-3 hover:bg-light hover:text-dark transition font-medium duration-200 border border-dark "
              >
                Visit Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
