import Image from "next/image";
import React from "react";
import profilepic from "../../../../public/images/profile/developer-pic-1.png";
import lightbuld from "../../../../public/images/svgs/miscellaneous_icons_1.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

import HireMEFullComponent from "../HireMEFullComponent";
import Animatedtext from "../Animatedtext";
import TransitionEffects from "../TransitionEffects";

function Layout() {
  return (
    <>
      <TransitionEffects />
      <div className=" relative xl:px-32 px-4 sm:px-12 md:px-16   text-dark w-full min-h-screen md:mt-8 sm:mt-4 mt-2">
        <div className="flex items-center md:flex-row flex-col-reverse">
          <div className=" md:w-1/2 md:pr-4   ">
            <Animatedtext
              className=""
              text={"Turning Vision Into Reality With Code And Design."}
            />
            <p className=" md:text-right sm:text-sm my-6 md:text-base font-medium text-center  text-sm ">
              Hi, I am <b>Goutam Sachdeva</b> . As a skilled Frontend Web
              developer. I am dedicated to turning ideas into innovative web
              applications. Explore my latest projects and Github, showcasing my
              expertise in React.js and web development
            </p>
            <div className="  md:text-lg text-sm flex items-center justify-center md:justify-end gap-6 mt-2 mb-6 md:mb-0">
              <Link
                className=" hover:scale-110 transform duration-200 border-dark hover:border-dark  border-b-2 mr-4 font-medium  text-dark undre"
                href="mailto:goutam.sach@gmail.com"
              >
                Contact
              </Link>
              <Link
                className=" flex gap-1 items-center bg-dark text-light md:p-2.5 md:px-6 p-1.5 px-3 rounded-lg  font-semibold   hover:bg-light  hover:text-dark border-2 hover:border-solid border-transparent hover:border-dark transform duration-300 "
                download={true}
                href="/dummy.pdf"
              >
                Resume <BiLinkExternal />
              </Link>
            </div>
          </div>
          <div className=" md:w-1/2">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, transition: { duration: 1 }, opacity: 1 }}
              className=""
            >
              <div className="  ">
                <Image
                  src={profilepic}
                  alt="profilepic"
                  className="w   h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="fixed right-5 bottom-8 hidden md:inline-block ">
          <HireMEFullComponent />
        </div>
        <div className="absolute sm:w-16  md:left-6 md:-bottom-6 md:w-20 w-12 sm:-bottom-8  -bottom-4 left-1 ">
          <Image src={lightbuld} alt="lightbulb" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}

export default Layout;
