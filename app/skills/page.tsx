import React from "react";
import SkillCard from "../components/skill";
import reactIcon from "../images/react.png";
import figma from "../images/gg_figma.png";
import next from "../images/nextjs-original.png";
import css from "../images/nonicons_css-16.png";
import github from "../images/github-original.png";
import js from "../images/uil_java-script.png";

export default function skills() {
  return (
    <div>
      <h1 className="text-[48px] font-bold mb-8 ml-10 text-white mt-20"><span className="text-orange-500">My</span> Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
        <SkillCard iconSrc={reactIcon} percentage={80} skillName="React" />
        <SkillCard iconSrc={figma} percentage={85} skillName="Figma" />
        <SkillCard iconSrc={css} percentage={75} skillName="CSS" />
        <SkillCard iconSrc={next} percentage={85} skillName="Next.js" />
        <SkillCard iconSrc={js} percentage={80} skillName="JavaScript" />
        <SkillCard iconSrc={github} percentage={95} skillName="GitHub" />
      </div>
    </div>
  );
}
