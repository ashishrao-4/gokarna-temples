import { ChevronDown } from "lucide-react";

// Bouncing arrow at the foot of a full-screen hero, hinting that the page
// continues. Sits above the mobile PhoneCTA bar (bottom-24 on phones) and
// stays still for visitors who prefer reduced motion.
export default function ScrollCue({ href, label = "Scroll down for more" }: { href: string; label?: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-8 z-20 flex flex-col items-center gap-1 text-white/80 hover:text-saffron transition-colors"
        >
            <span className="text-xs uppercase tracking-widest hidden md:block">Scroll</span>
            <ChevronDown size={36} strokeWidth={1.75} className="motion-safe:animate-bounce" />
        </a>
    );
}
