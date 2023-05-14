import { useUser } from "@/hooks/useUser";
import Head from "next/head";

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
          <h1>ユーザーID : {user?.id}</h1>
          <p>名前 : {user?.name}</p>
          {user?.name ? <div>電話番号 : {user.phone}</div> : null}
        </div>
      )}
    </div>
  );
};
