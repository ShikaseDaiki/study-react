import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

export const useUser = () => {
  const router = useRouter();
  const { data: user, error: userError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return {
    user,
    error: userError,
    isLoading: !user && !userError,
  };
};
