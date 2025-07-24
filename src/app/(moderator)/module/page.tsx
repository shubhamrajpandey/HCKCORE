"use client";

import LevelDropdown from "@/app/components/Dropdown/LevelDropdown";
import SubjectDropdown from "@/app/components/Dropdown/SubjectDropdown";
import React from "react";
import { useForm } from "react-hook-form";

type ModuleFormData = {
  moduleName: string;
  moduleCode: string;
  moduleLeader: string;
  description: string;
};

export const Module = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModuleFormData>();

  const onSubmit = (data: ModuleFormData) => {
    console.log("Submitted Module:", data);
  };

  return (
    <>
      <div className="w-full  px-2 py-13 ">
        <div className="max-w-4xl mx-auto p-8 rounded-lg ">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <SubjectDropdown />
            <LevelDropdown />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-5">
            <div>
              <label className="block text-[18px]/13 font-medium mb-1 ">
                Title
              </label>
              <input
                type="text"
                placeholder="Eg: HTML & CSS Basics"
                {...register("moduleName", {
                  required: "Module name is required",
                })}
                className="w-[865px] bg-[#FFFFFF] px-4 py-4.5 mt-1 border border-gray-500 rounded-[10px] focus:outline-none  focus:border-none  focus:ring-2 focus:ring-[#74BF44]"
              />
              {errors.moduleName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.moduleName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[18px]/13 font-medium mb-1">
                Module Resource Description
              </label>
              <input
                type="text"
                placeholder="Eg: Basic concepts of creating and styling websites using HTML and CSS."
                {...register("moduleCode", {
                  required: "Module code is required",
                })}
                className="w-[865px] bg-[#FFFFFF] px-4 py-4.5 mt-1 border border-gray-500 rounded-[10px] focus:outline-none focus:border-none focus:ring-2 focus:ring-[#74BF44]"
              />
              {errors.moduleCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.moduleCode.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[18px]/13 font-medium mb-1">
                Link  <span className="text-gray-400">(optional)</span> 
              </label>
              <input
                type="text"
                placeholder="Eg: https://www.w3schools.com/html/"
                {...register("moduleLeader", {
                  required: "Module leader is required",
                })}
                className="w-[865px] bg-[#FFFFFF] px-4 py-4.5 mt-1 border border-gray-500 rounded-[10px] focus:outline-none  focus:border-none focus:ring-2 focus:ring-[#74BF44] placeholder:text-blue-400"
              />
              {errors.moduleLeader && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.moduleLeader.message}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-14 mt-9">

              <div>
                <button className="text-[16.036px] border font-medium px-5 py-2 rounded-lg cursor-pointer hover:bg-[#74BF44] hover:text-white">
                  <span className="text-lg">+ </span> Upload File
                </button>
              </div>

              <div className="flex flex-wrap gap-5">
                <button className="text-[16.036px] border font-medium px-5 py-2 rounded-lg cursor-pointer hover:bg-[#74BF44] hover:text-white">
                  W-1 Lecture
                </button>
                <button className="text-[16.036px] border font-medium px-5 py-2 rounded-lg cursor-pointer hover:bg-[#74BF44] hover:text-white">
                  W-1 Tutorial
                </button>
                <button className="text-[16.036px] border font-medium px-5 py-2 rounded-lg cursor-pointer hover:bg-[#74BF44] hover:text-white">
                  W-1 Workshop
                </button>
              </div>
            </div>

            <button
              type="submit"
              className=" w-[200px] h-[62px] text-[18px] mt-6 font-medium bg-black text-white px-6 py-3 rounded-[10px] cursor-pointer hover:bg-[#74BF44] transition-all duration-300"
            >
              Create Resource
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Module;
