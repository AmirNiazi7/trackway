"use client";

import React, { forwardRef, useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  error?: string;
  helperText?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  containerClassName?: string;
  isPassword?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isRequired = false,
      error,
      helperText,
      leftElement,
      rightElement,
      containerClassName = "",
      className = "",
      type = "text",
      isPassword = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="font-['var(--font-inter)'] font-medium text-[12px] sm:text-[13px] leading-tight tracking-[0.8px] uppercase text-white select-none flex items-center gap-1"
          >
            <span>{label}</span>
            {isRequired && <span className="text-[#ef4444] text-[13px]">*</span>}
          </label>
        )}

        <div
          className={`relative flex items-center bg-[#161e37] rounded-[13px] transition-all duration-200 border ${
            error
              ? "border-[#ef4444] ring-1 ring-[#ef4444]/40"
              : isFocused
              ? "border-[#e3ad34] ring-2 ring-[#e3ad34]/25"
              : "border-[#3b3e4f] hover:border-[#52576d]"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {leftElement && (
            <div className="pl-3.5 flex items-center justify-center shrink-0 text-[#64748b]">
              {leftElement}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={resolvedType}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            className={`w-full bg-transparent px-[14px] py-[11px] sm:py-[12px] text-[15px] sm:text-[16px] leading-[1.4] text-white placeholder-[#64748b] font-['var(--font-inter)'] font-normal focus:outline-none rounded-[13px] ${
              leftElement ? "pl-2" : ""
            } ${rightElement || isPassword ? "pr-2" : ""} ${className}`}
            {...props}
          />

          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="mr-4 p-1 rounded-lg text-[#64748b] hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#e3ad34]"
            >
              {showPassword ? (
                // Eye open SVG
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                // Eye off SVG from Figma
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.743 5.092C11.15 5.032 11.569 5 12 5c5.105 0 8.455 4.505 9.58 6.287.137.215.205.323.243.49.029.124.029.321 0 .446-.038.167-.107.275-.244.492-.3.475-.757 1.142-1.363 1.865M6.719 6.719C4.56 8.185 3.094 10.22 2.421 11.285c-.137.217-.205.325-.243.491a1.23 1.23 0 000 .447c.038.167.106.275.242.49 1.126 1.782 4.476 6.287 9.58 6.287 2.056 0 3.827-.73 5.282-1.719M6.719 6.719L3 3m11.122 11.121L9.88 9.879M6.719 6.719l3.16 3.16m7.403 7.403L14.122 14.12m3.16 3.16L21 21m-6.878-6.879a3 3 0 01-4.243-4.242"
                  />
                </svg>
              )}
            </button>
          ) : (
            rightElement && (
              <div className="pr-4 flex items-center justify-center shrink-0 text-[#64748b]">
                {rightElement}
              </div>
            )
          )}
        </div>

        {error && (
          <p className="text-[13px] text-[#ef4444] font-['var(--font-inter)'] flex items-center gap-1 mt-0.5">
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>{error}</span>
          </p>
        )}

        {helperText && !error && (
          <p className="text-[13px] text-[#64748b] font-['var(--font-inter)']">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
