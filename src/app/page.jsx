import FlipSentences from "@/components/flipSentences/FlipSentences";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2 w-full h-full overflow-auto">
      <div className="w-full h-full overflow-x-hidden border-r-1 border-base-300">
        <div className="screen-line-after pt-35 pl-2 pb-1 font-mono text-xs text-neutral-500 select-none mx-[15%] border-x-1 border-base-300">
          <span className="screen-line-before pt-1">text-3xl</span>
          <span className="inline"> text-neutral-500 </span>
          <span>font-medium</span>
        </div>
        <div className="pl-2 text-5xl font-bold screen-line-after mx-[15%] border-x-1 border-base-300">
          <span className="w-full">Hitesh Yadav</span>
        </div>
        <div className="mx-[15%] screen-line-after border-x-1 border-base-300 p-2">
          <FlipSentences
            sentences={[
              "Software Developer",
              "UI/UX Designer",
              "Backend Enthusiast",
              "Not an Open Source Contributor ¯\\_(ツ)_/¯",
            ]}
          />
        </div>
        <div className="pattern-sm h-10"></div>
        <div className="mockup-code mx-[15%] bg-neutral rounded-none">
          <pre data-prefix="$">
            <code>git clone</code>
          </pre>
          <pre data-prefix="">
            <code>
              <Link
                className="link link-hover"
                href="https://github.com/spyder7370/portfolio"
                target="_blank"
              >
                git@github.com:sp-9904/sp-9904.github.io.git .
              </Link>
            </code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>Cloning into 'sp-9904.github.io'...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Resolving deltas: 100% (41/41), done.</code>
          </pre>
          <pre data-prefix="$" className="text-blue-500">
            <code>npm i && npm run dev</code>
          </pre>
          <pre data-prefix="$" className="text-warning">
            <code>✓ Starting...</code>
          </pre>
          <pre data-prefix="$" className="text-success">
            <code>✓ Ready.</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
