"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full pb-10">
            {/* Background Image with Zoom Effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="https://images.unsplash.com/photo-1590459389230-01cc9eb40348?q=80&w=2070&auto=format&fit=crop"
                    alt="Gokarna Temple"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-charcoal/90 z-10" />
            </motion.div>

            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-saffron/20 border border-saffron/50 text-saffron font-bold text-sm mb-6 tracking-wide uppercase">
                        Official Gokarna Vedic Services
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                        Experience Divine Relief from <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
                            Ancestral Suffering
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl max-w-2xl mb-10 text-gray-200 leading-relaxed font-light"
                >
                    Authentic Pitru Dosha, Narayana Bali, and Tripindi Shradh Pujas performed by expert Vedic Pandits in the holy grounds of Gokarna in Karnataka.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
                >
                    <a
                        href="tel:+919663828936"
                        className="group bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,153,51,0.4)]"
                    >
                        <Phone size={24} className="fill-current" />
                        <span>Call Guruji Now</span>
                    </a>
                    <a
                        href="#poojas"
                        className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
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
                        20+ Pujas performed today
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-gold">★ 4.9/5</span> Trusted by 10k+ Devotees
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
