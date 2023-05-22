import { API_URL } from "@/utils/const";
import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";

export const useComment = () => {
  const router = useRouter();
  const { data: comment, error: commentError } = useSWRImmutable(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  return {
    comment,
    error: commentError,
    isLoading: !comment && !commentError,
  };
};
