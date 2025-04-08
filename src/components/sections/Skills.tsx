import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiNodedotjs,
  SiBootstrap,
  SiFigma,
  SiGit,
  SiGithub,
  SiCanva,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiFileExcel2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Excel", icon: <RiFileExcel2Fill className="text-green-600" /> },
  { name: "VSCode", icon: <VscVscode className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-300" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="pt-6 min-h-screen bg-blue-950 text-white flex flex-col items-center px-6 sm:px-12 selection:bg-gray-900 selection:text-blue-300"
    >
      <div className="flex text-4xl items-center mb-10">
        <FontAwesomeIcon icon={faCode} className="mr-3 text-white" />
        <h2>
          <span className="text-blue-300">Minhas </span>Skills
        </h2>
      </div>

      <div className="bg-blue-900/40 rounded-3xl p-6 sm:p-10 shadow-2xl w-full max-w-5xl">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center p-6 w-28 h-28 sm:w-32 sm:h-32 rounded-xl shadow-md bg-blue-900 hover:brightness-125 transition-all duration-300"
              title={skill.name}
            >
              <div className="md:text-5xl text-3xl mb-2">{skill.icon}</div>
              <span className="text-white text-xl text-center pt-2">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
