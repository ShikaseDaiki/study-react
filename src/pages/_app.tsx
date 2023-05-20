import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const fetcher = async (url: any) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }
  const json = await response.json();
  return json;
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
};

export default App;
