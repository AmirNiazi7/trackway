import React from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/constants";

export function HeroWatermark() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 right-0 w-[320px] sm:w-[420px] lg:w-[468px] h-[320px] sm:h-[420px] lg:h-[468px] mix-blend-color-dodge opacity-50 pointer-events-none select-none z-0"
    >
      <Image
        src={ASSETS.heroWatermark}
        alt=""
        fill
        sizes="(max-width: 1024px) 360px, 468px"
        className="object-cover object-bottom-right"
        priority
      />
    </div>
  );
}
