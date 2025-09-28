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
    desc: "СМ5 Автономные информационные и управляющие системы (2017-2021)",
    to: "https://bmstu.ru",
  },
];

const jobs = [
  {
    title: "Яндекс (Мессенджер)",
    desc: "Frontend-разработчик (2024-н.в.)",
    to: "https://ya.ru",
  },
  {
    title: "СберТех (GitVerse)",
    desc: "Frontend-разработчик (2023-2024)",
    to: "https://sbertech.ru",
  },
  {
    title: "МТС Диджитал (Центр Big Data)",
    desc: "Frontend-разработчик (2022-2023)",
    to: "https://mts.ru",
  },
  {
    title: "Coding Skills",
    desc: "Преподаватель курсов HTML/CSS и JS (2021-2023)",
    to: "https://codingskills.ru/",
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
      className="space-y-6"
    >
      <h1 className="text-3xl font-mono">Обо мне</h1>
      <div className="space-y-2">
        <p>Я использую</p>
        <ul className="flex flex-wrap gap-2 -mx-2">
          {technologies.map((technology, i) => (
            <TechItem key={technology} title={technology} i={i} delay={0} />
          ))}
        </ul>
        <p>Я учился в</p>
        <ul className="space-y-2 -mx-3">
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
        <ul className="space-y-2 -mx-3">
          {jobs.map((job, i) => (
            <OrgItem key={job.title} {...job} i={i} delay={0.5} />
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg" variant="ghost">
          <Link to="/">Назад</Link>
        </Button>
        <Button asChild size="lg">
          <Link to="/projects">Далее</Link>
        </Button>
      </div>
    </motion.div>
  );
};
