"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type SkillCardProps = {
  iconSrc: string | StaticImageData;
  percentage: number;
  skillName: string;
};
export default function SkillCard({
  iconSrc,
  percentage,
  skillName,
}: SkillCardProps) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-35 h-50 rounded-full border border-gray-800 hover:border-orange-500 transition duration-300 p-4">
        <div className="flex justify-center items-center mb-2">
          <Image
            src={iconSrc}
            alt={skillName}
            className="object-contain w-30 h-25"
          />
        </div>
        <p className="mt-2 text-orange-500 font-semibold">{percentage}%</p>
      </div>
        <p className="mt-2 text-white text-center font-medium">{skillName}</p>
    </div>
  );
}
