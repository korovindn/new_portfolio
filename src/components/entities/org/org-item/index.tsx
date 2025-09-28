import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  i: number;
  delay?: number;
  to?: string;
}

export const OrgItem: FC<Props> = ({ title, desc, i, delay = 0, to }) => {
  return (
    <a className="block" href={to} target="_blank">
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
          delay: delay + i * 0.1,
        }}
        className="glass-border rounded-3xl transition-colors duration-300 py-2 px-4 group hover:bg-white/10"
      >
        <p className="font-normal">{title}</p>
        <p className="text-sm">{desc}</p>
      </motion.li>
    </a>
  );
};
