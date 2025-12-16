"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Poojas", href: "#poojas" },
        { name: "Benefits", href: "#benefits" },
        { name: "How to Reach", href: "#location" },
        { name: "Guruji", href: "#priest" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <span className={`text-2xl font-serif font-bold ${isScrolled ? "text-saffron" : "text-white"}`}>
                            Gokarna Temples
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium hover:text-saffron transition-colors ${isScrolled ? "text-charcoal" : "text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919663828936"
                            className="bg-saffron hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg"
                        >
                            <Phone size={18} />
                            <span>Call Now</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-charcoal"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? "text-charcoal" : "text-white"} size={28} />
                        ) : (
                            <Menu className={isScrolled ? "text-charcoal" : "text-white"} size={28} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-serif text-charcoal"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+919663828936"
                                className="bg-saffron text-white py-3 rounded-xl font-bold text-lg flex justify-center items-center gap-2 mt-4"
                            >
                                <Phone size={20} />
                                Call Guruji Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
