import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default async function BlueButton({ className="", children } : { className? : string, children : ReactNode }){
    return (
        <button className= {cn(
            "bg-gradient-to-r from-blue-500 to-indigo-700 px-6 py-2 rounded-lg text-sm font-semibold",
            className
        )}
        >
            {children}
        </button>
    )
}