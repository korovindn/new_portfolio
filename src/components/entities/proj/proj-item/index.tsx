import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  children?: ReactNode;
  techs?: ReactNode;
  bg?: string;
}

export const ProjItem: FC<Props> = ({ title, desc, children, techs, bg }) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
        scale: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      style={{ backgroundImage: `url(${bg})` }}
      className="relative border border-white rounded-md overflow-hidden transition-colors duration-300 p-4 hover:bg-gray-700 min-h-72 bg-center bg-cover after:absolute after:bg-gradient-to-b after:from-gray-950 after:bg-gray-950 after:bg-opacity-50 after:content-[''] after:block after:w-full after:h-full after:top-0 after:left-0"
    >
      <div className="relative z-50">
        <p>{title}</p>
        <p className="text-sm lg:text-base">{desc}</p>
      </div>
      <div className="absolute z-50 bottom-4 right-4 flex gap-4">
        {children}
      </div>
      <div className="absolute z-50 bottom-4 left-4 flex gap-2 border rounded-md p-2">
        {techs}
      </div>
    </motion.li>
  );
};
