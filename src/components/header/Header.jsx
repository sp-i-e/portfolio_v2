"use client";

import ThemeSwitcher from "@/components/themeSwitcher/ThemeSwitcher";
import Logo from "@/icons/Logo";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="h-full w-full grid grid-cols-18">
      <div className="col-span-4 relative">
        <Link
          className="cursor-crosshair h-full w-full flex justify-center items-center"
          href="/"
        >
          <Logo className="h-20 w-20 fill-current" />
        </Link>
      </div>
      <div
        className={clsx([
          "transition-background duration-100 font-semibold text-lg col-span-2 hover:bg-base-300 border-x-1 border-base-300",
          { "bg-base-300": pathname === "/" },
        ])}
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="/"
        >
          _home
        </Link>
      </div>
      <div
        className={clsx([
          "transition-background duration-100 font-semibold text-lg col-span-2 hover:bg-base-300 border-r-1 border-base-300",
          { "bg-base-300": pathname?.includes("/about") },
        ])}
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="/about"
        >
          _about
        </Link>
      </div>
      <div
        className={clsx([
          "transition-background duration-100 font-semibold text-lg col-span-2 hover:bg-base-300 border-r-1 border-base-300",
          { "bg-base-300": pathname === "/works" },
        ])}
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="/works"
        >
          _works
        </Link>
      </div>
      <div className="col-span-5"></div>
      <div className="col-span-1 flex items-center justify-center hover:bg-base-300 border-l-1 border-base-300">
        <ThemeSwitcher />
      </div>
      <div
        className={clsx([
          "transition-background duration-100 font-semibold text-lg col-span-2 hover:bg-base-300 border-l-1 border-base-300",
          { "bg-base-300": pathname === "/contact" },
        ])}
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="/contact"
        >
          _contact
        </Link>
      </div>
    </div>
  );
}
