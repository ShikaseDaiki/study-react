import { useComment } from "@/hooks/useComment";
import Head from "next/head";
import { PostByPostId } from "./PostByPostId";

export const Comment = () => {
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
          <h1>コメントID : {comment?.id}</h1>
          <p>名前 : {comment?.name}</p>
          {comment?.name ? <div>メールアドレス : {comment.email}</div> : null}
          【投稿元】
          <PostByPostId id={comment?.postId} />
        </div>
      )}
    </div>
  );
};
