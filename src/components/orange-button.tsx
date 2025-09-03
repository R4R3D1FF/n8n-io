import { cn } from "@/lib/utils";

export async function OrangeButton({ className = "", content = "Get Started" }: { className?: string, content?: string }) {
    return (
        <button className={cn(
            `text-base px-3 py-[2px] rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 border-t border-l border-r border-b-2 border-orange-300 cursor-pointer`,
            className
        )}>
            {content}
        </button>
    );
}