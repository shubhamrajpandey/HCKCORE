import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-[#1B1B1B] text-white h-[80px] w-full font-poppins">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between h-full">
      
        <div className="w-[80px] h-[60px]">
          <Image
            src="/imgs/hck core logo.svg"
            alt="HeraldHub Logo"
            width={80}
            height={60}
          />
        </div>

     
        <ul className="flex gap-18 font-semibold text-[18px]">
          <li className="cursor-pointer hover:text-[#74BF44]">Programs</li>
          <li className="cursor-pointer hover:text-[#74BF44]">Extras</li>
          <li className="cursor-pointer hover:text-[#74BF44]">Contributions</li>
        </ul>

        <div className="flex items-center gap-6">
          <IoSearch className="w-[24px] h-[24px] cursor-pointer" />
          <MdNotificationsNone className="w-[28px] h-[28px] cursor-pointer" />
          <button className="bg-[#74BF44] text-white w-[115px] h-[40px] rounded-[7px] cursor-pointer text-[16px] font-semibold hover:bg-white hover:text-[#74BF44] transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
