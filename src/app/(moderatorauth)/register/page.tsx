"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import Link from "next/link";

interface ModeratorFormInput {
  username: string;
  email: string;
  password: string;
  moderatorKey: string;
  terms: boolean;
}

export default function ModeratorRegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ModeratorFormInput>();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ModeratorFormInput) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://herald-hub-backend.onrender.com/auth/register/moderator",
        {
          username: data.username,
          email: data.email,
          password: data.password,
          moderatorKey: data.moderatorKey,
        }
      );

      setMessage("✅ " + response.data.message);
      reset();
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ error: string }>;

      const errMsg =
        axiosError?.response?.data?.error ||
        "❌ Registration failed. Please try again.";
      setMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex py-25 items-center justify-center ml-120 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 rounded-lg w-full max-w-5xl">
        {/* Form Section */}
        <div>
          <h2 className="text-4xl/13 font-semibold mb-6">
            Create your Moderator Account
          </h2>

          {message && (
            <div
              className={`mb-4 p-3 rounded ${
                message.startsWith("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("username", { required: "Full name is required" })}
                className="w-full h-14 border px-4 py-2 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@heraldcollege\.edu\.np$/,
                    message: "Use a @heraldcollege.edu.np email",
                  },
                })}
                className="w-full h-14 border px-4 py-2 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="w-full  h-14 border px-4 py-2 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Moderator Secret Key"
                {...register("moderatorKey", {
                  required: "Moderator key is required",
                })}
                className="w-full h-14 border px-4 py-2 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.moderatorKey && (
                <p className="text-red-500 text-sm">
                  {errors.moderatorKey.message}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must accept the terms",
                })}
                className="w-4 h-4"
              />
              <label className="text-sm text-gray-600">
                I accept terms and policy
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full h-14 bg-green-500 hover:bg-green-600 text-white py-2 rounded-[12px] font-medium transition cursor-pointer ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          <Link href="/login">
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-green-500 cursor-pointer hover:underline">Log in</span>
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
