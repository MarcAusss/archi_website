import Link from "next/link";



export default function NavBar() {
    return (
        <div className="max-w-365 relative mx-auto">
            <div className="fixed top-0 w-365 py-3">
                <div className="flex justify-between items-center">
                    <nav className="flex gap-5 uppercase">
                        <Link href="">Home</Link>
                        <Link href="">About</Link>
                        <Link href="">Projects</Link>
                        <Link href="">Services</Link>
                    </nav>
                    <div className=""></div>
                    <div className="flex uppercase gap-5">
                        <Link href="">Contact us</Link>
                        <Link href="">book a call</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}