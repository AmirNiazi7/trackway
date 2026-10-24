import React from "react";

export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="font-['var(--font-sora)'] font-semibold text-[32px] sm:text-[37.5px] leading-[1.2] text-[#d4af77] tracking-tight">
        {value}
      </div>
      <div className="font-['var(--font-inter)'] font-normal text-[16px] sm:text-[18.8px] leading-[1.3] text-[#64748b] tracking-[0.94px] mt-1">
        {label}
      </div>
    </div>
  );
}
