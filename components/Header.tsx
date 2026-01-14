"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isTransparent = pathname === "/" && !isScrolled;

    const navLinks = [
        { name: "Poojas", href: "/#poojas" },
        {
            name: "Rituals",
            href: "#",
            submenu: [
                { name: "Narayana Bali", href: "/narayana-bali-pooja-gokarna" },
                { name: "Pitru Dosha", href: "/pitru-dosha-pooja-gokarna" },
                { name: "Nag Bali", href: "/nag-bali-sarpa-dosha-gokarna" },
            ]
        },
        { name: "Benefits", href: "/#benefits" },
        { name: "How to Reach", href: "/#location" },
        { name: "Guruji", href: "/#priest" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!isTransparent ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <span className={`text-2xl font-serif font-bold ${!isTransparent ? "text-saffron" : "text-white"}`}>
                            Gokarna Temples
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`font-medium hover:text-saffron transition-colors flex items-center gap-1 ${!isTransparent ? "text-charcoal" : "text-white"
                                        }`}
                                    onClick={(e) => {
                                        if (link.submenu) e.preventDefault();
                                    }}
                                >
                                    {link.name}
                                    {link.submenu && <ChevronDown size={14} />}
                                </Link>

                                {/* Dropdown */}
                                {link.submenu && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                                        {link.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-3 text-sm text-charcoal hover:bg-orange-50 hover:text-saffron font-medium transition-colors border-b border-gray-50 last:border-0"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
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
                            <X className={!isTransparent ? "text-charcoal" : "text-white"} size={28} />
                        ) : (
                            <Menu className={!isTransparent ? "text-charcoal" : "text-white"} size={28} />
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
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 text-center pb-10">
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

                            <hr className="border-gray-100 my-2" />
                            <div className="flex flex-col gap-4">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Rituals</span>
                                <Link href="/narayana-bali-pooja-gokarna" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-saffron">
                                    Narayana Bali
                                </Link>
                                <Link href="/pitru-dosha-pooja-gokarna" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-saffron">
                                    Pitru Dosha
                                </Link>
                                <Link href="/nag-bali-sarpa-dosha-gokarna" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-saffron">
                                    Nag Bali
                                </Link>
                            </div>

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
