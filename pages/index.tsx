import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/Main";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Main page="index"></Main>
    </div>
  );
}
