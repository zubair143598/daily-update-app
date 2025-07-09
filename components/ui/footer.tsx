import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative footer bg-cover bg-center flex justify-center w-full overflow-hidden h-44 md:h-48">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-[1440px] w-full px-6 py-6 sm:py-0 sm:px-6 relative">
          <div className="flex h-full md:justify-between justify-center md:gap-x-0 gap-x-2 items-center">
            <div className=" md:w-[33%] h-full justify-between md:justify-center flex flex-col">
              <div>
                <ul className="inline-flex gap-[6px]">
                  <li>
                    <Link
                      className="flex items-center justify-center text-forest-500 transition hover:text-forest-400"
                      href="#0"
                      aria-label="LinkedIn"
                    >
                      <Image
                        src="/images/icons/linkedin.svg"
                        alt="Lumunate Footer - LinkedIn"
                        className="md:mr-4 mr-1 md:!w-[24px]"
                        width={22}
                        height={22}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center justify-center text-forest-500 transition hover:text-forest-400"
                      href="#0"
                      aria-label="Twitter"
                    >
                      <Image
                        src="/images/icons/x(twitter).svg"
                        alt="Lumunate Footer - X"
                        className="md:mr-4 mr-1 md:!w-[24px]"
                        width={22}
                        height={22}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center justify-center text-forest-500 transition hover:text-forest-400"
                      href="#0"
                      aria-label="instagram"
                    >
                      <Image
                        src="/images/icons/insta.svg"
                        alt="Lumunate Footer - instagram"
                        className="md:mr-4 mr-1 md:!w-[24px]"
                        width={22}
                        height={22}
                      />
                    </Link>
                  </li>
                </ul>
                <div className="md:block hidden">
                <p className="font-raleway text-[10px] md:text-[14px] font-light text-[#BABABA]">
                  Copyright ® Lumunate 2024
                </p>
              </div>
              </div>
              <div className="md:hidden flex flex-col justify-center items-center">
                <div>
                  <Link href='/'>
                  <Image
                    src={"/WORD MARK-04.png"}
                    width={160}
                    height={1}
                    alt="Lumunate Footer - Lumunate logo"
                    className="object-center !w-[160px] md:!w-[350px]"
                    />
                    </Link>
                </div>
                <div className="flex gap-x-[3px] w-full md:gap-x-3 justify-start">
                  <Link
                    href="/terms-of-service"
                    className="text-[8px] md:text-[11px] hover:text-forest-400 text-[#BABABA]"
                  >
                    Terms of Service
                  </Link>
                  <div className="w-[0.5px] h-[8px] mt-[2px] bg-[#BABABA]"></div>
                  <Link
                    href="/privacy-policy"
                    className="text-[8px] md:text-[11px] hover:text-forest-400 text-[#BABABA]"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="md:hidden block">
                <p className="font-raleway text-[10px] md:text-[12px] font-light text-[#BABABA]">
                  Copyright ® Lumunate 2024
                </p>
              </div>
            </div>
            <div className="md:w-[33%] w-[50%] hidden md:flex flex-col justify-center items-center">
              <div>
                 <Link href='/'>
                <Image
                  src={"/WORD MARK-04.png"}
                  width={350}
                  height={1}
                  alt="Lumunate Footer - Lumunate logo"
                  className="object-center !w-[125px] md:!w-[350px]"
                  />
                  </Link>
              </div>
              <div className="flex gap-x-[2px] md:gap-x-3 justify-center">
                <Link
                  href="/terms-of-service"
                  className="text-[8px] md:text-[14px] hover:text-forest-400 text-[#BABABA]"
                >
                  Terms of Service
                </Link>
                <div className="w-[1px] h-auto bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>
                <Link
                  href="/privacy-policy"
                  className="text-[8px] md:text-[14px] hover:text-forest-400 text-[#BABABA]"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="md:w-[33%] w-[50%] flex flex-col items-end">
                <div className="flex flex-col md:ml-0 ml-1 justify-center h-full content-center gap-y-[6px] text-[#BABABA]">
                  <div>
                    <Link
                      href="mailto: marketing@luminate.com"
                      className="flex items-center"
                    >
                      <Image
                        src="/images/icons/mail-outline.svg"
                        alt="Lumunate Footer - Email"
                        className="md:mr-4 mr-3 md:!w-[24px]"
                        width={18}
                        height={18}
                      />
                      <span className="text-[12px] hover:text-forest-400">
                        marketing@lumunate.com
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="tel: +923361000001"
                      className="flex items-center"
                    >
                      <Image
                        src="/images/icons/phone-flip.svg"
                        alt="Lumunate Footer - Phone"
                        className="md:mr-4 mr-3  md:!w-[24px]"
                        width={18}
                        height={18}
                      />
                      <span className="text-[12px] hover:text-forest-400">
                        +92 3361000001
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href="https://wa.me/+923310200888"
                      className="flex items-center"
                    >
                      <Image
                        src="/images/icons/whatsapp.svg"
                        alt="Lumunate Footer - Whatsapp"
                        className="md:mr-4 mr-3 md:!w-[24px]"
                        width={18}
                        height={18}
                      />
                      <span className="text-[12px] hover:text-forest-400">
                        +92 3310200888
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-start">
                    <Image
                      src="/images/icons/location-pin.svg"
                      alt="Lumunate Footer - Location"
                      className="md:mr-4 mr-3 md:!w-[24px]"
                      width={18}
                      height={18}
                    />
                    <span className="md:text-[12px] text-[10px] leading-4 md:leading-4">
                      Office # 2, 3rd Floor, Plaza 74, Bahria<br className="md:block hidden"/> Springs (North) Commercial, Bahria<br className="md:block hidden"/> Town Phase 7, Rawalpindi, Pakistan
                    </span>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
