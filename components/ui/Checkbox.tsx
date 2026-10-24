"use client";

import React, { forwardRef } from "react";

export interface CheckboxProps {
  id?: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      id,
      name,
      checked,
      onChange,
      label,
      disabled = false,
      className = "",
    },
    ref
  ) => {
    const handleToggle = () => {
      if (!disabled) {
        onChange(!checked);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleToggle();
      }
    };

    return (
      <div
        className={`inline-flex items-center gap-[10px] select-none ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } ${className}`}
        onClick={handleToggle}
      >
        <button
          ref={ref}
          type="button"
          role="checkbox"
          id={id}
          name={name}
          aria-checked={checked}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          className={`relative shrink-0 w-6 h-6 rounded-[6px] transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#e3ad34] focus:ring-offset-2 focus:ring-offset-[#0e1527] ${
            checked
              ? "bg-[#e3ad34] border border-[#9b5e0b] shadow-[0_0_10px_rgba(227,173,52,0.4)]"
              : "bg-[#161e37] border-2 border-[#64748b] hover:border-[#94a3b8]"
          }`}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-black stroke-[3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        {label && (
          <span
            className={`font-['var(--font-inter)'] font-medium text-[16px] leading-[1.5] transition-colors ${
              checked ? "text-white" : "text-[#64748b] hover:text-[#94a3b8]"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
