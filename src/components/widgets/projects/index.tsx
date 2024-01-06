import { FC } from "react";
import { Button, useHorizontalScroll } from "@/components/shared";
import { Link } from "react-router-dom";
import { ProjItem } from "@/components/entities";
import { motion } from "framer-motion";
import { projects } from "./const";

export const Projects: FC = () => {
  const horizontalScrollRef = useHorizontalScroll();
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="space-y-10"
    >
      <h1 className="text-3xl lg:text-5xl font-mono">Что я наделал</h1>
      <div className="space-y-4">
        <p>It ain't much, but it's honest work...</p>
        <div
          className="overflow-x-scroll overflow-y-hidden flex"
          ref={horizontalScrollRef}
        >
          <ul className="flex gap-4 px-1 py-4">
            {projects.map((project, i) => (
              <ProjItem key={project.title} {...project} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg" variant="ghost" className="!mt-8">
          <Link to="/about">Назад</Link>
        </Button>
        <Button asChild size="lg" className="!mt-8">
          <Link to="/earth">Далее</Link>
        </Button>
      </div>
    </motion.div>
  );
};
