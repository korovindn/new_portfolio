import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  i: number;
  delay?: number;
}

export const TechItem: FC<Props> = ({ title, i, delay = 0 }) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.1,
        delay: delay + i * 0.05,
      }}
      className="py-1 px-3 glass-border rounded-full text-sm"
    >
      <p>{title}</p>
    </motion.li>
  );
};
