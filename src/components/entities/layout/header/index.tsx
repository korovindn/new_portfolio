import { FC, PropsWithChildren } from "react";

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="w-full p-4 flex justify-between items-center">
      <div className="text-xl">ДК</div>
      <nav></nav>
      {children}
    </header>
  );
};
