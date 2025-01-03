import React from "react";
import Image from "next/image";
import Blogpage from "../../app/blog/page";

import Link from "next/link";
const Hero = () => {
  return (
    <>
    <main className=" p-16 flex flex-col py-5 gap-5 md:gap-0 md:flex-row bg-[#F8F9FA]   min-h-screen w-screen justify-center items-center">
      <div className=" w-screen min-h-screen llg:w-1/2 px-16  md:p-10 flex justify-center items-start flex-col  ">
        <h1 className=" flex text-[52px] font-bold text-[#D05270]">
          Blog Post
        </h1>
        <p className="text-[52px] font-medium text-[#424242]">
          I think so, this is it.{" "}
        </p>
        <div className="flex text-[#424242] flex-col pt-7">
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </div>
        <button className="mt-5 font-medium px-10 py-2 text-xl bg-[#D05270] hover:bg-[#5a47ab] rounded-md">
          <Link href="https://www.linkedin.com/in/ayesha-siddiqua-164501342/">
            LinkeIn
          </Link>
        </button>
      </div>

      <div className=" w-screen llg:h-screen md:w-1/2 flex justify-center items-center">
        <div className=" hidden llg:flex items-center justify-end ">
          <Image src="/Heropic.svg" alt="image" width={408} height={407} />
        </div>
      </div>
     
    </main>
    <Blogpage/>
    </>
  );
};

export default Hero;
