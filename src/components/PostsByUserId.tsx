import { usePostsByUserId } from "@/hooks/useFetchArray";
import Link from "next/link";

export const PostsByUserId = (props: any) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

  if (isLoading) {
    <div>ローディング中です</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  if (isEmpty) {
    <div>コメントがありません</div>;
  }

  return (
    <div>
      {error ? <div>{error.message}</div> : null}
      {isEmpty ? <div>データは空です</div> : null}
      {isLoading ? null : (
        <ul className="space-y-4">
          {data?.map((post: any) => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`} className="block group">
                  <h1 className="text-xl font-bold group-hover:text-blue-500">
                    {post.title}
                  </h1>
                  <p className="text-lg text-gray-500 group-hover:text-blue-400">
                    {post.body}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
