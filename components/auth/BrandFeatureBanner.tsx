import React from "react";
import Image from "next/image";
import { StatCard } from "@/components/ui/StatCard";
import { DividerWithBadge } from "@/components/ui/DividerWithBadge";
import { BRAND_STATS, ASSETS } from "@/lib/constants";

export function BrandFeatureBanner() {
  return (
    <div className="relative w-full h-full p-2 sm:p-3 lg:p-[12px] flex items-center justify-center">
      <div
        className="relative w-full h-full min-h-[640px] lg:min-h-[860px] rounded-[24px] border border-[#9b5e0b] overflow-hidden p-6 sm:p-8 lg:p-[32px] flex flex-col items-center justify-between shadow-[0_0_50px_rgba(155,94,11,0.12)]"
        style={{
          backgroundImage:
            "linear-gradient(153.15deg, rgb(10, 16, 32) 8.49%, rgb(19, 27, 48) 58.3%, rgb(26, 35, 64) 91.51%)",
        }}
      >
        {/* Background Emblem Watermark */}
        <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[600px] lg:w-[724px] h-[580px] opacity-[0.04] pointer-events-none select-none overflow-hidden">
          <Image
            src={ASSETS.emblem}
            alt="FastTrack Watermark"
            fill
            sizes="724px"
            className="object-contain scale-125"
            priority
          />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_top,_rgba(227,173,52,0.12),transparent_70%)] pointer-events-none" />

        {/* Top/Center Section: Golden Emblem & Headings */}
        <div className="relative z-10 w-full flex flex-col items-center gap-6 lg:gap-[32px] my-auto">
          {/* Main Golden Horse & Horseshoe Emblem */}
          <div className="relative w-[280px] sm:w-[340px] lg:w-[389px] h-[220px] sm:h-[270px] lg:h-[313px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,173,52,0.15),transparent_65%)] animate-gold-subtle" />
            <Image
              src={ASSETS.emblem}
              alt="Golden Elegance Horse and Horseshoe Emblem"
              fill
              sizes="(max-width: 768px) 280px, 389px"
              className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>

          {/* Headline & Description */}
          <div className="flex flex-col items-center text-center gap-3 lg:gap-[14px] max-w-[620px] px-2">
            <h1 className="font-['var(--font-sora)'] font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] text-white tracking-tight">
              The <span className="text-[#e3ad34]">Premier</span> Platform For{" "}
              <span className="block sm:inline">Trainers, Owners, And Syndicates.</span>
            </h1>

            <p className="font-['var(--font-inter)'] font-medium text-[16px] sm:text-[20px] lg:text-[24px] leading-[1.4] sm:leading-[32px] lg:leading-[36px] text-[#64748b] max-w-[553px]">
              Log in to manage your FastTrack dashboard to oversee horses, training, and race entries
            </p>
          </div>
        </div>

        {/* Bottom Section: Divider & Statistics */}
        <div className="relative z-10 w-full max-w-[520px] flex flex-col items-center gap-5 lg:gap-[20px] mt-6 lg:mt-auto pt-4">
          <DividerWithBadge label="PREMIUM RACING" />

          {/* Stats Row */}
          <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 items-center justify-center">
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
