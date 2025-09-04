"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { ReactNode, useState } from "react";

export default function Checkbox({ children }: { children?: ReactNode }) {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex items-center gap-2 cursor-pointer"
            onClick={() => setChecked(!checked)}
        >
            <div className={
                cn("flex items-center justify-center w-6 h-6 rounded-md ",
                    checked ?
                        "bg-sky-700 text-[#0f0015]"
                        :
                        "border-2"

                )}
            >
                {
                    checked ?
                        <Check className="w-4 h-4 " />
                        :
                        <div />
                }

            </div>
            <div className="uppercase text-xs text-gray-200 font-semibold">
                {children}
            </div>
        </div>
    );
}
