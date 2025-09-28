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
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{ backgroundImage: `url(${bg})` }}
      className="relative rounded-3xl m-[0.5px] ring-[0.5px] ring-white/50 overflow-hidden transition-colors duration-300 p-5 min-h-72 bg-center bg-cover before:content-[''] before:block before:absolute before:inset-0 before:pointer-events-none before:z-10 before:bg-gradient-to-b before:from-black/75 before:to-black/25 after:content-[''] after:block after:absolute after:inset-0 after:pointer-events-none after:z-10 after:backdrop-blur-md after:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] after:[-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]"
    >
      <div className="relative z-50">
        <p className="font-normal">{title}</p>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="absolute z-50 bottom-4 right-4 flex gap-4">
        {children}
      </div>
      <div className="absolute z-50 bottom-4 left-4 flex gap-2 glass rounded-full p-3">
        {techs}
      </div>
    </motion.li>
  );
};
