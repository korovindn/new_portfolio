import { FC } from "react";
import { Button } from "@/components/shared/button";
import { Link } from "react-router-dom";

export const Hello: FC = () => {
  return (
    <div className="space-y-10 text-xl">
      <h1 className="text-h1">Всем hello world! Я&nbsp;Дмитрий&nbsp;Коровин</h1>
      <div className="space-y-4">
        <p>Я Frontend-разработчик в СберТехе</p>
        <p>
          Мои сферы интересов — Web-разработка, дизайн и искусственный интеллект
        </p>
        <p>
          Связан с IT уже больше 5 лет, имею 2 года хорошего коммерческого опыта
          разработки в сильных проектах МТС и Сбера
        </p>
        <p>
          Я люблю красивые, функциональные сайты, браться за новые задачи,
          делать вещи и видеть результаты своей работы, а еще старую музыку,
          котиков и свою девушку
        </p>
      </div>
      <Button asChild size="lg" className="!mt-8">
        <Link to="/about">Далее</Link>
      </Button>
    </div>
  );
};
