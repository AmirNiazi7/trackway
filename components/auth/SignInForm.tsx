"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { SignInFormData, SignInFormErrors } from "@/types/auth";

export function SignInForm() {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "johndoe@email.com",
    password: "",
    keepLoggedIn: false,
  });

  const [errors, setErrors] = useState<SignInFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: SignInFormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    setErrors({});

    // Simulate authenticating with API
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setLoginSuccess(false);
    setFormData({
      email: "johndoe@email.com",
      password: "",
      keepLoggedIn: false,
    });
  };

  return (
    <div className="relative z-10 w-full max-w-[533px] flex flex-col justify-between min-h-[640px] lg:min-h-[820px] py-4">
      {/* Top Header Section */}
      <div className="flex flex-col gap-3">
        <h2 className="font-['var(--font-sora)'] font-bold text-[32px] sm:text-[38px] lg:text-[40px] leading-[1.1] text-white tracking-[-1.6px]">
          Sign in
        </h2>
        <p className="font-['var(--font-inter)'] font-normal text-[16px] sm:text-[18px] leading-[1.5] text-[#64748b]">
          Please login to continue to your account.
        </p>
      </div>

      {loginSuccess ? (
        // Simulated Success State
        <div className="my-auto py-8 px-6 rounded-2xl bg-[#161e37] border border-[#e3ad34] shadow-[0_0_30px_rgba(227,173,52,0.2)] text-center flex flex-col items-center gap-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#e3ad34]/20 border border-[#e3ad34] flex items-center justify-center text-[#e3ad34]">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-['var(--font-sora)'] font-bold text-2xl text-white">
            Welcome back to FastTrack!
          </h3>
          <p className="text-[#64748b] text-[16px] max-w-sm">
            You are authenticated as <span className="text-white font-medium">{formData.email}</span>. Oversee your stables and horses.
          </p>
          <div className="pt-2 flex gap-3">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl border border-[#3b3e4f] text-[#64748b] hover:text-white hover:border-[#e3ad34] text-sm transition-colors cursor-pointer"
            >
              Sign out / Test again
            </button>
          </div>
        </div>
      ) : (
        // Sign In Form
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 my-auto pt-6 pb-4">
          <div className="flex flex-col gap-5">
            {/* Email Field */}
            <Input
              id="email-input"
              label="EMAIL ADDRESS"
              isRequired
              type="email"
              placeholder="johndoe@email.com"
              value={formData.email}
              error={errors.email}
              autoComplete="email"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
            />

            {/* Password Field */}
            <Input
              id="password-input"
              label="PASSWORD"
              isRequired
              isPassword
              placeholder="Password"
              value={formData.password}
              error={errors.password}
              autoComplete="current-password"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, password: e.target.value }));
                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
              }}
            />

            {/* Keep Logged In & Forgot Password */}
            <div className="flex items-center justify-between gap-4 pt-1 flex-wrap">
              <Checkbox
                id="keep-logged-in"
                checked={formData.keepLoggedIn}
                onChange={(checked) =>
                  setFormData((prev) => ({ ...prev, keepLoggedIn: checked }))
                }
                label="Keep me logged in"
              />

              <Link
                href="#forgot-password"
                className="font-['var(--font-inter)'] font-medium text-[15px] sm:text-[16px] leading-[1.5] text-[#e3ad34] underline decoration-from-font hover:text-[#f3c86c] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Password reset instructions will be sent to your email.");
                }}
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              fullWidth
              isLoading={isLoading}
              loadingText="Signing in..."
            >
              Sign in
            </Button>
          </div>
        </form>
      )}

      {/* Footer Link */}
      <div className="pt-8 text-center">
        <p className="font-['var(--font-inter)'] font-normal text-[16px] sm:text-[18px] leading-[1.5] text-[#64748b]">
          New to Fast Track?{" "}
          <Link
            href="#create-account"
            className="font-['var(--font-inter)'] font-semibold text-[#e3ad34] underline decoration-from-font hover:text-[#f3c86c] transition-colors ml-1"
            onClick={(e) => {
              e.preventDefault();
              alert("Registration is currently open for certified trainers and syndicate owners.");
            }}
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
