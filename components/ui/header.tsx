"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isClickable, setisClickable] = useState(false);

  const toggle = (): void => {
    setisClickable(!isClickable);
  };
  return (
    <>
      <div className="flex items-center p-5 justify-between sm:justify-around">
        <span className="hoverw:text-[#5a47ab] text-[#3e4747] hover:text-[#5a47ab] text-3xl font-extrabold">
          <Link href="./">Tech Verse</Link>
        </span>

        <div className="sm:flex gap-4 pt-3 hidden">
          <Link
            className="text-[#666464] font-medium hover:text-[#5a47ab]"
            href="https://soft-jelly-a9fb33.netlify.app/"
          >
            PORTFOLIO
          </Link>
          <Link
            className="hover:text-[#5a47ab] text-[#666464] font-medium"
            href="https://static-resume-roan.vercel.app"
          >
            CV
          </Link>
          <Link
            className="hover:text-[#5a47ab] text-[#666464] font-medium"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className="hover:text-[#5a47ab] text-[#666464] font-medium"
            href="/blog"
          >
            BLOG
          </Link>
        </div>
        <span
          className=" flex sm:hidden items-center justify-center p-2 rounded-md text-slate-400 "
          onClick={toggle}
        >
          {isClickable ? (
            <Image src="xmarks.svg" alt="Menu" width={25} height={25} />
          ) : (
            <Image src="bars.svg" alt="Menu" width={25} height={25} />
          )}
        </span>
        <div className="md:flex pt-3 gap-3 cursor-pointer hidden">
          <Link href="https://www.facebook.com/">
            {" "}
            <Image src={"/Facebook.svg"} alt="Logo" width={25} height={25} />
          </Link>
          <Link href="https://www.instagram.com/ayesha_faisal_mughal/?__pwa=1">
            <Image src={"/Instagram.svg"} alt="Logo" width={25} height={25} />
          </Link>
          <Link
            className="pt-[0.18rem]"
            href="https://github.com/ayesha-offical"
          >
            <Image src={"/Git Hub.svg"} alt="Logo" width={20} height={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/ayesha-siddiqua-164501342/">
            {" "}
            <Image src={"/LinkedIn.svg"} alt="Logo" width={25} height={25} />
          </Link>
        </div>
      </div>

      {isClickable && (
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center gap-6">
            <Link
              className="text-[#666464] font-medium hover:text-[#5a47ab]"
              href="https://soft-jelly-a9fb33.netlify.app/"
            >
              PORTFOLIO
            </Link>

            <Link
              className="hover:text-[#5a47ab] text-[#666464] font-medium"
              href="https://static-resume-roan.vercel.app"
            >
              CV
            </Link>
            <Link
              className="hover:text-[#5a47ab] text-[#666464] font-medium"
              href="/about"
            >
              ABOUT ME
            </Link>
            <Link
              className="hover:text-[#5a47ab] text-[#666464] font-medium"
              href="/blog"
            >
              BLOG
            </Link>
          </div>
          <div className="border-b pt-8 "></div>
        </div>
      )}
    </>
  );
};

export default Header;
