import { useCommentsByPostId } from "@/hooks/useFetchArray";
import Link from "next/link";

export const CommentsByPostId = (props: any) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
