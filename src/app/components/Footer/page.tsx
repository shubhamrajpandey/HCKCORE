import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  return (
    <div className="bg-[#1B1B1B] flex flex-col items-center justify-center text-white py-10 gap-5 md:gap-15">
      <div className="flex flex-col items-center justify-center gap-1 md:gap-4 w-full">
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-5 md:space-x-50 text-md md:text-lg font-semibold">
          <Link className="hover:text-[#74BF44]" href="#">
            About HCK Core
          </Link>
          <Link className="hover:text-[#74BF44]" href="#">
            Contact Team
          </Link>
          <Link className="hover:text-[#74BF44]" href="#">
            Help & FAQs
          </Link>
          <Link className="hover:text-[#74BF44]" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:text-[#74BF44]" href="#">
            Terms of Use
          </Link>
        </div>

        <div className="flex w-[85%] justify-center items-center mt-4 mb-4">
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center gap-3 md:space-x-50 font-semibold">
          <p>developmentplatform@heraldcollege.edu.np</p>
          <p>© 2025 HCK Core. All rights reserved.</p>
          <div className="flex space-x-3 items-center justify-center">
            <LiaLinkedin size={30} />
            <FaInstagram size={25} />
            <FaGithub size={25} />
          </div>
        </div>
      </div>
      <div className="flex w-[85%] justify-center items-center mt-4 mb-4 md:hidden">
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="flex md:flex-row flex-col gap-3 md:space-x-13 items-center justify-center">
        <Image
          src="/imgs/hck core logo.svg"
          alt="HeraldHub Logo"
          width={80}
          height={80}
        />
        <p className="font-bold text-xl">• Version 1.0.0 • Since 2025</p>
      </div>
    </div>
  );
}
