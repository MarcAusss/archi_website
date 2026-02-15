import { Roboto } from "../font";

Roboto

export default function TestimonialsPage() {
    return (
        <div className="my-10">
            <div className="flex justify-between">
                <h1 className={`${Roboto.className} tracking-wider my-2`}>LATEST PROJECTS</h1>
                <Link href="" className={`${Roboto.className} hover:underline transition-all tracking-wider my-2`}>VIEW ALL PROJECTS 🡕</Link>
            </div>
            <div className="border-t border-gray-400 pt-8 pb-14">
                
            </div>
        </div>
    );
}