import { CommentComponent } from "@/components/Comment";
import { Header } from "@/components/Header";
import { SWRConfig } from "swr";
import { idText } from "typescript";

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await comments.json();
  const paths = commentsData.map((comment: any) => ({
    params: { id: comment.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentsId = (props: any) => {
  const { fallback } = props;
  return (
    <div>
      <Header />
      <SWRConfig value={fallback}>
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
