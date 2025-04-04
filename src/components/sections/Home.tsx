import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

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
        <img
          src="https://placehold.co/300x300"
          alt="Gabriel Fontoura"
          className="w-72 h-72 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-4 border-blue-400"
        />
      </motion.div>
    </section>
  );
};

export default Home;
