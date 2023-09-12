import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const Skill = ({ name, x, y }) => {
    return (
      <motion.div
        className=" flex items-center absolute  rounded-full font-semibold text-light bg-dark px-6 py-3 hover:scale-105 cursor-pointer  transition duration-300"
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    );
  };

  return (
    <>
      <h2 className=" font-bold  text-8xl mt-32 text-dark">Skills</h2>
      <div className=" bg-bgForSkills w-full h-screen  flex items-center justify-center rounded-full">
        <div className=" flex items-center absolute  rounded-full font-semibold text-light bg-dark p-6 hover:scale-105 cursor-pointer  transition duration-300">
          Web
        </div>
        <Skill name="HTML" x="-25vw" y="5vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="30vw" y="2vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="25vw" y="-10vw" />
        <Skill name="Bootstrap" x="-35vw" y="-5vw" />
        <Skill name="Firebase" x="0vw" y="-20vw" />
        <Skill name="MUI" x="-25vw" y="18vw" />
        <Skill name="GITHUB" x="18vw" y="18vw" />
      </div>
    </>
  );
}

export default Skills;
