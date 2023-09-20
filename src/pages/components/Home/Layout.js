import Image from "next/image";
import React from "react";
import profilepic from "../../../../public/images/profile/developer-pic-1.png";
import lightbuld from "../../../../public/images/svgs/miscellaneous_icons_1.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

import HireMEFullComponent from "../HireMEFullComponent";
import Animatedtext from "../Animatedtext";

function Layout() {
  return (
    <>
      <div className=" relative xl:px-32 px-4 sm:px-8 md:px-16  text-dark w-full min-h-screen mt-8">
        <div className="flex items-center">
          <div className=" w-1/2 pr-4   ">
            <Animatedtext
              className="font-bold text-5xl  xl:text-6xl text-right  text-dark"
              text={"Turning Vision Into Reality With Code And Design."}
            />
            <p className=" text-right my-6 text-base font-medium ">
              As a skilled Frontend Web developer, I am dedicated to turning
              ideas into innovative web applications. Explore my latest projects
              and articles, showcasing my expertise in React.js and web
              development
            </p>
            <div className=" flex items-center justify-end gap-6 mt-2">
              <Link
                className=" hover:scale-110 transform duration-200 border-dark hover:border-dark border-b-2 mr-4  text-lg  font-medium  text-dark undre"
                href="mailto:goutam.sach@gmail.com"
              >
                Contact
              </Link>
              <Link
                className=" flex gap-1 items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold   hover:bg-light  hover:text-dark border-2 hover:border-solid border-transparent hover:border-dark transform duration-300 "
                download={true}
                href="/dummy.pdf"
              >
                Resume <BiLinkExternal />
              </Link>
            </div>
          </div>
          <div className=" w-1/2">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, transition: { duration: 1 }, opacity: 1 }}
              className=""
            >
              <div className="">
                <Image
                  src={profilepic}
                  alt="profilepic"
                  className="w-full  h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="fixed right-5 bottom-8 ">
          <HireMEFullComponent />
        </div>
        <div className="absolute left-12 bottom-36 w-24">
          <Image src={lightbuld} alt="lightbulb" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}

export default Layout;
