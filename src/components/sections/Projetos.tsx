import React from "react";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

const Projetos = () => {
  return (
    <section
      id="projetos"
      className="pt-10 min-h-screen bg-gradient-to-b from-blue-950 via-gray-950 to-black text-white flex flex-col items-center px-6 sm:px-12 selection:bg-gray-400 selection:text-black"
    >
      <motion.h1
        className="text-4xl font-bold text-white mb-12 text-center font-poppins pb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Meus <span className="text-indigo-400">Projetos</span>
      </motion.h1>

      <motion.div
        className="relative w-full max-w-[350px] sm:max-w-[600px] md:max-w-300 rounded-md overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 items-center px-4 py-2 z-10">
          <a href="https://github.com/EuFontoura" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto text-white hover:text-indigo-400 cursor-pointer px-0"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              Veja como é feito
            </Button>
          </a>

          <Link to="/projetos" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto hover:text-white hover:bg-indigo-600 group cursor-pointer"
            >
              Meus Projetos
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-2.5 transform transition-all duration-300 group-hover:translate-x-2"
              />
            </Button>
          </Link>
        </div>

        <img
          src="/images/github_page.png"
          alt="Imagem Github"
          className="w-full h-[400px] sm:h-[300px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Projetos;
