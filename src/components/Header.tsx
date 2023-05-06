import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center">
      <Link href="/" className="inline-block px-2 py-6 hover:text-blue-500">
        Index
      </Link>
      <Link
        href="/about"
        className="inline-block px-2 py-6 hover:text-blue-500"
      >
        About
      </Link>
    </header>
  );
};
