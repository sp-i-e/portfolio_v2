import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SP",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen pattern-sm font-mono`}
      >
        <div className="relative w-full h-full overflow-auto">
          <div className="border border-neutral/50 absolute inset-6 bg-base-100">
            <div className="w-full h-full grid grid-flow-col grid-rows-18">
              <div className="row-span-2 border-b-1 border-base-300">
                <Header />
              </div>
              <div className="row-span-14 overflow-scroll">{children}</div>
              <div className="row-span-2 border-t-1 border-base-300">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
