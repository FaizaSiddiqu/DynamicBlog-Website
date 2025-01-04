import React from 'react'

export default function AutherCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
        <img src="../images/hijab.png" alt="Auther-image"
        className='w-16 h-16 rounded-full mr-4 object-cover border-2 bg-orange-500' />


        <div>
          <h3 className='text-xl font-bold'>
            Faiza Siddiqui
          </h3>
          <p className='text-slate-500'> {" "}
            Web Developer and Designer {""}
          </p>
        </div>
      </div>

<p className='mt-4 leading-relaxed text-black'>
I am Faiza Siddiqui, a passionate front-end developer and tech enthusiast. Through this blog, I share my journey in web development, lessons learned, and exciting projects I have worked on.
</p>

<div className='mt-4 flex space-x-3'>
  <a href="#" 
  className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-700 tranistion duration-300">
    GitHub
  </a>

  <a href="#" 
  className='px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-700 tranistion duration-300'>
    Facebook
  </a>

  <a href="#" 
  className='px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-700 tranistion duration-300'>
    Instagram
  </a>
</div>

    </div>
  );
};
