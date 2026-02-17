"use client";

import { useState } from "react";
import { Roboto } from "../font";

export default function FaqPage() {
     const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      question: "How long does a Greenova solar installation take?",
      details:
        "Our adaptive AI engine analyzes usage patterns, weather conditions, and demand peaks to deliver the most efficient energy performance & automatically.",
      number: "1",
    },
    {
      question: "Will solar panels really reduce my monthly electricity bills?",
      details:
        "Our adaptive AI engine analyzes usage patterns, weather conditions, and demand peaks to deliver the most efficient performance automatically.",
      number: "2",
    },
    {
      question: "Does Greenova offer financing or installment plans?",
      details:
        "Integrates smoothly with existing infrastructure and smart devices for effortless adoption.",
      number: "3",
    },
    {
      question: "What maintenance do solar panels require?",
      details:
        "Advanced battery systems ensure optimal energy storage during peak and off-peak hours.",
      number: "4",
    },
    {
      question: "Do i need a roof inspection before installing solar panels?",
      details:
        "Connects users into a shared renewable ecosystem that maximizes collective efficiency.",
      number: "5",
    },
  ];


    return (
        <div className="py-10 lg:mx-0 mx-5">
            <h1 className={`${Roboto.className} tracking-wider my-2`}>FAQS</h1>
            <div className="border-t border-gray-400 pt-8 pb-14">   
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 items-start">
                    <div className="mb-4">
                        <h1 className="text-3xl tracking-wide leading-snug font-semibold">
                            Frequently asked <br /> questions 
                        </h1>
                    </div>

                    <div className="">
                        <div className="w-full">
                            {/* LEFT – Accordions */}
                            <div className="space-y-3">
                            {items.map((item, index) => {
                                const isOpen = openIndex === index;

                                return (
                                <div
                                    key={index}
                                    className={`
                                    rounded-xl border transition-all duration-300
                                    ${isOpen
                                        ? "bg-[#d3f1710a] border-[#D3F171]"
                                        : "bg-white border-gray-200"}
                                    `}
                                >
                                    <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex items-start gap-4 p-4 text-left"
                                    >
                                    {/* Icon */}
                                    <div className="">
                                        {item.number}.
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">
                                        {item.question}
                                        </h3>

                                        <div
                                        className={`grid transition-all duration-300 ${
                                            isOpen
                                            ? "grid-rows-[1fr] mt-2"
                                            : "grid-rows-[0fr]"
                                        }`}
                                        >
                                        <p className="overflow-hidden text-sm text-gray-600">
                                            {item.details}
                                        </p>
                                        </div>
                                    </div>

                                    {/* Plus / Minus */}
                                    <span className="text-lg text-gray-500">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                    </button>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}