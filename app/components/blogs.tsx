"use client"

import Link from "next/link";
import { Roboto } from "../font";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef } from "react";

export default function BlogPage() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: false,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Smooth fade linked to scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={sectionRef} className="my-10 overflow-hidden lg:mx-0 mx-5">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 40,
        }}
        transition={{ duration: 0.8 }}
        className="flex justify-between"
      >
        <h1 className={`${Roboto.className} tracking-wider my-2`}>
          INSIGHT & STORIES
        </h1>

        <Link
          href=""
          className={`${Roboto.className} hover:underline transition-all tracking-wider my-2`}
        >
          VIEW ALL BLOGS🡕
        </Link>
      </motion.div>

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{ duration: 1 }}
        className="border-t border-gray-400 pt-8"
      >
        <h1 className="text-[2.8rem] leading-none lg:text-justify text-normal">
          Navigating the world <br /> of architecture
        </h1>

        <p className={`${Roboto.className} mt-4`}>
          Explore emerging trends, technologies, and visionary <br />
          concepts shaping the dynamic landscape of design <br />
          and construction
        </p>
      </motion.div>

      {/* IMAGES SECTION */}
      <div className="flex justify-between relative lg:h-[80vh] h-[60vh] w-full items-end lg:mt-10  mt-5">

        {/* FIRST IMAGE */}
        <motion.div
          style={{ y: y1, opacity }}
          className="h-[65vh] w-80 relative hidden md:block"
        >
          <Image
            src="/images/32ed3284d24ae75cc2f560c90d116628.jpg"
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          style={{ y: y2, opacity }}
          className="flex flex-col gap-4"
        >
          <div className="h-[45vh] w-2xl relative">
            <Image
              src="/images/32ed3284d24ae75cc2f560c90d116628.jpg"
              fill
              alt=""
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-white"
          >
            <div className="flex justify-between">
              <h1 className={`${Roboto.className} text-xl font-semibold w-1/3`}>
                The Allure of Wooden-Clad Homes
              </h1>

              <Link href="" className={`${Roboto.className} underline`}>
                Unique House
              </Link>
            </div>

            <p className={`${Roboto.className} text-gray-400`}>
              10 hours ago
            </p>
          </motion.div>
        </motion.div>

        {/* THIRD IMAGE */}
        <motion.div
          style={{ y: y3, opacity }}
          className="h-[80vh] w-110 relative hidden md:block"
        >
          <Image
            src="/images/32ed3284d24ae75cc2f560c90d116628.jpg"
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
}
