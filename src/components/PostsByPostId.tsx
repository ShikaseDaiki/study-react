import Link from "next/link";
import { usePost } from "@/hooks/usePost";

export const PostsByPostId = (props: any) => {
  const { data, error } = usePost(props.id);

  if (!data && !error) {
    <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data?.id ? (
        <Link
          href={`/posts/${data.id}`}
          className="text-lg hover:text-blue-500"
        >
          {data.title}
        </Link>
      ) : null}
    </div>
  );
};
