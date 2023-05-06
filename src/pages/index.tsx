import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const foo = 2;

  // const handleClick = useCallback((e: any) => {
  //   console.log(e.target.href);
  //   e.preventDefasult();
  //   alert(foo);
  // }, []);

  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "blue";
    return () => {
      console.log("アンマウント");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header></Header>
      {/* <a href="/about" onClick={handleClick}>
        ボタン
      </a> */}
      <Main page="index"></Main>
    </div>
  );
}
