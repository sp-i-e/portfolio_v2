import Link from "next/link";
import GithubIcon from "@/icons/GithubIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import ResumeIcon from "@/icons/ResumeIcon";

export default function Footer() {
  return (
    <div className="h-full w-full grid grid-cols-18">
      <div className="cursor-default font-semibold text-sm md:text-lg col-span-9 md:col-span-6 lg:col-span-3 flex items-center justify-center">
        _quick-links
      </div>
      <div
        data-tip="Dwld CV"
        className="transition-background duration-100 tooltip relative font-semibold  text-sm md:text-lg col-span-3 md:col-span-2 lg:col-span-1 hover:bg-base-300 border-x-1 border-base-300"
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="https://drive.google.com/file/d/1Sp7H35MfQzWue81gpkcSZDaFrEOmNp4R/view?usp=sharing"
          target="_blank"
        >
          <ResumeIcon className="h-10 w-10 fill-current" />
        </Link>
      </div>
      <div
        data-tip="Lkdn"
        className="transition-background duration-100 tooltip relative font-semibold  text-sm md:text-lg col-span-3 md:col-span-2 lg:col-span-1 hover:bg-base-300 border-r-1 border-base-300"
      >
        <Link
          className="h-full w-full flex items-center justify-center"
          href="https://www.linkedin.com/in/hitesh9904/"
          target="_blank"
        >
          <LinkedinIcon className="h-10 w-10 fill-current" />
        </Link>
      </div>
      <div className="hidden md:block col-span-3 lg:col-span-10"></div>
      <div
        data-tip="Gthb"
        className="transition-background duration-100 tooltip relative font-semibold text-sm md:text-lg col-span-3 md:col-span-5 lg:col-span-3 hover:bg-base-300 border-l-1 border-base-300"
      >
        <Link
          className="h-full w-full flex gap-3 items-center justify-center"
          href="https://github.com/sp-i-e"
          target="_blank"
        >
          <span className="hidden md:block">@sp-i-e</span>
          <GithubIcon className="h-10 w-10 fill-current" />
        </Link>
      </div>
    </div>
  );
}
