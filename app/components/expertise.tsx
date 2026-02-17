"use client";

import Image from "next/image";
import { Roboto } from "../font";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Slide = {
  image: string;
  title: string;
  text: string;
};

const slides: Slide[] = [
  {
    image: "/images/image 15.png",
    title: "Architectural Design",
    text: "Innovative architectural concepts blending aesthetics and functionality.",
  },
  {
    image: "/images/image 16.png",
    title: "Interior Design",
    text: "Creating immersive interiors that elevate everyday living.",
  },
  {
    image: "/images/interior.jpg",
    title: "Urban Planning",
    text: "Designing sustainable and inspiring urban environments.",
  },
  {
    image: "/images/image 15.png",
    title: "Landscape Design",
    text: "Crafting outdoor spaces that harmonize with nature.",
  },
  {
    image: "/images/image 16.png",
    title: "Renovation",
    text: "Transforming spaces with thoughtful redesign solutions.",
  },
  {
    image: "/images/interior.jpg",
    title: "Consultation",
    text: "Providing expert guidance for visionary developments.",
  },
];

export default function ExpertisePage() {
  const [current, setCurrent] = useState(5);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const gridPositions = [
    "col-start-1 row-start-1 flex flex-col items-end px-5 text-right",
    "col-start-1 row-start-2 flex justify-center items-end flex-col px-5 text-right",
    "col-start-1 row-start-3 flex items-end justify-end flex-col px-5 text-right",
    "col-start-3 row-start-1 flex flex-col px-5",
    "col-start-3 row-start-2 flex justify-center flex-col px-5",
    "col-start-3 row-start-3 flex justify-end flex-col px-5",
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ duration: 0.8 }}
      className="my-10 lg:mx-0 mx-5"
    >
      <h1 className={`${Roboto.className} tracking-wider my-2`}>
        OUR EXPERTISE
      </h1>

      <div className="border-t border-gray-400 pt-8 pb-14">

        {/* Header */}
        <div className="flex lg:flex-row flex-col gap-5 justify-between md:items-end">
          <h1 className="text-[2.8rem] leading-none">
            Where dreams take shape <br />
            and every design tells a <br />
            unique story.
          </h1>

          <div className="flex gap-5">
            <button onClick={prevSlide} className="btn">⪻</button>
            <button onClick={nextSlide} className="btn">⪼</button>
          </div>
        </div>

        {/* ===== DESKTOP GRID ===== */}
        <div className="hidden md:grid grid-cols-[0.8fr_2fr_0.8fr] mt-5 grid-rows-3 relative">

          {/* Center Image */}
          <div className="col-start-2 row-start-1 h-[62vh] row-span-3 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[current].image}
                  fill
                  alt=""
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Moving Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={gridPositions[current]}
            >
              <h1 className={`${Roboto.className} font-semibold text-xl`}>
                {slides[current].title}
              </h1>
              <p className={`${Roboto.className} text-sm`}>
                {slides[current].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== MOBILE VERSION ===== */}
        <div className="md:hidden mt-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[40vh] mb-6">
                <Image
                  src={slides[current].image}
                  fill
                  alt=""
                  className="object-cover rounded-xl"
                />
              </div>

              <h1 className="text-lg font-semibold">
                {slides[current].title}
              </h1>
              <p className="text-sm mt-2">
                {slides[current].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
