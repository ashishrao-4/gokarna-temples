"use client";
import { motion } from "framer-motion";
import { Phone, Award, Star } from "lucide-react";

export default function PriestBio() {
    return (
        <section id="priest" className="py-20 bg-cream">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative"
                >
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-saffron/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <div className="w-full md:w-1/3 relative flex justify-center md:block">
                        <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl w-full max-w-sm bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 flex flex-col items-center justify-center p-8 text-center group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-saffron/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />

                            <div className="relative z-10">
                                <span className="text-9xl text-saffron/20 font-serif select-none group-hover:text-saffron/30 transition-colors duration-500">🕉️</span>
                                <div className="mt-8 space-y-2">
                                    <p className="text-2xl font-serif font-bold text-saffron mb-1">
                                        "धर्मो रक्षति रक्षितः"
                                    </p>
                                    <p className="text-lg font-serif font-bold text-saffron italic">
                                        "Dharmo Rakshati Rakshitah"
                                    </p>
                                    <p className="text-sm text-gray-600 uppercase tracking-widest text-[11px]">
                                        Dharma protects those who protect it
                                    </p>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -bottom-6 right-4 md:-right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center z-20"
                        >
                            <span className="text-3xl font-bold text-saffron">20+</span>
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Years Exp</span>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-2/3 relative z-10">
                        <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-2 block">Head Priest</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">Balachandra Prasad</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            A renowned Vedic scholar from the lineage of Gokarna priests. Acharya ji specializes in Pitru Karya and Narayana Bali rituals, having performed over 10,000 successful pujas. His guidance provides spiritual clarity and effective remedies for your family's well-being.
                        </p>

                        <div className="grid grid-cols-1 gap-6 mb-10">
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                                <Star className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-charcoal">Gokarna Native</h4>
                                    <p className="text-sm text-gray-500">Traditional Parampara Lineage</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:+919663828936" className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-saffron/30">
                                <Phone size={20} />
                                Talk to Guruji Directly
                            </a>
                            <div className="flex items-center gap-2 px-6 py-4 text-gray-500 justify-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Available Now
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
