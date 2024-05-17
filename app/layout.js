import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Table Filter",
  description: "A filterable table",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-[68px] bg-white justify-between px-24 flex items-center sticky top-0 z-10">
          <Link href={'/'}>
            <img className="w-[37px]" src="Huguenots_mark.svg" alt="Huguenots Logo"></img>
          </Link>
          <div className="flex">
            <img className="w-[20px] h-[20px] mr-2" src="flag.png" alt="Huguenots Logo"></img>
            <p className="text-sm text-[#111111]">Professional Investor</p>
          </div>
        </div>
        {children}
        <div className="w-100 bg-[#033057] px-24 pt-[45px] pb-[30px]">
          <img className="w-[37px]" src="Huguenots_mark.svg" alt="Huguenots Logo"></img>
          <p className="mt-10 text-white text-sm mr-[33%]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
          <div className="flex mt-10">
            <Link className="text-white text-sm" href={'#'}>Terms of Use</Link>
            <Link className="text-white text-sm ml-5" href={'#'}>Legal Terms</Link>
            <Link className="text-white text-sm ml-5" href={'#'}>Privacy Policy</Link>
            <Link className="text-white text-sm ml-5" href={'#'}>Cookie Policy</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
