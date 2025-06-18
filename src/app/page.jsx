import { BackgroundBeams } from "@/components/backgroundBeams/BackgroundBeams";
import FlipSentences from "@/components/flipSentences/FlipSentences";
import homePageData from "@/data/homePage.json";
import CodeBlock from "@/components/codeBlock/CodeBlock";

async function getData() {
  return Promise.resolve(homePageData);
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <div className="relative z-10 w-full h-full overflow-auto">
        <div className="flex flex-col w-full h-full overflow-x-hidden">
          <div className="screen-line-after pt-35 pl-2 pb-1 font-mono text-xs text-neutral-500 select-none mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[33%] border-x-1 border-base-300">
            <span className="screen-line-before pt-1">text-3xl</span>
            <span className="inline"> text-neutral-500 </span>
            <span>font-medium</span>
          </div>
          <div className="pl-2 text-5xl font-bold screen-line-after mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[33%] border-x-1 border-base-300">
            <span className="w-full">{data?.heading}</span>
          </div>
          <div className="mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[33%] border-x-1 border-base-300 p-2">
            <FlipSentences sentences={data?.flipSentences} />
          </div>
          <div className="pattern-sm h-8 screen-line-before screen-line-after"></div>
          <CodeBlock codeBlocks={data?.codeBlocks} />
          <div className="pattern-sm h-8 screen-line-before screen-line-after"></div>
          <div className="border-x-1 border-base-300 mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[33%] grow"></div>
        </div>
      </div>
      <BackgroundBeams />
    </>
  );
}
