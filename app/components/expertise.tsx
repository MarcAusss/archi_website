import Image from "next/image";
import { Roboto } from "../font";

export default function ExpertisePage() {
    return (
        <div className="my-10">
            <h1 className={`${Roboto.className} tracking-wider my-2`}>OUR EXPERTISE</h1>
            <div className="border-t border-gray-400 pt-8 pb-14">
                <div className="flex justify-between items-end">
                    <h1 className="text-[2.8rem] leading-none text-justify">
                        Where dreams take shape <br /> and every design tells a <br /> unique story.
                    </h1>
                    <div className="flex gap-5">
                        <div className="w-10 h-10 border-black border flex justify-center items-center rounded-full">
                            <h1 className="">⪻</h1>
                        </div>
                        <div className="w-10 h-10 border-black border flex justify-center items-center rounded-full">
                            <h1 className="">⪼</h1>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[0.8fr_2fr_0.8fr] mt-5 grid-rows-3">

                    <div className="col-start-1 row-start-1 flex justify-end">

                    </div>
                    <div className="col-start-1 row-start-2 flex items-center justify-end">
                        
                    </div>
                    <div className="col-start-1 row-start-3 flex items-end justify-end">
                        
                    </div>

                    <div className="col-start-2 row-start-1 h-[62vh] row-span-3 relative w-[2fr]">
                        <Image src="/images/created_with_our_tool_center@2x.webp" alt="" fill className="object-cover"/>
                    </div>

                    <div className="col-start-3 row-start-1">
                        
                    </div>
                    <div className="col-start-3 row-start-2 flex items-center">
                        
                    </div>
                    <div className="col-start-3 row-start-3 flex justify-end flex-col px-5">
                        <h1 className={`${Roboto.className} font-semibold text-xl`}>Residential Design</h1>
                        <p className={`${Roboto.className} text-sm`}>Crafting spaces that seamlessly blen functionality and aesthetics</p>
                    </div>

                </div>

            </div>
        </div>
    );
}