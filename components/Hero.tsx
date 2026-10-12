"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import heroBg from "../images/koti 1.jpg";
import { gtag_report_conversion } from "@/lib/gtag";

export default function Hero() {
    return (
        <section className="relative min-h-[600px] md:min-h-[85vh] w-full pb-8 overflow-hidden">
            {/* Background Image with Parallax & Zoom Effect */}
            {/* Background Image - Optimized for LCP (Static, no motion wrapper) */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src={heroBg}
                        alt="Gokarna Temple"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 100vw"
                        placeholder="blur"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-charcoal/90 z-10" />
            </div>

            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pt-20">
                {/* Main Content - Remove initial opacity:0 for LCP */}
                <div className="animate-in fade-in zoom-in duration-500">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-saffron/20 border border-saffron/50 text-saffron font-bold text-sm tracking-wide uppercase">
                            Independent Vedic Rituals, Gokarna
                        </span>
                        <span className="text-white/80 text-sm">
                            Calls 6 AM &ndash; midnight
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight drop-shadow-lg text-white">
                        Narayana Bali Pooja in <br className="hidden md:block" />
                        <span className="text-saffron">Gokarna</span>
                        <span className="text-2xl md:text-4xl block mt-3 font-serif font-normal text-white/85">For the peace of your ancestors</span>
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-2xl mx-auto mb-5"
                >
                    <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed drop-shadow-md">
                        <span className="text-saffron font-bold">Pitru Dosha</span> and <span className="text-saffron font-bold">Narayana Bali</span> rituals by experienced Vedic pandits in Gokarna.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4"
                >
                    <a
                        href="tel:+919663828936"
                        onClick={() => gtag_report_conversion(undefined, "call")}
                        className="btn-primary group"
                    >
                        <Phone size={24} className="fill-current" />
                        <span>Call Guruji Now</span>
                    </a>
                    <a
                        href="#poojas"
                        className="btn-secondary group"
                    >
                        <span>View Services</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                <p className="mt-4 max-w-md px-4 text-xs text-gray-400/90">
                    Note: We are an independent Vedic ritual service in Gokarna, not the official Mahabaleshwar Temple.
                </p>

                <p className="mt-8 text-sm text-gray-400">
                    Guruji speaks Kannada, Telugu, Hindi and Marathi on the phone.
                </p>
            </div>
        </section >
    )
}
