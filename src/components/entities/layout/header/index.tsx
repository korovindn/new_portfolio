import { FC, PropsWithChildren } from "react";
import { Button } from "@/components/shared";
import { Link } from "react-router-dom";

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="px-8 py-4 flex justify-between items-center pointer-events-auto glass rounded-3xl w-full">
      <Link to="/" className="text-2xl font-mono">
        Дмитрий Коровин
      </Link>
      <nav className="gap-1 hidden lg:flex">
        <Button asChild size="lg" variant="ghost">
          <Link to="/">Кто я</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/about">Обо мне</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/projects">Что я наделал</Link>
        </Button>
      </nav>
      {children}
    </header>
  );
};
