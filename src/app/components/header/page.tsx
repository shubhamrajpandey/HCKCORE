import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";

export const Header = () => {
  return (
    <header className="bg-[#1B1B1B] text-white h-[78px] flex items-center justify-between px-[169px] font-poppins">
      <div>
        <img
          src="/imgs/hck core logo.svg"
          alt="HeraldHub Logo"
          className="w-[75px] h-[55px]"
        />
      </div>

      <ul className="flex gap-18 font-semibold text-[16px]">
        <li className="cursor-pointer hover:text-[#74BF44]">Programs</li>
        <li className="cursor-pointer hover:text-[#74BF44]">Extras</li>
        <li className="cursor-pointer hover:text-[#74BF44]">Contributions</li>
      </ul>

      <div className="flex items-center gap-8">
    
        <IoSearch className="w-[24px] h-[24px] cursor-pointer" />

        <MdNotificationsNone  className="w-[28px] h-[28px] cursor-pointer"/>
        <button className="bg-[#74BF44] text-white w-[115px] h-[40px] rounded-[7px] text-[16px] font-semibold ml-4 hover:bg-white hover:text-[#74BF44]">
          Login
        </button>
      </div>
    </header>
  );
};
