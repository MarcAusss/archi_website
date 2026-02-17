"use client";

import { Roboto } from "../font";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionValue,
} from "framer-motion";
import { useRef, useEffect } from "react";

type WordProps = {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
};

function Word({ word, progress, range }: WordProps) {
  const rawOpacity = useTransform(progress, range, [0, 1]);
  const opacity = useMotionValue(0);

  useEffect(() => {
    return rawOpacity.onChange((value) => {
      if (value > opacity.get()) {
        opacity.set(value); // fade in
      } else if (value < opacity.get()) {
        opacity.set(value); // fade out if scrolling up
      }
    });
  }, [rawOpacity, opacity]);

  const y = useTransform(progress, range, [-20, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline" // changed from inline-block
    >
      {word}{" "} {/* preserve spacing between words */}
    </motion.span>
  );
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"],
  });

  const text =
    "At BDarch Studio, we believe in the transformative power of architecture to shape a better world. We envision a world where every space, from the smallest detail to the grandest structure, is crafted with purpose, precision, and a touch of inspiration.";

  const words = text.split(" ");

  return (
    <div className="my-10 lg:mx-0 mx-5">
      <h1 className={`${Roboto.className} tracking-wider my-2`}>ABOUT US</h1>

      <div
        ref={containerRef}
        className="border-t border-gray-400 pt-8 pb-14 relative h-fit"
      >
        <div className="sticky top-32">
          <h1
            className="text-[2.8rem] leading-none text-justify"
            style={{ textIndent: "13rem" }} // paragraph indent
          >
            {words.map((word, index) => {
              const total = words.length;
              const start = index / total;
              const end = Math.min(start + 0.05, 1); // per-word speed
              return (
                <Word
                  key={index}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </h1>
        </div>
      </div>
    </div>
  );
}
