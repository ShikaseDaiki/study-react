import { useCommentsByPostId } from "@/hooks/useFetchArray";
import { usePost } from "@/hooks/usePost";
import Head from "next/head";
import { CommentsByPostId } from "./CommentsByPostId";
import { UserByUserId } from "./UserByUserId";

export const Post = () => {
  const { data, error, isLoading } = usePost();

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
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data?.userId} />
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
