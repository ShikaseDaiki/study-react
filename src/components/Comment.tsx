import { useComment } from "@/hooks/useComment";
import Head from "next/head";
import { PostsByPostId } from "./PostsByPostId";

export const CommentComponent = () => {
  const { comment, error, isLoading } = useComment();

  if (isLoading) {
    <div>ローディング中です</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <div>
      {isLoading ? <div>ローディング中です</div> : null}
      {error ? <div>{error.message}</div> : null}
      {isLoading ? null : (
        <div>
          <Head>
            <title>{comment?.body}</title>
          </Head>
          <div className="text-lg">
            {comment.name} ({comment.email})
          </div>
          <h1 className="text-3xl font-bold">{comment.body}</h1>
          <h2 className="text-xl font-bold mt-10">元の記事</h2>
          <div className="mt-2">
            <PostsByPostId id={comment?.postId} />
          </div>
        </div>
      )}
    </div>
  );
};
