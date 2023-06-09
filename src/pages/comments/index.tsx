import Head from "next/head";
import { Header } from "@/components/Header";
import { CommentsComponent } from "@/components/Comments";
import { SWRConfig } from "swr";
import { API_URL } from "@/utils/const";

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 1,
  };
};

const Comments = (props: any) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <SWRConfig value={fallback}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
