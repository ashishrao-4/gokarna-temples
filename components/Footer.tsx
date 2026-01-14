"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-charcoal text-gray-300 pt-16 pb-32 md:pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1">
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">Gokarna Temples</h2>
                        <p className="mb-6 leading-relaxed text-gray-400 text-sm">
                            Dedicated to providing authentic Vedic rituals for the peace of your ancestors and prosperity of your family in the holy grounds of Gokarna.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-saffron hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-saffron hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-saffron hover:text-white transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 font-serif tracking-wider">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/#poojas" className="hover:text-saffron transition-colors hover:pl-2">Pooja Services</Link></li>
                            <li><Link href="/#benefits" className="hover:text-saffron transition-colors hover:pl-2">Why Us</Link></li>
                            <li><Link href="/#location" className="hover:text-saffron transition-colors hover:pl-2">How to Reach</Link></li>
                            <li><Link href="/#priest" className="hover:text-saffron transition-colors hover:pl-2">About Guruji</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 font-serif tracking-wider">Rituals in Gokarna</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/narayana-bali-pooja-gokarna" className="hover:text-saffron transition-colors hover:pl-2">Narayana Bali</Link></li>
                            <li><Link href="/pitru-dosha-pooja-gokarna" className="hover:text-saffron transition-colors hover:pl-2">Pitru Dosha Pooja</Link></li>
                            <li><Link href="/nag-bali-sarpa-dosha-gokarna" className="hover:text-saffron transition-colors hover:pl-2">Nag Bali / Sarpa Dosha</Link></li>
                            <li><Link href="/pitru-dosha-pooja-gokarna" className="hover:text-saffron transition-colors hover:pl-2">Tripindi Shradh</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 font-serif tracking-wider">Contact Info</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="text-saffron shrink-0 mt-1" size={18} />
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Call Us</div>
                                    <a href="tel:+919663828936" className="text-white font-bold hover:text-saffron text-lg block">+91 96638 28936</a>
                                    <span className="text-xs text-green-500">Available 6 AM - 10 PM</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-saffron shrink-0 mt-1" size={18} />
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Email Us</div>
                                    <a href="mailto:gokarnatemples@gmail.com" className="text-white hover:text-saffron">gokarnatemples@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-saffron shrink-0 mt-1" size={18} />
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Location</div>
                                    <span>Car Street, Near Mahabaleshwar Temple, Gokarna, Karnataka</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2025 Gokarna Temples. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
