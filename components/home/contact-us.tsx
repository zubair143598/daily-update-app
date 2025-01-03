import Image from "next/image";
import ContactFormClient from "./contact-form";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row max-w-[1440px] md:mx-auto px-4 sm:px-6 py-12 md:py-20 text-white"
    >
      <div className="md:w-[40%] mb-6 flex flex-col items-center">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-menda text-[1.3rem] font-medium text-transparent md:text-4xl text-center">
          Let&apos;s <br className="md:block hidden"/>Connect
        </h2>
        <div  data-aos="fade-up"  className="md:flex flex-col justify-center gap-y-2 h-full content-center  hidden">
          <div>
            <Link
              href="mailto: marketing@luminate.com"
              className="flex items-center"
              target="blank"
            >
              <Image
                src="/images/icons/mail-outline.svg"
                alt="Email"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[20px] hover:text-forest-400">marketing@lumunate.com</span>
            </Link>
          </div>
          <div>
            <Link
              href="tel: +923361000001"
              className="flex items-center"
              target="blank"
            >
              <Image
                src="/images/icons/phone-flip.svg"
                alt="Phone"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[20px] hover:text-forest-400">+92 3361000001</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="https://wa.me/+923310200888"
              className="flex items-center"
              target="blank"
            >
              <Image
                src="/images/icons/whatsapp.svg"
                alt="Whatsapp"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[20px] hover:text-forest-400">+92 3310200888</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/icons/location-pin.svg"
              alt="Location"
              className="mr-4"
              width={24}
              height={24}
            />
            <span className="text-[20px]">Islamabad, Pakistan</span>
          </div>
        </div>
      </div>
      <div className="md:w-[60%]">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda font-medium text-transparent text-[30px] md:block hidden">
          Let&apos;s Collaborate to Create Something Extraordinary
        </h2>
        <ContactFormClient/>
      </div>
      <div data-aos="fade-up" className="flex flex-col justify-center flex-wrap  mt-4 gap-y-2 h-full content-center  md:hidden">
          <div>
            <Link
              href="mailto: marketing@luminate.com"
              className="flex items-center"
              target="blank"
            >
              <Image
                src="/images/icons/mail-outline.svg"
                alt="Email"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[20px] hover:text-forest-400">marketing@lumunate.com</span>
            </Link>
          </div>
          <div>
            <Link
              href="tel: +923361000001"
              className="flex items-center"
              target="blank"
            >
              <Image
                src="/images/icons/phone-flip.svg"
                alt="Phone"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[20px] hover:text-forest-400">+92 3361000001</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="https://wa.me/+923310200888"
              className="flex items-center"
              target="blank"
            >
              <Image
                src="/images/icons/whatsapp.svg"
                alt="Whatsapp"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[20px] hover:text-forest-400">+92 3310200888</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/icons/location-pin.svg"
              alt="Location"
              className="mr-4"
              width={24}
              height={24}
            />
            <span className="text-[20px]">Islamabad, Pakistan</span>
          </div>
        </div>
    </div>
  );
}