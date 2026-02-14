"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Roboto } from "../font";

export default function LandingPage() {
    const images = [
        "/images/image 15.png",
        "/images/image 16.png",
        "/images/interior.jpg",
    ];

    const [active, setActive] = useState<number | null>(null);

    const getWidth = (index: number) => {
        // Default: first image large
        if (active === null) {
        return index === 0 ? 900 : 300;
        }

        // If first image hovered → collapse it
        if (active === 0) {
        return index === 0 ? 300 : 900;
        }

        // If other images hovered
        return active === index ? 900 : 300;
    };

    return (
        <div className="mt-20">

        {/* TEXT SECTION */}
        <div className="flex justify-between mb-5">
            <h1 className="font-semibold text-6xl uppercase leading-18">
            Designing Spaces, <br /> Inspire Lives
            </h1>

            <div className="flex flex-col justify-between">
            <h1 className={Roboto.className}>
                ©2026 BDARCH STUDIO, All Rights Reserved
            </h1>
            <h1 className={Roboto.className}>
                Architects of inspirational environments, we redefine <br />
                spaces, creating environments that inspire, uplift, and <br />
                enhance the human experience
            </h1>
            </div>
        </div>

        {/* STICKY IMAGE SECTION */}
        <div className="relative h-[150vh]">
            <div className="sticky top-24 flex gap-2">

            {images.map((src, index) => (
                <motion.div
                key={index}
                animate={{ width: getWidth(index) }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className="relative h-150 overflow-hidden rounded-xl"
                >
                <Image
                    src={src}
                    fill
                    className="object-cover"
                    alt=""
                />
                </motion.div>
            ))}

            </div>
        </div>

    </div>
  );
}
