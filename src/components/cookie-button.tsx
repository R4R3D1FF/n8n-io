"use client";
import { CheckboxItem, DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { Cookie } from "lucide-react";
import { useState } from "react";



export default function CookieButton() {
    const [opened, setOpened] = useState(false);

    

    return (
        <div className="text-white">
            <button className="w-10 h-10 fixed bottom-10 left-10 text-purple-600 z-[2000] ">
                <Cookie onClick={() => setOpened(!opened)} className="w-full h-full" />
            </button>
            {
                opened?
                
                <div className="fixed h-[400px] w-65 bg-[#0f0015] bottom-10 left-10 z-[2000] flex flex-col items-centers justify-between hadow-2xl rounded-md">
                    <div>
                    </div>
                    <h1 className="text-[19px] w-3/4 font-semibold ">
                        The website uses cookies
                    </h1>

                    <p className="text-xs">
                        {"We use cookies to personalise content, ads and to analyse our traffic. We also share information about your use of our site with our advertising and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services."} 
                    </p>

                    <div>
                        <input type="checkbox" name="subscribe" value="yes"/>
  Subscribe to newsletter
                    </div>

                    <div className="flex text-xs font-semibold">
                        <div className="w-1/2 ">
                            <button className="bg-violet-700 px-5 py-3 rounded-full">
                                ACCEPT ALL
                            </button>
                        </div>
                        <div className="w-1/2">
                            <button className="border-1 border-white px-5 py-3 rounded-full">
                                DECLINE ALL
                            </button>
                        </div>
                    </div>

                </div>
                

                :
                <div/>
            }
        </div>
    )
}