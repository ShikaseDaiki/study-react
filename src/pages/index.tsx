import { Inter } from "next/font/google";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Post } from "@/components/Post";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Post />
    </div>
  );
};

export default Home;
