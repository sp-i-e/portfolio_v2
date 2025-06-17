"use client";

import RenderNavIcon from "@/utils/icons/RenderNavIcon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function FileItem({ item }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!window) return;
    if (pathname + window?.location?.hash === item?.id) setIsActive(true);
    else setIsActive(false);
  }, [searchParams]);

  return (
    <Link
      href={item?.link}
      target={item?.externalLink ? "_blank" : "_self"}
      className={clsx({ "menu-active": isActive })}
    >
      {item?.icon && <RenderNavIcon icon={item?.icon} />}
      {item?.text}
    </Link>
  );
}
