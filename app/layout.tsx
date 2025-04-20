import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${openSans.variable} antialiased`}
      >
        <div className="container pt-10 pb-20">
          {children}
        </div>
      </body>
    </html>
  );
}
