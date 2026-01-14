import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, Info, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';
import pitruDoshaNivarana from '../../images/pitrudosh.jpg';

export const metadata: Metadata = {
    title: 'Pitru Dosha Pooja in Gokarna | Ancestral Peace & Remedies',
    description: 'Perform Pitru Dosha Nivarana pooja in Gokarna with traditional Vedic pandits. Remedies for ancestral issues, repeated obstacles, and peace for departed souls.',
};

export default function PitruDoshaPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <Header />

            {/* HERO SECTION - Full Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={pitruDoshaNivarana}
                        alt="Pitru Dosha Pooja Setup"
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
                            Ancestral Peace Rituals
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg text-white">
                            Pitru Dosha Pooja in <span className="text-saffron">Gokarna</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
                            Resolve family obstacles and find peace for your ancestors.
                            Authentic Vedic remedies for Pitru Dosha at the Mukti Sthala of Gokarna.
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
                                href="https://wa.me/919663828936?text=Namaste%20Guruji,%20I%20want%20to%20know%20about%20Pitru%20Dosha%20Pooja%20in%20Gokarna."
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Enquiry
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDICATIONS */}
            <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-12">
                        Indications of Pitru Dosha
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {[
                            "Repeated failures in business or career",
                            "Family disputes and lack of harmony",
                            "Advice from learned elders or pandits",
                            "Delay in marriage or progeny (child birth)",
                            "Chronic health issues without medical reason"
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
                            Consult Guruji for Guidance <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* INFO: NARAYANA BALI VS PITRU DOSHA */}
            <section className="py-16 bg-stone-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-8">
                        Difference Between Narayana Bali & Pitru Dosha Pooja
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-saffron text-left space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <strong>Narayana Bali</strong> is a specific ritual for "unnatural deaths" or severe accidental causes, often considered a prerequisite for Pitru Dosha nivarana in such cases.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <strong>Pitru Dosha Pooja / Tripindi Shradh</strong> is generally performed for "unsatisfied souls" from the last three generations who may have passed naturally but are stuck.
                        </p>
                        <div className="pt-4">
                            <Link href="/narayana-bali-pooja-gokarna" className="text-saffron font-bold hover:underline flex items-center gap-1 text-lg">
                                Learn more about Narayana Bali <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT HAPPENS */}
            <section className="py-20 bg-saffron/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
                        How Pitru Dosha Nivarana is Performed
                    </h2>
                    <p className="text-charcoal/80 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                        The exact procedure (Vidhi) depends on the guidance of the Pandit.
                        Commonly, <span className="font-bold text-charcoal">Tripindi Shradh</span> or <span className="font-bold text-charcoal">Tila Homa</span> is performed.
                        It involves offering pindas to ancestors of father/mother/in-law lineages to satisfy their souls.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
                        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-saffron/20 flex-1 transform transition hover:-translate-y-1">
                            <h3 className="font-bold text-2xl text-saffron mb-3 flex items-center gap-3">
                                <Calendar size={28} /> Timing
                            </h3>
                            <p className="text-charcoal font-medium">Usually takes 3-4 hours. Best performed in the morning hours.</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-saffron/20 flex-1 transform transition hover:-translate-y-1">
                            <h3 className="font-bold text-2xl text-saffron mb-3 flex items-center gap-3">
                                <Info size={28} /> Ritual Type
                            </h3>
                            <p className="text-charcoal font-medium">Peaceful Vedic Homa and Pinda Pradan rituals. Non-intimidating and satvik.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE ARRANGE */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                        What We Arrange
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Vedic Priests", desc: "Qualified pandits to perform the pooja correctly." },
                            { title: "Pooja Samagri", desc: "Fresh flowers, ghee, havan samagri, and pinda materials." },
                            { title: "Consultation", desc: "Pre-pooja guidance on sankalpa and gothra details." }
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
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Cost & Dakshina</h2>
                    <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                        Dakshina varies based on specific rituals advised (e.g. Simple Tila Homa vs Complete Tripindi Shradh).
                    </p>
                    <div>
                        <a href="tel:+919663828936" className="inline-block bg-saffron hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,153,51,0.3)]">
                            Speak to Guruji
                        </a>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                        Devotee Experiences
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-700 relative">
                            <span className="text-6xl text-saffron/20 absolute top-4 left-4 font-serif">"</span>
                            <p className="relative z-10 text-lg">After performing Pitru Dosha pooja in Gokarna, we finally saw progress in our son's marriage proposals. Thank you Guruji.</p>
                            <div className="mt-6 font-bold not-italic text-charcoal flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-saffron"></span> Venkat, Chennai
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-700 relative">
                            <span className="text-6xl text-saffron/20 absolute top-4 left-4 font-serif">"</span>
                            <p className="relative z-10 text-lg">The atmosphere in Gokarna is very powerful. The pandits were very knowledgeable and patient.</p>
                            <div className="mt-6 font-bold not-italic text-charcoal flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-saffron"></span> Amit Verma, Pune
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-charcoal text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-orange-50 open:border-orange-100 transition-all cursor-pointer">
                            <summary className="font-bold text-lg text-charcoal list-none flex justify-between items-center outline-none">
                                How do I know if I have Pitru Dosha?
                                <span className="group-open:rotate-180 transition-transform text-saffron">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Common signs include delay in progeny, constant illness, and money loss. Consulting a family pandit can provide clarity.
                            </p>
                        </details>
                        <details className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-orange-50 open:border-orange-100 transition-all cursor-pointer">
                            <summary className="font-bold text-lg text-charcoal list-none flex justify-between items-center outline-none">
                                Can women perform Pitru Dosha Pooja?
                                <span className="group-open:rotate-180 transition-transform text-saffron">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Yes, women can perform specific rituals or participate along with family. Guruji can guide on the exact Vidhi based on tradition.
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
