import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const Skill = ({ name, x, y }) => {
    return (
      <motion.div
        className=" flex items-center absolute rounded-full md:font-semibold font-bold  text-dark md:text-light md:bg-dark bg-none md:px-6 md:py-3  text-sm md:text-lg  cursor-pointer "
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.div>
    );
  };

  return (
    <>
      <h2 className="sm:text-4xl font-bold text-3xl md:text-5xl  xl:text-6xl md:mt-32 md:mb-32 mb-8 mt-6 text-dark text-center md:text-left">
        Skills
      </h2>
      <div className=" md:bg-bgForSkills sm:bg-bgForSkillsSm bg-bgForSkillsPhone md:w-full md:h-[70vh] h-[40vh] sm:h-[60vh]  w-full flex items-center justify-center rounded-full">
        <div className=" flex items-center absolute  rounded-full font-semibold text-light bg-dark md:p-6 p-2 text-sm hover:scale-105 cursor-pointer  transition duration-300">
          Web
        </div>
        <Skill name="HTML" x="-15vw" y="5vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="22vw" y="2vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="25vw" y="-8vw" />
        <Skill name="Bootstrap" x="-30vw" y="-5vw" />
        <Skill name="Firebase" x="7vw" y="-18vw" />
        <Skill name="MUI" x="-25vw" y="14vw" />
        <Skill name="GITHUB" x="25vw" y="14vw" />
      </div>
    </>
  );
}

export default Skills;
