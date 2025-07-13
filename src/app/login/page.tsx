"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function Login() {
  const [submitClicked, setSubmitClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitClicked(false);
  };

  useEffect(() => {
    if (!submitClicked) return;
    if (Object.keys(errors).length > 0) {
      if (errors.email && errors.password) {
        alert("Fill all the Fields");
      } else if (errors.email) {
        alert(errors.email.message);
      } else if (errors.password) {
        alert(errors.password.message);
      }
    }
  }, [errors, submitClicked]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex w-[80%] max-w-6xl rounded-lg overflow-hidden">
        {/* Left side: Form and Google button */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8">Welcome back!</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitClicked(true);
              handleSubmit(onSubmit)(e);
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="font-medium">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", { required: "Email is required" })}
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
              {/* {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )} */}
            </div>
            <div>
              <label className="font-medium">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
              {/* {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )} */}
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  id="rememberMe"
                  className="mr-2 rounded-full"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <Link href="#" className="text-green-600 hover:underline">
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Login
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-sm text-gray-500">Or Continue with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-3 border border-gray-400 py-3 rounded-lg"
            >
              <Image src="/google.png" alt="Google" width={40} height={40} />
              <span className="font-medium">Sign up with Google</span>
            </button>

            <p className="text-sm text-center mt-2">
              Don't have an account?{" "}
              <Link href="#" className="text-green-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <div className="w-1/2 bg-white flex items-center justify-center p-5">
          <Image
            src="/image.png"
            alt="Illustration"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
}
