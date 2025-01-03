"use client";

import useMasonry from "@/utils/useMasonry";
import Image from "next/image";
import flagsLinks from "./flags/Flags";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function useIsDesktopOrAbove() {
    const [isDesktopOrAbove, setIsDesktopOrAbove] = useState(window.innerWidth >= 1024);
  
    useEffect(() => {
      const handleResize = () => {
        setIsDesktopOrAbove(window.innerWidth >= 1024);
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isDesktopOrAbove;
  }

const testimonials = [
  {
    clientImg: '/images/logos/map-mavens.png',
    name: "Henry",
    company: "CEO Map Mavens",
    flag: flagsLinks.usa,
    content:
      "Lumunate helped us turn our concept for a customizable maps platform into a reality. Their team designed an intuitive interface, made everything editable in the interface and ensured a flawless user experience.We’ve received rave reviews from our users and the app has seen tremendous growth since its launch.Will be back for future upgrades!",
      h:36,
      w:38,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/dify.png',
    name: "Luc Elsby",
    company: "Dify.AI",
    flag:flagsLinks.uk,
    content:
      "Working with the team at Lumunate, in software development, was an excellent experience. As always they went above and beyond, to deliver quality outputs for us, providing post-deployment support. Very proactive communication and a deep understanding, making the whole process smooth and enjoyable!",
      w:60,
      h:38,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/fast-clean.png',
    name: "Felicio",
    company: "CEO Fast CLean Service",
    flag:flagsLinks.netherlands,
    content:
      "Lumunate helped us turn our concept for a customizable maps platform into a reality. Their team designed an intuitive interface, made everything editable in the interface and ensured a flawless user experience. We’ve received rave reviews from our users and the app has seen tremendous growth since it s launch. Will be back for future upgrades!",
      w:70,
      h:38,
      invertProp:"",

  },
  {
    clientImg: '/images/logos/real-outlet.png',
    name: "Ivavisocka",
    company: "CEO The Real Outlet",
    flag:flagsLinks.latvia,
    content:
      "“The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!",
      w:52,
      h:36,
      invertProp:"filter invert",
  },
  {
    clientImg: '/images/logos/zeal.png',
    name: "Nir",
    company: "",
    flag:flagsLinks.peru,
    content:
      "The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!",
      w:28,
      h:36,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/active-campaign.png',
    name: "Ofirsilbiger",
    company: "",
    flag:flagsLinks.sweden,
    content:
      "“Quite proactive with communication, great attention to detail and very prompt with delivering the final project. 5 stars, would certainly recommend",
      w:120,
      h:36,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/audiodrome.png',
    name: "Dave Newell",
    company: "",
    flag:flagsLinks.usa,
    content:
      "They were great! Took time to understand what I needed, quickly worked to deliver the project for me and then worked with me to make a few revisions to get it exactly how I wanted it. I will definitely work with them again and recommend them to anyone looking for reliable and excellent work",
      w:122,
      h:36,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/legacy-distrubuting.png',
    name: "Katelyn",
    company: "Legacy Distributing",
    flag:flagsLinks.usa,
    content:
      "Fantastic job! Was very easy to get this project done and I will definitely use them for future needs, time and time again. Wonderful experience.",
      w:50,
      h:36,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/koinfolio.png',
    name: "Ebrahim",
    company: "CEO Koinfolio",
    flag:flagsLinks.germany,
    content:
      "The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!",
      w:96,
      h:21,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/ace-my-exam.png',
    name: "Asma",
    company: "CEO Acemyexam",
    flag:flagsLinks.uk,
    content:
      "Working with Lumunate was an absolute game-changer for us. We had been struggling with an incomplete app built on Django, and it felt like we’d hit a dead end. The team at Lumunate not only understood our challenges but also took the time to truly grasp our vision. They rebuilt our tutoring platform from the ground up using Next.js, and the difference has been night and day. We couldn’t recommend them more highly!",
      w:110,
      h:36,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/thomas.png',
    name: "Thomas",
    company: "The Marketing Captain",
    flag:flagsLinks.netherlands,
    content:
      "This was a very big project of mine and needed some helpen from them. They’ve done exactly what was needed to get the end result for my marketing agency. Happy with the expertise and knowledge and looking forward to work more with them in the future. Thanks!",
      w:60,
      h:36,
      invertProp:"",
  },
  {
    clientImg: '/images/logos/ayse.png',
    name: "Cathy Charles",
    company: "CEO Ayse",
    flag:flagsLinks.usa,
    content:
      "I highly recommend working with Lumunate! The CEO and his team did a great job with helping me build my mobile application and they are clearly experts in their field. They were very easy to work with, polite, communicated efficiently, were transparent about their process, well-organized and had great time management skills. In fact, often times they completed tasks faster than we agreed upon. If you are looking for a high-quality development team, do not hesitate to use Lumunate’s services.",
      w:103,
      h:32,
      invertProp:"",
  },

];

export default function Testimonials() {
  const isDesktopOrAbove = useIsDesktopOrAbove();
  const masonryContainer = useMasonry();

  return (
    <div id="testimonials" className="mx-auto max-w-[1440px] px-4 sm:px-6">
      {/* Section header */}
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-forest-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-forest-200/50">
            <span className="inline-flex text-[14px] sm:text-[16px] bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              Testimonials
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div>
          {/* Cards */}
          <div
            className="mx-auto max-w-sm items-start gap-x-6 space-x-9 sm:max-w-none "
            ref={masonryContainer}
          >
            <Carousel
              responsive={responsive}
              autoPlay={false}
              autoPlaySpeed={3000}
              infinite={true}
              arrows={true}
              swipeable={true}
              centerMode={isDesktopOrAbove} // Enable center mode
              focusOnSelect={true} // Focus the center item when clicked
              customTransition="transform 300ms ease-in-out"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="group flex h-full sm:w-[640px] w-[358px]"
                >
                  <Testimonial testimonial={testimonial}>
                    {testimonial.content}
                  </Testimonial>
                </div>
              ))}
            </Carousel>
            {/* {testimonials.map((testimonial, index) => (
              <div  data-aos="fade-up" key={index} className="group flex h-full">
                <Testimonial testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  children,
}: {
    testimonial: {
    clientImg: string;
    name: string;
    company: string;
    flag:string;
    content: string;
    w:number;
    h:number;
    invertProp:string;

  };
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] bg-[linear-gradient(88.12deg,rgba(17,39,24,0.48)_3.17%,rgba(33,55,31,0.2304)_52.41%,rgba(17,39,24,0.48)_94.35%)]`}
    >
      <div className="flex flex-col h-full justify-between gap-4">
        <div className=" flex justify-between">
          <div>
          <Image className={testimonial.invertProp} width={testimonial.w} src={testimonial.clientImg} height={testimonial.h} alt="Client logo" />
          </div>
          <div>
          <Image className="rounded-sm mr-1" width={40} src={testimonial.flag} height={20} alt="flag" />
          </div>
          
        </div>
        <p className="text-[#838AA7] before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            { testimonial.company ? <span className="text-gray-700"> - </span>:""}
    <span
      className="text-forest-200/65 transition-colors hover:text-forest-500"
    >
      {testimonial.company}
    </span>
          </div>
        </div>
      </div>
    </article>
  );
}
