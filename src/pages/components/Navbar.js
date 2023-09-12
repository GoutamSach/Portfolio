import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import GitIcon, { TwitterIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

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
  return (
    <header className=" xl:px-32 px-16 pt-8  font-medium flex items-center justify-between">
      <nav className="flex gap-10">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
      </nav>

      <Logo className=" " />
      <nav className=" flex gap-8 ">
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
    </header>
  );
}

export default Navbar;
