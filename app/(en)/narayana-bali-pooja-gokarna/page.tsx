import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, Info, ArrowRight, Users, Flame } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';
import PageJsonLd from '@/components/PageJsonLd';
import TrackedLink from '@/components/TrackedLink';
import ScrollCue from '@/components/ScrollCue';
import { siteMetadata } from '@/lib/metadata';
import narayanaBali from '@/images/koti 2.jpg';

export const metadata: Metadata = {
    title: { absolute: 'Narayana Bali Pooja in Gokarna: Process, Cost, Dates' },
    description: "Narayana Bali pooja at Koti Teertha, Gokarna: a one-day ritual with all samagri arranged. Guruji guides the vidhi and muhurta. Call +91 96638 28936.",
    alternates: {
        canonical: '/narayana-bali-pooja-gokarna',
    },
    openGraph: {
        ...siteMetadata.openGraph,
        title: 'Narayana Bali Pooja in Gokarna: Process, Cost, Dates',
        description: "Narayana Bali pooja at Koti Teertha, Gokarna: a one-day ritual with all samagri arranged. Guruji guides the vidhi and muhurta. Call +91 96638 28936.",
        url: '/narayana-bali-pooja-gokarna',
    },
};

// Single source for the visible FAQ section and the FAQPage structured data.
const faqs = [
    {
        q: 'On which days can Narayana Bali be done?',
        a: 'Ideally performed on Amavasya, Purnima, or specialized muhurtas. Guruji will check the panchang and suggest the best date.',
    },
    {
        q: 'How many family members should attend?',
        a: 'The main Karta (performer) must attend. Other family members can participate. It is good if the whole family attends for collective blessings.',
    },
    {
        q: 'Can I do Narayana Bali if I live abroad?',
        a: 'Yes, if you cannot travel, Sankalpa can be done in your name. However, for Narayana Bali, Guruji recommends the family attend in person at Gokarna wherever possible, as the karta traditionally performs the rites.',
    },
    {
        q: 'How is the dakshina for Narayana Bali decided?',
        a: 'There is no fixed package. The dakshina depends on the number of pandits involved and any additional rites such as Tripindi Shradh performed along with it. Guruji tells you the amount openly on the phone, and there are no hidden charges.',
    },
    {
        q: 'How long does Narayana Bali take?',
        a: 'Narayana Bali is completed in one day at Koti Teertha in Gokarna. Guruji tells you the starting time when he confirms the date.',
    },
    {
        q: 'Who should perform Narayana Bali?',
        a: 'A close family member of the person who passed away sits as the karta and performs the rites, with Guruji guiding every step. Other family members can attend.',
    },
    {
        q: 'Where in Gokarna is Narayana Bali performed?',
        a: 'At Koti Teertha, the sacred tank in Gokarna close to the Mahabaleshwar temple, where ancestral rites have traditionally been performed.',
    },
    {
        q: 'Do we need to bring anything for the pooja?',
        a: 'No. All the samagri is arranged at Koti Teertha itself. If anything specific is needed for your family, Guruji tells you well in advance.',
    },
    {
        q: 'Are there any food rules before Narayana Bali?',
        a: 'On the day before the pooja, avoid non-vegetarian food, onion and garlic.',
    },
    {
        q: 'Where can we stay in Gokarna?',
        a: 'You are free to stay anywhere in Gokarna. If you cannot find a place or are unsure, ask Guruji and he will share the numbers of a few stays.',
    },
    {
        q: 'What is the difference between Narayana Bali and Tripindi Shradh?',
        a: 'Narayana Bali is done for a family member who passed away suddenly, by accident or in other untimely circumstances. Tripindi Shradh is generally done for ancestors of the last three generations whose rites may have been missed. Guruji suggests which one your family needs after hearing your situation.',
    },
    {
        q: 'Which languages can we speak to Guruji in?',
        a: 'Guruji Balachandra Prasad has over 20 years of experience in these rituals and speaks Kannada, Telugu, Hindi and Marathi, apart from English, so families can discuss the vidhi comfortably in their own language.',
    },
];

