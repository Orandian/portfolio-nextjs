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
    <nav className="w-full py-10 bg-white fixed bottom-0 z-50">
      <ul className="flex space-x-6 text-sm md:text-base">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                "hover:text-black transition-colors",
                pathname === item.href
                  ? "text-black font-medium underline underline-offset-4"
                  : "text-gray-700"
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
