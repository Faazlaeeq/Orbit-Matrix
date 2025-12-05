"use client";

import FadeUp from "@/animations/FadeUp";
import GradientTxt from "../Reusables/GradientTxt";
import CustomBtn from "../Reusables/CustomBtn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Ecommerce",
    "Digital Marketing",
];

const pricingData: Record<string, any[]> = {
    "Web Development": [
        {
            name: "Starter",
            price: "$200",
            description: "Ideal for small businesses and startups.",
            features: [
                "Custom Design (5 Pages)",
                "Mobile Responsive",
                "Contact Form Integration",
                "Basic SEO Setup",
                "1 Month Support",
            ],
            highlight: false,
        },
        {
            name: "Professional",
            price: "$999",
            description: "For growing businesses needing more features.",
            features: [
                "Custom Design (10 Pages)",
                "CMS Integration",
                "Blog Setup",
                "Advanced SEO",
                "Speed Optimization",
                "3 Months Support",
            ],
            highlight: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Complex solutions for large organizations.",
            features: [
                "Unlimited Pages",
                "Custom Functionality",
                "API Integrations",
                "Database Design",
                "Priority Support",
                "Dedicated Manager",
            ],
            highlight: false,
        },
    ],
    "Mobile App": [
        {
            name: "MVP",
            price: "$799",
            description: "Get your app idea to market quickly.",
            features: [
                "iOS or Android",
                "Basic Features",
                "Standard UI Design",
                "2 Months Support",
            ],
            highlight: false,
        },
        {
            name: "Growth",
            price: "$1499",
            description: "Full-featured app for scaling businesses.",
            features: [
                "iOS & Android (Cross-platform)",
                "Advanced Features",
                "Custom UI/UX",
                "Push Notifications",
                "Analytics Integration",
                "6 Months Support",
            ],
            highlight: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Native performance and complex logic.",
            features: [
                "Native Development",
                "Complex Backend",
                "Real-time Features",
                "Advanced Security",
                "Dedicated Team",
                "12 Months Support",
            ],
            highlight: false,
        },
    ],
    "UI/UX Design": [
        {
            name: "Basic",
            price: "$199",
            description: "Essential design for small projects.",
            features: [
                "User Research",
                "Wireframing",
                "Visual Design",
                "Prototyping",
                "Design System",
            ],
            highlight: false,
        },
        {
            name: "Advanced",
            price: "$799",
            description: "Comprehensive design for complex products.",
            features: [
                "In-depth Research",
                "User Testing",
                "Advanced Prototyping",
                "Interaction Design",
                "Developer Handoff",
                "Design Audit",
            ],
            highlight: true,
        },
    ],
    "Ecommerce": [

        {
            name: "Shopify",
            price: "$399",
            description: "Quick and reliable online store.",
            features: [
                "Theme Customization",
                "Product Upload (up to 50)",
                "Payment Gateway Setup",
                "App Integrations",
                "Training Session",
            ],
            highlight: false,
        },
        {
            name: "Premium Store",
            price: "$899",
            description: "A polished, scalable store with advanced features.",
            features: [
                "Premium Theme Setup",
                "Product Upload (up to 150)",
                "Custom Sections & Layouts",
                "Advanced Payment & Shipping Setup",
                "Conversion-Optimized Design",
                "Essential Marketing Integrations",
            ],
            highlight: false,
        },

        {
            name: "Custom Store",
            price: "$1999",
            description: "Tailored e-commerce experience.",
            features: [
                "Custom Design",
                "WooCommerce/Magento",
                "Advanced Filtering",
                "Inventory Management",
                "SEO Optimization",
                "Marketing Tools",
            ],
            highlight: true,
        },
    ],
    "Digital Marketing": [
        {
            name: "SEO Starter",
            price: "$499/mo",
            description: "Boost your organic visibility.",
            features: [
                "Keyword Research",
                "On-page Optimization",
                "Technical Audit",
                "Monthly Reporting",
                "Content Strategy",
            ],
            highlight: false,
        },
        {
            name: "Visibility Boost",
            price: "$749/mo",
            description: "Stronger reach with multi-channel support.",
            features: [
                "Enhanced SEO",
                "Basic Social Media Management",
                "Content Calendar",
                "Landing Page Optimization",
                "Bi-weekly Reporting",
            ],
            highlight: false,
        },

        {
            name: "Growth Pack",
            price: "$999/mo",
            description: "Comprehensive marketing solution.",
            features: [
                "Advanced SEO",
                "Social Media Management",
                "PPC Campaign Setup",
                "Email Marketing",
                "Conversion Optimization",
                "Weekly Reporting",
            ],
            highlight: true,
        },
    ],
};

export default function Pricing() {
    const [activeTab, setActiveTab] = useState("Web Development");

    return (
        <section className="container mx-auto mb-20 px-5 lg:px-20">
            <FadeUp tag="div" className="text-center">
                <GradientTxt
                    tagName="h6"
                    txt="PRICING PLANS"
                    className="mb-4 text-center text-[22px] font-bold"
                />
                <h2 className="mx-auto mb-10 max-w-[800px] text-center text-[28px] font-bold leading-[120%] tracking-[0.5px] lg:text-[45px]">
                    Choose the Right Plan for You
                </h2>

                {/* Tabs */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${activeTab === category
                                ? "bg-gradient-to-r from-[#6c7fea]  to-[#6c3fea] text-white shadow-lg shadow-blue-500/30"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
                    <AnimatePresence mode="wait">
                        {pricingData[activeTab]?.map((plan, index) => (
                            <motion.div
                                key={`${activeTab}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm transition-all hover:-translate-y-2 ${plan.highlight
                                    ? "border-[#6c7fea] bg-[#6c7fea]/10 shadow-lg shadow-[#6c7fea]/20"
                                    : "border-white/10 bg-white/5 hover:border-[#6c7fea]/50"
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#6c7fea] px-4 py-1 text-xs font-bold text-white">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3 className="mb-2 text-2xl font-bold text-white text-left">{plan.name}</h3>
                                <div className="mb-4 text-3xl font-bold bg-gradient-to-r from-[#5cd9fc] to-[#6c7fea] bg-clip-text text-transparent text-left">
                                    {plan.price}
                                </div>
                                <p className="mb-8 text-sm text-gray-400 text-left">{plan.description}</p>
                                <ul className="mb-8 flex-1 space-y-4 text-left">
                                    {plan.features.map((feature: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <svg
                                                className="h-5 w-5 flex-shrink-0 text-[#6c7fea]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <CustomBtn
                                    txt="Get Started"
                                    className={`w-full ${plan.highlight ? "bg-[#6c7fea] hover:bg-[#6c7fea]/80" : ""
                                        }`}
                                    href="/contact"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </FadeUp>
        </section>
    );
}
