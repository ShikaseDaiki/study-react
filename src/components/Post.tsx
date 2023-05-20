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
      <UserByUserId id={data?.userId} />
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="test-xl text-gray-900 mt-2">{data?.body}</p>
      <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
      <div className="mt-2">
        <CommentsByPostId id={data?.id} />
      </div>
    </div>
  );
};
