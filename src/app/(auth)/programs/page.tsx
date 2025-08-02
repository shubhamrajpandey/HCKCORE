"use client";
import DisplayBox from "@/app/components/DisplayBox/displaybox";
import LevelDropdown from "@/app/components/Dropdown/LevelDropdown";
import SubjectDropdown from "@/app/components/Dropdown/SubjectDropdown";
import ModuleBox from "@/app/components/ModuleBox/moduleBox";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Module = {
  id: string;
  name: string;
  code: string;
  description: string;
  leader: string;
};

export default function Programs() {
  const [isChecked, setisChecked] = useState(false);
  const [modules, setModules] = useState<Module[]>([]);
  const router = useRouter();
  useEffect(() => {
    const StoredToken =
      localStorage.getItem("Token") || sessionStorage.getItem("Token");

    if (!StoredToken) {
      router.push("/home");
    } else {
      setisChecked(true);
      console.log("welcome to homepage");
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://herald-hub-backend.onrender.com/modules",
          {
            headers: {
              Authorization: `Bearer ${StoredToken}`,
            },
          }
        );
        setModules(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [router]); // ✅ Add router to dependencies

  return (
    <>
      {isChecked && (
        <div className="md:ml-[282px] md:mt-[38px] ml-0 mt-0 flex flex-col bg-[#F4F4F4]">
          <div className="flex flex-col gap-2 md:gap-[48px]">
            <div className="flex flex-row space-x-[1px] md:space-x-[50px] overflow-hidden flex-wrap">
              <SubjectDropdown />
              <LevelDropdown />
            </div>
            <div className="flex md:space-x-[35px] space-x-1 flex-row flex-wrap md:justify-start md:items-start">
              <DisplayBox
                image={
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.263 2.26C5.32222 1.70801 5.58341 1.1974 5.99636 0.826361C6.4093 0.455319 6.94485 0.25004 7.5 0.25H12.5C13.0552 0.25004 13.5907 0.455319 14.0036 0.826361C14.4166 1.1974 14.6778 1.70801 14.737 2.26C15.501 2.276 16.16 2.315 16.724 2.419C17.482 2.559 18.127 2.823 18.652 3.349C19.254 3.95 19.512 4.709 19.634 5.609C19.75 6.475 19.75 7.578 19.75 8.945V15.055C19.75 16.422 19.75 17.525 19.634 18.392C19.512 19.292 19.254 20.05 18.652 20.652C18.05 21.254 17.292 21.512 16.392 21.634C15.525 21.75 14.422 21.75 13.055 21.75H6.945C5.578 21.75 4.475 21.75 3.608 21.634C2.708 21.512 1.95 21.254 1.348 20.652C0.746 20.05 0.488 19.292 0.367 18.392C0.25 17.525 0.25 16.422 0.25 15.055V8.945C0.25 7.578 0.25 6.475 0.367 5.608C0.487 4.708 0.747 3.95 1.348 3.348C1.873 2.823 2.518 2.558 3.276 2.419C3.84 2.315 4.5 2.276 5.263 2.26ZM5.265 3.76C4.547 3.776 3.993 3.812 3.547 3.894C2.981 3.998 2.652 4.166 2.409 4.409C2.132 4.686 1.952 5.074 1.853 5.809C1.752 6.563 1.75 7.565 1.75 9V15C1.75 16.435 1.752 17.436 1.853 18.192C1.952 18.926 2.133 19.314 2.409 19.591C2.686 19.868 3.074 20.048 3.809 20.147C4.563 20.248 5.565 20.25 7 20.25H13C14.435 20.25 15.436 20.248 16.192 20.147C16.926 20.048 17.314 19.867 17.591 19.591C17.868 19.314 18.048 18.926 18.147 18.191C18.248 17.436 18.25 16.435 18.25 15V9C18.25 7.565 18.248 6.563 18.147 5.808C18.048 5.074 17.867 4.686 17.591 4.409C17.347 4.166 17.019 3.999 16.453 3.894C16.007 3.812 15.453 3.776 14.735 3.761C14.671 4.30885 14.408 4.81411 13.996 5.1808C13.584 5.54749 13.0516 5.75005 12.5 5.75H7.5C6.94827 5.75002 6.41577 5.54732 6.00371 5.18043C5.59165 4.81354 5.32876 4.30803 5.265 3.76ZM7.5 1.75C7.30109 1.75 7.11032 1.82902 6.96967 1.96967C6.82902 2.11032 6.75 2.30109 6.75 2.5V3.5C6.75 3.914 7.086 4.25 7.5 4.25H12.5C12.6989 4.25 12.8897 4.17098 13.0303 4.03033C13.171 3.88968 13.25 3.69891 13.25 3.5V2.5C13.25 2.30109 13.171 2.11032 13.0303 1.96967C12.8897 1.82902 12.6989 1.75 12.5 1.75H7.5ZM4.25 9.5C4.25 9.30109 4.32902 9.11032 4.46967 8.96967C4.61032 8.82902 4.80109 8.75 5 8.75H15C15.1989 8.75 15.3897 8.82902 15.5303 8.96967C15.671 9.11032 15.75 9.30109 15.75 9.5C15.75 9.69891 15.671 9.88968 15.5303 10.0303C15.3897 10.171 15.1989 10.25 15 10.25H5C4.80109 10.25 4.61032 10.171 4.46967 10.0303C4.32902 9.88968 4.25 9.69891 4.25 9.5ZM5.25 13C5.25 12.8011 5.32902 12.6103 5.46967 12.4697C5.61032 12.329 5.80109 12.25 6 12.25H14C14.1989 12.25 14.3897 12.329 14.5303 12.4697C14.671 12.6103 14.75 12.8011 14.75 13C14.75 13.1989 14.671 13.3897 14.5303 13.5303C14.3897 13.671 14.1989 13.75 14 13.75H6C5.80109 13.75 5.61032 13.671 5.46967 13.5303C5.32902 13.3897 5.25 13.1989 5.25 13ZM6.25 16.5C6.25 16.3011 6.32902 16.1103 6.46967 15.9697C6.61032 15.829 6.80109 15.75 7 15.75H13C13.1989 15.75 13.3897 15.829 13.5303 15.9697C13.671 16.1103 13.75 16.3011 13.75 16.5C13.75 16.6989 13.671 16.8897 13.5303 17.0303C13.3897 17.171 13.1989 17.25 13 17.25H7C6.80109 17.25 6.61032 17.171 6.46967 17.0303C6.32902 16.8897 6.25 16.6989 6.25 16.5Z"
                      fill="white"
                    />
                  </svg>
                }
                title="My Requests"
                value={1}
              />
              <DisplayBox
                image={
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.9 20 8 20ZM4 15H12V17H4V15ZM8 0C3.86 0 0.5 3.36 0.5 7.5C0.5 11.32 3.16 13.36 4.27 14H11.73C12.84 13.36 15.5 11.32 15.5 7.5C15.5 3.36 12.14 0 8 0ZM11.15 12H4.85C3.99 11.39 2.5 9.97 2.5 7.5C2.5 4.47 4.97 2 8 2C11.03 2 13.5 4.47 13.5 7.5C13.5 9.97 12.01 11.39 11.15 12Z"
                      fill="white"
                    />
                  </svg>
                }
                title="My Contributions"
                value={6}
              />
              <DisplayBox
                image={
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.613 14.085C12.98 15.568 11.477 18.64 11 19.5V6C11.415 5.254 12.602 3.116 14.632 1.664C15.487 1.052 15.914 0.745999 16.457 1.024C17 1.304 17 1.92 17 3.151V11.991C17 12.657 17 12.99 16.863 13.223C16.727 13.457 16.355 13.666 15.613 14.085Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 5.806C10.313 5.084 8.322 3.36999 4.98 2.76999C3.288 2.46499 2.442 2.31299 1.72 2.89599C1 3.47999 1 4.426 1 6.321V13.13C1 14.862 1 15.728 1.463 16.269C1.925 16.809 2.943 16.993 4.981 17.359C6.796 17.685 8.213 18.206 9.239 18.729C10.249 19.243 10.753 19.5 11 19.5C11.247 19.5 11.752 19.243 12.76 18.729C13.787 18.206 15.204 17.685 17.02 17.359C19.056 16.993 20.075 16.809 20.537 16.269C21 15.728 21 14.862 21 13.129V6.32199C21 4.42799 21 3.48099 20.28 2.89699C19.557 2.31299 18 2.76999 17 3.49999"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Total Course"
                value={36}
              />
            </div>
          </div>
          <div className="mt-[48px]">
            <span className="text-[20px] font-[500]">Module</span>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-6 mt-[29px]">
            {modules.map((module: Module) => (
              <ModuleBox
                key={module.id}
                Title={module.name}
                SubjectCode={module.code}
                rating={"4"}
                Description={module.description}
                ModuleLeaderName={module.leader}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
