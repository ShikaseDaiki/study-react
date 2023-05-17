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

  console.log({ data });
  return (
    <div>
      {error ? <div>{error.message}</div> : null}
      {isEmpty ? <div>データは空です</div> : null}
      {isLoading ? null : (
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
