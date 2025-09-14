"use client"


import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

function DropdownInstance() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-transparent hover:bg-transparent hover:text-white justify-start px-3 text-xl font-normal border-0"
                >
                    Open Menu
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function MobileNavButton() {
    const [open, setOpen] = useState(false);
    return (
        <div className="lg:hidden">
            <Button
                variant="ghost"
                size="icon"
                className="rounded-2xl shadow-md z-50"
                aria-label="Open menu"
                onClick={() => setOpen(!open)}
            >
                <Menu className="h-6 w-6" />
            </Button>

            {
                open
                    ?
                    <div className="fixed flex flex-col w-full mx-1 -left-1 top-15 h-40 z-[1000] flex gap-3">
                        <Accordion type="single" collapsible className="border-l border-r border-t border-gray-800 w-full space-y-4  bg-[#000000fa] px-8">
                            <AccordionItem value="product" className="border-none">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                    Product
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 pl-4">
                                    <a href="#">Product overview</a>
                                    <a href="#">Integrations</a>
                                    <a href="#">Templates</a>
                                    <a href="#">AI</a>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="use-cases" className="border-none">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                    Use cases
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 pl-4">
                                    <a href="#">Marketing</a>
                                    <a href="#">Automation</a>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="docs" className="border-none">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                    Docs
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 pl-4">
                                    <a href="#">API</a>
                                    <a href="#">Guides</a>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="community" className="border-none">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                    Community
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 pl-4">
                                    <a href="#">Forum</a>
                                    <a href="#">Events</a>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="enterprise" className="border-none">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                    Enterprise
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 pl-4">
                                    <a href="#">Solutions</a>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="pricing" className="border-none">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                    Pricing
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 pl-4">
                                    <a href="#">Plans</a>
                                    <a href="#">Custom pricing</a>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div> :
                    <div />
            }
        </div>

    );
}