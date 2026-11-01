import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import heroBg from "../images/koti 1.jpg";
import TrackedLink from "@/components/TrackedLink";
import ScrollCue from "@/components/ScrollCue";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background image: static for LCP */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src={heroBg}
                        alt="Gokarna Temple"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 100vw"
                        placeholder="blur"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-charcoal/90 z-10" />
            </div>

            <div className="relative z-20 container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pt-24 pb-36 md:pb-24">
                <div>
                    {/* Plain eyebrow set between hairlines, like a printed title page;
                        no pill badge. */}
                    <p className="flex items-center justify-center gap-4 mb-5 text-white/85 text-xs md:text-sm font-serif tracking-[0.25em] uppercase">
                        <span aria-hidden="true" className="h-px w-8 md:w-12 bg-gold/70" />
                        Independent Vedic Rituals &middot; Gokarna
                        <span aria-hidden="true" className="h-px w-8 md:w-12 bg-gold/70" />
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight drop-shadow-lg text-white">
                        Narayana Bali Pooja in <br className="hidden md:block" />
                        <span className="text-saffron">Gokarna</span>
                        <span className="text-2xl md:text-4xl block mt-3 font-serif font-normal text-white/85">For the peace of your ancestors</span>
                    </h1>
                </div>

                <div className="relative max-w-2xl mx-auto mb-5">
                    <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed drop-shadow-md">
                        <span className="text-saffron font-bold">Pitru Dosha</span> and <span className="text-saffron font-bold">Narayana Bali</span> rituals by experienced Vedic pandits in Gokarna.
                    </p>
                </div>

                {/* Call CTA renders visible from first paint (no entrance animation) */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4">
                    <TrackedLink
                        href="tel:+919663828936"
                        className="btn-primary group"
                    >
                        <Phone size={24} className="fill-current" />
                        <span>Call Guruji Now</span>
                    </TrackedLink>
                    <a
                        href="#poojas"
                        className="btn-secondary group"
                    >
                        <span>View Services</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <p className="mt-4 max-w-md px-4 text-xs text-gray-400/90">
                    Note: We are an independent Vedic ritual service in Gokarna, not the official Mahabaleshwar Temple.
                </p>

                <p className="mt-8 text-sm text-gray-400">
                    Guruji speaks Kannada, Telugu, Hindi and Marathi on the phone.
                </p>
            </div>

            <ScrollCue href="#poojas" />
        </section>
    )
}
