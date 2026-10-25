import React from "react";
import { BrandFeatureBanner } from "@/components/auth/BrandFeatureBanner";
import { SignInForm } from "@/components/auth/SignInForm";
import { HeroWatermark } from "@/components/auth/HeroWatermark";

export default function LoginPage() {
  return (
    <main className="h-screen w-full bg-[#0e1527] flex items-center justify-center p-2 sm:p-4 lg:p-5 overflow-hidden selection:bg-[#e3ad34] selection:text-black">
      {/* Main App Container fitted 100% fixed to viewport without overflow */}
      <div className="relative w-full max-w-[1360px] h-full max-h-[820px] bg-[#0e1527] rounded-2xl lg:rounded-[28px] overflow-hidden flex flex-col lg:flex-row items-stretch justify-between shadow-2xl border border-[#1e293b]/40">
        {/* Right Corner Hero Image Watermark */}
        <HeroWatermark />

        {/* Left Column: Brand Feature Banner with Horse Emblem, Copy & Stats */}
        <div className="w-full lg:w-[48%] xl:w-[47%] lg:shrink-0 flex items-stretch h-full">
          <BrandFeatureBanner />
        </div>

        {/* Right Column: Sign In Form */}
        <div className="relative w-full flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-10 h-full overflow-y-auto">
          <SignInForm />
        </div>
      </div>
    </main>
  );
}
