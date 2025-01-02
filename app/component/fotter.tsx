import React from "react";
import Image from "next/image";
import Link from "next/link";

function Fotter() {
  return (<>
    <div className="border-b  "></div>
    <main className=" h-screen flex justify-center mt-20 bg-[#FFFFFF]">

      <div className=" w-[95%] flex flex-col  gap-20">
        <div className="flex flex-col items-center gap-4 justify-center md:justify-between md:flex-row">
          <div className=" flex items-center md:items-start text-center flex-col">
        <span className=" text-lg font-semibold">
              Connect with us on social media
            </span>
            <span className=" text-lg font-semibold">
              Subscribe to our newsletter
            </span>
            <span className=" text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className=" flex flex-col  gap-3">
            <div className=" flex flex-col md:flex-row items-center gap-3">
              <input
                className="border py-2 px-3 h-9 rounded-md border-black"
                type="text"
                placeholder=" Enter your email"
              />
              <button className="flex items-center justify-center text-center">
                Subscribe
              </button>
            </div>
            <span className=" text-sm md:text-sm">
              By subscribing you agree to with our
              <span className=" underline ">Privacy Policy</span>
            </span>
          </div>
        </div>
        <div className=" w-full flex flex-col items-center md:items-start  md:flex-row md:text-start text-center  gap-10">
          <div className="  w-[70%] md:w-[25%] px-5">
            <div className="flex  justify-center md:justify-start  gap-1">
              <span className="hoverw:text-[#5a47ab] text-[#3e4747] hover:text-[#5a47ab] text-3xl font-extrabold">
                Tech Verse
              </span>
            </div>
          </div>
          <div className="w-[60%] md:w-[25%] px-5 flex flex-col gap-4">
            <span className=" text-base font-semibold hover:text-[#5a47ab]">
              Our Blogs
            </span>
            <ul className="  flex flex-col gap-4 text-sm font-normal  ">
              <li>Business</li>
              <li> Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>
          <div className=" w-[60%] md:w-[25%] px-5 flex flex-col gap-5">
            <span className=" text-base font-semibold hover:text-[#5a47ab]">
              Related
            </span>
            <ul className=" list-none flex flex-col gap-4 text-sm font-normal ">
              <li>Career</li>
              <li> Resume</li>
              <li>Technology</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
            </ul>
          </div>

          <div></div>
          <div></div>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="  bg-black"></div>
          <div className=" flex flex-col items-center gap-4 md:gap-0 md:flex-row  justify-between">
            <div className=" flex flex-col items-center sm:flex-row gap-3 text-sm">
              <span>2025 Tech Verse . All right reserved.</span>
              <span className=" underline ">Privacy Policy</span>
              <span className=" underline ">Terms of Service</span>
              <span className=" underline ">Cooking Setting</span>
            </div>
            
            <div className=" flex gap-3">
              <Link href="https://www.facebook.com/">
                {" "}
                <Image
                  src={"/Facebook.svg"}
                  alt="Logo"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="https://www.instagram.com/ayesha_faisal_mughal/?__pwa=1">
                <Image
                  src={"/Instagram.svg"}
                  alt="Logo"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                className="pt-[0.18rem]"
                href="https://github.com/ayesha-offical"
              >
                <Image src={"/Git Hub.svg"} alt="Logo" width={20} height={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/ayesha-siddiqua-164501342/">
                {" "}
                <Image
                  src={"/LinkedIn.svg"}
                  alt="Logo"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default Fotter;
