import { FC } from "react";
import { Button } from "../../shared/button";
import { Link } from "react-router-dom";

export const About: FC = () => {
  return (
    <div className="space-y-4 text-xl">
      <h1 className="text-h1">Всем hello world!</h1>
      <Button asChild size="lg">
        <Link to="/projects">Далее</Link>
      </Button>
    </div>
  );
};
