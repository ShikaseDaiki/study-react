import { useRouter } from "next/router";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();
  const { data: user, error: userError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null
  );

  return {
    user,
    error: userError,
    isLoading: !user && !userError,
  };
};
