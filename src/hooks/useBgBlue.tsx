import { Inter } from "next/font/google";
import { useEffect } from "react";

export const useBgBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "blue";
    // クリーンアップファンクション
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
