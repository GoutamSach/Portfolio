import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import GitIcon, { TwitterIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

import HireMEFullComponent from "./HireMEFullComponent";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <>
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[2px] inline-block transition-[width]  group-hover:w-full bg-dark w-0 absolute left-0 bottom-0  duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        ></span>
      </Link>
    </>
  );
};

function Navbar() {
  const router = useRouter();
  return (
    <header className=" xl:px-32 px-4 sm:px-8 md:pt-8 sm:pt-6 pt-2  font-medium flex items-center  justify-between">
      <nav className=" hidden md:inline-block   gap-10 md:flex   md:basis-1/3 ">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
      </nav>
      <div className=" md:basis-1/3 md:flex items-center justify-center hidden ">
        <Logo className="" />
      </div>

      <nav className=" relative flex items-center justify-left md:justify-center md:gap-8 gap-4 basis-1/2 md:basis-1/3 ">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/goutam-sachdeva/"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/GoutamSach"
        >
          <GitIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com/SachdevaGoutam7"
        >
          <TwitterIcon />
        </motion.a>
      </nav>
      <div className=" md:hidden basis-1/2 flex  justify-end  ">
        <HireMEFullComponent />
      </div>

      {/* for mobile menu */}

      <div className=" md:hidden relative text-sm">
        <div className="fixed bottom-0 z-50 w-screen -translate-x-1/2 border-t  bg-light border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
          <div className="w-full flex  items-center justify-between">
            <div
              className=" flex items-center  text-dark justify-between max-w-xs px-2  gap-5    mx-auto    bg-transparent rounded-lg dark:bg-gray-600"
              role="group"
            >
              <Link
                href="about"
                className={`px-7 py-1 font-medium border rounded-lg 
                  ${
                    router.pathname === "/about"
                      ? "  bg-gray-200    "
                      : "     bg-light  "
                  }`}
              >
                About
              </Link>
              <div className=" -mt-6  relative   scale-75">
                <Logo />
              </div>

              <Link
                href="projects"
                className={`px-7 py-1 text-dark  border font-medium rounded-lg 
                  ${
                    router.pathname === "/projects"
                      ? "bg-gray-200   "
                      : "bg-light     "
                  }`}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
