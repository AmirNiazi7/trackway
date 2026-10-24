import React from "react";
import { BrandFeatureBanner } from "@/components/auth/BrandFeatureBanner";
import { SignInForm } from "@/components/auth/SignInForm";
import { HeroWatermark } from "@/components/auth/HeroWatermark";

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full bg-[#0e1527] flex items-center justify-center p-0 sm:p-4 lg:p-6 overflow-x-hidden selection:bg-[#e3ad34] selection:text-black">
      {/* Main App Container matching Figma rounded card layout */}
      <div className="relative w-full max-w-[1536px] min-h-screen lg:min-h-[920px] bg-[#0e1527] lg:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch justify-between shadow-2xl border-0 lg:border border-[#1e293b]/30">
        {/* Right Corner Hero Image Watermark */}
        <HeroWatermark />

        {/* Left Column: Brand Feature Banner with Horse Emblem, Copy & Stats */}
        <div className="w-full lg:w-[751px] lg:shrink-0 flex items-stretch">
          <BrandFeatureBanner />
        </div>

        {/* Right Column: Sign In Form */}
        <div className="relative w-full flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-16">
          <SignInForm />
        </div>
      </div>
    </main>
  );
}
