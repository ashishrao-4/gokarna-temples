"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Bus, Train, Plane } from "lucide-react";
import Image from "next/image";

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
                                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
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
                                    <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
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
                                    <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
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
                                    href="https://maps.app.goo.gl/f9jaW8H4w4aJdFyNA"
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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1930.9719244671592!2d74.3184742!3d14.5452037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe83d377ddbb57%3A0xed891f7b6776b07a!2sG8V9%2BXC4%2C%20Dandebagh%2C%20Gokarna%2C%20Karnataka%20581326!5e0!3m2!1sen!2sin!4v1765800193073!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                            <p className="font-bold text-charcoal flex items-center gap-1">
                                <MapPin size={16} className="text-saffron" />
                                Mahabaleshwar Temple
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Car St, Gokarna, Karnataka 581326</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
