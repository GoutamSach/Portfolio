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
        <h3 className=" font-bold text-2xl capitalize">
          {position} @ <div className=" text-primary">{company}</div>
        </h3>
        <span className=" capitalize font-medium text-dark/75 ">{time}</span>
        <p className=" font-medium ">{work}</p>
      </div>
    );
  };

  return (
    <>
      <div className=" my-16">
        <h2 className=" font-bold  text-5xl mb-16  xl:text-6xl mt-32 text-dark">
          Experience
        </h2>
        <div ref={ref} className=" mx-auto relative w-[75%] ">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute -left-16  origin-top mt-2   top-0 w-[4px] h-full bg-dark"
          ></motion.div>

          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75, type: "spring" }}
            className=""
          >
            <div className=" absolute -left-[118px] -top-5">
              <LIIcon reference={ref} />
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
