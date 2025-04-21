"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  // { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navigator() {
  const pathname = usePathname();

  return (
    <nav className="w-[350px] py-4 fixed left-1/2 -translate-x-1/2 bottom-4 border border-gray-600 z-50 rounded-full bg-gray-950">
      <ul className="flex justify-around text-sm md:text-base">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                "text-gray-400 hover:text-gray-300 transition-colors text-sm",
                pathname === item.href
                  ? "font-medium underline underline-offset-4"
                  : ""
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
