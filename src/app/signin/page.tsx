"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface FormInput {
  fullName: string;
  phoneNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signin: React.FC = () => {
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
        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/4 max-w-md bg-white rounded-md font-poppins"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
            Create your Account
          </h1>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="w-full h-[40px] border rounded-[12px] px-4 py-3 text-sm"
            />
            {errors.fullName && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Phone Number
            </label>
            <input
              type="number"
              {...register("phoneNumber", { required: true })}
              className="w-full border rounded-[12px] px-4 py-3 text-sm"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
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
              className="w-full border rounded-[12px] px-4 py-3 text-sm"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full border rounded-[12px] px-4 py-3 text-sm"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[16px]">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
              className="w-full border rounded-[12px] px-4 py-3 text-sm"
            />
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

          {/* Checkbox */}
          <div className="flex items-center mb-4">
            <Checkbox className="data-[state=checked]:bg-[#74BF44] data-[state=checked]:text-white border-black" />
            <label className="text-sm ml-2.5">I accept terms and policy</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#74BF44] text-white py-3 rounded-[12px] text-sm font-semibold"
          >
            Sign Up
          </button>

          <p className="text-sm py-6 text-center">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </form>

        {/* Image Section */}
        <div className="hidden md:block">
          <Image
            src="/imgs/sign-up.svg"
            alt="Signup Illustration"
            width={500}
            height={400}
            className="w-full h-auto max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default Signin;
