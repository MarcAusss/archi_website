import { Roboto } from "../font";

export default function Contact() {
  return (
    <div className="mx-5 lg:mx-0 my-16">

      {/* Desktop Heading (unchanged) */}
      <h1 className="hidden md:block text-[5.8rem]">
        DESIGN SOLUTIONS. -CONTACT US
      </h1>

      {/* Mobile Heading */}
      <h1 className="md:hidden text-4xl leading-tight">
        DESIGN SOLUTIONS. <br /> CONTACT US
      </h1>

      <div className="max-w-91.25 md:max-w-365 mx-auto mt-10">

        <div className="flex md:flex-row flex-col justify-between md:items-end gap-10 my-4">

          {/* Address */}
          <div>
            <p className={Roboto.className}>23 Design Avenue</p>
            <p className={Roboto.className}>Cityscape Heights</p>
            <p className={Roboto.className}>Architopia, AR 98765</p>
            <p className={Roboto.className}>Philippines</p>
          </div>

          {/* Contact Info */}
          <div>
            <p className={Roboto.className}>+63 934 1234 222</p>
            <p className={Roboto.className}>bdarch@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  );
}
