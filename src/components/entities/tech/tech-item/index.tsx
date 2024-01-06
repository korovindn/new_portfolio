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
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: delay + i * 0.05,
      }}
      className="py-1 px-2 border rounded-full text-sm lg:text-base"
    >
      <p>{title}</p>
    </motion.li>
  );
};
