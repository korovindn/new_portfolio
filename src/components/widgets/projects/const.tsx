import {
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconLink,
  IconLock,
} from "@tabler/icons-react";
import { Button } from "@/components/shared";

export const projects = [
  {
    title: "Яндекс Мессенджер",
    desc: "Корпоративный мессенджер",
    bg: "/images/messenger.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="https://yandex.ru/chat" target="_blank">
            <IconLink />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandReact />
      </>
    ),
  },
  {
    title: "GitVerse",
    desc: "Российский хостинг git-репозиториев",
    bg: "/images/gv1.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="https://gitverse.ru" target="_blank">
            <IconLink />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandNextjs />
      </>
    ),
  },
  {
    title: "Чатик на Socket.io",
    desc: "Практика рабооты с WebSocket'ами",
    bg: "/images/chat.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="https://github.com/korovindn/chat" target="_blank">
            <IconBrandGithub />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandReact />
        <IconBrandNodejs />
      </>
    ),
  },
  {
    title: "Портфолио",
    desc: "Его сделал я",
    bg: "/images/new_portfolio.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="https://github.com/korovindn/new_portfolio" target="_blank">
            <IconBrandGithub />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandReact />
      </>
    ),
  },
  {
    title: "Приложение для учета расходов",
    desc: "Мой проект в финале IT's Tinkoff Solution Cup",
    bg: "/images/tinkoff.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a
            href="https://korovindn.github.io/tinkoff_solution_react"
            target="_blank"
          >
            <IconLink />
          </a>
        </Button>
        <Button size="icon" asChild>
          <a
            href="https://github.com/korovindn/tinkoff_solution_react"
            target="_blank"
          >
            <IconBrandGithub />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandReact />
      </>
    ),
  },
  {
    title: "MTS RDM",
    desc: "Self-Service портал системы управления НСИ",
    bg: "/images/rdm.jpg",
    children: (
      <>
        <Button size="icon" disabled>
          <IconLock />
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandReact />
      </>
    ),
  },
  {
    title: "PutinWeather",
    desc: "Почти как ObamaWeather, только Putin",
    bg: "/images/putin_weather.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="https://putin-weather.vercel.app" target="_blank">
            <IconLink />
          </a>
        </Button>
        <Button size="icon" asChild>
          <a href="https://github.com/korovindn/putin_weather" target="_blank">
            <IconBrandGithub />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandReact />
      </>
    ),
  },
  {
    title: "Clickerio",
    desc: "Телеграм бот-кликер",
    bg: "/images/clickerio_bot.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a
            href="https://github.com/korovindn/telegram_clicker_bot"
            target="_blank"
          >
            <IconBrandGithub />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandNodejs />
      </>
    ),
  },
  {
    title: "Онлайн-редактор",
    desc: "Редактор для паблика фелосафы",
    bg: "/images/felosafs_online_editor.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="http://m99987lo.beget.tech" target="_blank">
            <IconLink />
          </a>
        </Button>
        <Button size="icon" asChild>
          <a
            href="https://github.com/korovindn/felosafs_online_editor"
            target="_blank"
          >
            <IconBrandGithub />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandHtml5 />
        <IconBrandCss3 />
        <IconBrandJavascript />
      </>
    ),
  },
  {
    title: "Бот-мемодел",
    desc: "Бот для паблика фелосафы",
    bg: "/images/felosafs_bot.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="https://vk.com/felosafs" target="_blank">
            <IconLink />
          </a>
        </Button>
        <Button size="icon" asChild>
          <a href="https://github.com/korovindn/felosafs_bot" target="_blank">
            <IconBrandGithub />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandNodejs />
      </>
    ),
  },
  {
    title: "Старое портфолио",
    desc: "Его сделал тоже я",
    bg: "/images/site.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="https://github.com/korovindn/portfolio" target="_blank">
            <IconBrandGithub />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandHtml5 />
        <IconBrandCss3 />
      </>
    ),
  },
  {
    title: "VKSpy",
    desc: "Приложение VK Mini Apps, позволяющее найти кого лайкает человек и кто лайкает его",
    bg: "/images/vkspy.jpg",
    children: (
      <>
        <Button size="icon" asChild>
          <a href="https://vk.com/app7670765_112233880" target="_blank">
            <IconLink />
          </a>
        </Button>
      </>
    ),
    techs: (
      <>
        <IconBrandReact />
      </>
    ),
  },
];
