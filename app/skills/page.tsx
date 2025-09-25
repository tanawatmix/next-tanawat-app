import React from "react";
import SkillCard from "../components/skill";
import reactIcon from "../images/Bm.svg"; // สมมติว่าไฟล์ icon อยู่ใน public/images
export default function skills() {
  return (
    <div>
      pages // ตัวอย่างการใช้งานใน Component ของคุณ
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        <SkillCard
          iconSrc={reactIcon}
          percentage={80}
          skillName="React"
        />
      </div>
    </div>
  );
}
