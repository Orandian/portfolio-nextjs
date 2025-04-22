import { cn } from "@/lib/utils";
import React from "react";

const GridBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#030712] dark:bg-[#030712]">
      <div
        className={cn(
          "fixed top-0 inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center"></div>
      {children}
    </div>
  );
};

export default GridBackground;
