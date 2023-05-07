import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function About(props: any) {
  console.log(props);

  const {
    doubleCount,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header></Header>
      <div className="text-red-600 flex flex-col items-center">
        {isShow ? <h1>{doubleCount}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      </div>

      <div className="text-green-400 flex flex-col items-center">
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item: string) => {
            return <div key={item}>{item}</div>;
          })}
        </ul>
      </div>
      <Main page="about"></Main>
    </div>
  );
}
