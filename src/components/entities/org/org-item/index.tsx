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
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: delay + i * 0.1,
        }}
        className="border border-white rounded-md transition-colors duration-300 p-4 group hover:bg-gray-700"
      >
        <p className="group-hover:underline">{title}</p>
        <p className="text-sm lg:text-base">{desc}</p>
      </motion.li>
    </a>
  );
};
