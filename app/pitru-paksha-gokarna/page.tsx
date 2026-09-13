import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';
import TrackedLink from '@/components/TrackedLink';
import { siteMetadata } from '@/lib/metadata';
import tripindiShradh from '../../images/tripindi1.jpg';

export const metadata: Metadata = {
    title: { absolute: 'Pitru Paksha 2026 Puja in Gokarna | Tripindi & Narayana Bali' },
    description: 'Pitru Paksha 2026 (Sep 26 - Oct 10) shraddha in Gokarna: Tripindi, Narayana Bali, Pinda Daan. Call +91 96638 28936 to fix the right day for your family.',
    alternates: {
        canonical: '/pitru-paksha-gokarna',
    },
    openGraph: {
        ...siteMetadata.openGraph,
        title: 'Pitru Paksha 2026 Puja in Gokarna | Tripindi & Narayana Bali',
        description: 'Pitru Paksha 2026 (Sep 26 - Oct 10) shraddha in Gokarna: Tripindi, Narayana Bali, Pinda Daan. Call +91 96638 28936 to fix the right day for your family.',
        url: '/pitru-paksha-gokarna',
    },
};

const WHATSAPP_URL = 'https://wa.me/919663828936?text=Namaste%20Guruji,%20I%20want%20to%20perform%20shraddha%20in%20Gokarna%20during%20Pitru%20Paksha%202026.%20Please%20guide.';

const rituals = [
    {
        title: 'Tripindi Shraddha',
        desc: 'Pinda offerings for ancestors of the last three generations whose rites may have been missed or left incomplete over the years.',
        href: '/pitru-dosha-pooja-gokarna',
        linkText: 'Tripindi & Pitru Dosha details',
    },
    {
        title: 'Narayana Bali',
        desc: 'Performed for family members who passed away suddenly, by accident, or in other untimely circumstances, so that their final rites are properly completed.',
        href: '/narayana-bali-pooja-gokarna',
        linkText: 'About Narayana Bali',
    },
    {
        title: 'Pitru Dosha Nivarana',
        desc: 'For families who have been advised that unresolved ancestral karma is affecting them. Guruji suggests the appropriate vidhi after hearing your situation.',
        href: '/pitru-dosha-pooja-gokarna',
        linkText: 'About Pitru Dosha Pooja',
    },
    {
        title: 'Pinda Daan & Tarpana',
        desc: 'The core offerings of rice pindas, sesame and water made for departed parents and ancestors. Often combined with Nag Bali where Sarpa Dosha is also indicated.',
        href: '/nag-bali-sarpa-dosha-gokarna',
        linkText: 'About Nag Bali / Sarpa Dosha',
    },
];

const steps = [
    { title: 'Call or WhatsApp Guruji', desc: 'Speak directly with the priest. No forms or booking portals.' },
    { title: 'Share your family situation', desc: 'Who you are performing the rites for, how and when they passed, and what you have been advised.' },
    { title: 'Fix the ritual and the day', desc: 'Guruji recommends the vidhi and the most suitable day within Pitru Paksha for your case.' },
    { title: 'Ritual at Gokarna', desc: 'The rites are performed in Gokarna with the karta present. If travel is truly impossible, ask about Sankalpa in your name.' },
];

const costFactors = [
    'Which ritual or combination of rituals is advised',
    'Number of priests and japas required',
    'Number of days the rites take',
    'Materials (samagri) and daana involved',
    'Whether you need help arranging stay and meals in Gokarna',
];

const faqs = [
    {
        q: 'When is Pitru Paksha in 2026?',
        a: 'Pitru Paksha 2026 runs from Saturday, September 26 to Saturday, October 10, 2026. The final day, October 10, is Sarva Pitru (Mahalaya) Amavasya.',
    },
    {
        q: 'Which day should my family choose?',
        a: 'It depends on the ancestor and the circumstances. Traditionally, days such as Maha Bharani, Matru Navami (for mothers) and Ghata Chaturdashi (for untimely or accidental deaths) carry special significance. Call Guruji to confirm the right day for your family.',
    },
    {
        q: 'What if I do not know the tithi on which my ancestor passed away?',
        a: 'Sarva Pitru Amavasya on October 10 is traditionally observed for all ancestors, including those whose tithi is unknown. Guruji can also advise other suitable days during the fortnight.',
    },
    {
        q: 'Should I perform Narayana Bali or Tripindi Shraddha?',
        a: 'Narayana Bali is generally performed for untimely or unnatural deaths, while Tripindi Shraddha addresses ancestors of the last three generations. Some families need both. This is best decided on a call after Guruji understands your situation.',
    },
    {
        q: 'Who needs to be present for the ritual?',
        a: 'The karta (main performer) should ideally be present in Gokarna. Other family members are welcome to join. If travel is impossible, ask Guruji about Sankalpa being done in your name.',
    },
    {
        q: 'How much does it cost?',
        a: 'There are no fixed packages. The dakshina depends on the rituals advised, number of priests, days and materials. Guruji will explain it personally on the call.',
    },
    {
        q: 'How early should I call?',
        a: 'Pitru Paksha is the busiest period of the year in Gokarna, and the most significant days fill quickly. Call as early as possible so a suitable day and priests can be arranged.',
    },
];

