import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="glass p-8 h-full pointer-events-auto rounded-3xl main-content-width">
      {children}
    </div>
  );
};
