import { Roboto } from "../font";

export default function LandingPage() {
    return (
        <div className="mt-20">
            <div className="flex justify-between">
                <h1 className="font-semibold text-6xl uppercase leading-18">Designing Spaces, <br /> Inspire Lives</h1>
                <div className="flex flex-col justify-between">
                    <h1 className={Roboto.className}>©2026 BDARCH STUDIO, All Rights Reserved</h1>
                    <h1 className={Roboto.className}>
                        Architects of inspirational environments, we redefine <br />
                        spaces, creating environments that inspire, uplift, and <br />
                        enhance the human experience
                    </h1>
                </div>
            </div>
            
        </div>
    );
}