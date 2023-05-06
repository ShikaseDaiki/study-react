import "@/styles/globals.css";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgBlue } from "@/hooks/useBgBlue";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgBlue();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}
