import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { idText } from "typescript";
import Link from "next/link";

export const UserByUserId = (props: any) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
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
      {data?.name ? <Link href={`/users/${data.id}`}> {data.name}</Link> : null}
    </div>
  );
};
