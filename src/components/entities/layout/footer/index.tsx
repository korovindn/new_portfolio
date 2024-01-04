import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="p-4 flex justify-between">
      <ul className="flex gap-2">
        <li>
          <IconBrandTelegram />
        </li>
        <li>
          <IconBrandGithub />
        </li>
      </ul>
    </footer>
  );
};
