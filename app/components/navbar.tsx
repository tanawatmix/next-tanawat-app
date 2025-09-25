"use client";

import { usePathname } from "next/navigation";
import pic from "../images/mdi_work-outline.svg";
import pic1 from "../images/pajamas_project.svg";
import pic2 from "../images/carbon_user-profile.svg";
import pic3 from "../images/command.svg";
import pic4 from "../images/Bm.svg";
import pic5 from "../images/chat.svg";
import pic6 from "../images/cib_when-i-work.svg";

const navItems = [
  { icon: pic4, href: "/", label: "Home" },
  { icon: pic2, href: "/aboutme", label: "About" },
  { icon: pic1, href: "/eduexp", label: "Resume" },
  { icon: pic6, href: "/spec", label: "Portfolio" },
  { icon: pic, href: "/projects", label: "Contact" },
  { icon: pic3, href: "/skills", label: "Skills" },
  { icon: pic5, href: "/extra2", label: "Extra2" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border border-gray-300 rounded-4xl p-2 flex flex-col items-center justify-center space-y-10 shadow-sm bg-transparent h-120 w-10 mt-30 mr-5">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <a
            key={index}
            href={item.href}
            aria-label={item.label}
            className={`transition-colors duration-300 ${
              isActive
                ? "text-orange-500"
                : "text-gray-500 hover:text-orange-500"
            }`}
          >
            <img
              src={item.icon.src}
              alt={item.label}
              className={`w-6 h-6 cursor-pointer hover:scale-120 transition duration-150 ${
                isActive ? "filter-orange" : ""
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
