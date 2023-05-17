import { usePost } from "@/hooks/usePost";
import Head from "next/head";
import { useRouter } from "next/router";
import { CommentsByPostId } from "./CommentsByPostId";
import { UserByUserId } from "./UserByUserId";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

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
      <Head>
        <title>{data?.title}</title>
      </Head>
      【投稿詳細】
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      【投稿者】
      <UserByUserId id={data?.userId} />
      【コメント一覧】
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
