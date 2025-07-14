"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Inside your component

interface FormInput {
  fullName: string;
  phoneNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const isMatching = password === confirmPassword;

  const onSubmit = (data: FormInput) => {
    if (!isMatching) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Data", data);
  };

  return (
    <div className="flex items-center justify-center flex-grow bg-white px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2.5 max-w-md bg-white rounded-md font-poppins mt-20"
        >
          <h1 className="text-[47px] font-medium mb-6 text-center md:text-left">
            Create your Account
          </h1>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="w-[90%] mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.fullName && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Phone Number
            </label>
            <input
              type="number"
              {...register("phoneNumber", { required: true })}
              className="w-[90%] mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-[90%] mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-4 relative w-[90%]">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none pr-10"
            />
            <div
              className="absolute right-3 top-[42px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4 relative w-[90%]">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", { required: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none pr-10"
            />
            <div
              className="absolute right-3 top-[42px] cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {!isMatching && (
            <span className="text-red-600 text-xs block mb-4">
              Passwords do not match
            </span>
          )}

          <div className="flex items-center mb-4">
            <Checkbox className="data-[state=checked]:bg-[#74BF44] data-[state=checked]:text-white border-black" />
            <label className="text-sm ml-2.5">I accept terms and policy</label>
          </div>

          <button
            type="submit"
            className="w-[90%] bg-[#74BF44] text-white py-3 rounded-[12px] text-sm font-semibold"
          >
            Sign Up
          </button>

          <p className="text-sm py-6 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600  hover:underline">
              Log in
            </Link>
          </p>
        </form>

        <div className="hidden md:block">
          <Image
            src="/imgs/sign-up.svg"
            alt="Signup Illustration"
            width={700}
            height={600}
            className="w-full h-auto max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default Signin;
