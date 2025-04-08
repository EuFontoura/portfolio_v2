import React from "react"
import { motion } from "framer-motion";

interface LineFadeProps {
  text: string;
  delayStart?: number;
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const LineFade = ({ text, delayStart = 1.6, className = "" }: LineFadeProps) => {
  const sentences = text.split(".").filter((s) => s.trim() !== "");

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {sentences.map((sentence, i) => (
        <motion.p
          key={i}
          className="text-justify"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={delayStart + i}
        >
          {sentence.trim()}.
        </motion.p>
      ))}
    </div>
  );
};

export default LineFade;
