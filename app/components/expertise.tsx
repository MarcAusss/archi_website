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
                <div className="grid grid-cols-[0.8fr_2fr_0.8fr] grid-rows-3">

                    <div className="col-start-1 row-start-1 border border-black">div1</div>
                    <div className="col-start-1 row-start-2 border border-black">div2</div>
                    <div className="col-start-1 row-start-3 border border-black">div3</div>

                    <div className="col-start-2 row-start-1 row-span-3 border border-black">div4</div>

                    <div className="col-start-3 row-start-1 border border-black">div5</div>
                    <div className="col-start-3 row-start-2 border border-black">div6</div>
                    <div className="col-start-3 row-start-3 border border-black">div7</div>

                </div>

            </div>
        </div>
    );
}