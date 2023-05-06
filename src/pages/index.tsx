import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    (e: any) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = "blue";
    // クリーンアップファンクション
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header></Header>
      <div className="text-red-600 flex flex-col items-center">
        <h1>{count}</h1>
        <button onClick={handleClick}>ボタン</button>
      </div>
      <Main page="index"></Main>
    </div>
  );
}
