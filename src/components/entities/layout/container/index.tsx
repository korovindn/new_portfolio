import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="lg:w-[50%] p-5 lg:p-10 h-full bg-gray-950 bg-opacity-25 pointer-events-auto rounded-3xl lg:mt-10 border-2 border-white">
      {children}
    </div>
  );
};
