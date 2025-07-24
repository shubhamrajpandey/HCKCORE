"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { RiSchoolLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function ModeratorSlideBar() {
  const router = useRouter();
  const path = usePathname();
  const [showProfileCard, setShowProfileCard] = useState(false);

  return (
    <aside className="flex flex-col gap-[53px] w-[420px] h-[1036px] bg-black left-0 top-0 rounded-xl ml-4 mt-5.5 pl-[33px] pr-[65px]">
      <div className="ml-[12px] mt-[27px]">
        <Image
          src="/imgs/logo.png"
          alt="Logo"
          width={81}
          height={66}
          className="object-contain mt-10 mr-20"
          priority
        />
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-[28px]">
          <div
            className={`flex space-x-[20px] p-2 rounded-lg w-[322px] h-[64px] items-center py-[10px] pl-[13px] cursor-pointer ${
              path === "/dashboard" ? "bg-[#74BF44]" : "hover:bg-[#74BF44]"
            }`}
            onClick={() => router.push("/dashboard")}
          >
            <svg
              className="ml-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3333 2.66667V5.33333H16V2.66667H21.3333ZM8 2.66667V10.6667H2.66667V2.66667H8ZM21.3333 13.3333V21.3333H16V13.3333H21.3333ZM8 18.6667V21.3333H2.66667V18.6667H8ZM24 0H13.3333V8H24V0ZM10.6667 0H0V13.3333H10.6667V0ZM24 10.6667H13.3333V24H24V10.6667ZM10.6667 16H0V24H10.6667V16Z"
                fill="white"
              />
            </svg>
            <span className="text-white font-[500] text-[20px]">Dashboard</span>
          </div>

          <div
            className={`flex space-x-[20px] p-2 rounded-lg w-[322px] h-[64px] items-center py-[10px] pl-[13px] cursor-pointer ${
              path === "/module" ? "bg-[#74BF44]" : "hover:bg-[#74BF44]"
            }`}
            onClick={() => router.push("/module")}
          >
            <svg
              className="ml-1"
              width="30"
              height="22"
              viewBox="0 0 30 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.125 9.42857H26.6667V3.14286H21.125V9.42857ZM12.2083 9.42857H17.75V3.14286H12.2083V9.42857ZM3.33333 9.42857H8.875V3.14286H3.33333V9.42857ZM3.33333 18.8571H8.875V12.5714H3.33333V18.8571ZM12.2083 18.8571H17.75V12.5714H12.2083V18.8571ZM21.125 18.8571H26.6667V12.5714H21.125V18.8571ZM0 18.8571V3.14286C0 2.27857 0.326667 1.53895 0.98 0.924C1.63333 0.309047 2.41778 0.00104762 3.33333 0H26.6667C27.5833 0 28.3683 0.308 29.0217 0.924C29.675 1.54 30.0011 2.27962 30 3.14286V18.8571C30 19.7214 29.6739 20.4616 29.0217 21.0776C28.3694 21.6936 27.5844 22.001 26.6667 22H3.33333C2.41667 22 1.63222 21.6925 0.98 21.0776C0.327778 20.4626 0.00111111 19.7225 0 18.8571Z"
                fill="white"
              />
            </svg>
            <span className="text-white font-[500] text-[20px]">Modules</span>
          </div>

          <div
            className={`flex space-x-[20px] p-2 rounded-lg w-[322px] h-[64px] items-center py-[10px] pl-[13px] cursor-pointer ${
              path === "/createmodule" ? "bg-[#74BF44]" : "hover:bg-[#74BF44]"
            }`}
            onClick={() => router.push("/createmodule")}
          >
            <svg
              className="ml-1"
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0037 20.5714C11.1489 21.3943 11.4516 22.16 11.8753 22.8571H2.42105C1.07737 22.8571 0 21.84 0 20.5714V2.28571C0 1.67951 0.255074 1.09812 0.70911 0.66947C1.16315 0.240816 1.77895 0 2.42105 0H16.9474C17.5895 0 18.2053 0.240816 18.6593 0.66947C19.1133 1.09812 19.3684 1.67951 19.3684 2.28571V12.6743C18.9689 12.6171 18.5695 12.5714 18.1579 12.5714C17.7463 12.5714 17.3468 12.6171 16.9474 12.6743V2.28571H10.8947V11.4286L7.86842 8.85714L4.84211 11.4286V2.28571H2.42105V20.5714H11.0037ZM19.3684 18.2857V14.8571H16.9474V18.2857H13.3158V20.5714H16.9474V24H19.3684V20.5714H23V18.2857H19.3684Z"
                fill="white"
              />
            </svg>
            <span className="text-white font-[500] text-[20px]">
              Create Module
            </span>
          </div>

          <div
            className={`flex space-x-[20px] p-2 rounded-lg w-[322px] h-[64px] items-center py-[10px] pl-[13px] cursor-pointer ${
              path === "/extras" ? "bg-[#74BF44]" : "hover:bg-[#74BF44]"
            }`}
            onClick={() => router.push("/extras")}
          >
            <svg
              className="ml-1"
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.68421 13.8V23.4H0V13.8H9.68421ZM7.26316 16.2H2.42105V21H7.26316V16.2ZM10.8947 0L17.5526 10.8H4.23684L10.8947 0ZM10.8947 4.632L8.57053 8.4H13.2189L10.8947 4.632ZM17.5526 13.2C20.5789 13.2 23 15.6 23 18.6C23 21.6 20.5789 24 17.5526 24C14.5263 24 12.1053 21.6 12.1053 18.6C12.1053 15.6 14.5263 13.2 17.5526 13.2ZM17.5526 15.6C16.75 15.6 15.9802 15.9161 15.4127 16.4787C14.8452 17.0413 14.5263 17.8044 14.5263 18.6C14.5263 19.3957 14.8452 20.1587 15.4127 20.7213C15.9802 21.2839 16.75 21.6 17.5526 21.6C18.3553 21.6 19.125 21.2839 19.6926 20.7213C20.2601 20.1587 20.5789 19.3957 20.5789 18.6C20.5789 17.8044 20.2601 17.0413 19.6926 16.4787C19.125 15.9161 18.3553 15.6 17.5526 15.6Z"
                fill="white"
              />
            </svg>
            <span className="text-white font-[500] text-[20px]">Extras</span>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex space-x-[16px] items-center justify-start h-fit w-full py-10 ml-[11px] cursor-pointer"
            onClick={() => setShowProfileCard((prev) => !prev)}
          >
            <Image
              src="/imgs/Profile.png"
              alt="Profile"
              width={61}
              height={61}
              className="object-contain"
              priority
            />

            <div className="flex flex-col text-white gap-1">
              <p className="text-[21px] font-[500]">Bishal Khadkaa</p>
              <p className="text-[15px] font-[500] text-[#949494]">
                Module Leader
              </p>
            </div>
          </div>

          {showProfileCard && (
            <div className="absolute bottom-[114px] left-0 bg-white text-black w-[375px] h-[340px] shadow-lg p-5 z-50 ">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/imgs/Profile.png"
                  alt="Profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-lg">Bishal Khadka</p>
                  <p className="text-sm text-gray-500">@bishal_khadka365</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[20px] mb-2">
                <CiMail className="w-[21px] h-[16px] text-6xl" />
                <p className="text-[15px] tracking-normal">
                  bishalkhadka@heraldcollege.edu.np
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-2">
                <RiSchoolLine className="text-lg" />
                <p>Herald College Kathmandu</p>
              </div>
              <div className="flex items-center gap-2 text-sm mb-4">
                <BsTelephone className="text-lg" />
                <p>01-5970120</p>
              </div>

              <div className="flex items-center gap-2 pt-3 text-sm mb-2">
                <CgProfile className="text-lg" />
                <button
                  onClick={() => router.push("/profile")}
                  className="hover:underline"
                >
                  My Profile
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MdOutlineLogout className="text-lg text-red-500" />
                <button className="text-red-500 hover:underline">Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
