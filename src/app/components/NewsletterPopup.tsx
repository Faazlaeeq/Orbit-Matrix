"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewsletterPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSubscribed = localStorage.getItem("newsletter_subscribed");
            if (!hasSubscribed) {
                setIsVisible(true);
            }
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

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
                localStorage.setItem("newsletter_subscribed", "true");
                setIsVisible(false);
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
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-5 right-5 z-50 w-[90%] max-w-md rounded-xl border border-gray-700 bg-black/90 p-6 shadow-2xl backdrop-blur-md md:bottom-10 md:right-10"
                >
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute right-4 top-4 text-gray-400 hover:text-white"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <h3 className="mb-2 text-xl font-bold text-white">
                        Join our Newsletter
                    </h3>
                    <p className="mb-4 text-sm text-gray-300">
                        We provide 3-months free access to our new product to our every newsletter joinee.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg bg-gradient-to-r from-[#6c7fea] to-[#5eccff] px-4 py-2 font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
                        >
                            {loading ? "Joining..." : "Get Free Access"}
                        </button>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