export default function PitruPakshaPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <Header />

            {/* HERO SECTION - Full Background Image */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={tripindiShradh}
                        alt="Shraddha ritual in Gokarna during Pitru Paksha"
                        fill
                        className="object-cover"
                        priority
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal/90 z-10" />
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white pt-32 pb-20">
                    <div className="animate-in fade-in zoom-in duration-700 space-y-6 max-w-4xl mx-auto">
                        <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-saffron/20 border border-saffron/50 text-saffron font-bold text-sm tracking-widest uppercase backdrop-blur-sm">
                            <Calendar size={16} /> Sat, Sep 26 &ndash; Sat, Oct 10, 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg text-white">
                            Pitru Paksha 2026 Shraddha in <span className="text-saffron">Gokarna</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
                            The fortnight of the ancestors is the most meaningful time of the year to offer shraddha. Perform Tripindi Shraddha, Narayana Bali or Pinda Daan in Gokarna with an experienced local priest who first listens to your family&apos;s situation, then advises the right ritual and the right day.
                        </p>
                        <p className="text-base text-gray-300">
                            Sarva Pitru / Mahalaya Amavasya: <span className="font-bold text-white">Saturday, October 10, 2026</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <TrackedLink
                                href="tel:+919663828936"
                                className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,153,51,0.4)]"
                            >
                                <Phone size={24} className="fill-current" />
                                Call Guruji: +91 96638 28936
                            </TrackedLink>
                            <TrackedLink
                                href={WHATSAPP_URL}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Guruji
                            </TrackedLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY GOKARNA */}
            <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-8">
                        Why Offer Shraddha in Gokarna?
                    </h2>
                    <p className="text-charcoal/80 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                        Gokarna is revered as <span className="font-bold text-charcoal">Dakshin Kashi</span>, the Kashi of the south, and has long been a place where families come to complete the final rites of their loved ones. Offering pindas and tarpana here during Pitru Paksha brings together a sacred place and the most auspicious time for honouring ancestors.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {[
                            'Traditional kshetra for ancestral rites on the western coast',
                            'Experienced local priests familiar with every shraddha vidhi',
                            'Rites performed near sacred waters, as tradition prescribes',
                            'A personal ritual scoped to your family, not a fixed package',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-all hover:border-orange-200">
                                <div className="mt-1 bg-saffron/10 p-2 rounded-full text-saffron shrink-0">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <p className="text-gray-700 font-medium text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPORTANT DAYS */}
            <section className="py-16 bg-stone-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-8">
                        Not Every Day Is the Same for Every Family
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-saffron text-left space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Within Pitru Paksha, certain days carry special meaning. <strong>Maha Bharani</strong> is considered auspicious for all ancestors, <strong>Matru Navami</strong> is observed for departed mothers, and <strong>Ghata Chaturdashi</strong> is traditionally kept for those who passed away through untimely or accidental deaths.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <strong>Sarva Pitru (Mahalaya) Amavasya on October 10, 2026</strong> closes the fortnight and is observed for all ancestors, including those whose tithi is not known.
                        </p>
                        <div className="pt-2">
                            <TrackedLink href="tel:+919663828936" className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                                Call to confirm the right day for your family <ArrowRight size={20} />
                            </TrackedLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* RITUALS OFFERED */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                        Rituals Performed During Pitru Paksha
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {rituals.map((item) => (
                            <div key={item.title} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-xl transition-all hover:bg-orange-50/50 hover:border-orange-100 flex flex-col">
                                <h3 className="font-bold text-2xl font-serif text-charcoal mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 flex-1">{item.desc}</p>
                                <Link href={item.href} className="text-saffron font-bold hover:underline flex items-center gap-1">
                                    {item.linkText} <ArrowRight size={18} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-20 bg-saffron/5">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-12">
                        How It Works
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 text-left">
                        {steps.map((step, i) => (
                            <div key={step.title} className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-saffron/20">
                                <div className="w-10 h-10 bg-saffron text-white rounded-full flex items-center justify-center font-bold mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-lg text-charcoal mb-2">{step.title}</h3>
                                <p className="text-charcoal/80">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <TrackedLink href="tel:+919663828936" className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                            Start with a call to Guruji <ArrowRight size={20} />
                        </TrackedLink>
                    </div>
                </div>
            </section>

            {/* COST SECTION */}
            <section className="py-20 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-black"></div>
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">How the Dakshina Is Decided</h2>
                    <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                        We do not sell fixed packages. Every family&apos;s need is different, so the dakshina is worked out personally with Guruji based on:
                    </p>
                    <ul className="text-left inline-block space-y-3 mb-10">
                        {costFactors.map((factor) => (
                            <li key={factor} className="flex items-start gap-3 text-gray-200 text-lg">
                                <Check size={20} className="text-saffron mt-1 shrink-0" />
                                {factor}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <TrackedLink href="tel:+919663828936" className="inline-block bg-saffron hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,153,51,0.3)]">
                            Call Guruji to Discuss
                        </TrackedLink>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-charcoal text-center mb-12">
                        Pitru Paksha 2026 FAQ
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <details key={faq.q} className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-orange-50 open:border-orange-100 transition-all cursor-pointer">
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

            {/* FINAL CTA */}
            <section className="py-20 bg-cream text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                        Plan Your Family&apos;s Shraddha for Pitru Paksha 2026
                    </h2>
                    <p className="text-charcoal/80 text-xl mb-10 leading-relaxed">
                        September 26 to October 10, 2026. Speak with Guruji today to choose the right ritual and day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <TrackedLink
                            href="tel:+919663828936"
                            className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,153,51,0.4)]"
                        >
                            <Phone size={24} className="fill-current" />
                            Call +91 96638 28936
                        </TrackedLink>
                        <TrackedLink
                            href={WHATSAPP_URL}
                            className="bg-white hover:bg-orange-50 border-2 border-saffron/30 text-charcoal px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                        >
                            <MessageCircle size={24} className="text-saffron" />
                            WhatsApp Guruji
                        </TrackedLink>
                    </div>
                </div>
            </section>

            <Footer />
            <PhoneCTA />
        </main>
    );
}
