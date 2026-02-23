import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "../../data/social";
import { iconContainer, iconItem } from "../../utils/animations";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
} as const;

const hoverColors: Record<string, string> = {
  github: "hover:text-gray-500 dark:hover:text-black",
  linkedin: "hover:text-blue-500",
  instagram: "hover:text-pink-400",
  mail: "hover:text-red-400",
};

const Icons = () => {
  return (
    <motion.div
      variants={iconContainer}
      initial="hidden"
      animate="show"
      className="flex justify-center md:justify-start gap-6 mt-6"
    >
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <motion.a
            key={link.name}
            variants={iconItem}
            href={link.url}
            target={link.icon !== "mail" ? "_blank" : undefined}
            rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
          >
            <Icon size={28} className={`transition-all duration-300 ${hoverColors[link.icon]}`} />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Icons;
