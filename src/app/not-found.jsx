import LeftArrowIcon from "@/icons/LeftArrowIcon";
import TerminalAnimation from "@/icons/TerminalAnimation";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="mt-10 flex justify-center">
        <TerminalAnimation className="text-error h-50 w-50" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col">
        <main id="content">
          <div className="px-4 pb-10 text-center sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold  sm:text-9xl">404</h1>
            <p className="mt-5">Sorry, we couldnt find your page.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
              <Link className="btn btn-outline btn-error" href="/">
                <LeftArrowIcon className="h-9 w-9 fill-current" />
                Back to home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
