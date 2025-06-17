import { BackgroundBeams } from "@/components/backgroundBeams/BackgroundBeams";

export default function Loading() {
  return (
    <>
      <div className="relative z-10 w-full h-full overflow-auto">
        <div className="flex flex-col w-full h-full overflow-x-hidden">
          <div className="screen-line-after pt-35 pl-2 pb-1 font-mono text-xs text-neutral-500 select-none mx-[33%] border-x-1 border-base-300">
            <span className="screen-line-before pt-1">text-3xl</span>
            <span className="inline"> text-neutral-500 </span>
            <span>font-medium</span>
          </div>
          <div className="rounded-none skeleton h-12 mb-2 pl-2 text-5xl font-bold screen-line-after mx-[33%] border-x-1 border-base-300">
            <span className="w-full"></span>
          </div>
          <div className="rounded-none skeleton h-7 mx-[33%] border-x-1 border-base-300 p-2">
            <div className=""></div>
          </div>
          <div className="pattern-sm h-8 screen-line-before screen-line-after"></div>
          <div className="skeleton mockup-code mx-[33%] bg-neutral/50 rounded-none">
            <pre data-prefix=""></pre>
            <pre data-prefix=""></pre>
            <pre data-prefix=""></pre>
            <pre data-prefix=""></pre>
            <pre data-prefix=""></pre>
            <pre data-prefix=""></pre>
            <pre data-prefix=""></pre>
          </div>
          <div className="pattern-sm h-8 screen-line-before screen-line-after"></div>
          <div className="border-x-1 border-base-300 mx-[33%] grow"></div>
        </div>
      </div>
      <BackgroundBeams />
    </>
  );
}
