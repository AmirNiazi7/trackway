import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FastTrack | Sign In - The Premier Platform for Racing",
  description:
    "Log in to manage your FastTrack dashboard to oversee horses, training, and race entries. The premier platform for trainers, owners, and syndicates.",
  keywords: ["FastTrack", "Horse Racing", "Trainers", "Owners", "Syndicates", "Login"],
  icons: {
    icon: "/assets/golden-horse-emblem.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0e1527] text-white flex flex-col font-sans selection:bg-[#e3ad34] selection:text-black">
        {children}
      </body>
    </html>
  );
}
