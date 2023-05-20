import { useUsers } from "@/hooks/useFetchArray";
import Link from "next/link";

export const UsersComponent = () => {
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

  return (
    <div>
      {error ? <div>{error.message}</div> : null}
      {isEmpty ? <div>データは空です</div> : null}
      {isLoading ? null : (
        <ul className="grid grid-cols-2 gap-6">
          {data?.map((user: any) => {
            return (
              <li key={user.id}>
                <Link
                  href={`/users/${user.id}`}
                  className="block p-4 shadow rounded hover:bg-gray-100"
                >
                  <h1 className="text-xl font-bold truncate">{user.name}</h1>
                  <div className="text-lg truncate">{user.email}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
