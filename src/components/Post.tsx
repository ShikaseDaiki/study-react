import { useCallback, useEffect, useState, useReducer } from "react";

type Post = {
  id: number;
  title: string;
};

type State = {
  data: string[];
  loading: boolean;
  error: any;
};

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "end": {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case "error": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      throw new Error("no such action type");
    }
  }
};

export const Post = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading === true) {
    <div>ローディング中です</div>;
  }

  if (state.error) {
    <div>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    <div>データは空です</div>;
  }

  return (
    <div>
      {state.loading ? <div>ローディング中です</div> : null}
      {state.error != null ? <div>{state.error.message}</div> : null}
      {state.data.length === 0 ? <div>データは空です</div> : null}
      <ol>
        {state.data.map((post: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </div>
  );
};
