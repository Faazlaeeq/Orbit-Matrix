"use client";

import FadeUp from "@/animations/FadeUp";
import GradientTxt from "../Reusables/GradientTxt";

const expertise = [
    "Digital Strategy",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Enterprise Software",
    "Cloud Solutions",
    "E-commerce",
    "SEO Optimization",
    "Brand Identity",
    "Data Analytics",
    "API Integration",
    "DevOps",
];

export default function Expertise() {
    return (
        <section className="container mx-auto mb-20 px-5 lg:px-20">
            <FadeUp tag="div" className="text-center">
                <GradientTxt
                    tagName="h6"
                    txt="OUR EXPERTISE"
                    className="mb-4 text-center text-[22px] font-bold"
                />
                <h2 className="mx-auto mb-10 max-w-[800px] text-center text-[28px] font-bold leading-[120%] tracking-[0.5px] lg:text-[45px]">
                    Technologies & Skills We Master
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {expertise.map((item, index) => (
                        <span
                            key={index}
                            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </FadeUp>
        </section>
    );
}
