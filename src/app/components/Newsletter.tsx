"use client";

import { useState } from "react";
import GradientTxt from "./Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { toast } from "react-toastify";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(data.message);
                setEmail("");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-5 lg:px-20">
                <FadeUp tag="div" className="flex flex-col items-center justify-center text-center">
                    <GradientTxt
                        tagName="h6"
                        txt="Newsletter"
                        className="mb-4 text-[22px] font-bold tracking-[4px]"
                    />
                    <h2 className="mb-8 text-[36px] font-bold leading-[120%] text-white md:text-[50px] xl:text-[54px]">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="mb-10 max-w-2xl text-lg text-gray-400">
                        Stay updated with our latest news, products, and special offers.
                        Get <b>3 months</b> of free access to our new products just by joining our newsletter!
                    </p>

                    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 text-white focus:border-blue-500 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg bg-gradient-to-r from-[#6c7fea] to-[#5eccff] px-8 py-3 font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
                        >
                            {loading ? "Joining..." : "Join"}
                        </button>
                    </form>
                </FadeUp>
            </div>
        </section>
    );
}
