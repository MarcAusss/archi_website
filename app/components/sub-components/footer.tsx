import { Roboto } from "@/app/font";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
    return (
        <div>
            <div className="max-w-365 mx-auto mt-20 mb-4">
                <div className={`${Roboto.className} flex justify-between`}>
                    <p>©2026 BDARCH STUDIO. All Rights Reserved</p>
                    <nav className="flex gap-10 uppercase font-normal">
                        <Link href="" className={Roboto.className}>About</Link>
                        <Link href="" className={Roboto.className}>Projects</Link>
                        <Link href="" className={Roboto.className}>Services</Link>
                        <Link href="" className={Roboto.className}>CONTACT US</Link>
                    </nav>
                    <div className="flex gap-4">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                </div>
            </div>
            <div className="w-full relative overflow-hidden h-60">
                <Image src="/images/Group 93.png" fill alt="" className="object-cover object-top"/>
            </div>
        </div>
    );
}