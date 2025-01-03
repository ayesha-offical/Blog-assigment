import Blogpostdata from "@/app/blogdata/postdata2";
import Post from "@/components/ui/post";
import { notFound } from "next/navigation";

export default async function Page({
    params,
  }: {
    params: Promise<{ postdata: string }>
  }) {
    const id = (await params).postdata;
    const post = Blogpostdata.find((post ) => post.id === parseInt(id))
    
    if(!post){
      return notFound()
    }
    
    return ( <main>
     <Post
     
     key={post.id}
     image={post.image}
     date={post.date}
     title={post.title}
     description={post.description}

     />
</main>
)};