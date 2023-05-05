import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header></Header>
      <Main page="index"></Main>
    </div>
  );
}
