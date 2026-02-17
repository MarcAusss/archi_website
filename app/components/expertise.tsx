"use client"

import Image from "next/image";
import { Roboto } from "../font";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Residential Design",
    text: "Crafting spaces that seamlessly blend functionality and aesthetics",
    image: "/images/created_with_our_tool_center@2x.webp",
  },
  {
    title: "Commercial Design",
    text: "Innovative solutions tailored for modern business environments",
    image: "/images/13460.webp",
  },
  {
    title: "Interior Styling",
    text: "Elevating interiors with curated materials and timeless concepts",
    image: "/images/image 15.png",
  },
  {
    title: "Urban Planning",
    text: "Designing sustainable and livable urban landscapes",
    image: "/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg",
  },
  {
    title: "Custom Architecture",
    text: "Bespoke structures designed with purpose and personality",
    image: "/images/13460.webp",
  },
  {
    title: "Renovation Projects",
    text: "Transforming old spaces into refined modern experiences",
    image: "/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg",
  },
];

export default function ExpertisePage() {
  const [current, setCurrent] = useState(0);

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
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 40,
      }}
      transition={{ duration: 0.8 }}
      className="my-10"
    >
      <h1 className={`${Roboto.className} tracking-wider my-2`}>
        OUR EXPERTISE
      </h1>

      <div className="border-t border-gray-400 pt-8 pb-14">
        <div className="flex justify-between items-end">
          <h1 className="text-[2.8rem] leading-none text-justify">
            Where dreams take shape <br />
            and every design tells a <br />
            unique story.
          </h1>

          <div className="flex gap-5">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border-black border flex justify-center items-center rounded-full hover:bg-black hover:text-white transition"
            >
              ⪻
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border-black border flex justify-center items-center rounded-full hover:bg-black hover:text-white transition"
            >
              ⪼
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[0.8fr_2fr_0.8fr] mt-5 grid-rows-3 relative">

          {/* CENTER IMAGE (Animated) */}
          <div className="col-start-2 row-start-1 h-[62vh] row-span-3 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[current].image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DESCRIPTION (Moves Around Grid) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={`${
                gridPositions[current % gridPositions.length]
              }`}
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
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden mt-10 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-lg font-semibold">
              {slides[current].title}
            </h1>
            <p className="text-sm mt-2">
              {slides[current].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
