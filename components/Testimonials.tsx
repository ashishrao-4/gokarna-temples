"use client";

import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        location: "Telangana",
        text: "The Narayana Bali puja at Gokarna brought immense peace to our family. Guruji's guidance was very authentic and the sankalpa was done properly.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sneha Sharma",
        location: "Bangalore",
        text: "Very systematic and divine experience. The arrangement was perfect and performed with great devotion. Highly recommended.",
        rating: 5,
    },
    {
        id: 3,
        name: "Amit Patel",
        location: "Mysore",
        text: "I was facing career obstacles due to Pitru Dosha. After performing the puja here, I felt a distinct positive change in my professional life.",
        rating: 5,
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-deep-blue text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white"
                    >
                        Devotee Experiences
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-200"
                    >
                        Trusted by thousands of families for ancestral peace.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors relative"
                        >
                            <Quote className="absolute top-6 right-6 text-saffron/30 rotate-180" size={48} />
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-gold fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-200 mb-8 italic leading-relaxed text-lg">"{t.text}"</p>
                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-saffron bg-saffron/20 flex items-center justify-center">
                                    <User size={30} className="text-saffron" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">{t.name}</div>
                                    <div className="text-sm text-blue-300">{t.location}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
