import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, Info, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';
import PageJsonLd from '@/components/PageJsonLd';
import TrackedLink from '@/components/TrackedLink';
import { siteMetadata } from '@/lib/metadata';
import pitruDoshaNivarana from '@/images/pitrudosh.jpg';

export const metadata: Metadata = {
    title: { absolute: 'Pitru Dosha Pooja, Pind Daan & Tripindi Shradh in Gokarna' },
    description: "Pitru Dosha Nivarana, Pind Daan and Tripindi Shradh in Gokarna, guided by a traditional Vedic priest. Call to plan your family's ritual.",
    alternates: {
        canonical: '/pitru-dosha-pooja-gokarna',
    },
    openGraph: {
        ...siteMetadata.openGraph,
        title: 'Pitru Dosha Pooja, Pind Daan & Tripindi Shradh in Gokarna',
        description: "Pitru Dosha Nivarana, Pind Daan and Tripindi Shradh in Gokarna, guided by a traditional Vedic priest. Call to plan your family's ritual.",
        url: '/pitru-dosha-pooja-gokarna',
    },
};

// Single source for the visible FAQ section and the FAQPage structured data.
const faqs = [
    {
        q: 'How do I know if I have Pitru Dosha?',
        a: 'Common signs include delay in progeny, constant illness, and money loss. Consulting a family pandit can provide clarity.',
    },
    {
        q: 'Can women perform Pitru Dosha Pooja?',
        a: 'Yes, women can perform specific rituals or participate along with family. Guruji can guide on the exact Vidhi based on tradition.',
    },
    {
        q: 'What is the difference between Narayana Bali and Pitru Dosha Pooja?',
        a: 'Narayana Bali is a specific ritual for unnatural or severe accidental deaths, and in such cases it is often considered a prerequisite for Pitru Dosha nivarana. Pitru Dosha Pooja or Tripindi Shradh is generally performed for unsatisfied souls from the last three generations who may have passed naturally but are stuck.',
    },
    {
        q: 'How long does the Pitru Dosha Nivarana take?',
        a: 'The rites usually take 3-4 hours and are best performed in the morning hours. Commonly Tripindi Shradh or Tila Homa is performed, with pindas offered to the ancestors of the father, mother and in-law lineages.',
    },
    {
        q: 'Can we perform Pind Daan in Gokarna?',
        a: 'Yes. Pind Daan with tarpana is performed in Gokarna, which is revered as Dakshin Kashi. It can be done in Pitru Paksha, on Amavasya, or on the tithi of the ancestor. Guruji advises whether Pind Daan alone is right for your family or whether Tripindi Shradh or Narayana Bali is needed.',
    },
    {
        q: 'How is the dakshina decided?',
        a: 'There is no fixed package. The dakshina depends on the rites advised, such as a simple Tila Homa or a complete Tripindi Shradh. Guruji tells you the amount openly on the phone, and there are no hidden charges.',
    },
];

export default function PitruDoshaPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <PageJsonLd
                path="/pitru-dosha-pooja-gokarna"
                name="Pitru Dosha Pooja in Gokarna"
                description="Pitru Dosha Nivarana, Pind Daan and Tripindi Shradh in Gokarna, guided by a traditional Vedic priest. Call to plan your family's ritual."
                faqs={faqs}
            />
            <Header />

            {/* HERO SECTION - Full Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={pitruDoshaNivarana}
                        alt="Pitru Dosha Pooja Gokarna ritual"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="100vw"
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
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
                            Pitru Dosha Nivarana in Gokarna, performed at the holy Mukti Sthala by pandits of a traditional Vedic lineage.
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
                                href="https://wa.me/919663828936?text=Namaste%20Guruji,%20I%20want%20to%20know%20about%20Pitru%20Dosha%20Pooja%20in%20Gokarna."
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Enquiry
                            </TrackedLink>
                        </div>
                        <p className="text-sm text-gray-300">
                            No fixed packages. Guruji tells you the dakshina openly on the call.
                        </p>
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
                            "Pitru Dosha seen in the family Jataka (horoscope)"
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
                        <TrackedLink href="tel:+919663828936" className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                            Consult Guruji for Guidance <ArrowRight size={20} />
                        </TrackedLink>
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
                            <strong>Narayana Bali</strong> is a specific ritual for &ldquo;unnatural deaths&rdquo; or severe accidental causes, often considered a prerequisite for Pitru Dosha nivarana in such cases.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <strong>Pitru Dosha Pooja / Tripindi Shradh</strong> is generally performed for &ldquo;unsatisfied souls&rdquo; from the last three generations who may have passed naturally but are stuck.
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
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
                        How Pitru Dosha Nivarana is Performed
                    </h2>
                    <p className="text-charcoal/80 text-xl mb-6 leading-relaxed max-w-3xl mx-auto">
                        The exact procedure (Vidhi) depends on the guidance of the Pandit.
                        Commonly, <span className="font-bold text-charcoal">Tripindi Shradh</span> or <span className="font-bold text-charcoal">Tila Homa</span> is performed.
                        It involves offering pindas to ancestors of father/mother/in-law lineages to satisfy their souls.
                    </p>
                    <p className="text-charcoal/80 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
                        Many families prefer to do these rites during the{' '}
                        <Link href="/pitru-paksha-gokarna" className="text-saffron font-bold hover:underline">Pitru Paksha fortnight in Gokarna</Link>,
                        when Shraddha and Tarpana for ancestors carry special significance. Where Sarpa Dosha is also indicated, the{' '}
                        <Link href="/nag-bali-sarpa-dosha-gokarna" className="text-saffron font-bold hover:underline">Nag Bali pooja</Link>{' '}
                        can be performed alongside.
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
                    {/* Plain description list, not a third copy of the same three-card row. */}
                    <dl className="max-w-3xl mx-auto divide-y divide-gray-200 border-y border-gray-200">
                        {[
                            { title: "Vedic Priests", desc: "Qualified pandits to perform the pooja correctly." },
                            { title: "Pooja Samagri", desc: "Fresh flowers, ghee, havan samagri, and pinda materials." },
                            { title: "Consultation", desc: "Pre-pooja guidance on sankalpa and gothra details." }
                        ].map((item) => (
                            <div key={item.title} className="py-6 md:flex md:gap-10">
                                <dt className="font-bold text-lg text-charcoal md:w-56 md:shrink-0">{item.title}</dt>
                                <dd className="text-gray-600 leading-relaxed mt-1 md:mt-0">{item.desc}</dd>
                            </div>
                        ))}
                    </dl>
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
                        <TrackedLink href="tel:+919663828936" className="inline-block bg-saffron hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-colors shadow-md">
                            Speak to Guruji
                        </TrackedLink>
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

            <Footer />
            <PhoneCTA />
        </main>
    );
}
