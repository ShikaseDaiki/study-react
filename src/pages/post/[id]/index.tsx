import Head from "next/head";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/hooks/usePosts";

const PostId = () => {
  const router = useRouter();
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );
  console.log({ user, userError });

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Header />
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <div>Created by {user?.name}</div>
      </div>
    </div>
  );
};

export default PostId;
