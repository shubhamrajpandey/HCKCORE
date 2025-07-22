"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

//type define gareko
type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function Login() {
  const [submitClicked, setSubmitClicked] = useState(false);
  const [remembermeChecked, setremembermeChecked] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Logging you in...");

    try {
      const res = await axios.post(
        //api fetch with the axios
        "https://herald-hub-backend.onrender.com/auth/login",
        data,
        {
          withCredentials: remembermeChecked,
          headers: { "content-type": "application/json" },
        }
      );

      if (res.status === 200) {
        if (remembermeChecked) {
          localStorage.setItem("Token", res.data.Token);
        } else {
          sessionStorage.setItem("Token", res.data.Token);
        }

        //addeventlistiner jastai ho it respond userLogged in when it is triggered
        window.dispatchEvent(new Event("userLoggedIn"));

        toast.success("Logged in Successfully", { id: toastId });
        router.push("/home");
      }
    } catch (e: unknown) {
      const error = e as {
        response?: { status?: number; data?: { message?: string } };
      };

      if (error.response?.status === 401) {
        toast.error("Please check your credentials.", { id: toastId });
      } else {
        toast.error(error.response?.data?.message || "Cannot fetch the data", {
          id: toastId,
        });
      }
    }
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
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full md:w-[1321] rounded-lg overflow-hidden justify-between">
        <div className="w-fit p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8">Welcome back!</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitClicked(true);
              handleSubmit(onSubmit)(e);
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label className="font-medium">
                Email <span className="text-red-600">*</span>
              </label>
              <motion.input
                layoutId="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email", { required: "Email is required" })}
                className="w-[415px] h-[60px] mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">
                Password <span className="text-red-600">*</span>
              </label>
              <motion.input
                layoutId="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-[415px] h-[60px] mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  id="rememberMe"
                  onChange={(e) => setremembermeChecked(e.target.checked)}
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
              className="bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition w-[415px] h-[60px] cursor-pointer"
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
              className="flex items-center justify-center gap-3 border border-gray-400 py-3 rounded-lg w-[415px] h-[60px] cursor-pointer"
            >
              <Image
                src="/imgs/google.png"
                alt="Google"
                width={40}
                height={40}
              />
              <span className="font-medium">Sign up with Google</span>
            </button>

            <p className="text-sm text-center mt-2">
              Don’t have an account?{" "}
              <Link href="/signin" className="text-green-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <div className="relative w-1/2 flex items-center justify-center p-5 md:w-[500px] min-w-[300px] h-[300px] md:h-[500px]">
          <Image
            src="/imgs/image.png"
            alt="Illustration"
            fill
            className="object-contain mt-15 mr-20"
            priority
          />
        </div>
      </div>
    </div>
  );
}
