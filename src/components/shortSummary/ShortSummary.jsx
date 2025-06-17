import RenderLinkIcon from "@/utils/icons/RenderLinkIcon";
import Link from "next/link";

export default function ShortSummary({ data }) {
  return (
    <>
      <div>{"{"}</div>
      {data?.items?.map((item, index) => (
        <div key={`short-summary-item-${index + 1}`}>
          &nbsp;&nbsp;&nbsp;&nbsp;"
          <RenderLinkIcon icon={item?.icon} className="inline w-5 h-5" />
          ": "<span>{item?.text} </span>
          {item?.linkText && (
            <Link className="link link-hover" href={item?.link} target="_blank">
              {item?.linkText}
            </Link>
          )}
          ",
        </div>
      ))}
      <div>{"}"}</div>
    </>
  );
}
