import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 mb-40 shadow-lg">
        <h2
          className="text-center text-3xl font-bold text-slate-500 md:text-5xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px]
        hover:text-black"
        >
          Unveiling the Mysteries of Technology in Tech Chronicles Blog!
        </h2>

        <p className="text-center m-4 mt-4 text-2xl text-black sm:text-base md:mb-12 animate-fade-in-up delay-100">
          Welcome to Tech Chronicles, where we embark on a journey to uncover
          the fascinating world of technology. From groundbreaking innovations
          to the secrets behind everyday gadgets, we aim to simplify complex
          ideas and bring you insights that inspire curiosity and understanding.
          Whether you are a tech enthusiast, a curious learner, or someone
          looking to stay updated, Tech Chronicles is your guide to exploring
          the ever-evolving digital universe. Dive in and discover the stories
          shaping our tech-driven world!
        </p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-orange-800 animate-color-change">
            Exploring Our Catagories!
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-col-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              " Artificial Intelligence",
              "HTML & CSS",
              "Next.JS",
              "Virtual Reality",
              "Web Development",
            ].map((category, index) => (
              <div
                key={index}
                className=" relative group py-4 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-yellow-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center"
              >
                <p className="text-center text-lg font-semibold"> {category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        <p className=" text-center text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-14">
          At Tech Chronicles, we believe that technology is more than just tools
          and trends—it is a gateway to endless possibilities. Our blog is
          dedicated to bridging the gap between innovation and everyday life,
          making tech accessible and relatable for everyone. From exploring the
          latest advancements to offering practical tips and tricks, we aim to
          empower our readers with knowledge and inspiration. Join us as we
          delve into the dynamic world of technology and uncover the stories
          that matter most.
        </p>
      </section>
    </div>
  );
}
