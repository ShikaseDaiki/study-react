import { usePost } from "@/hooks/usePost";
import Head from "next/head";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();
  console.log({ post, user, error, isLoading });

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
      <div>
        <Head>
          <title>{post?.title}</title>
        </Head>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created by {user.name}</div> : null}
      </div>
    </div>
  );
};
