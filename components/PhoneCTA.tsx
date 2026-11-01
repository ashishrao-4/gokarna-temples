import { Phone, MessageCircle } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

export default function PhoneCTA() {
    // Always visible on mobile, including at scroll position 0 — the fold must
    // never be without a tappable call target.
    return (
        <div className="fixed bottom-4 inset-x-4 z-50 flex gap-3 md:hidden">
            <TrackedLink
                href="https://wa.me/919663828936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white py-3 rounded-xl shadow-lg font-bold flex justify-center items-center gap-2"
            >
                <MessageCircle size={20} />
                WhatsApp
            </TrackedLink>
            <TrackedLink
                href="tel:+919663828936"
                className="flex-1 bg-saffron text-white py-3 rounded-xl shadow-lg font-bold flex justify-center items-center gap-2"
            >
                <Phone size={20} className="fill-current" />
                Call Guruji
            </TrackedLink>
        </div>
    );
}
