// "use client";
// import { ChevronDown } from "lucide-react";
// import { useState, useRef, useEffect } from "react"

// export default function Dropdown({ title }: { title: string }) {
//   const [open, setOpen] = useState(false)
//   const ref = useRef<HTMLDivElement>(null)

//   // close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(e: any) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <div className="relative inline-block " ref={ref}>
//       <button
//         onClick={() => setOpen(!open)}
//         className="cursor-pointer px-4 py-2 text-gray-300 rounded-xl hover:text-white transition flex"
//       >
//         {title} <ChevronDown/>
//       </button>

//       {open && (
//         <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg">
//           <ul className="py-2 text-gray-700">
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Billing</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }


"use client";
import { ChevronDown } from "lucide-react";


export default function Dropdown({ 
    title,
    items = [
        "Profile",
        "Settings",
        "Billing",
        "Logout"
    ]
}: { title: string, items?: Array<string> }) {
    return (
        <div className="relative inline-block group">
            {/* Trigger */}
            <button className="cursor-pointer px-4 py-2 text-gray-300 rounded-xl hover:text-white transition flex items-center gap-1">
                {title} <ChevronDown className="transition-transform group-hover:rotate-180" />
            </button>

            {/* Menu (only visible on hover) */}
            <div className="absolute mt-2 w-48 bg-[rgba(0,0,0,0.92)] border border-zinc-800 rounded-b-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-200">
                <ul className="text-gray-300">
                    {
                        items.map((item: string, i: number) => (
                            <li key={i} className="px-4 py-2 hover:bg-zinc-800 cursor-pointer m-1 rounded-sm">{item}</li>
                        ))
                    }
                    {/* <li className="px-4 py-2 hover:bg-zinc-800 cursor-pointer m-1 rounded-sm">Profile</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Billing</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li> */}
                </ul>
            </div>
        </div>
    )
}
