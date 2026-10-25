"use client";

import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary-gold",
      size = "lg",
      fullWidth = true,
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseClasses =
      "relative inline-flex items-center justify-center font-['var(--font-sora)'] font-semibold transition-all duration-200 select-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1527]";

    // Size variants
    const sizeClasses = {
      sm: "h-[38px] px-4 text-xs sm:text-sm rounded-[10px]",
      md: "h-[44px] px-5 text-sm sm:text-base rounded-[12px]",
      lg: "h-[48px] sm:h-[50px] px-6 text-[15px] sm:text-[16px] tracking-[-0.15px] rounded-[13px]",
    };

    // Style variants
    const variantClasses = {
      "primary-gold":
        "btn-gold-luxury text-black active:scale-[0.99] hover:shadow-[0_4px_20px_rgba(227,173,52,0.35)]",
      outline:
        "border border-[#3b3e4f] hover:border-[var(--color-primary-gold)] text-white bg-[#161e37] hover:bg-[#1a2340] active:scale-[0.99]",
      ghost:
        "text-[var(--color-primary-gold)] hover:text-[#fcf1b2] hover:bg-[#161e37]/40 active:scale-[0.99]",
    };

    const widthClass = fullWidth ? "w-full" : "w-auto";

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>{loadingText || "Signing in..."}</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
