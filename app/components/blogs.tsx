import Link from "next/link";
import { Roboto } from "../font";
import Image from "next/image";

export default function BlogPage() {
    return (
        <div className="my-10">
            <div className="flex justify-between">
                <h1 className={`${Roboto.className} tracking-wider my-2`}>INSIGHT & STORIES</h1>
                <Link href="" className={`${Roboto.className} hover:underline transition-all tracking-wider my-2`}>VIEW ALL BLOGS🡕</Link>
            </div>
            <div className="border-t border-gray-400 pt-8">
                <div className="">
                    <h1 className="text-[2.8rem] leading-none text-justify">
                        Navigating the world <br /> of architecture
                    </h1>
                    <p className={`${Roboto.className} mt-4`}>Explore emerging trends, technologies, and visionary <br /> concepts shaping the dynamic landscape of design <br /> and construction</p>
                </div>
            </div>
            <div className="flex justify-between relative h-[80vh] w-full items-end">
                <div className="h-[65vh] w-80 relative">
                    <Image src="/images/32ed3284d24ae75cc2f560c90d116628.jpg" fill alt="" className="object-cover"/>
                </div>
                <div className=" flex flex-col gap-4">
                    <div className="h-[45vh] w-2xl relative">
                        <Image src="/images/32ed3284d24ae75cc2f560c90d116628.jpg" fill alt="" className="object-cover"/>
                    </div>
                    <div className=" bg-white">
                        <div className="flex justify-between">
                            <h1 className={`${Roboto.className} text-xl font-semibold w-1/3`}>The Allure of Wodden-Clad Homes</h1>
                            <Link href="" className={`${Roboto.className} underline`}>Unique House</Link>
                        </div>
                        <p className={`${Roboto.className} text-gray-400`}>10 hours ago</p>
                    </div>
                </div>
                <div className="h-[80vh] w-110 relative">
                    <Image src="/images/32ed3284d24ae75cc2f560c90d116628.jpg" fill alt="" className="object-cover"/>
                </div>
            </div>
        </div>
    );
}