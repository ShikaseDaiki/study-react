import { useComments } from "@/hooks/useFetchArray";
import Link from "next/link";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
        <ul className="space-y-2">
          {data?.map((comment: any) => {
            return (
              <li key={comment.id} className="border-b pb-2">
                <Link
                  href={`/comments/${comment.id}`}
                  className="block hover:text-blue-500"
                  prefetch={false}
                >
                  {comment.body}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
