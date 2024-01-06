import { useState, useEffect, FC } from "react";

interface Props {
  children: string;
  delay?: number;
}

export const Typewriter: FC<Props> = ({ children, delay = 50 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + children[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, children]);

  return <>{currentText}</>;
};
