import navData from "@/data/about/nav.json";
import AboutNavbar from "@/components/aboutNavbar/AboutNavbar";

async function getData() {
  return Promise.resolve(navData);
}

export default async function AboutLayout({ children }) {
  const data = await getData();
  return (
    <div className="relative z-10 w-full h-full overflow-auto">
      <div className="w-full h-full grid grid-cols-18">
        <div className="col-span-4">
          <AboutNavbar
            data={data?.data}
            className="pt-8 menu rounded-box w-full sticky top-0"
          />
        </div>
        <div className="col-span-14 h-full w-full border-l-1 border-base-300">
          {children}
        </div>
      </div>
    </div>
  );
}
