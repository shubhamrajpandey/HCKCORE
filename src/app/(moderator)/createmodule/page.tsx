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

export const CreateModule = () => {
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
    <div className="w-full px-2 py-13 ">
      <div className="max-w-4xl mx-auto  p-8 rounded-lg ">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SubjectDropdown />
          <LevelDropdown />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-[17px]/11 font-medium mb-1 ">
              Module Name
            </label>
            <input
              type="text"
              placeholder="Eg: Internet Software Architecture"
              {...register("moduleName", {
                required: "Module name is required",
              })}
              className="w-[865px] px-4 py-4 border border-gray-500 rounded-md focus:outline-none  focus:border-none  focus:ring-2 focus:ring-[#74BF44]"
            />
            {errors.moduleName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.moduleName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[17px]/11 font-medium mb-1">
              Module Code
            </label>
            <input
              type="text"
              placeholder="Eg: CS2103"
              {...register("moduleCode", {
                required: "Module code is required",
              })}
              className="w-[865px] px-4 py-4 border border-gray-500 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#74BF44]"
            />
            {errors.moduleCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.moduleCode.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[17px]/11 font-medium mb-1">
              Module Leader
            </label>
            <input
              type="text"
              placeholder="Eg: John Doe"
              {...register("moduleLeader", {
                required: "Module leader is required",
              })}
              className="w-[865px] px-4 py-4 border border-gray-500 rounded-md focus:outline-none  focus:border-none focus:ring-2 focus:ring-[#74BF44]"
            />
            {errors.moduleLeader && (
              <p className="text-red-500 text-sm mt-1">
                {errors.moduleLeader.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[17px]/11 font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Type something..."
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
              className="w-[865px] px-4 py-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#74BF44] resize-none"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className=" w-[156px] h-[50px] text-[15px] font-medium bg-black text-white px-6 py-3 rounded-md hover:bg-[#74BF44] transition-all duration-300"
          >
            Create Module
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateModule;
