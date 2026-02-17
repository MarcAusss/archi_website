"use client";

import Link from "next/link";
import { Roboto } from "../font";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // smooth easeOut cubic-bezier
    },
  },
};

export default function Latest_projectPage() {
  return (
    <div className="my-10 relative lg:mx-0 mx-5">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-white">
        <div className="flex justify-between py-4">
          <h1 className={`${Roboto.className} tracking-wider my-2`}>
            LATEST PROJECTS
          </h1>
          <Link
            href=""
            className={`${Roboto.className} hover:underline transition-all tracking-wider my-2`}
          >
            VIEW ALL PROJECTS 🡕
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-400 pt-8 pb-14">

        {/* FIRST IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="w-[70%] max-lg:w-full"
        >
          <div className="w-full h-116 relative">
            <Image
              src="/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between mt-3">
            <div>
              <h1 className={`${Roboto.className} text-xl`}>
                Kitto Appartments
              </h1>
              <p className="text-sm">Manila, Philippines</p>
            </div>
            <h1 className={`${Roboto.className} font-semibold`}>2026</h1>
          </div>
        </motion.div>

        {/* SECOND + THIRD */}
        <div className="flex items-center justify-between max-lg:flex-col lg:mt-0 mt-10 max-lg:gap-10">

          {/* SECOND IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="w-[35%] max-lg:w-full"
          >
            <motion.div
              className="w-full h-64 relative"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ amount: 0.5 }}
            >
              <Image
                src="/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex justify-between mt-3">
              <div>
                <h1 className={`${Roboto.className} text-xl`}>
                  Kitto Appartments
                </h1>
                <p className="text-sm">Manila, Philippines</p>
              </div>
              <h1 className={`${Roboto.className} font-semibold`}>2026</h1>
            </div>
          </motion.div>

          {/* THIRD IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="w-[35%] mt-5 lg:mt-10 max-lg:w-full"
          >
            <motion.div
              className="w-full h-130 relative"
              initial={{ y: 120 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ amount: 0.1 }}
            >
              <Image
                src="/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex justify-between mt-3">
              <div>
                <h1 className={`${Roboto.className} text-xl`}>
                  Kitto Appartments
                </h1>
                <p className="text-sm">Manila, Philippines</p>
              </div>
              <h1 className={`${Roboto.className} font-semibold`}>2026</h1>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
