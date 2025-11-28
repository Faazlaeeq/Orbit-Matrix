"use client";

import FadeUp from "@/animations/FadeUp";
import CountUp from "react-countup";

const stats = [
    {
        num: 95,
        suffix: "%",
        text: "Success Rate",
    },
    {
        num: 50,
        suffix: "+",
        text: "Happy Clients",
    },
    {
        num: 100,
        suffix: "+",
        text: "Projects Delivered",
    },
    {
        num: 5,
        suffix: "+",
        text: "Years of Experience",
    },
];

export default function Stats() {
    return (
        <section className="container mx-auto mb-20 px-5 lg:px-20">
            <FadeUp
                tag="div"
                className="grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm md:grid-cols-4"
            >
                {stats.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center text-center">
                        <h3 className="mb-2 text-4xl font-bold md:text-5xl">
                            <span className="bg-gradient-to-r from-[#6c7fea] to-[#4bff90] bg-clip-text text-transparent">
                                <CountUp end={item.num} duration={2.5} enableScrollSpy />
                                {item.suffix}
                            </span>
                        </h3>
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                            {item.text}
                        </p>
                    </div>
                ))}
            </FadeUp>
        </section>
    );
}
