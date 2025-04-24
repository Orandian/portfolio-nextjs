import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import GridBackground from "@/components/grid-background";
import GameButton from "@/components/game-button";
import ConfirmBox from "@/components/confirmbox";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yan Naing Htwe",
  description: "Yan Naing Htwe's Portfolio",
  keywords: ["Yan Naing Htwe", "Portfolio", "Yan Naing Htwe's Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased bg-black`}>
        <GridBackground>
          <div className="container pt-10 pb-32 z-20">{children}</div>
          <GameButton />

          <ConfirmBox />
        </GridBackground>
      </body>
    </html>
  );
}
