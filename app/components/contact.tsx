import { Roboto } from "../font";


export default function Contact() {
    return (
        <div>
            <h1 className="text-[5.8rem]">DESIGN SOLUTIONS. -CONTACT US</h1>
            <div className="max-w-365 mx-auto">
                <div className="flex justify-between items-end my-4">
                    <div className="">
                        <p className={`${Roboto.className}`}>23 Design Avenue</p>
                        <p className={`${Roboto.className}`}>Cityscape Heights</p>
                        <p className={`${Roboto.className}`}>Architopia, AR 98765</p>
                        <p className={`${Roboto.className}`}>Philippines</p>
                    </div>
                    <div className="">
                        <p className={`${Roboto.className}`}>+63 934 1234 222</p>
                        <p className={`${Roboto.className}`}>bdarch@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}