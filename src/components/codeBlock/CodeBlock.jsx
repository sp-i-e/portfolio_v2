"use client";

import useStateData from "@/hooks/useStateData";
import Link from "next/link";
import clsx from "clsx";

export default function CodeBlock({ codeBlocks }) {
  const { state } = useStateData();
  return (
    <div
      className={clsx([
        "mockup-code mx-[33%] rounded-none",
        { "bg-neutral/50": state?.theme === "dark" },
        { "bg-neutral/85": state?.theme !== "dark" },
      ])}
    >
      {codeBlocks?.map((codeBlock, i) => (
        <pre
          data-prefix={codeBlock?.prefix}
          key={`code-block-${i + 1}`}
          className={codeBlock?.className}
        >
          <code>
            {codeBlock?.isLink ? (
              <Link
                className="link link-hover"
                href={codeBlock?.link}
                target="_blank"
              >
                {codeBlock?.text}
              </Link>
            ) : (
              codeBlock?.text
            )}
          </code>
        </pre>
      ))}
    </div>
  );
}
