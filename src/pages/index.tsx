import { Inter } from "next/font/google";
import Head from "next/head";
import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

const About = (props: any) => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶ React講座</h1>
      <p>JSON PlaceholderのAPIを色々叩いてみる</p>
    </div>
  );
};

export default About;
