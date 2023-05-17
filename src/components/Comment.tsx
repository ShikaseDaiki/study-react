import { useComment } from "@/hooks/useComment";
import Head from "next/head";
import { PostsByPostId } from "./PostsByPostId";

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
          <p>【コメント詳細】</p>
          <h1>コメントID : {comment?.id}</h1>
          <p>名前 : {comment?.name}</p>
          {comment?.name ? (
            <div>
              メールアドレス : {comment.email}
              <p>【投稿元】</p>
              <PostsByPostId id={comment?.postId} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
