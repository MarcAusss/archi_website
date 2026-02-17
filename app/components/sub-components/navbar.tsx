"use client"

import { Roboto } from "@/app/font";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Desktop hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* NAVBAR */}
      <motion.div
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full bg-white z-50"
      >
        <div className="max-w-365 mx-auto px-5 md:px-0 py-3 flex justify-between items-center">

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-5 uppercase">
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Projects</Link>
            <Link href="">Services</Link>
          </nav>

          <h1 className="italic">BDRACH STUDIO</h1>

          {/* Desktop Right */}
          <div className="hidden md:flex uppercase gap-5">
            <Link href="">Contact us</Link>
            <Link href="">Book a call</Link>
          </div>

          {/* Mobile Hamburger */}
          <div
            onClick={() => setOpen(true)}
            className="md:hidden cursor-pointer"
          >
            ☰
          </div>

        </div>
      </motion.div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-center items-center gap-8 text-2xl uppercase"
          >
            <div
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-3xl cursor-pointer"
            >
              ✕
            </div>

            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Projects</Link>
            <Link href="">Services</Link>
            <Link href="">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
