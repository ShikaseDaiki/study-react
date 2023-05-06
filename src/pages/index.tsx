import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  const handleClick = useCallback(
    (e: any) => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => {
      return !prevIsShow;
    });
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
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </ul>
      </div>
      <Main page="index"></Main>
    </div>
  );
}
