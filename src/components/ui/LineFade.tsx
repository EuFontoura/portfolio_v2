import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

interface LineFadeProps {
  text: string;
  delayStart?: number;
  className?: string;
}

const LineFade = ({ text, delayStart = 1.6, className = "" }: LineFadeProps) => {
  const sentences = text.split(". ").filter((s) => s.trim() !== "");

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
          {sentence.trim()}{sentence.endsWith(".") ? "" : "."}
        </motion.p>
      ))}
    </div>
  );
};

export default LineFade;
