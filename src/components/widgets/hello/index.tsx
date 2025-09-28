import { FC } from "react";
import { Button, Typewriter } from "@/components/shared";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hello: FC = () => {
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
      <h1 className="text-3xl font-mono">
        Всем{" "}
        <span className="text-lime-500">
          <Typewriter>hello world!</Typewriter>
        </span>
        <br />
        Я&nbsp;Дмитрий&nbsp;Коровин
      </h1>
      <div className="space-y-2">
        <p>Я Frontend-разработчик в Яндексе</p>
        <p>
          Мои сферы интересов — Web-разработка, дизайн и искусственный интеллект
        </p>
        <p>
          Связан с IT уже больше 8 лет, имею 4 года коммерческого опыта
          разработки в сильных проектах МТС и Сбера
        </p>
        <p>
          Я люблю красивые, функциональные сайты, браться за новые задачи,
          делать вещи и видеть результаты своей работы, а еще старую музыку,
          котиков и свою девушку
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link to="/about">Далее</Link>
        </Button>
      </div>
    </motion.div>
  );
};
