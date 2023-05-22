import useSWR from "swr";
import Link from "next/link";
import { API_URL } from "@/utils/const";

export const UserByUserId = (props: any) => {
  const { data, error } = useSWR(
    props.id ? `${API_URL}/users/${props.id}` : null
  );

  if (!data && !error) {
    <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data?.name ? (
        <Link href={`/users/${data.id}`} className="text-lg">
          Created by {data.name}
        </Link>
      ) : null}
    </div>
  );
};
