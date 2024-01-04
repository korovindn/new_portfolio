import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="lg:w-[50%] p-4 flex-1 bg-gray-950 bg-opacity-25">
      {children}
    </div>
  );
};
