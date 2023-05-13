import { Inter } from "next/font/google";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Posts } from "@/components/Posts";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
