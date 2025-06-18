import { VortexBackground } from "@/components/vortexBackground/VortexBackground";
import RenderLinkIcon from "@/utils/icons/RenderLinkIcon";
import Link from "next/link";
import summaryData from "@/data/contact/summary.json";

async function getData() {
  return Promise.resolve(summaryData);
}
export default async function Contact() {
  const data = await getData();

  return (
    <div className="relative w-full overflow-auto">
      <VortexBackground>
        <div className="h-full w-full border-l-1 border-base-300">
          <div className="flex flex-col w-full h-full overflow-x-hidden">
            <div className="pt-15 pb-1 font-mono text-xs text-neutral-500 select-none mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[30%] border-x-1 border-base-300"></div>
            <div className="screen-line-before py-2 pl-2 font-mono text-xs text-neutral-500 select-none mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[30%] border-x-1 border-base-300">
              <span>{data?.bioSection?.text}</span>
            </div>
            <div className="pattern-sm h-8 screen-line-before screen-line-after"></div>
            <div className="mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[30%] border-x-1 border-base-300">
              <ul className="flex flex-col w-full p-5 gap-3">
                {data?.bioSection?.items?.map((item, index) => (
                  <li
                    key={`bio-item-${index + 1}`}
                    className="list-row flex gap-3 items-center p-0"
                  >
                    <div className="bg-base-200 p-1 rounded-md border-2 border-base-300">
                      <RenderLinkIcon icon={item?.icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <span>{item?.text} </span>
                      {item?.linkText && (
                        <Link
                          className="link link-hover"
                          href={item?.link}
                          target="_blank"
                        >
                          {item?.linkText}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pattern-sm h-8 screen-line-before screen-line-after"></div>
            <div className="py-2 pl-2 font-mono text-xs text-neutral-500 select-none mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[30%] border-x-1 border-base-300">
              <span>{data?.linksSection?.text}</span>
            </div>
            <div className="relative mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[30%] border-x-1 border-base-300">
              <div className="invisible sm:visible absolute -z-1 inset-0 grid gap-4 grid-cols-2">
                <div className="border-r border-base-300"></div>
                <div className="border-l border-base-300"></div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {data?.linksSection?.items?.map((item, index) => (
                  <Link
                    key={`link-item-${index + 1}`}
                    href={item?.link}
                    target="_blank"
                    className="h-20 flex items-center screen-line-after screen-line-before hover:bg-base-300/55 transition-background duration-100"
                  >
                    <div className="grow pl-4 flex gap-3 items-center">
                      <RenderLinkIcon icon={item?.icon} />
                      <div className="flex flex-col h-full justify-center">
                        <div>{item?.text}</div>
                        <div className="text-xs text-base-300-content">
                          {item?.linkText}
                        </div>
                      </div>
                    </div>
                    <div className="pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        className="rotate-270"
                      >
                        <path
                          fill="currentColor"
                          d="M20.91 20.002v32.29l357.793 338.9L20.91 101.407v58.942l355.942 250.224l-86.89-17.527l26.913 30.947l-70.502 3.008l245.633 64.603l-65.502-249.054l-15.352 92.36l-27.3-31.46l16.683 60.464L161.26 20.002h-22.37l142.276 208.935L109.496 42.17l98.975 138.547L45.194 20.002zm433 92.186l-32.234 38.482l55.19 208.21l15.286-217.794l-38.242-28.9zm-231.88 327.89l-24.975 23.47l21.674 27.62l149.225-12.78l-145.926-38.31z"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="pattern-sm h-8 screen-line-after"></div>
            <div className="h-15 pb-1 font-mono text-xs text-neutral-500 select-none mx-[7%] sm:mx-[15%] md:mx-[22%] lg:mx-[30%] border-x-1 border-base-300"></div>
          </div>
        </div>
      </VortexBackground>
    </div>
  );
}
