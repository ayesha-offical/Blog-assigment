"use client";

import React from 'react'
import Image from 'next/image'
import { useState } from "react";

interface Postdata {
    id?: number;
    image: string;
    date: string;
    title: string;
    description: string;
  }
const Post = (props:Postdata) => {

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className="flex bg-[#F8F9FA]  justify-center items-center">
    
        <div className="gap-9 pt-4 flex justify-center mb-5 items-center flex-col w-[90%]" key={props.id}>
          <h1 className=" text-[#D05270] font-bold text-5xl">{props.title}</h1>
          <Image className="rounded-md shadow-xl" src={props.image} alt={props.title} 
          width={870}
          height={870}
          />
          <div className="w-[80%]">
            <p className="font-semibold text-[#5a47ab]">Posted on {props.date}</p>
            </div>
          <p className="font-medium w-[80%]">{props.description}</p>
        
          <div className="md:w-[80%] p-6 border-t border-blue-200 bg-gradient-to-r from-purple-200 to-pink-200 rounded-md">
        <h2 className="text-2xl font-semibold text-primary2 mb-4">
           Comment Here!
        </h2>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className=" text-text2 text-lg font-medium font-raleway p-3 rounded-lg shadow-sm"
              >
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-600">Let's Comment down.......... </p>
        )}
        <div className="mt-6">
          <textarea
            className="w-full p-4 border text-lg border-purple-300 rounded-lg font-raleway font-medium "
            rows={5}
            placeholder="Write your comment..."
            value={newComment}
            onChange={(change) => setNewComment(change.target.value)}
          ></textarea>
          <button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500  text-white rounded-lg  "
            onClick={handleCommentSubmit}
          >
            Add Comment
          </button>
        </div>
      </div>

        </div>
      
        </div>

  )}

export default Post