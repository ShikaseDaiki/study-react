import { Inter } from "next/font/google";
import { useCallback, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e: any) => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => {
      return !prevIsShow;
    });
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
