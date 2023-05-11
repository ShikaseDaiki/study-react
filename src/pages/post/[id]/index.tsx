import Head from "next/head";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
};

export default PostId;
