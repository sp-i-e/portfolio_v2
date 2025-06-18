import { MeteorBackground } from "@/components/meteorBackground/MeteorBackground";
import ShortSummary from "@/components/shortSummary/ShortSummary";
import summaryData from "@/data/about/summary.json";
import interestsData from "@/data/about/interests.json";
import RenderInterestsIcon from "@/utils/icons/RenderInterestsIcon";
import React from "react";

async function getData() {
  return Promise.resolve({ summaryData, interestsData });
}

export default async function Interest() {
  const { summaryData, interestsData } = await getData();

  return (
    <div className="flex h-full">
      <div className="pattern-sm w-6 h-full border-r-1 border-base-300"></div>
      <div className="grid grid-cols-2 h-full w-full">
        <div className="flex h-full w-full col-span-2 lg:col-span-1">
          <div className="w-[80%]">
            {interestsData?.data?.map((section, index) => (
              <React.Fragment key={`interest-section-${index + 1}`}>
                <blockquote
                  id={section?.text}
                  className="mx-8 my-11 border-l-4 border-neutral px-4 py-1 text-xl font-semibold"
                >
                  {section?.text}
                </blockquote>
                <div className="grid grid-cols-4 sm:grid-cols-7 items-center gap-4 m-8">
                  {section?.items?.map((item, _index) => (
                    <div
                      data-tip={item?.tooltip}
                      className="tooltip"
                      key={`interest-section-${_index + 1}`}
                    >
                      <RenderInterestsIcon icon={item?.icon} />
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex w-full col-span-2 lg:col-span-1">
          <div className="h-100 flex w-full gap-5 sticky top-0">
            <div className="hidden lg:block pattern-sm w-6 h-full border-x-1 border-b-1 border-base-300"></div>
            <div className="wrap-anywhere text-sm md:text-lg overflow-hidden relative flex flex-col gap-2 justify-center m-auto lg:m-[0]">
              <div className="">
                <MeteorBackground number={20} />
              </div>
              <ShortSummary data={summaryData?.bioSection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
