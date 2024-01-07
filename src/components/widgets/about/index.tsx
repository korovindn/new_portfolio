import { FC } from "react";
import { Button } from "@/components/shared";
import { Link } from "react-router-dom";
import { OrgItem, TechItem } from "@/components/entities";
import { motion } from "framer-motion";

const technologies = [
  "JS/TS",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "TailwindCSS",
  "SCSS",
  "Python",
  "Docker",
  "Bash",
  "Three.js",
  "SQL",
];

const education = [
  {
    title: "МГТУ им. Н.Э. Баумана",
    desc: "Управление в технических системах (2017-2021)",
    to: "https://bmstu.ru",
  },
];

const jobs = [
  {
    title: "Freelance",
    desc: "Fullstack-разработчик (2019-2022)",
  },
  {
    title: "Coding Skills",
    desc: "Преподаватель курсов HTML/CSS и JS (2021-2023)",
    to: "https://codingskills.ru/",
  },
  {
    title: "МТС",
    desc: "Junior, Middle Frontend-разработчик (2022-2023)",
    to: "https://mts.ru",
  },
  {
    title: "СберТех",
    desc: "Middle Frontend-разработчик (2023-н.в.)",
    to: "https://sbertech.ru",
  },
];

export const About: FC = () => {
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
      <h1 className="text-3xl lg:text-5xl font-mono">Немного обо мне</h1>
      <div className="space-y-4">
        <p>Я использую</p>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology, i) => (
            <TechItem key={technology} title={technology} i={i} delay={0.25} />
          ))}
        </ul>
        <p>Я учился в</p>
        <ul className="space-y-2">
          {education.map((university, i) => (
            <OrgItem
              key={university.title}
              {...university}
              i={i}
              delay={0.25}
            />
          ))}
        </ul>
        <p>Я работал в</p>
        <ul className="space-y-2">
          {jobs.map((job, i) => (
            <OrgItem key={job.title} {...job} i={i} delay={0.5} />
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg" variant="ghost" className="!mt-8">
          <Link to="/">Назад</Link>
        </Button>
        <Button asChild size="lg" className="!mt-8">
          <Link to="/projects">Далее</Link>
        </Button>
      </div>
    </motion.div>
  );
};
