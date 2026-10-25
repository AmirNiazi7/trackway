import React from "react";

export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="font-['var(--font-sora)'] font-semibold text-[22px] sm:text-[26px] leading-[1.2] text-[#d4af77] tracking-tight">
        {value}
      </div>
      <div className="font-['var(--font-inter)'] font-normal text-[12px] sm:text-[13px] leading-[1.3] text-[#64748b] tracking-[0.6px] mt-0.5">
        {label}
      </div>
    </div>
  );
}
