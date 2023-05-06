import { Inter } from "next/font/google";
import { useCallback, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
