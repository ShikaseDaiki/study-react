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
          <p>【ユーザー詳細】</p>
          <h1>ユーザーID : {user?.id}</h1>
          <p>名前 : {user?.username}</p>
          {user?.name ? (
            <div>
              電話番号 : {user.phone}
              <p>【投稿一覧】</p>
              <PostsByUserId id={user?.id} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
