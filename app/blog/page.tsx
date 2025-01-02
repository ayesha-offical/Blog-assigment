"use client";

import postdata from "../blogdata/postdata";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Blogpage = () => {
  const Routing = useRouter();
  return (
    <main className=" py-20 flex flex-col gap-10  bg-[#F8F9FA] justify-center items-center  min-h-screen w-screen ">
      <div className="gap-6 flex justify-center items-center flex-col ">
        <h1 className="flex justify-center items-center text-4xl md:text-5xl font-bold text-[#D05270]">
          Here It The Blogs World !
        </h1>
        <p className="flex justify-center font-semibold">
          Stay ahead to know more tech Blog in All over the World .
        </p>
      </div>
      <div>
        <h1 className="flex justify-start text-4xl md:text-5xl font-bold text-[#5a47ab]">
          Latest Blogs.
        </h1>
      </div>
      <div className=" grid gap-10 grid-cols-1  lg:grid-cols-3 sm:grid-cols-2">
        {postdata.map((post, index) => {
          return (
            <div
              className=" flex w-[280px] flex-col gap-3 cursor-pointer"
              key={index}
              onClick={() => Routing.push(`/blog/${index + 1}`)}
            >
              <Image
                className="rounded-lg"
                src={post.image}
                alt="postimage"
                width={300}
                height={200}
              />
              <div className="text-sm text-slate-700">{post.date}</div>
              <div className=" font-semibold text-2xl line-clamp-2">
                {post.title}
              </div>
              <div className="line-clamp-3">{post.description}</div>
              <div className="text-[#D05270] underline font-bold ">
                Read More....
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Blogpage;
