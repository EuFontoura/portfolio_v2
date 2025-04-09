import React from "react";
import { motion } from "framer-motion";
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

const skills = [
 { icon: <SiHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
  { icon: <SiReact />, name: "React", color: "text-cyan-400" },
  { icon: <SiPython />, name: "Python", color: "text-yellow-300" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "text-purple-500" },
  { icon: <RiFileExcel2Fill />, name: "Excel", color: "text-green-600" },
  { icon: <VscVscode />, name: "VSCode", color: "text-blue-400" },
  { icon: <SiFigma />, name: "Figma", color: "text-pink-500" },
  { icon: <SiGit />, name: "Git", color: "text-orange-600" },
  { icon: <SiGithub />, name: "GitHub", color: "text-white" },
  { icon: <SiCanva />, name: "Canva", color: "text-blue-300" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="md:pt-20 min-h-screen w-full py-6 px-6 sm:px-12 bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 font-poppins text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Minhas <span className="text-cyan-400">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-black/30 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-cyan-400 shadow-md shadow-cyan-500/10"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={`text-5xl mb-4 ${skill.color}`}>{skill.icon}</div>
            <h3 className="text-xl font-semibold font-poppins">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
