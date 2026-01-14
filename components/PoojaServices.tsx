"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import narayanaBali from "../images/narayana-bali.jpg";
import tripindiShradh from "../images/tripindi1.jpg";
import nagabali from "../images/sarpadosha.jpg";
import pitruDoshaNivarana from "../images/pitrudosh.jpg";

const poojas = [
    {
        id: 1,
        title: "Narayana Bali Puja",
        description: "Essential for liberation from ancestral curses (Pitru Dosha) and unnatural deaths.",
        image: narayanaBali,
        benefits: ["Peace for ancestors", "Remove sudden obstacles", "Restore family harmony"],
        link: "/narayana-bali-pooja-gokarna"
    },
    {
        id: 2,
        title: "Tripindi Shradh",
        description: "A powerful remedy to satisfy unsatisfied souls of the last 3 generations.",
        image: tripindiShradh,
        benefits: ["Resolve marriage delays", "Improve health issues", "Career stability"],
        link: "/pitru-dosha-pooja-gokarna"
    },
    {
        id: 3,
        title: "Nag Bali Samskara",
        description: "Cleansing of Sarpa Dosha and Naga Dosha for health, fertility, and peace.",
        image: nagabali,
        benefits: ["Resolve child birth issues", "Cure skin diseases", "Mental peace"],
        link: "/nag-bali-sarpa-dosha-gokarna"
    },
    {
        id: 4,
        title: "Pitrudosha Nivarana",
        description: "A spiritual ritual performed remove the negative influence of Pitru Dosha",
        image: pitruDoshaNivarana,
        benefits: ["Ancestral peace", "Family blessings", "Dosha relief"],
        link: "/pitru-dosha-pooja-gokarna"
    }
];

export default function PoojaServices() {
    return (
        <section id="poojas" className="py-20 bg-cream">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">Our Sacred Vedic Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Performed with strict adherence to Vedic scriptures by experienced Gokarna priests.</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {poojas.map((pooja, index) => (
                        <motion.div
                            key={pooja.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group/card"
                        >
                            <Link href={pooja.link} className="relative h-56 w-full overflow-hidden block">
                                <motion.div
                                    className="w-full h-full relative"
                                    animate={{ scale: [1, 1.1] }}
                                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                >
                                    <Image
                                        src={pooja.image}
                                        alt={pooja.title}
                                        fill
                                        className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80"></div>
                                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold font-serif shadow-black drop-shadow-md group-hover/card:text-saffron transition-colors">{pooja.title}</h3>
                            </Link>
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">{pooja.description}</p>

                                <div className="space-y-3 mb-8 flex-1">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Benefits</h4>
                                    {pooja.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-charcoal font-medium">
                                            <div className="mt-1 bg-green-100 rounded-full p-0.5">
                                                <Check size={12} className="text-green-600" />
                                            </div>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href={pooja.link} className="w-full mt-auto bg-white hover:bg-saffron hover:text-white text-charcoal font-semibold py-3 rounded-xl border-2 border-saffron/20 hover:border-saffron transition-all flex justify-center items-center gap-2 group">
                                    View Details
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
