"use client";

import RenderNavIcon from "@/utils/icons/RenderNavIcon";
import { useEffect, useRef, useState } from "react";
import AboutNavbar from "./AboutNavbar";
import { usePathname } from "next/navigation";

export default function FolderItem({ item }) {
  const folderRef = useRef(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(
    !!item?.open || pathname?.includes(item?.id)
  );

  useEffect(() => {
    if (pathname?.includes(item?.id)) setIsOpen(true);
  }, [pathname]);

  const handleClick = () => {
    setTimeout(() => {
      if (folderRef?.current?.open) setIsOpen(true);
      else setIsOpen(false);
    }, 1);
  };

  return (
    <details open={isOpen} ref={folderRef} onClick={handleClick}>
      <summary>
        <RenderNavIcon icon={isOpen ? "folder-open" : "folder-close"} />
        {item?.text}
      </summary>
      {item?.children && <AboutNavbar data={item?.children} />}
    </details>
  );
}
