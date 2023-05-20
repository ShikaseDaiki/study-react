import { useRouter } from "next/router";
import useSWR from "swr";

export const usePost = (id: string | string[] | undefined) => {
  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
