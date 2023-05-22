import { CommentComponent } from "@/components/Comment";
import { Header } from "@/components/Header";
import { API_URL } from "@/utils/const";
import { SWRConfig } from "swr";
import { idText } from "typescript";

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment: any) => ({
    params: { id: comment.id.toString() },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();

  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 1,
    };
  }

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 1,
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
