import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

const About = (props: any) => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header></Header>
      <div className="text-red-600 flex flex-col items-center">
        {props.isShow ? <h1>{props.doubleCount}</h1> : null}
        <button onClick={props.handleClick}>ボタン</button>
        <button onClick={props.handleDisplay}>
          {props.isShow ? "非表示" : "表示"}
        </button>
      </div>

      <div className="text-green-400 flex flex-col items-center">
        <input type="text" value={props.text} onChange={props.handleChange} />
        <button onClick={props.handleAdd}>追加</button>
        <ul>
          {props.array.map((item: string) => {
            return <div key={item}>{item}</div>;
          })}
        </ul>
      </div>
      <Main page="about"></Main>
    </div>
  );
};

export default About;
