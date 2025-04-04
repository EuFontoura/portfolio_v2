import React, { ReactNode, useState  } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const baseStyles =
  "relative group px-6 py-2 rounded-xl font-semibold transition duration-300 inline-flex items-center gap-2";
const variants: Record<Variant, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  outline:
    "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  ghost: "bg-transparent text-blue-500 hover:underline",
};
const sizes: Record<Size, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      <motion.span
        className="md:inline-block transform transition-all duration-500 opacity-0 translate-y-1 group-hover:translate-y-0 hidden"
        animate={{
          rotate: isHovered ? 360 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
      <FontAwesomeIcon icon={faArrowDown} />
      </motion.span>
    </motion.button>
  );
};

export default Button;