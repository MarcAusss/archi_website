"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Roboto } from "../font";

export default function LandingPage() {
  const images = [
    "/images/image 15.png",
    "/images/image 16.png",
    "/images/interior.jpg",
  ];

  const [active, setActive] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  // 🔥 Auto slideshow for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getWidth = (index: number) => {
    if (active === null) {
      return index === 0 ? 900 : 300;
    }

    if (active === 0) {
      return index === 0 ? 300 : 900;
    }

    return active === index ? 900 : 300;
  };

  return (
    <div className="mt-20 relative">

      {/* ===================== */}
      {/* DESKTOP VERSION */}
      {/* ===================== */}
      <div className="hidden md:block">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-between mb-5"
        >
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
        </motion.div>

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

      {/* ===================== */}
      {/* MOBILE VERSION */}
      {/* ===================== */}
      <div className="md:hidden relative h-screen w-full overflow-hidden">

        {/* Background Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mobileIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[mobileIndex]}
              fill
              alt=""
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 h-full flex flex-col justify-center px-6 text-white"
        >
          <h1 className="font-semibold text-4xl uppercase leading-tight">
            Designing Spaces, <br /> Inspire Lives
          </h1>

          <div className="mt-6 space-y-4">
            <h1 className={Roboto.className}>
              ©2026 BDARCH STUDIO
            </h1>

            <h1 className={`${Roboto.className} text-sm`}>
              Architects of inspirational environments, we redefine
              spaces, creating environments that inspire, uplift, and
              enhance the human experience
            </h1>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
