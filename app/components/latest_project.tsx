import Link from "next/link";
import { Roboto } from "../font";
import Image from "next/image";


export default function Latest_projectPage() {
    return (
        <div className="my-10">
            <div className="flex justify-between">
                <h1 className={`${Roboto.className} tracking-wider my-2`}>LATEST PROJECTS</h1>
                <Link href="" className={`${Roboto.className} hover:underline transition-all tracking-wider my-2`}>VIEW ALL PROJECTS 🡕</Link>
            </div>
            <div className="border-t border-gray-400 pt-8 pb-14">
                <div className="w-[70%]">
                    <div className="w-full h-116 relative">
                        <Image  src="/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg" alt="" fill className="object-cover" />
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="">
                            <h1 className={`${Roboto.className} text-xl`}>Kitto Appartments</h1>
                            <p className="text-sm">Manila, Philippines</p>
                        </div>
                        <h1 className={`${Roboto.className} font-semibold`}>2026</h1>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-[35%]">
                        <div className="w-full h-64 relative">
                            <Image  src="/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg" alt="" fill className="object-cover" />
                        </div>
                        <div className="flex justify-between mt-3">
                            <div className="">
                                <h1 className={`${Roboto.className} text-xl`}>Kitto Appartments</h1>
                                <p className="text-sm">Manila, Philippines</p>
                            </div>
                            <h1 className={`${Roboto.className} font-semibold`}>2026</h1>
                        </div>
                    </div>
                    <div className="w-[35%] mt-10">
                        <div className="w-full h-130 relative">
                            <Image  src="/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg" alt="" fill className="object-cover" />
                        </div>
                        <div className="flex justify-between mt-3">
                            <div className="">
                                <h1 className={`${Roboto.className} text-xl`}>Kitto Appartments</h1>
                                <p className="text-sm">Manila, Philippines</p>
                            </div>
                            <h1 className={`${Roboto.className} font-semibold`}>2026</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}