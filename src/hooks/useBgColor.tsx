// import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    document.body.style.backgroundColor =
      router.pathname === "/" ? "lightblue" : "purple";
    // クリーンアップファンクション
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [router.pathname]);
};
