import React from "react";
import Link from "next/link";

const NAV_ITEM = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className="flex justify-center">
      {NAV_ITEM.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className="inline-block px-2 py-6 hover:text-blue-500"
          >
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
