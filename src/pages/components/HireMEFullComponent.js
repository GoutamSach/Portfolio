import React from "react";
import HireMEComp from "./HireMEComp";
import Link from "next/link";
// import { motion } from "framer-motion";

function HireMEFullComponent() {
  return (
    <div className=" relative ">
      <div className="   hover:scale-105 fixed right-5 bottom-5     ">
        <div className=" relative flex items-center justify-center animate-bounce  ">
          {/* <motion.div animate={{ rotate: 360 }} className=""> */}
          <HireMEComp className="w-64    " />
          {/* </motion.div> */}

          <Link
            className="  absolute ml-5   flex items-center justify-center w-20 h-20  bg-dark text-light  rounded-full text-lg font-semibold hover:bg-light  hover:text-dark border-2 hover:border-solid border-transparent hover:border-dark transform duration-300 "
            href="mailto:goutam.sach@gmail.com"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HireMEFullComponent;
