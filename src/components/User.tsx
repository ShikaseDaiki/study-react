import { useUser } from "@/hooks/useUser";
import Head from "next/head";
import { PostsByUserId } from "./PostsByUserId";

export const User = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    <div>ローディング中です</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <div>
      {isLoading ? <div>ローディング中です</div> : null}
      {error ? <div>{error.message}</div> : null}
      {isLoading ? null : (
        <div>
          <Head>
            <title>{user?.name}</title>
          </Head>
          <h1 className="font-bold text-3xl">{user.name}</h1>
          <h2 className="text-xl font-bold mt-10">詳細</h2>
          <ul className="list-inside list-disc mt-2 text-xl">
            <li>メール: {user?.email}</li>
            <li>アカウント名: {user?.username}</li>
            <li>住所: {user.address.city}</li>
            <li>電話番号: {user?.phone}</li>
            <li>Webサイト: {user?.website}</li>
            <li>勤務先: {user?.company.name}</li>
          </ul>
          <h2 className="text-xl font-bold mt-10">投稿</h2>
          <div className="mt-2">
            <PostsByUserId id={user?.id} />
          </div>
        </div>
      )}
    </div>
  );
};
