import { useUsers } from "@/hooks/useUsers";
import Link from "next/link";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    <div>ローディング中です</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  if (isEmpty) {
    <div>データは空です</div>;
  }

  console.log({ data, error, isLoading, isEmpty });

  return (
    <div>
      {error ? <div>{error.message}</div> : null}
      {isEmpty ? <div>データは空です</div> : null}
      {isLoading ? null : (
        <ol>
          {data?.map((user: any) => {
            return (
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>
                  {user.id}. {user.name}
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};
