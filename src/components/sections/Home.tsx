import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import PictureEffect from "../layout/PictureEffect";
import Button from "../ui/Button";
import Icons from "../ui/Icons";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-900 text-white pt-20 md:pt-0 px-6 sm:px-10 md:px-32 flex flex-col md:flex-row items-center justify-between gap-10 selection:bg-gray-400 selection:text-black overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(29,78,216,0.15), transparent 60%), radial-gradient(circle at bottom right, rgba(168,85,247,0.1), transparent 70%)",
        }}
      />

      <div className="flex-1 text-center md:text-left z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Prazer,
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold text-blue-400"
        >
          Gabriel Fontoura
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg sm:text-2xl mt-4 text-gray-300"
        >
          <Typewriter
            words={[
              "Desenvolvedor Front-end",
              "Desenvolvedor Back-end",
              "Apaixonado por código",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        <Link to="sobre" smooth={true} duration={600} offset={-50}>
          <Button
            animatedIcon
            variant="outline"
            className="mt-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Saiba mais
          </Button>
        </Link>

        <Icons />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex-1 flex justify-center -mt-20 md:mt-0 z-10"
      >
        <PictureEffect
          className="rounded-full md:w-72 md:h-72 w-56 h-56"
          src="https://th.bing.com/th/id/OIP.CYVMQihQDvft4xAv03jQQwHaEJ?rs=1&pid=ImgDetMain"
        />
      </motion.div>
    </section>
  );
};

export default Home;
