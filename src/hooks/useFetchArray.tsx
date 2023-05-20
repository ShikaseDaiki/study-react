import useSWR from "swr";

export const useFetchArray = (url: string | null) => {
  const { data, error } = useSWR(url);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

// 投稿の取得
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const usePostsByUserId = (id: number) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

// ユーザーの取得
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

// コメントの取得
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id: number) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
