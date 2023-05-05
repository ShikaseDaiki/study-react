import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/Main";
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Main page="about"></Main>
    </div>
  );
}
