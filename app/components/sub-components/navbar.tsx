import { Roboto } from "@/app/font";
import Link from "next/link";



export default function NavBar() {
    return (
        <div className="max-w-365 relative mx-auto">
            <div className="fixed top-0 w-365 py-3">
                <div className="flex justify-between items-center">
                    <nav className="flex gap-5 uppercase font-normal">
                        <Link href="" className={Roboto.className}>Home</Link>
                        <Link href="" className={Roboto.className}>About</Link>
                        <Link href="" className={Roboto.className}>Projects</Link>
                        <Link href="" className={Roboto.className}>Services</Link>
                    </nav>
                    <div className="italic">
                        <h1 className="">BDRACH STUDIO</h1>
                    </div>
                    <div className="flex uppercase gap-5 font-normal">
                        <Link href="" className={Roboto.className}>Contact us</Link>
                        <Link href="" className={Roboto.className}>book a call</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}