import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, Info, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';
import narayanaBali from '../../images/narayana-bali.jpg';

export const metadata: Metadata = {
    title: 'Narayana Bali Pooja in Gokarna | Pitru Dosha Remedy by Experienced Pandits',
    description: 'Book Narayana Bali pooja in Gokarna with traditional Vedic pandits. Authentic Pitru Karya, detailed guidance, complete arrangements for your family.',
};

export default function NarayanaBaliPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <Header />

            {/* HERO SECTION - Full Background Image */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={narayanaBali}
                        alt="Narayana Bali Pooja Setup"
                        fill
                        className="object-cover"
                        priority
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal/90 z-10" />
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white pt-32 pb-20">
                    <div className="animate-in fade-in zoom-in duration-700 space-y-6 max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-4 rounded-full bg-saffron/20 border border-saffron/50 text-saffron font-bold text-sm tracking-widest uppercase backdrop-blur-sm">
                            Vedic Remedy for Ancestral Peace
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg text-white">
                            Narayana Bali Pooja in <span className="text-saffron">Gokarna</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
                            Experience relief from Pitru Dosha and unnatural deaths in the family.
                            Performed by experienced Vedic Pandits at the holy grounds of Gokarna.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <a
                                href="tel:+919663828936"
                                className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,153,51,0.4)]"
                            >
                                <Phone size={24} className="fill-current" />
                                Call Guruji Now
                            </a>
                            <a
                                href="https://wa.me/919663828936?text=Namaste%20Guruji,%20I%20want%20to%20perform%20Narayana%20Bali%20in%20Gokarna.%20Please%20guide."
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Booking
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO SHOULD PERFORM - Clean layout without extra image */}
            <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-12">
                        Who Should Perform Narayana Bali?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {[
                            "Family history of unnatural or sudden deaths",
                            "Repeated obstacles in career, marriage, or health",
                            "Advice from family elders or spiritual guides",
                            "Experiencing bad dreams or sensing presence of ancestors",
                            "Lack of peace and harmony in the household"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-all hover:border-orange-200">
                                <div className="mt-1 bg-saffron/10 p-2 rounded-full text-saffron shrink-0">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <p className="text-gray-700 font-medium text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <a href="tel:+919663828936" className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                            Unsure if this is right for you? Talk to Guruji <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* HOW IT HAPPENS - Abstract background */}
            <section className="py-20 bg-saffron/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
                        How Narayana Bali Pooja Happens in Gokarna
                    </h2>
                    <p className="text-charcoal/80 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                        The ritual commences with a <span className="font-bold text-charcoal">Sankalpa</span> (sacred vow) at the holy river banks or designated Mukti Sthala.
                        It involves invoking Lord Narayana to liberate the soul. The process includes <span className="font-bold text-charcoal">Homa</span>, offering of Pindas (Pind Daan),
                        and final prayers for the soul's ascension.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
                        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-saffron/20 flex-1 transform transition hover:-translate-y-1">
                            <h3 className="font-bold text-2xl text-saffron mb-3 flex items-center gap-3">
                                <Calendar size={28} /> Duration
                            </h3>
                            <p className="text-charcoal font-medium">Typically 1 day ritual (sometimes 2 days based on severity). Usually starts early morning.</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-saffron/20 flex-1 transform transition hover:-translate-y-1">
                            <h3 className="font-bold text-2xl text-saffron mb-3 flex items-center gap-3">
                                <Info size={28} /> Location
                            </h3>
                            <p className="text-charcoal font-medium">Private ritual grounds near the main temple or sacred water bodies in Gokarna.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE ARRANGE */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                        What We Arrange for Your Family
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Expert Pandits", desc: "Experienced Gokarna pandits from traditional lineage proficient in Narayana Bali Vidhi." },
                            { title: "Complete Samagri", desc: "All organic and scripturally correct pooja items (Samagri) arranged by us." },
                            { title: "Muhurtha Guidance", desc: "Selection of best dates based on your family details." }
                        ].map((item, i) => (
                            <div key={i} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 text-center hover:shadow-xl transition-all hover:bg-orange-50/50 hover:border-orange-100 group">
                                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <Check className="text-saffron" size={32} />
                                </div>
                                <h3 className="font-bold text-xl text-charcoal mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COST SECTION - Simplified */}
            <section className="py-20 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-black"></div>
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Dakshina & Cost Details</h2>
                    <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                        Dakshina for Narayana Bali varies based on number of days,
                        number of pandits involved, and any additional rituals like Tripindi Shradh performed along with it.
                    </p>

                    <div>
                        <a href="tel:+919663828936" className="inline-block bg-saffron hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,153,51,0.3)]">
                            Call Guruji for Estimate
                        </a>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                        Families Who Found Peace
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-700 relative">
                            <span className="text-6xl text-saffron/20 absolute top-4 left-4 font-serif">"</span>
                            <p className="relative z-10 text-lg">We were very worried about our family issues. Guruji guided us for Narayana Bali perfectly. The pooja was done with great devotion.</p>
                            <div className="mt-6 font-bold not-italic text-charcoal flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-saffron"></span> Rajesh Kumar, Bangalore
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-700 relative">
                            <span className="text-6xl text-saffron/20 absolute top-4 left-4 font-serif">"</span>
                            <p className="relative z-10 text-lg">Arrangements were excellent. Panditji explained every step of the Narayana Bali pooja. We felt very light and peaceful afterwards.</p>
                            <div className="mt-6 font-bold not-italic text-charcoal flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-saffron"></span> Sharma Family, Mumbai
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-charcoal text-center mb-12">
                        Narayana Bali FAQ
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-orange-50 open:border-orange-100 transition-all cursor-pointer">
                            <summary className="font-bold text-lg text-charcoal list-none flex justify-between items-center outline-none">
                                On which days can Narayana Bali be done?
                                <span className="group-open:rotate-180 transition-transform text-saffron">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Ideally performed on Amavasya, Purnima, or specialized muhurtas. Guruji will check the panchang and suggest the best date.
                            </p>
                        </details>
                        <details className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-orange-50 open:border-orange-100 transition-all cursor-pointer">
                            <summary className="font-bold text-lg text-charcoal list-none flex justify-between items-center outline-none">
                                How many family members should attend?
                                <span className="group-open:rotate-180 transition-transform text-saffron">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                The main Karta (performer) must attend. Other family members can participate. It is good if the whole family attends for collective blessings.
                            </p>
                        </details>
                        <details className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-orange-50 open:border-orange-100 transition-all cursor-pointer">
                            <summary className="font-bold text-lg text-charcoal list-none flex justify-between items-center outline-none">
                                Can I do Narayana Bali if I live abroad?
                                <span className="group-open:rotate-180 transition-transform text-saffron">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Yes, if you cannot travel, Sankalpa can be done in your name. However, for Narayana Bali, physical presence is highly recommended for maximum benefit if possible.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            <Footer />
            <PhoneCTA />
        </main>
    );
}
