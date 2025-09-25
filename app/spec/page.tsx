import React from "react";
import code from "../images/mdi_code.png";
import ball from "../images/Vector.png";
import pen from "../images/iconoir_design-nib.png";

export default function specUI() {
  return (
    <div className="mt-15 ml-5">
      <h1 className="font-bold text-[35px]">
        My <span className="text-orange-500">Specializations</span>
      </h1>

      <div className="mt-5 h-42 w-200 p-10 text-[20px] border border-orange-500 rounded-xl flex justify-between items-start">
        <div>
          <p className="font-bold">Front end-developer</p>
          <p className="text-gray-400 mt-1">
            Front-end is where I weave code and creativity to shape captivating
            and user-centric digital experiences.
          </p>
        </div>
        <img src={code.src} alt="code" className="w-5 h-5 mt-2" />
      </div>

      <div className="mt-5 h-42 w-200 p-10 text-[20px] border border-orange-500 rounded-xl flex justify-between items-start">
        <div>
          <p className="font-bold">UI/UX Designer</p>
          <p className="text-gray-400 mt-1">
            UI/UX design is my palette for blending art and user psychology into
            seamless and delightful interactions.
          </p>
        </div>
        <img src={ball.src} alt="code" className="w-5 h-5 mt-2" />
      </div>

      <div className="mt-5 h-42 w-200 p-10 text-[20px] border border-orange-500 rounded-xl flex justify-between items-start">
        <div>
          <p className="font-bold">Graphic designer</p>
          <p className="text-gray-400 mt-1">
            As a graphic designer, I transform ideas into visually striking and
            impactful designs.
          </p>
        </div>
        <img src={pen.src} alt="code" className="w-5 h-5 mt-2" />
      </div>
    </div>
  );
}
