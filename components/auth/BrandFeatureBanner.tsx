import React from "react";
import Image from "next/image";
import { StatCard } from "@/components/ui/StatCard";
import { DividerWithBadge } from "@/components/ui/DividerWithBadge";
import { BRAND_STATS, ASSETS } from "@/lib/constants";

export function BrandFeatureBanner() {
  return (
    <div className="relative w-full h-full p-2 sm:p-2.5 lg:p-3 flex items-center justify-center">
      <div
        className="relative w-full h-full rounded-[20px] lg:rounded-[24px] border border-[#9b5e0b] overflow-hidden p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-between shadow-[0_0_50px_rgba(155,94,11,0.12)]"
        style={{
          backgroundImage:
            "linear-gradient(153.15deg, rgb(10, 16, 32) 8.49%, rgb(19, 27, 48) 58.3%, rgb(26, 35, 64) 91.51%)",
        }}
      >
        {/* Background Emblem Watermark */}
        <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[500px] lg:w-[600px] h-[450px] opacity-[0.04] pointer-events-none select-none overflow-hidden">
          <Image
            src={ASSETS.emblem}
            alt="FastTrack Watermark"
            fill
            sizes="600px"
            className="object-contain scale-125"
            priority
          />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[220px] bg-[radial-gradient(ellipse_at_top,_rgba(227,173,52,0.12),transparent_70%)] pointer-events-none" />

        {/* Top/Center Section: Golden Emblem & Headings */}
        <div className="relative z-10 w-full flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 my-auto">
          {/* Main Golden Horse & Horseshoe Emblem */}
          <div className="relative w-[190px] sm:w-[220px] lg:w-[240px] h-[135px] sm:h-[155px] lg:h-[175px] flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,173,52,0.15),transparent_65%)] animate-gold-subtle" />
            <Image
              src={ASSETS.emblem}
              alt="Golden Elegance Horse and Horseshoe Emblem"
              fill
              sizes="(max-width: 768px) 200px, 240px"
              className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>

          {/* Headline & Description */}
          <div className="flex flex-col items-center text-center gap-2 sm:gap-2.5 max-w-[500px] px-2">
            <h1 className="font-['var(--font-sora)'] font-bold text-[20px] sm:text-[23px] lg:text-[26px] leading-[1.25] text-white tracking-tight">
              The <span className="text-[#e3ad34]">Premier</span> Platform For{" "}
              <span className="block sm:inline">Trainers, Owners, And Syndicates.</span>
            </h1>

            <p className="font-['var(--font-inter)'] font-medium text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-[#64748b] max-w-[460px]">
              Log in to manage your FastTrack dashboard to oversee horses, training, and race entries
            </p>
          </div>
        </div>

        {/* Bottom Section: Divider & Statistics */}
        <div className="relative z-10 w-full max-w-[460px] flex flex-col items-center gap-3 sm:gap-4 mt-auto pt-2">
          <DividerWithBadge label="PREMIUM RACING" />

          {/* Stats Row */}
          <div className="w-full grid grid-cols-3 gap-2 sm:gap-3 items-center justify-center">
            {BRAND_STATS.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
