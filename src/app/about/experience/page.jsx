import { MeteorBackground } from "@/components/meteorBackground/MeteorBackground";
import experienceData from "@/data/about/experience.json";
import summaryData from "@/data/about/summary.json";
import ShortSummary from "@/components/shortSummary/ShortSummary";
import RenderExperienceIcon from "@/utils/icons/RenderExperienceIcon";

async function getData() {
  return Promise.resolve({ summaryData, experienceData });
}

export default async function Experience() {
  const { summaryData, experienceData } = await getData();

  return (
    <div className="flex h-full">
      <div className="pattern-sm w-6 h-full border-r-1 border-base-300"></div>
      <div className="grid grid-cols-2 h-full w-full">
        <div className="flex h-full w-full col-span-2 lg:col-span-1">
          <div className="my-7 mx-10 w-full">
            {experienceData?.data?.map((section, index) => (
              <div className="mb-7" key={`experience-section-${index + 1}`}>
                <div className="mb-5 flex gap-3 items-center">
                  <span className="flex size-7 items-center justify-center">
                    <RenderExperienceIcon icon={section?.icon} />
                  </span>
                  <h3 className="text-lg font-bold">{section?.title}</h3>
                  {section?.active && (
                    <span className="relative flex items-center justify-center">
                      <span className="absolute inline-flex size-3 animate-ping rounded-full bg-success opacity-50"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-success"></span>
                    </span>
                  )}
                </div>
                {section?.items?.map((item, _index) => (
                  <div
                    key={`experience-section-item-${_index + 1}`}
                    className="group collapse rounded-none mb-1"
                  >
                    <input type="checkbox" className="p-0" />
                    <div className="collapse-title font-semibold p-0">
                      <div className="mb-1 flex items-center gap-3">
                        <div className="flex size-6 items-center justify-center rounded-lg border bg-base-300">
                          <RenderExperienceIcon icon={item?.icon} />
                        </div>
                        <h4 className="flex-1 font-medium underline-offset-4 group-hover:underline">
                          {item?.title}
                        </h4>
                        {item?.content?.length && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down size-4 shrink-0 text-muted-foreground transition-transform duration-300"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        )}
                      </div>
                      <p className="flex font-medium items-center gap-2 pl-9 text-sm">
                        <span>{item?.location}</span>
                        <span className="text-neutral">|</span>
                        <span>{item?.timeline}</span>
                      </p>
                    </div>
                    {item?.content?.length && (
                      <div className="collapse-content text-sm pl-9 pt-4">
                        <ul className="list rounded-box border border-base-300">
                          {item?.content?.map((contentItem, __index) => (
                            <li
                              className="list-row"
                              key={`experience-section-item-${
                                _index + 1
                              }-content-${__index + 1}`}
                            >
                              <div>
                                <div className="text-sm font-semibold opacity-60">
                                  {contentItem}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
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
