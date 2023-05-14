import { useComments } from "@/hooks/useComments";
import Link from "next/link";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
      {isLoading ? null : (
        <ol>
          {data?.map((comment: any) => {
            return (
              <li key={comment.id}>
                <Link href={`/comments/${comment.id}`}>
                  {comment.id}. {comment.body}
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};
