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
    <div className="w-full px-6 py-8 md:px-20 lg:px-32 xl:px-40 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg ">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SubjectDropdown />
          <LevelDropdown />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-[16px] font-medium mb-1 ">
              Module Name
            </label>
            <input
              type="text"
              placeholder="Eg: Internet Software Architecture"
              {...register("moduleName", {
                required: "Module name is required",
              })}
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none  focus:border-none  focus:ring-2 focus:ring-[#A4C93A]"
            />
            {errors.moduleName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.moduleName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[16px] font-medium mb-1">
              Module Code
            </label>
            <input
              type="text"
              placeholder="Eg: CS2103"
              {...register("moduleCode", {
                required: "Module code is required",
              })}
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#A4C93A]"
            />
            {errors.moduleCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.moduleCode.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[16px] font-medium mb-1">
              Module Leader
            </label>
            <input
              type="text"
              placeholder="Eg: John Doe"
              {...register("moduleLeader", {
                required: "Module leader is required",
              })}
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none  focus:border-none focus:ring-2 focus:ring-[#A4C93A]"
            />
            {errors.moduleLeader && (
              <p className="text-red-500 text-sm mt-1">
                {errors.moduleLeader.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[16px] font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Type something..."
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A4C93A] resize-none"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#A4C93A] hover:text-black transition-all duration-300"
          >
            Create Module
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateModule;
