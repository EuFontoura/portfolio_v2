import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import PictureEffect from "../layout/PictureEffect";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white px-32 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Prazer,
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-6xl font-bold text-blue-400"
        >
          Gabriel Fontoura
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-2xl mt-4 text-gray-300"
        >
          <Typewriter
            words={[
              "Desenvolvedor Front-end",
              "UI Lover",
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
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <PictureEffect src="https://th.bing.com/th/id/OIP.CYVMQihQDvft4xAv03jQQwHaEJ?rs=1&pid=ImgDetMain"/>
      </motion.div>
    </section>
  );
};

export default Home;
