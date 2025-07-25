"use client";

import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const Header = () => {
  //usestate banako different area ma
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  //router use bhako for routing handle lai
  const router = useRouter();

  useEffect(() => {
    const checkLogin = () => {
      const token =
        localStorage.getItem("Token") || sessionStorage.getItem("Token");
      setIsLoggedIn(!!token);
    };

    checkLogin();
    window.addEventListener("userLoggedIn", checkLogin);

    return () => {
      window.removeEventListener("userLoggedIn", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    //token remove ko lagi
    localStorage.removeItem("Token");
    sessionStorage.removeItem("Token");
    //logged out bhaye pachi disable hunchha
    setIsLoggedIn(false);
    setShowProfile(false);
    //this helps to the header page that the user is logged in. refresh garnu pardaina
    window.dispatchEvent(new Event("userLoggedIn"));
    router.push("/login");
  };

  //demo message
  const notifications = [
    {
      message:
        "You have an ISA assignment on Responsive Web Design from Mr Bishal Khadka.",
      time: "July 9th, 2025 at 2:03 PM",
      read: false,
    },
    {
      message:
        "You have a Database assignment on ER Diagrams & Normalization from Mr Ashish Koirala.",
      time: "July 9th, 2025 at 1:49 PM",
      read: false,
    },
    {
      message: "You have a Python assignment on Functions & Loops from Mr Ram.",
      time: "July 7th, 2025 at 12:19 PM",
      read: false,
    },
    {
      message:
        "You have an ISA assignment on PHP Form Handling from Mr Bishal Khadka.",
      time: "July 7th, 2025 at 5:12 PM",
      read: false,
    },
    {
      message:
        "You have an ISA assignment on PHP Form Handling from Mr Bishal Khadka.",
      time: "July 7th, 2025 at 5:12 PM",
      read: true,
    },
  ];

  return (
    <header className="bg-[#1B1B1B] text-white h-[80px] w-full font-poppins relative z-50">
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

        {/* Navlink Section */}
        <ul className="flex gap-18 font-semibold text-[18px]">
          <li
            className="cursor-pointer hover:text-[#74BF44]"
            onClick={() =>
              isLoggedIn
                ? router.push("/programs")
                : toast.error("Please login first to access Programs.")
            }
          >
            Programs
          </li>
          <li
            className="cursor-pointer hover:text-[#74BF44]"
            onClick={() =>
              isLoggedIn
                ? router.push("/extra-resources")
                : toast.error("Please login first to access Extras.")
            }
          >
            Extras
          </li>
        </ul>

        <div className="flex items-center gap-9 relative">
          <IoSearch className="w-[26px] h-[26px] cursor-pointer" />

          {/* Notifications Section */}
          <div className="relative">
            <MdNotificationsNone
              className="w-[30px] h-[30px] cursor-pointer"
              onClick={() => {
                if (isLoggedIn) {
                  setShowNotifications((prev) => !prev);
                }
              }}
            />
            {isLoggedIn && (
              <span className="absolute -top-1 -right-1 bg-[#74BF44] text-white text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">
                4
              </span>
            )}

            {/* Notifications Message */}
            {showNotifications && isLoggedIn && (
              <div className="absolute right-0 top-10 bg-white text-black w-[380px] shadow-lg overflow-hidden z-50">
                <h1 className="px-5 py-4 font-medium text-[16px] border-b border-gray-200">
                  Notifications
                </h1>
                <div className="max-h-[350px] overflow-y-auto bg-white custom-scrollbar">
                  {notifications.map((note, index) => (
                    <div
                      key={index}
                      className={`px-4 py-3 border-b border-gray-200 flex gap-3 items-start cursor-pointer transition-colors duration-200 ${
                        note.read
                          ? "bg-white hover:bg-[#74BF44]/30"
                          : "bg-[#74BF44]/20 hover:bg-[#74BF44]/30"
                      }`}
                    >
                      <div className="w-[20px] mt-1">
                        <Image
                          src="/imgs/icon-assigment.svg"
                          alt="Assignment Icon"
                          width={12}
                          height={12}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[14px] leading-[1.4]">
                          {note.message}
                        </p>
                        <p className="text-[12px] text-gray-500 mt-1">
                          {note.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Section */}
          {isLoggedIn ? (
            <div className="relative">
              <button onClick={() => setShowProfile((prev) => !prev)}>
                <Image
                  src="/imgs/icon-profile.svg"
                  alt="Profile"
                  width={48}
                  height={48}
                  className="rounded-full cursor-pointer border over:shadow-md transition-all"
                />
              </button>

              {showProfile && (
                <div className="absolute right-0 top-13 w-[220px] bg-white text-black shadow-lg p-4 z-50">
                  <p className="text-[16px] font-medium mb-2">
                    Hello, Swornim!
                  </p>
                  <ul className="space-y-2 text-[14px]">
                    <li className="hover:text-[#74BF44] cursor-pointer">
                      My Profile
                    </li>
                    <li className="hover:text-[#74BF44] cursor-pointer">
                      Settings
                    </li>
                    <li
                      onClick={handleLogout}
                      className="hover:text-[#74BF44] cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
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
