import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
  post: {
    date: string | number | Date;
    id: string;
    title: string;
    description: string;
    imageURL: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-orange-500 text-white" : "text-orange-500"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={post.imageURL}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {" "}
        {post.title}{" "}
      </CardTitle>
      <br />

      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-orange-600" : "text-orange-800"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>

        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 text-white text-center bg-orange-500 rounded hover:bg-orange-700 ${
            isDarkBackground
              ? "bg-black hover:bg-orange-700"
              : "bg-black hover:bg-orange-700"
          } `}
        >
          Read more
        </a>
      </div>
    </Card>
  );
}
