"use client";
import React, { ReactNode, useRef, useState } from "react";


export default function BlueCard({ className = "", children }: { className?: string, children?: ReactNode }) {

    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: '-100%', y: '-100%' });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            // Calculate the mouse position as a percentage of the element's width and height
            const xPercentage = (e.clientX - rect.left) / rect.width * 100;
            const yPercentage = (e.clientY - rect.top) / rect.height * 100;

            // Update the CSS variables with the percentage values
            divRef.current.style.setProperty('--x', `${xPercentage}%`);
            divRef.current.style.setProperty('--y', `${yPercentage}%`);
        }
    };

    const handleMouseLeave = () => {
        if (divRef.current) {
            // Reset to the center (50%) on mouse leave for a smooth re-entry
            divRef.current.style.setProperty('--x', '-100%');
            divRef.current.style.setProperty('--y', '-100%');
        }
    };



    return (
        <div ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={
                {
                    "--x": "5%",
                    "--y": "5%"

                } as React.CSSProperties
            }
            className={`blue-two-source-gradient

                    p-8 outline-1 
                    outline-gray-600 
                    rounded-xl 
                    relative 
                    ${className}`}
        >
            <div className="absolute z-50 rounded-xl inset-0 border-[#7a5855] border-t-2" />

            {children}
        </div>
    );
}