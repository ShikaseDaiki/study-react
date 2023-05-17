import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

export const usePost = (id: string | string[] | undefined) => {
  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
