import React from "react";
import HireMEComp from "./HireMEComp";
import Link from "next/link";
// import { motion } from "framer-motion";

function HireMEFullComponent() {
  return (
    <div className="   ">
      <div className="   hover:scale-105      ">
        <div className="    flex items-center justify-center   ">
          <HireMEComp className=" md:w-[140px] w-20 m-1 h-auto  animate-spin-slow" />

          <Link
            className="  absolute flex items-center justify-center   bg-dark text-light w-[44px] h-[44px] md:w-20 md:h-20   rounded-full md:text-lg text-[10px] font-semibold hover:bg-light  hover:text-dark border-2 hover:border-solid border-transparent hover:border-dark transform duration-300 "
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
