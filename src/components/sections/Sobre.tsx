import React from "react";
import LineFade from "../ui/LineFade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PictureEffect from "../layout/PictureEffect";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: -30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const Sobre = () => {
  return (
    <section
      id="sobre"
      className="pt-8 md:pt-16 pb-16 min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black
 text-gray-200 flex flex-col items-center px-4 sm:px-12 selection:bg-gray-800 selection:text-white"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-100 mb-12 text-center font-poppins"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={0}
      >
        <FontAwesomeIcon icon={faUser} className="mr-3" />
        Sobre <span className="text-blue-700">Mim</span>
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full font-poppins"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeInUp}
          custom={1}
        >
          <PictureEffect
            className="w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-md md:grayscale hover:grayscale-0"
            src="https://th.bing.com/th/id/OIP.CYVMQihQDvft4xAv03jQQwHaEJ?rs=1&pid=ImgDetMain"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-md leading-relaxed max-w-prose"
          variants={container}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            variants={fadeInUp}
            custom={1.2}
          >
            Quem é Gabriel Fontoura?
          </motion.h2>

          <motion.p
            className="text-lg font-semibold text-blue-600 mb-4"
            variants={fadeInUp}
            custom={1.4}
          >
            Full-Stack Developer
          </motion.p>

          <LineFade
            text="E aí! Eu sou o Gabriel Fontoura — um dev full-stack apaixonado por transformar ideias em código e experiências digitais. Curto aquela mistura de criatividade com lógica, e tô sempre buscando maneiras de deixar a tecnologia mais humana, intuitiva e funcional. No meu dia a dia, tô sempre com alguma aba de documentação aberta (ou um café na mão 😅), mergulhando em novas tecnologias, frameworks ou técnicas pra melhorar o que entrego. Já fui mentor de programação, ajudando a galera a destravar no código e alcançar seus objetivos. Levo isso comigo até hoje — ensinar e aprender são partes do mesmo rolê."
            className="mb-4"
          />

          <motion.p className="mb-2" variants={fadeInUp} custom={2.4}>
            <span className="text-blue-700 font-medium">Email:</span>{" "}
            <a
              href="mailto:gabrielFMendonca@gmail.com"
              className="hover:underline"
            >
              gabrielFMendonca@gmail.com
            </a>
          </motion.p>

          <motion.p className="mb-2" variants={fadeInUp} custom={2.6}>
            <span className="text-blue-700 font-medium">Lugar:</span> Juiz de
            Fora - MG
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sobre;
