import { Phone } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

export default function PriestBio() {
    return (
        <section id="priest" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div
                    className="flex flex-col md:flex-row items-center gap-12 bg-cream rounded-3xl p-8 md:p-12 border border-stone-200 overflow-hidden relative"
                >
                    {/* Guruji does not want a photograph of himself on the site. A plain
                        shloka panel stands in — no emoji, no blurred colour orbs. */}
                    <div className="w-full md:w-1/3 flex justify-center md:block">
                        <div className="aspect-[3/4] w-full max-w-sm rounded-2xl border border-gold/40 bg-charcoal flex flex-col items-center justify-center p-8 text-center">
                            <p className="text-3xl font-serif text-gold leading-relaxed">
                                धर्मो रक्षति रक्षितः
                            </p>
                            <div className="w-12 h-px bg-gold/40 my-6" />
                            <p className="text-base font-serif italic text-white/70">
                                Dharmo Rakshati Rakshitah
                            </p>
                            <p className="mt-3 text-sm text-white/50 leading-relaxed">
                                Dharma protects those who protect it
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 relative z-10">
                        <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-2 block">Your Family Priest</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">Balachandra Prasad</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            A Vedic priest from a traditional Gokarna lineage, Guruji specializes in Pitru Karya and Narayana Bali rituals, guiding families through them for over 20 years. He explains each step clearly and helps your family understand the right ritual for your ancestors&apos; peace.
                        </p>

                        <dl className="mb-10 divide-y divide-gray-100 border-y border-gray-100">
                            <div className="flex gap-6 py-3">
                                <dt className="w-32 shrink-0 text-sm text-gray-500">From</dt>
                                <dd className="text-charcoal">Gokarna, traditional parampara lineage</dd>
                            </div>
                            <div className="flex gap-6 py-3">
                                <dt className="w-32 shrink-0 text-sm text-gray-500">Experience</dt>
                                <dd className="text-charcoal">Over 20 years of Pitru Karya and Narayana Bali</dd>
                            </div>
                            <div className="flex gap-6 py-3">
                                <dt className="w-32 shrink-0 text-sm text-gray-500">Speaks</dt>
                                <dd className="text-charcoal">Kannada, Telugu, Hindi, Marathi, English</dd>
                            </div>
                        </dl>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <TrackedLink
                                href="tel:+919663828936"
                                className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                            >
                                <Phone size={20} />
                                Talk to Guruji Directly
                            </TrackedLink>
                            <p className="text-gray-500 text-sm">
                                Calls taken 6 AM to midnight.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
