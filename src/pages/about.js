import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animatedtext from "./components/Animatedtext";
import Image from "next/image";
import profilepic from "../../public/images/profile/developer-pic-2.png";
import Skills from "./components/Skills";
import Experiance from "./components/Experiance";
import { motion } from "framer-motion";
import TransitionEffects from "./components/TransitionEffects";

function about() {
  const quote = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, staggerChildren: 0.5 },
    },
  };

  return (
    <>
      <TransitionEffects />
      <Navbar />
      <div className=" md:mt-16 mt-4 relative  xl:px-32 px-4 sm:px-8 md:px-16 text-dark w-full min-h-screen ">
        <main className=" relative z-10 md:flex md:w-full  md:items-center md:justify-center md:flex-col">
          <Animatedtext text={"A Passionate Developer!"} />
          <div className=" relative flex md:flex-row flex-col-reverse justify-center items-center md:items-start    md:mt-32 mt-4 sm:mt-16 md:gap-32">
            <motion.div
              variants={quote}
              initial="initial"
              animate="animate"
              className=" basis-1/2 "
            >
              <h2 className="mt-16 md:mt-0 mb-3 md:text-2xl text-lg font-bold text-dark/75 text-center md:text-left">
                BIOGRAPGY
              </h2>
              <p className=" text-sm md:text-lg font-medium text-center  md:text-left ">
                &quot;Hello!&quot; I&apos;m <b>Goutam Sachdeva</b> a passionate
                Frontend Web Developer. My core skills include React, HTML, CSS,
                Tailwind CSS, JavaScript and React, along with proficiency in
                Material-UI and Bootstrap.
              </p>

              <p className="text-sm md:text-lg font-medium text-center md:text-left">
                In my journey so far, I&apos;ve already completed several
                projects that showcase my ability to create responsive and
                engaging web experiences and count is increasing. These projects
                have helped me master the art of building modern, user-friendly
                interfaces while staying updated with the latest libraries and
                tools.
              </p>
              <br />
              <p className="text-sm md:text-lg font-medium text-center md:text-left">
                I&apos;m enthusiastic about collaborating on innovative
                projects, continuously learning, and growing as a developer.
                Let&apos;s connect to explore opportunities and discuss how I
                can contribute to your web development endeavors!&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                transition: { delay: 0.7 },
                opacity: 1,
              }}
            >
              <div className="max-w-[50vh]">
                <div className=" basis-1/2 bg-light relative  flex items-center   rounded-2xl border-2 border-dark border-solid p-8 w-full  h-max ">
                  <div className=" absolute -z-10 rounded-2xl  top-3 -right-3  w-[102%]   bg-dark h-[102%] " />

                  <Image
                    className="  rounded-2xl   w-full  h-auto "
                    alt="profile"
                    src={profilepic}
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <Skills />

          <Experiance />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default about;
