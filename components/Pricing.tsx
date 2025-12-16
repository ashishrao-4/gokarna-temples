"use client";

import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";

const packages = [
    {
        name: "Samuhik Seva",
        price: "₹15,000",
        description: "Group ritual performed with other families. Good for general peace.",
        features: ["Group Sankalpa", "Basic Homa Rituals", "Priest Dakshina Included", "Basic Prasadam"],
        recommended: false
    },
    {
        name: "Vishesh Seva",
        price: "₹25,000",
        description: "Individual dedicated ritual for your family only. Recommended for optimal results.",
        features: ["Individual Family Sankalpa", "Elaborate Homa", "Daan & Dakshina Included", "Special Prasadam", "Photo/Video Updates"],
        recommended: true
    },
    {
        name: "Maha Kumbh Seva",
        price: "₹45,000",
        description: "Complete dosha nivaran with multiple senior priests and poor feeding.",
        features: ["Exclusive Sankalpa", "Maha Homa (3 Priests)", "Annadanam (10 people)", "Brief Stay Assistance", "Live Video Call Option"],
        recommended: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4"
                    >
                        Transparent Dakshina
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600"
                    >
                        No hidden costs. Choose a seva package that suits your needs.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 border hover:shadow-2xl transition-all duration-300 flex flex-col ${pkg.recommended ? "border-saffron shadow-xl md:scale-110 z-10 ring-4 ring-saffron/10" : "border-gray-200"}`}
                        >
                            {pkg.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-saffron text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold font-serif text-charcoal mb-2">{pkg.name}</h3>
                            <div className="text-4xl font-bold text-saffron mb-4">{pkg.price}</div>
                            <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8 h-16">{pkg.description}</p>

                            <div className="space-y-4 mb-8 flex-1">
                                {pkg.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className={`p-1 rounded-full ${pkg.recommended ? "bg-saffron/10" : "bg-gray-100"}`}>
                                            <Check className={`${pkg.recommended ? "text-saffron" : "text-gray-400"}`} size={16} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="tel:+919663828936"
                                className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${pkg.recommended ? "bg-saffron text-white hover:bg-orange-600 shadow-lg shadow-saffron/30 hover:scale-105" : "bg-gray-100 text-charcoal hover:bg-gray-200"}`}
                            >
                                <Phone size={18} className={pkg.recommended ? "fill-current" : ""} />
                                Book Now
                            </a>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-gray-400 text-sm mt-12">* Prices may include puja materials, priest dakshina, and venue charges.</p>
            </div>
        </section>
    );
}
