"use client";

import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowDropdown(false);
    router.push("/login");
  };

  return (
    <header className="bg-[#1B1B1B] text-white h-[80px] w-full font-poppins relative">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between h-full">
        
        <Link href="/home">
          <div className="w-[80px] h-[60px]">
            <Image
              src="/imgs/hck core logo.svg"
              alt="HeraldHub Logo"
              width={80}
              height={60}
            />
          </div>
        </Link>

        
        <ul className="flex gap-18 font-semibold text-[18px]">
          <Link href="/programs" className="cursor-pointer hover:text-[#74BF44]">Programs</Link>
          <Link href="/extra-resources" className="cursor-pointer hover:text-[#74BF44]">Extras</Link>
          <Link href="/contributions" className="cursor-pointer hover:text-[#74BF44]">Contributions</Link>
        </ul>

        <div className="flex items-center gap-6 relative">
          <IoSearch className="w-[24px] h-[24px] cursor-pointer" />
          <MdNotificationsNone className="w-[28px] h-[28px] cursor-pointer" />

          {isLoggedIn ? (
            <div className="relative">
              <FaUserCircle
                className="w-[32px] h-[32px] text-white cursor-pointer hover:text-[#74BF44]"
                onClick={() => setShowDropdown((prev) => !prev)}
              />
              {showDropdown && (
                <div className="absolute top-10 right-0 bg-white text-black rounded shadow-lg py-2 px-4 z-50">
                  <button
                    onClick={handleLogout}
                    className="text-[#74BF44] hover:underline text-md font-medium cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-[#74BF44] text-white w-[115px] h-[40px] rounded-[7px] cursor-pointer text-[16px] font-semibold hover:bg-white hover:text-[#74BF44] transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
