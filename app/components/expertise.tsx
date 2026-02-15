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
            </div>
        </div>
    );
}