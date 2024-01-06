import { FC, PropsWithChildren } from "react";
import { Button } from "@/components/shared";
import { Link } from "react-router-dom";

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="w-full p-4 flex justify-between items-center pointer-events-auto">
      <Link to="/" className="text-2xl font-mono">
        Дмитрий Коровин
      </Link>
      <nav className="gap-4 hidden lg:flex">
        <Button asChild className="font-mono" size="lg" variant="ghost">
          <Link to="/">Главная</Link>
        </Button>
        <Button asChild className="font-mono" size="lg" variant="ghost">
          <Link to="/about">Обо мне</Link>
        </Button>
        <Button asChild className="font-mono" size="lg" variant="ghost">
          <Link to="/projects">Что я наделал</Link>
        </Button>
      </nav>
      {children}
    </header>
  );
};
