import { Roboto } from "@/app/font";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  return (
    <div className="mt-20">

      <div className="max-w-365 mx-auto mb-4 px-5 md:px-0">
        <div className={`${Roboto.className} flex flex-col md:flex-row justify-between gap-6`}>

          <p>©2026 BDARCH STUDIO. All Rights Reserved</p>

          <nav className="flex flex-col md:flex-row gap-4 md:gap-10 uppercase">
            <Link href="">About</Link>
            <Link href="">Projects</Link>
            <Link href="">Services</Link>
            <Link href="">CONTACT US</Link>
          </nav>

          <div className="flex gap-4 text-lg">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
          </div>

        </div>
      </div>

      <div className="w-full relative overflow-hidden h-40 md:h-60">
        <Image
          src="/images/Group 93.png"
          fill
          alt=""
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
