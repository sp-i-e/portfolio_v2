import { MeteorBackground } from "@/components/meteorBackground/MeteorBackground";
import educationData from "@/data/about/education.json";
import summaryData from "@/data/about/summary.json";
import ShortSummary from "@/components/shortSummary/ShortSummary";
import RenderEducationIcon from "@/utils/icons/RenderEducationIcon";

async function getData() {
  return Promise.resolve({ summaryData, educationData });
}

export default async function Experience() {
  const { summaryData, educationData } = await getData();

  return (
    <div className="flex h-full">
      <div className="pattern-sm w-6 h-full border-r-1 border-base-300"></div>
      <div className="grid grid-cols-2 h-full w-full">
        <div className="flex h-full w-full col-span-2 lg:col-span-1">
          <div className="my-7 mx-10 w-full">
            {educationData?.data?.map((section, index) => (
              <div key={`education-section-${index + 1}`} className="mb-10">
                <div className="mb-5 flex gap-3 items-center">
                  <span className="flex size-7 items-center justify-center">
                    <RenderEducationIcon icon={section?.icon} />
                  </span>
                  <h3 className="text-lg font-bold">{section?.title}</h3>
                </div>
                <div className="group collapse rounded-none mb-1">
                  <input type="checkbox" className="p-0" />
                  <div className="collapse-title font-semibold p-0">
                    <div className="mb-1 flex items-center gap-3">
                      <div className="flex size-6 items-center justify-center rounded-lg border bg-base-300">
                        <RenderEducationIcon icon={section?.subtext?.icon} />
                      </div>
                      <h4 className="flex-1 font-medium underline-offset-4 group-hover:underline">
                        {section?.subtext?.title}
                      </h4>
                    </div>
                    <p className="flex font-medium items-center gap-2 pl-9 text-sm">
                      <span>{section?.subtext?.location}</span>
                      <span className="text-neutral">|</span>
                      <span>{section?.subtext?.timeline}</span>
                    </p>
                  </div>
                </div>
              </div>
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
