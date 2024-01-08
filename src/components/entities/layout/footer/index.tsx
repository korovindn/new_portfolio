import {
  IconBrandGithub,
  IconBrandTelegram,
  IconMail,
} from "@tabler/icons-react";
import { FC } from "react";
import { Button } from "@/components/shared";

export const Footer: FC = () => {
  return (
    <footer className="p-4 flex justify-between pointer-events-auto">
      <ul className="flex gap-2">
        <li>
          <Button variant="ghost" asChild size="icon">
            <a href="https://t.me/korovin_dmitry" target="_blank">
              <IconBrandTelegram />
            </a>
          </Button>
        </li>
        <li>
          <Button variant="ghost" asChild size="icon">
            <a href="https://github.com/korovindn" target="_blank">
              <IconBrandGithub />
            </a>
          </Button>
        </li>
        <li>
          <Button variant="ghost" asChild size="icon">
            <a href="mailto:korovindn@yandex.ru" target="_blank">
              <IconMail />
            </a>
          </Button>
        </li>
        <li>
          <Button variant="ghost" asChild size="icon">
            <a
              href="https://hh.ru/resume/b3fe8164ff0c0244a70039ed1f51696c347079"
              target="_blank"
            >
              <span className="text-xs flex rounded-full border w-6 h-6 font-bold items-center justify-center border-[2px]">
                hh
              </span>
            </a>
          </Button>
        </li>
      </ul>
    </footer>
  );
};
