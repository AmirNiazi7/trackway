import React from "react";

export interface DividerWithBadgeProps {
  label?: string;
  className?: string;
}

export function DividerWithBadge({
  label = "PREMIUM RACING",
  className = "",
}: DividerWithBadgeProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 sm:gap-[37.5px] w-full max-w-[500px] select-none ${className}`}
    >
      <div className="flex-1 max-w-[75px] h-[1.5px] bg-gradient-to-l from-[#d4af77] to-transparent" />
      <span className="font-['var(--font-sora)'] font-normal text-[13px] sm:text-[15.6px] leading-tight text-[#d4af77] tracking-[3px] sm:tracking-[5.48px] uppercase whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 max-w-[75px] h-[1.5px] bg-gradient-to-r from-[#d4af77] to-transparent" />
    </div>
  );
}
