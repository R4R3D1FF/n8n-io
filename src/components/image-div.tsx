"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        // Set the initial state
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        // Listener for changes
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}


export default function ImageDiv() {
    const isLarge = useMediaQuery("(min-width: 1024px)");
    const [active, setActive] = useState(-1);
    const content = [
        {
            title: "IT Ops can",
            content: "⚡ On-board new employees",
            image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp"
        },
        {
            title: "Sec Ops can",
            content: "⚡ Enrich security incident tickets",
            image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_Sec_O_Ps_1553ddb39b.webp"
        },
        {
            title: "Dev Ops",
            content: "⚡ Convert natural language into API calls",
            image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_Dev_O_Ps_43aa01a07b.webp"
        },
        {
            title: "Sales",
            content: "⚡ Generate customer insights from reviews",
            image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_Sales_d1992221c7.webp"
        },
        {
            title: "You",
            content: "▶️ Watch this video to hear our pitch",
            image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp"
        }
    ];

    return (
        isLarge ?
            <section className="w-full max-w-279 relative flex flex-col h-256 rounded-2xl 
                            flowchart-background
                            mb-32 p-8"
            >
                <div className="absolute rounded-2xl inset-2 bg-my-purple ">
                    <div className="flex h-35 mb-10 mx-1">
                        {
                            (content)
                                .map(
                                    (item, i) => (
                                        <div className="w-1/5 h-full" key={i}>
                                            <div className={
                                                clsx(
                                                    `my-2 mx-1 rounded-lg border-1  bg-gradient-to-b  h-full cursor-pointer `,
                                                    (active === i)
                                                        ?
                                                        "from-[#372346] to-[#452d69] border-[#4f3b68]"
                                                        :
                                                        "from-[#251d32] to-[#171321] hover:from-[#302240] hover:to-[#1b1829] border-[#2f2b38] hover:border-[#4f3b68]"


                                                )

                                            } onClick={() => setActive(i)}>

                                            </div>
                                        </div>
                                    )
                                )
                        }
                        {/* <div className="w-1/5 h-full">
                        <div className="my-2 mx-1 rounded-lg border-1 border-[#2f2b38] hover:border-[#4f3b68] bg-gradient-to-bl from-[#251d32] to-[#171321] hover:from-[#302240] hover:to-[#1b1829] h-full cursor-pointer">

                        </div>
                    </div>

                    <div className="w-1/5 h-full">
                        <div className="my-2 mx-1 rounded-lg border-1 border-[#2f2b38] hover:border-[#4f3b68] bg-gradient-to-bl from-[#251d32] to-[#171321] hover:from-[#302240] hover:to-[#1b1829] h-full cursor-pointer" onClick={() => setActive(i)}>

                        </div>
                    </div>

                    <div className="w-1/5 h-full">
                        <div className="my-2 mx-1 rounded-lg border-1 border-[#2f2b38] hover:border-[#4f3b68] bg-gradient-to-bl from-[#251d32] to-[#171321] hover:from-[#302240] hover:to-[#1b1829] h-full cursor-pointer">

                        </div>
                    </div>

                    <div className="w-1/5 h-full">
                        <div className="my-2 mx-1 rounded-lg border-1 border-[#2f2b38] hover:border-[#4f3b68] bg-gradient-to-bl from-[#251d32] to-[#171321] hover:from-[#302240] hover:to-[#1b1829] h-full cursor-pointer">

                        </div>
                    </div>

                    <div className="w-1/5 h-full">
                        <div className="my-2 mx-1 rounded-lg border-1 border-[#2f2b38] hover:border-[#4f3b68] bg-gradient-to-bl from-[#251d32] to-[#171321] hover:from-[#302240] hover:to-[#1b1829] h-full cursor-pointer">

                        </div>
                    </div> */}

                    </div>
                    <div>
                        <img src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp" className="rounded-bl-2xl rounded-br-2xl" />
                    </div>
                </div>

            </section>

            :

            <section
                className="w-full max-w-279 relative flex flex-col 
                            mb-32 p-8 gap-4"
            >
                {
                    content
                        .map(
                            (item, i) =>
                            (
                                <div className="w-full rounded-2xl bg-gradient-to-br from-[#211c40] to-[#05040a] border-b border-gray-800 flex flex-col md:flex-row items-center px-4" key={i}>
                                    <div className="w-full md:w-2/5 text-white flex flex-col h-full justify-center items-center py-8">
                                        <div className="w-1/2 flex flex-col text-center md:text-start md:py-0">
                                            <div>
                                                {item.title}
                                            </div>
                                            <div>
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-3/5 my-4">
                                        <img className="rounded-2xl w-full h-auto border-t border-l border-gray-800" src={item.image}>
                                        </img>
                                    </div>


                                </div>
                            )
                        )
                }

            </section>
    )
}