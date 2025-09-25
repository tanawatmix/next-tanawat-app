import React from "react";

export default function Home() {
  return (
    <div className="max-w-3xl mt-20 ">
      <h1 className="text-[35px] ">
        Lets Work <span className="text-orange-500">Together !</span>
      </h1>

      <p className="mt-3 text-[45px] font-bold">
        Hi From <span className="text-orange-500">Tanawat </span>,
      </p>
      <p className=" text-[45px] font-bold">
        Interactive Designer & Fullstack Web Developer
      </p>

      <p className="mt-4 text-gray-400 text-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
        architecto earum voluptates obcaecati corrupti voluptatem.
      </p>
      
      <div className="mt-10 flex gap-12">
        <div>
          <h2 className="text-4xl text-orange-500">3+</h2>
          <p className="text-gray-400 w-20">Years of <span>Experience</span></p>
        </div>
        <div>
          <h2 className="text-4xl text-orange-500">10+</h2>
          <p className="text-gray-400 w-5">Projects <span>Completed</span></p>
        </div>
      </div>
    </div>
  );
}
