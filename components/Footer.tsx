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
                        <div className="space-y-6 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-saffron shrink-0 mt-1" size={18} />
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Address</div>
                                    <div className="text-gray-300 leading-relaxed">
                                        <p>Car Street, Near Mahabaleshwar Temple</p>
                                        <p>Gokarna, Kumta Taluk</p>
                                        <p>Uttara Kannada District</p>
                                        <p>Karnataka 581326, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="text-saffron shrink-0 mt-1" size={18} />
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Phone</div>
                                    <a href="tel:+919663828936" className="text-white font-bold hover:text-saffron text-lg block">+91 96638 28936</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-1 rounded bg-green-500 text-white shrink-0 mt-0.5">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.968.572 2.011.876 3.109.876l.004-.001c3.181 0 5.768-2.587 5.768-5.765 0-1.535-.598-2.99-1.688-4.085s-2.545-1.689-4.088-1.689zm10.05 15.603l-3.713-.972c-1.243.677-2.653 1.034-4.103 1.034h-.009c-4.482 0-8.139-3.659-8.141-8.142-.001-2.176.845-4.221 2.384-5.759 1.588-1.588 3.633-2.386 5.761-2.387 4.479.001 8.134 3.66 8.134 8.14.001 2.175-.844 4.14-2.316 5.679l-.026.027.026-.002zm-10.06-19.775c-5.592.001-10.142 4.551-10.144 10.143 0 1.79.467 3.539 1.355 5.071l-1.441 5.263 5.385-1.411c1.472.8 3.129 1.22 4.843 1.221h.007c5.592 0 10.146-4.554 10.146-10.143 0-5.592-4.554-10.144-10.151-10.144z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">WhatsApp</div>
                                    <a href="https://wa.me/919663828936" className="text-white hover:text-saffron block">Chat on WhatsApp</a>
                                </div>
                            </div>

                            <div className="text-xs text-green-500 flex items-center gap-2 border-t border-white/10 pt-4 mt-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Available: 6:00 AM - 10:00 PM (7 days)
                            </div>
                        </div>
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
