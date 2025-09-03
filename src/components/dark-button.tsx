// import { cn } from "@/lib/utils";

// export async function DarkButton({ className = "", content = "Get Started" }: { className?: string, content?: string }) {
//     return (
//         <button className={cn(
//             `text-base px-3 py-[2px] rounded-lg bg-indigo-950/50 border-t border-l border-b border-r-2 border-zinc-700 border-r-zinc-400`,
//             className
//         )}>
//             {content}
//         </button>
//     );
// }

// src/components/DarkButton.tsx
import { cn } from "@/lib/utils";
import React from "react";

// The props interface remains the same
type DarkButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DarkButton({ className, children = "Get Started", ...props }: DarkButtonProps) {
  return (
    // The <button> itself will be the container for our gradient "border"
    <button
      className={cn(
        // Base styles: relative for positioning the inner content, rounded corners
        "relative inline-flex items-center justify-center rounded-lg p-px",
        // The gradient background that creates the border effect.
        // It transitions from a semi-transparent gray to a stronger indigo.
        "bg-radial-[at_100%_50%] from-zinc-400 to-zinc-700",
        // Interactive states: make the gradient brighter on hover
        "hover:from-zinc-500/[.7] hover:to-indigo-500/[.9]",
        "transition-all duration-300 ",
        "cursor-pointer",
        className // Allow overriding all styles
      )}
      {...props} // Pass onClick, disabled, etc.
    >
      {/* This inner span holds the actual background and content */}
      <span
        className={cn(
          // Match parent's border-radius, but slightly smaller if needed
          "rounded-[7px]",
          // Padding for the content
          "px-4 py-1",
          // The main background of the button
          "bg-[#04002E] backdrop-blur-sm",
          // Ensure it's always above the gradient
          "w-full h-full",

          "flex items-center"
        )}
      >
        {children}
      </span>
    </button>
  );
}