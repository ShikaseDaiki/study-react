import { useCallback, useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
};

type State = {
  data: string[];
  loading: boolean;
  error: any;
};

export const Post = () => {
  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState<any>(null);

  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const json = await res.json();
      setState((prevState) => {
        return {
          ...prevState,
          data: json,
          loading: false,
        };
      });
    } catch (error) {
      setState((prevState: any) => {
        return {
          ...prevState,
          loading: false,
          error: error,
        };
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading === true) {
    <div>ローディング中です</div>;
  }

  if (state.error) {
    <div>{state.error}</div>;
  }

  if (state.data.length === 0) {
    <div>データは空です</div>;
  }

  return (
    <div>
      {state.loading ? <div>ローディング中です</div> : null}
      {state.error != null ? <div>エラーです</div> : null}
      {state.data.length === 0 ? <div>データは空です</div> : null}

      <ol>
        {state.data.map((post: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </div>
  );
};
