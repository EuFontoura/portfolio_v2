import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const iconContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Icons = () => {
  return (
    <div>
      <motion.div
        variants={iconContainer}
        initial="hidden"
        animate="show"
        className="flex justify-center md:justify-start gap-6 mt-6"
      >
        <motion.a
          variants={iconItem}
          href="https://github.com/EuFontoura"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="hover:text-black transition-all duration-300"
          />
        </motion.a>
        <motion.a
          variants={iconItem}
          href="https://linkedin.com/in/gabriel-fontoura/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="hover:text-blue-500 transition-all duration-300"
          />
        </motion.a>
        <motion.a
          variants={iconItem}
          href="https://instagram.com/eu_fontoura"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="hover:text-pink-400 transition-all duration-300"
          />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Icons;
