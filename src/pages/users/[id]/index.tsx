import { Header } from "@/components/Header";
import { User } from "@/components/User";
import { API_URL } from "@/utils/const";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  // ユーザー情報の取得
  const USER_API_URL = `${API_URL}/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();

  // ユーザーの投稿の取得
  const POSTS_API_URL = `${API_URL}/posts?userId=${userData.id}`;
  const posts = await fetch(POSTS_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UsersId = (props: any) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <User />
    </SWRConfig>
  );
};

export default UsersId;
