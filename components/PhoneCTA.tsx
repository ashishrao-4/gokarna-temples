"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PhoneCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 inset-x-4 z-50 flex gap-3 md:hidden"
                >
                    <a
                        href="https://wa.me/919123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl shadow-lg font-bold flex justify-center items-center gap-2"
                    >
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                    <a
                        href="tel:+919123456789"
                        className="flex-1 bg-saffron text-white py-3 rounded-xl shadow-lg font-bold flex justify-center items-center gap-2 animate-bounce-subtle"
                    >
                        <Phone size={20} className="fill-current" />
                        Call Guruji
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
