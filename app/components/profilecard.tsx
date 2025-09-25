import Image from "next/image";
import pro from "../images/TTT.jpg";
import gg from "../images/gg.png";
import ig from "../images/ig.png";
import fb from "../images/fb.png";
import li from "../images/li.png";
import x from "../images/x.png";

export default function ProfileCard() {
  return (
    <div className=" border border-neutral-700 rounded-2xl p-5 mt-18 ml-20 h-150 w-90 text-center">
      <h2 className=" text-white text-start text-[30px]">
        <span className="text-orange-500">T</span>anawat
      </h2>
      <Image
        src={pro}
        alt="Profile"
        width={150}
        height={150}
        className="mx-auto rounded-2xl h-70 w-100 mt-2"
      />

      <p className="mt-2 text-[18px] text-white">STU ID: 6552410002</p>
      <p className="text-gray-400 text-sm">Fullstack Web Developer</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-10 text-gray-300 text-2xl">
        <Image
          src={fb}
          alt="Facebook"
          width={24}
          height={24}
          className="cursor-pointer hover:scale-120 transition duration-150 "
        />
        <Image
          src={x}
          alt="Twitter"
          width={24}
          height={24}
          className="cursor-pointer hover:scale-120 transition duration-150 "
        />
        <Image
          src={ig}
          alt="Instagram"
          width={24}
          height={24}
          className="cursor-pointer hover:scale-120 transition duration-150 "
        />
        <Image
          src={li}
          alt="LinkedIn"
          width={24}
          height={24}
          className="cursor-pointer hover:scale-120 transition duration-150 "
        />
        <Image
          src={gg}
          alt="Google"
          width={24}
          height={24}
          className="cursor-pointer hover:scale-120 transition duration-150 "
        />
      </div>

      {/* Hire Me Button */}
      <button className="mt-10 w-65 py-2 text-xl rounded-lg bg-orange-500 text-black hover:scale-110 hover:bg-orange-400 transition duration-150">
        HIRE ME !
      </button>
    </div>
  );
}
