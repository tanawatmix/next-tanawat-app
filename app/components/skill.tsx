"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type SkillCardProps = {
    iconSrc: string;
    percentage: number;
    skillName: string;
};

export default function SkillCard({ iconSrc, percentage, skillName }: SkillCardProps) {
    return (
        <div className="flex flex-col items-center justify-center w-36 h-44 bg-zinc-900 rounded-lg border border-gray-800">
            <div className="flex justify-center items-center w-12 h-12 mb-2">
                <Image src={iconSrc} alt={skillName} width={48} height={48} className="object-contain" />
            </div>
            <p className="mt-2 text-gray-400 font-semibold">{percentage}%</p>
            <p className="mt-2 text-white text-base font-medium">{skillName}</p>
        </div>
    );
}
