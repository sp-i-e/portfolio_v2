import { StarsBackground } from "@/components/starsBackground/StarsBackground";
import homePageData from "@/data/works/data.json";
import clsx from "clsx";
import Link from "next/link";

async function getData() {
  return Promise.resolve(homePageData);
}

export default async function Works() {
  const data = await getData();

  return (
    <div className="relative z-10 w-full overflow-auto">
      <div className="w-full border-l-1 border-base-300">
        <div className="flex flex-col w-full h-full overflow-x-hidden">
          <div className="pt-15 pb-1 font-mono text-xs text-neutral-500 select-none mx-[22%] border-x-1 border-base-300"></div>
          {data?.data?.map((section, index) => (
            <div key={`works-section-${index + 1}`} className="">
              <div className="screen-line-after screen-line-before py-2 pl-2 font-mono text-xs text-neutral-500 select-none mx-[22%] border-x-1 border-base-300">
                <span>{section?.title}</span>
              </div>
              <div className="pattern-sm h-8 screen-line-before screen-line-after"></div>
              <div className="relative mx-[22%]">
                <div className="absolute -z-1 inset-0 grid gap-4 grid-cols-3">
                  <div className="border-x border-base-300"></div>
                  <div className="border-x border-base-300"></div>
                  <div className="border-x border-base-300"></div>
                </div>
                <div className="grid gap-4 grid-cols-3">
                  {section?.items?.map((item, _index) => (
                    <div
                      key={`works-section-${index + 1}-card-${_index + 1}`}
                      className="w-full group/card screen-line-after"
                    >
                      <label
                        htmlFor={`works-section-${index + 1}-card-${
                          _index + 1
                        }`}
                        className={clsx([
                          "cursor-pointer overflow-hidden relative card h-86 shadow-xl mx-auto backgroundImage flex flex-col justify-end p-4 bg-cover rounded-none bg-center",
                          {
                            [`bg-[image:var(--image-url)]`]: true,
                          },
                        ])}
                        style={{ "--image-url": `url(${item?.image})` }}
                      >
                        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-20 group-hover/card:opacity-60"></div>
                        <div className="z-2 text content">
                          <h1 className="font-bold text-xl text-white">
                            {item?.title}
                          </h1>
                        </div>
                      </label>
                      <input
                        type="checkbox"
                        id={`works-section-${index + 1}-card-${_index + 1}`}
                        className="modal-toggle"
                      />
                      <dialog className="modal">
                        <div className="modal-box border border-neutral p-0">
                          <StarsBackground />
                          <img
                            src={item?.image}
                            alt=""
                            className="object-cover h-50 w-full object-center"
                          />
                          <div className="p-5 flex flex-col gap-3">
                            <ul className="list rounded-box">
                              <li className="z-2 font-semibold p-4 pb-2 text-xl tracking-wide">
                                <Link
                                  className="link link-hover"
                                  href={item?.link}
                                  target="_blank"
                                >
                                  {item?.title}
                                </Link>
                              </li>
                              {item?.desc?.map((desc, __index) => (
                                <li
                                  key={`works-section-${index + 1}-card-${
                                    _index + 1
                                  }-desc-${__index + 1}`}
                                  className="list-row"
                                >
                                  <div>
                                    <div className="text-sm font-semibold opacity-60">
                                      {desc}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <div className="px-4 flex gap-2">
                              {item?.tags?.map((tag, __index) => (
                                <div
                                  key={`works-section-${index + 1}-card-${
                                    _index + 1
                                  }-tag-${__index + 1}`}
                                  className="badge badge-outline badge-primary"
                                >
                                  {tag}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <label
                          className="modal-backdrop"
                          htmlFor={`works-section-${index + 1}-card-${
                            _index + 1
                          }`}
                        >
                          Close
                        </label>
                      </dialog>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pattern-sm h-8 screen-line-before screen-line-after"></div>
            </div>
          ))}
          <div className="h-15 pb-1 font-mono text-xs text-neutral-500 select-none mx-[22%] border-x-1 border-base-300"></div>
        </div>
      </div>
    </div>
  );
}
