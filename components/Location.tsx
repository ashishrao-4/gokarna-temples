"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Bus, Train, Plane } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4"
                    >
                        Visit the Sacred Grounds
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Gokarna is located in the Kumta taluk of Uttara Kannada district in Karnataka.
                        It is a celebrated pilgrimage center and a tourist destination.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 flex items-center gap-2">
                                <MapPin className="text-saffron" />
                                How to Reach
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-cream p-3 rounded-xl text-saffron border border-saffron/15">
                                        <Bus size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-charcoal">By Road</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Well connected by KSRTC buses from Bengaluru (480km), Mangaluru (230km), and Panaji (140km).
                                            NH66 passes close to Gokarna.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-cream p-3 rounded-xl text-saffron border border-saffron/15">
                                        <Train size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-charcoal">By Train</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Gokarna Road (GOK) is the nearest railway station (8km away).
                                            Well connected to Konkan Railway network.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-cream p-3 rounded-xl text-saffron border border-saffron/15">
                                        <Plane size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-charcoal">By Air</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Nearest airport is Goa International Airport (Dabolim - 140km).
                                            Hubballi Airport is about 150km away.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <a
                                    href="https://maps.app.goo.gl/LCcoKXtkdEKj6FEG6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-charcoal text-white hover:bg-black py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-colors"
                                >
                                    <ExternalLink size={20} />
                                    Get Directions on Google Maps
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-xl"
                    >
                        <iframe
                            src="https://www.google.com/maps?q=14.5448794,74.3186305&hl=en&z=16&output=embed"
                            width="100%"
                            height="100%"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700 border-0"
                        ></iframe>
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                            <p className="font-bold text-charcoal flex items-center gap-1">
                                <MapPin size={16} className="text-saffron" />
                                Balachandra Prasad, Gokarna
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Near Mahabaleshwar Temple, Car St, Gokarna, Karnataka 581326</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
