"use client";

import GradientTxt from "../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";

const services = [
  {
    title: "Digital Strategy & Consulting",
    description: "We help businesses navigate the digital landscape with data-driven strategies and expert consulting.",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006517.png", // Placeholder icon
    lists: ["Digital Transformation", "IT Consulting", "Business Analysis", "Roadmap Planning"],
  },
  {
    title: "Custom Web Development",
    description: "Tailored web solutions that drive growth, from simple landing pages to complex web applications.",
    icon: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    lists: ["React & Next.js", "E-commerce Platforms", "CMS Development", "Progressive Web Apps"],
  },
  {
    title: "Mobile App Solutions",
    description: "Native and cross-platform mobile applications designed for seamless user experiences.",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png",
    lists: ["iOS Development", "Android Development", "Flutter & React Native", "App Maintenance"],
  },
  {
    title: "UI/UX Design & Branding",
    description: "Creating intuitive interfaces and compelling brand identities that resonate with your audience.",
    icon: "https://cdn-icons-png.flaticon.com/512/1260/1260111.png",
    lists: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems"],
  },
  {
    title: "Enterprise Software",
    description: "Scalable and secure software solutions to optimize your business operations and workflows.",
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
    lists: ["Cloud Solutions", "API Integration", "SaaS Development", "Legacy Modernization"],
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to boost your online visibility and drive conversions.",
    icon: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
    lists: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Strategy"],
  },
];

export default function Services() {
  return (
    <section id="services" className="mb-[80px]">
      <FadeUp tag="div" className="mb-16">
        <GradientTxt
          tagName="h6"
          txt="SERVICES"
          className="mb-4 text-center text-[22px] font-bold"
        />
        <h2 className="mx-auto mb-10 max-w-[800px] text-center text-[28px] font-bold leading-[120%] tracking-[0.5px] lg:text-[45px]">
          Building Your Digital Ecosystem for Performance, Presence, and Profit.
        </h2>
      </FadeUp>

      <FadeUp
        tag="div"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#6c7fea]/50 hover:bg-white/10">
            {/* <Image
              width={70}
              height={70}
              src={service.icon}
              alt={service.title}
              className="mb-6"
            /> */}
            {/* Using a placeholder div for icon if image fails or to keep style consistent without external images if preferred */}
            <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#6c7fea] to-[#4bff90] p-4 opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>

            <h6 className="mb-4 text-[22px] font-bold leading-[110%] text-white">
              {service.title}
            </h6>
            <p className="mb-6 leading-[24px] text-gray-400">
              {service.description}
            </p>
            <ul className="flex flex-col gap-3">
              {service.lists.map((list, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#6c7fea]"></div>
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}