export default function NarayanaBaliPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <PageJsonLd
                path="/narayana-bali-pooja-gokarna"
                name="Narayana Bali Pooja in Gokarna"
                description="Narayana Bali pooja at Koti Teertha, Gokarna: a one-day ritual with all samagri arranged. Guruji guides the vidhi and muhurta. Call +91 96638 28936."
                faqs={faqs}
            />
            <Header />

            {/* HERO SECTION - Full Background Image */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={narayanaBali}
                        alt="Koti Teertha tank at Gokarna, where ancestral rites are performed"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="100vw"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal/90 z-10" />
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white pt-32 pb-36 md:pb-24">
                    <div className="animate-in fade-in zoom-in duration-700 space-y-6 max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-4 rounded-full bg-saffron/20 border border-saffron/50 text-saffron font-bold text-sm tracking-widest uppercase backdrop-blur-sm">
                            Vedic Remedy for Ancestral Peace
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg text-white">
                            Narayana Bali Pooja in <span className="text-saffron">Gokarna</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
                            Narayana Bali Pooja in Gokarna for the departed soul, performed by experienced pandits as prescribed in shastra.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <TrackedLink
                                href="tel:+919663828936"
                                className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                            >
                                <Phone size={24} className="fill-current" />
                                Call Guruji: +91 96638 28936
                            </TrackedLink>
                            <TrackedLink
                                href="https://wa.me/919663828936?text=Namaste%20Guruji,%20I%20want%20to%20perform%20Narayana%20Bali%20in%20Gokarna.%20Please%20guide."
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Booking
                            </TrackedLink>
                        </div>
                        <p className="text-sm text-gray-300">
                            No fixed packages. Guruji tells you the dakshina openly on the call.
                        </p>
                    </div>
                </div>
                <ScrollCue href="#who-should" />
            </section>

            {/* WHO SHOULD PERFORM - Clean layout without extra image */}
            <section id="who-should" className="py-20 bg-white">
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
                            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-all hover:border-stone-300">
                                <div className="mt-1 bg-saffron/10 p-2 rounded-full text-saffron shrink-0">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <p className="text-gray-700 font-medium text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <TrackedLink href="tel:+919663828936" className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                            Unsure if this is right for you? Talk to Guruji <ArrowRight size={20} />
                        </TrackedLink>
                    </div>
                </div>
            </section>

            {/* HOW IT HAPPENS - Abstract background */}
            <section className="py-20 bg-cream relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
                        How Narayana Bali Pooja Happens in Gokarna
                    </h2>
                    <p className="text-charcoal/80 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                        The ritual commences with a <span className="font-bold text-charcoal">Sankalpa</span> (sacred vow) at Koti Teertha, taken by a close family member of the departed as the karta.
                        It involves invoking Lord Narayana to liberate the soul. The process includes <span className="font-bold text-charcoal">Homa</span>, offering of Pindas (Pind Daan),
                        and final prayers for the soul&apos;s ascension. Where Sarpa Dosha is also indicated in the family, the{' '}
                        <Link href="/nag-bali-sarpa-dosha-gokarna" className="text-saffron font-bold hover:underline">Nag Bali pooja</Link>{' '}
                        is performed along with it as Nag-Narayana Bali. For ancestors who passed away naturally, the{' '}
                        <Link href="/pitru-dosha-pooja-gokarna" className="text-saffron font-bold hover:underline">Pitru Dosha pooja and Tripindi Shradh</Link>{' '}
                        are usually advised instead.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
                        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-saffron/20 flex-1 transform transition hover:-translate-y-1">
                            <h3 className="font-bold text-2xl text-saffron mb-3 flex items-center gap-3">
                                <Calendar size={28} /> Duration
                            </h3>
                            <p className="text-charcoal font-medium">
                                Completed in one day. Guruji tells you the starting time when he confirms the date. Many families choose the{' '}
                                <Link href="/pitru-paksha-gokarna" className="text-saffron hover:underline">Pitru Paksha fortnight</Link> for it.
                            </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-saffron/20 flex-1 transform transition hover:-translate-y-1">
                            <h3 className="font-bold text-2xl text-saffron mb-3 flex items-center gap-3">
                                <Info size={28} /> Location
                            </h3>
                            <p className="text-charcoal font-medium">Koti Teertha, the sacred tank in Gokarna close to the Mahabaleshwar temple.</p>
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
                    {/* Distinct icons, left aligned. Three identical check-marks in three
                        identical circles is the row every generated page ships with. */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { Icon: Users, title: "Expert Pandits", desc: "Experienced Gokarna pandits from traditional lineage proficient in Narayana Bali Vidhi." },
                            { Icon: Flame, title: "Complete Samagri", desc: "All pooja items (samagri) are arranged at Koti Teertha itself, so your family does not need to carry anything." },
                            { Icon: Calendar, title: "Muhurtha Guidance", desc: "Selection of best dates based on your family details." }
                        ].map(({ Icon, title, desc }) => (
                            <div key={title} className="border-t-2 border-saffron/30 pt-6">
                                <Icon className="text-saffron mb-4" size={28} strokeWidth={1.5} />
                                <h3 className="font-bold text-xl text-charcoal mb-3">{title}</h3>
                                <p className="text-gray-600 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BEFORE YOU COME */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-4">
                        Before You Come to Gokarna
                    </h2>
                    <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
                        What families usually ask Guruji before travelling for Narayana Bali.
                    </p>
                    <dl className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                        {[
                            { term: "Plan for one day", detail: "The pooja is completed in a single day at Koti Teertha. Guruji confirms the date and starting time on the call." },
                            { term: "Nothing to carry", detail: "All samagri is provided at Koti Teertha. If your family needs to bring anything specific, Guruji tells you beforehand." },
                            { term: "Food the day before", detail: "Avoid non-vegetarian food, onion and garlic on the day before the pooja." },
                            { term: "Where to stay", detail: "Stay anywhere you like in Gokarna. If you are unsure, ask Guruji and he will share the numbers of a few stays." },
                        ].map(({ term, detail }) => (
                            <div key={term} className="border-l-2 border-saffron/40 pl-5">
                                <dt className="font-bold text-lg text-charcoal mb-1">{term}</dt>
                                <dd className="text-gray-700 leading-relaxed">{detail}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* COST SECTION - Simplified */}
            <section className="py-20 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-black"></div>
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Dakshina & Cost Details</h2>
                    <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                        Dakshina for Narayana Bali varies based on the number of pandits involved
                        and any additional rituals like Tripindi Shradh performed along with it.
                    </p>

                    <div>
                        <TrackedLink href="tel:+919663828936" className="inline-block bg-saffron hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-colors shadow-md">
                            Call Guruji for Estimate
                        </TrackedLink>
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
                        {faqs.map((faq) => (
                            <details key={faq.q} className="group bg-stone-50 p-6 rounded-xl border border-gray-100 open:bg-white open:border-stone-200 transition-all cursor-pointer">
                                <summary className="font-bold text-lg text-charcoal list-none flex justify-between items-center outline-none">
                                    {faq.q}
                                    <span className="group-open:rotate-180 transition-transform text-saffron">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <PhoneCTA />
        </main>
    );
}
