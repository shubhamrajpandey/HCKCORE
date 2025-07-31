"use client";

import SubjectDropdown from "@/app/components/Dropdown/SubjectDropdown";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import LevelDropdown from "@/app/components/Dropdown/LevelDropdown";

type ModuleFormData = {
  moduleName: string;
  moduleCode: string;
  moduleLeader: string;
  description: string;
  levelId: number;
};

export const CreateModule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ModuleFormData>();

  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (data: ModuleFormData) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("Token") : null;

    if (!token) {
      alert(" Token not found. Please login.");
      return;
    }

    const payload = {
      moduleName: data.moduleName,
      moduleCode: data.moduleCode,
      moduleLeader: data.moduleLeader,
      moduleDescription: data.description,
      levelId: data.levelId,
    };

    try {
      const res = await axios.post("https://herald-hub-backend.onrender.com/modules", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(res)

      if (res.status === 201 || res.status === 200) {
        setSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      alert(" Failed to create module.");
    }
  };

  return (
    <>
      <div className="w-full px-2 py-13 ">
        <div className="max-w-4xl mx-auto p-8 rounded-lg ">
          {success ? (
            <div className="text-center bg-white rounded-lg shadow-lg px-8 py-10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-green-600">✓</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">Module Created!</h2>
              <p className="text-sm text-gray-600 mb-4">You can now add resources.</p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-[#74BF44] text-white px-6 py-2 rounded hover:bg-green-700"
              >
                CONTINUE →
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <SubjectDropdown />
                <LevelDropdown/>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-5">
                <div>
                  <label className="block text-[18px]/13 font-medium mb-1 ">
                    Module Name
                  </label>
                  <input
                    type="text"
                    placeholder="Eg: Internet Software Architecture"
                    {...register("moduleName", {
                      required: "Module name is required",
                    })}
                    className="w-[865px] bg-[#FFFFFF] px-4 py-4.5 border border-gray-500 rounded-md focus:outline-none  focus:border-none  focus:ring-2 focus:ring-[#74BF44]"
                  />
                  {errors.moduleName && (
                    <p className="text-red-500 text-sm mt-1">{errors.moduleName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[18px]/13 font-medium mb-1">
                    Module Code
                  </label>
                  <input
                    type="text"
                    placeholder="Eg: CS2103"
                    {...register("moduleCode", {
                      required: "Module code is required",
                    })}
                    className="w-[865px] bg-[#FFFFFF] px-4 py-4.5 border border-gray-500 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#74BF44]"
                  />
                  {errors.moduleCode && (
                    <p className="text-red-500 text-sm mt-1">{errors.moduleCode.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[18px]/13 font-medium mb-1">
                    Module Leader
                  </label>
                  <input
                    type="text"
                    placeholder="Eg: John Doe"
                    {...register("moduleLeader", {
                      required: "Module leader is required",
                    })}
                    className="w-[865px] bg-[#FFFFFF] px-4 py-4.5 border border-gray-500 rounded-md focus:outline-none  focus:border-none focus:ring-2 focus:ring-[#74BF44]"
                  />
                  {errors.moduleLeader && (
                    <p className="text-red-500 text-sm mt-1">{errors.moduleLeader.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[18px]/13 font-medium mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="Type something..."
                    {...register("description", {
                      required: "Description is required",
                    })}
                    className="w-[865px] bg-[#FFFFFF] px-4 py-4.5 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#74BF44] resize-none"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[18px]/13 font-medium mb-1">
                    Level ID
                  </label>
                  <input
                    type="number"
                    placeholder="Eg: 1"
                    {...register("levelId", {
                      required: "Level ID is required",
                      min: { value: 1, message: "Minimum level is 1" },
                    })}
                    className="w-[865px] bg-[#FFFFFF] px-4 py-4.5 border border-gray-500 rounded-md focus:outline-none  focus:ring-2 focus:ring-[#74BF44]"
                  />
                  {errors.levelId && (
                    <p className="text-red-500 text-sm mt-1">{errors.levelId.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className=" w-[180px] h-[60px] text-[18px] mt-6 font-medium bg-black text-white px-6 py-3 rounded-[10px] hover:bg-[#74BF44] transition-all duration-300 cursor-pointer"
                >
                  Create Module
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateModule;
