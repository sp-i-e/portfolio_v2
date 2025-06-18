"use client";

import ThemeSwitcher from "@/components/themeSwitcher/ThemeSwitcher";
import AboutMeIcon from "@/icons/AboutMeIcon";
import Logo from "@/icons/Logo";
import PhoneOutlineIcon from "@/icons/PhoneOutlineIcon";
import WorkIcon from "@/icons/WorkIcon";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="h-full w-full grid grid-cols-18">
      <div
        className={clsx([
          "transition-background duration-100 col-span-6 md:col-span-4 relative",
          { "bg-base-300 md:bg-base-100": pathname === "/" },
        ])}
      >
        <Link
          className="cursor-crosshair h-full w-full flex justify-center items-center"
          href="/"
        >
          <Logo className="h-20 w-20 fill-current" />
        </Link>
      </div>
      <div
        className={clsx([
          "transition-background duration-100 font-semibold text-sm md:text-lg col-span-3 lg:col-span-2 hover:bg-base-300 border-x-1 border-base-300",
          { "bg-base-300": pathname === "/" },
          ["hidden md:block"],
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
          "transition-background duration-100 font-semibold text-sm md:text-lg col-span-3 lg:col-span-2 hover:bg-base-300 border-r-1 border-base-300",
          { "bg-base-300": pathname?.includes("/about") },
        ])}
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="/about"
        >
          <span className="hidden md:block">_about</span>
          <AboutMeIcon className="h-10 w-10 fill-current block md:hidden" />
        </Link>
      </div>
      <div
        className={clsx([
          "transition-background duration-100 font-semibold text-sm md:text-lg col-span-3 lg:col-span-2 hover:bg-base-300 border-r-1 border-base-300",
          { "bg-base-300": pathname === "/works" },
        ])}
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="/works"
        >
          <span className="hidden md:block">_works</span>
          <WorkIcon className="h-10 w-10 fill-current block md:hidden" />
        </Link>
      </div>
      <div className="hidden lg:block col-span-5"></div>
      <div className="col-span-3 md:col-span-2 lg:col-span-1 flex items-center justify-center hover:bg-base-300 border-l-1 border-base-300">
        <ThemeSwitcher />
      </div>
      <div
        className={clsx([
          "transition-background duration-100 font-semibold text-sm md:text-lg col-span-3 lg:col-span-2 hover:bg-base-300 border-l-1 border-base-300",
          { "bg-base-300": pathname === "/contact" },
        ])}
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="/contact"
        >
          <span className="hidden md:block">_contact</span>
          <PhoneOutlineIcon className="h-10 w-10 fill-current block md:hidden" />
        </Link>
      </div>
    </div>
  );
}
