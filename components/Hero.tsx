"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, ArrowRight, Info } from "lucide-react";
import heroBg from "../images/koti 1.jpg";
import { sendGTMEvent } from "@/lib/gtag";

export default function Hero() {
    const [serviceIndex, setServiceIndex] = useState(0);
    const services = ['Pitru Dosha Puja', 'Narayana Bali Puja', 'Tripindi Shradh Puja'];

    useEffect(() => {
        const timer = setInterval(() => {
            setServiceIndex((prev) => (prev + 1) % services.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] w-full pb-10 overflow-hidden">
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
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-saffron/20 border border-saffron/50 text-saffron font-bold text-sm tracking-wide uppercase">
                            Official Gokarna Vedic Services
                        </span>
                        <div className="flex items-center gap-2 bg-green-900/40 backdrop-blur-sm border border-green-500/30 px-3 py-1 rounded-full">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Available Now for Call</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight drop-shadow-lg text-white">
                        Narayana Bali Pooja in <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
                            Gokarna
                        </span> <span className="text-3xl md:text-5xl block mt-2 font-serif text-white/90">| Ancestral Peace & Moksha</span>
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-4xl mx-auto mb-6 p-4"
                >
                    <p className="text-lg md:text-xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        Experience authentic <span className="text-saffron font-bold">Pitru Dosha remedies</span> and <span className="text-saffron font-bold">Narayana Bali rituals</span> performed by experienced Vedic pandits in sacred Gokarna.
                    </p>
                    <p className="mt-4 text-sm text-gray-400 bg-black/40 inline-block px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
                        Note: We are an independent Vedic ritual service in Gokarna, not the official Mahabaleshwar Temple.
                    </p>
                </motion.div>




                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
                >
                    <a
                        href="tel:+919663828936"
                        onClick={() => {
                            if ((window as any).gtag) sendGTMEvent('click', 'contact', 'hero_call_now');
                        }}
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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 flex justify-center gap-8 text-sm text-gray-400"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        10+ Pujas performed everyday
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-gold">★ 4.9/5</span> Trusted by 10k+ Devotees
                    </div>
                </motion.div>
            </div>
        </section >
    )
}
