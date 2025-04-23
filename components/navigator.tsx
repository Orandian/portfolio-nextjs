"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { House, Trophy, UserCog, Contact } from 'lucide-react';

const navItems = [
  { name: <House/>, href: "/" },
  { name: <Trophy/>, href: "/experience" },
  // { name: "Projects", href: "/projects" },
  { name: <UserCog/>, href: "/skills" },
  { name: <Contact/>, href: "/contact" },
];

export default function Navigator() {
  const pathname = usePathname();

  return (
    <nav className="w-[250px] px-4 py-4 fixed left-1/2 -translate-x-1/2 bottom-4 border border-gray-600 z-50 rounded-full bg-gray-950">
      <ul className="flex justify-around text-sm md:text-base">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={clsx(
                "transition-colors text-sm",
                pathname === item.href
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
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
