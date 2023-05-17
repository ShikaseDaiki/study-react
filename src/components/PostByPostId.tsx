import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import Link from "next/link";

export const PostByPostId = (props: any) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/posts/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data?.id ? <Link href={`/posts/${data.id}`}>{data.title}</Link> : null}
    </div>
  );
};
