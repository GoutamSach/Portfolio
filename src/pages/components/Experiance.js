import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LIIcon from "./LIIcon";

function Experiance() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const Details = ({ position, company, time, work }) => {
    return (
      <div className="  mb-8 flex flex-col  ">
        <h3 className=" font-bold md:text-2xl text-sm capitalize">
          {position} @ <div className=" text-primary">{company}</div>
        </h3>
        <span className=" capitalize font-medium text-dark/75 md:text-2xl text-sm ">
          {time}
        </span>
        <p className=" font-medium md:text-2xl text-sm ">{work}</p>
      </div>
    );
  };

  return (
    <>
      <div className=" my-16">
        <h2 className=" font-bold text-3xl sm:text-4xl  text-center   md:text-5xl md:mb-16  mb-8 xl:text-6xl md:mt-32 mt-16 text-dark">
          Experience
        </h2>
        <div ref={ref} className=" flex justify-center relative md:w-[75%] ">
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            // transition={{ duration: 0.75, type: "spring" }}
            className=""
          >
            <div className="">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className=" absolute  md:-left-16 md:origin-top mt-2 top-0 w-[4px] h-full bg-dark"
              />
              <div className=" scale-75 md:scale-100 md:absolute  relative -left-[65px]  md:-left-[118px]  -top-5">
                <LIIcon reference={ref} />
              </div>
            </div>
            <div className=" w-full ml-8 ">
              <Details
                position="Layout Engineer"
                company="Congruex Asia Pacific."
                time="Sep 2020 - Present"
                work=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Experiance;
