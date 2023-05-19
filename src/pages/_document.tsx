import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col items-center mx-auto px-2 min-h-screen max-w-2xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
