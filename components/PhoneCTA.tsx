"use client";

import { Phone, MessageCircle } from "lucide-react";
import { gtag_report_conversion } from "@/lib/gtag";

export default function PhoneCTA() {
    // Always visible on mobile, including at scroll position 0 — the fold must
    // never be without a tappable call target.
    return (
        <div className="fixed bottom-4 inset-x-4 z-50 flex gap-3 md:hidden">
            <a
                href="https://wa.me/919663828936"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtag_report_conversion(undefined, "whatsapp")}
                className="flex-1 bg-green-500 text-white py-3 rounded-xl shadow-lg font-bold flex justify-center items-center gap-2"
            >
                <MessageCircle size={20} />
                WhatsApp
            </a>
            <a
                href="tel:+919663828936"
                onClick={() => gtag_report_conversion(undefined, "call")}
                className="flex-1 bg-saffron text-white py-3 rounded-xl shadow-lg font-bold flex justify-center items-center gap-2"
            >
                <Phone size={20} className="fill-current" />
                Call Guruji
            </a>
        </div>
    );
}
