import React from "react";
import BlogCard from "../components/BlogCard";


export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML webdevelopment",
      description:
        "Exploring the Fundamentals of HTML: The Backbone of the Web",
      date: "2025-01-02",
      imageURL: "../images/html.jpg",
    },

    {
      id: "2",
      title: "Typescript for strong typing in javascript",
      description:
        "Typescript is a superset of javascript that compiles to plain javascript",
      date: "2024-07-21",
      imageURL: "../images/typescript.jpg",
    },

    {
      id: "3",
      title: "Tailwind CSS for Styling",
      description:
        "Tailwind CSS is a utility-first CSS framework for creating custom designs",
      date: "2024-08-22",
      imageURL: "../images/tailwind.png",
    },

    {
      id: "4",
      title: "Next.js framework for react",
      description: "Frameowrk for building react applications",
      date: "2025-01-02",
      imageURL: "../images/next.jpg",
    },

    {
      id: "5",
      title: "Artificial Intelligence",
      description:
        "AI is the simulation of human intelligence in machines that are programmed to think",
      date: "2024-12-02",
      imageURL: "../images/ai.jpg",
    },

    {
      id: "6",
      title: "Consistency is the key to success",
      description: "Consistent hard work leads to success",
      date: "2024-11-24",
      imageURL: "../images/success.jpg",
    },
  ];

  return (
    <div className="my-8 ">
      <h1 className="text-3xl font-bold text-center my-8 text-purple-900 animate-color-change">
        {" "}
        Exploring the World of AI And Technology
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={false} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
