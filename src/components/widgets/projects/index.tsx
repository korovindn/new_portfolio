import { FC, useEffect, useState } from "react";
import {
  Button,
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shared";
import { Link } from "react-router-dom";
import { ProjItem } from "@/components/entities";
import { motion } from "framer-motion";
import { projects } from "./const";

export const Projects: FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="space-y-10"
    >
      <h1 className="text-3xl lg:text-5xl font-mono">Что я наделал</h1>
      <div className="space-y-4">
        <p>It ain't much, but it's honest work...</p>
        <ul>
          <Carousel setApi={setApi}>
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="basis-72 lg:basis-80"
                >
                  <ProjItem {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex gap-4 items-center">
              <CarouselPrevious />
              <div className="flex-1 bg-gray-700 h-1 rounded-full">
                <div
                  className="h-1 bg-white rounded-full transition-width duration-300"
                  style={{ width: `${Math.floor((current / count) * 100)}%` }}
                />
              </div>
              <CarouselNext />
            </div>
          </Carousel>
        </ul>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg" variant="ghost">
          <Link to="/about">Назад</Link>
        </Button>
        <Button asChild size="lg">
          <Link to="/earth">Далее</Link>
        </Button>
      </div>
    </motion.div>
  );
};
