import { Roboto } from "../font";

export default function AboutPage() {
    return (
        <div className="my-10">
            <h1 className={`${Roboto.className} tracking-wider my-2`}>ABOUT US</h1>
            <div className="border-t border-gray-400 pt-8 pb-14">
                <h1 className="text-[2.8rem] leading-none text-justify">
                    <span className="mr-56"> </span>
                    At BDarch Studio, we believe in the transformative power of
                    architecture to shape a better world. We envisiona world where every
                    space, from the smallest detail to the grandest structure. is crafted with
                    purpose, precision, and a touch of inspiration.
                </h1>
            </div>
        </div>
    );
}