import { usePosts } from "@/hooks/usePosts";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

type State = {
  data: string[];
  loading: boolean;
  error: any;
};

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    <div>ローディング中です</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  if (isEmpty) {
    <div>データは空です</div>;
  }

  return (
    <div>
      {error ? <div>{error.message}</div> : null}
      {isEmpty ? <div>データは空です</div> : null}
      {isLoading ? (
        <div>ローディング中です</div>
      ) : (
        <ol>
          {data?.map((post: any) => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  {post.id}. {post.title}
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};
