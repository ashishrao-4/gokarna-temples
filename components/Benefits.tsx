"use client";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Heart, Sun, MapPin } from "lucide-react";

const benefits = [
    { icon: Shield, title: "Authentic Gokarna Temple Traditions", desc: "Rituals performed exactly as prescribed in the holy scriptures without shortcuts." },
    { icon: Users, title: "20+ Years of Vedic Experience", desc: "Our priests have 20+ years of experience and come from a traditional Gokarna lineage." },
    { icon: Heart, title: "Complete Family Guidance", desc: "We ensure specific prayers are offered for your name, gotra, and ancestors with full support." },
    { icon: Sun, title: "Expert in Narayana Bali", desc: "Specialized knowledge in performing Narayana Bali and Pitru Dosha Nivarana correctly." },
    { icon: Clock, title: "Punctual & Systematic", desc: "We value your time. Rituals start on time and are conducted with proper procedure." },
    { icon: MapPin, title: "Prime Sacred Location", desc: "Our facility is located at the spiritual heart of Gokarna, offering a divine atmosphere." },
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4"
                    >
                        Why Choose Our Gokarna Pooja Services?
                    </motion.h2>
                    <p className="text-gray-600">Expert guidance for Narayana Bali, Pitru Dosha, and Nag Bali ceremonies.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-cream border border-gray-100 hover:border-saffron/20 transition-all hover:shadow-lg group"
                        >
                            <div className="bg-white p-4 rounded-full shadow-sm h-fit text-saffron group-hover:bg-saffron group-hover:text-white transition-colors">
                                <b.icon size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-charcoal mb-2 font-serif">{b.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
