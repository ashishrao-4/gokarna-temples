import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, Info, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';
import PageJsonLd from '@/components/PageJsonLd';
import TrackedLink from '@/components/TrackedLink';
import ScrollCue from '@/components/ScrollCue';
import { siteMetadata } from '@/lib/metadata';
import nagabali from '@/images/sarpadosha.jpg';

export const metadata: Metadata = {
    title: { absolute: 'Nag Bali, Sarpa Dosha & Kaal Sarp Dosh Puja in Gokarna' },
    description: 'Nag Bali, Sarpa Dosha and Kaal Sarp Dosh puja in Gokarna, performed and guided personally by Guruji. No fixed packages. Call +91 96638 28936.',
    alternates: {
        canonical: '/nag-bali-sarpa-dosha-gokarna',
    },
    openGraph: {
        ...siteMetadata.openGraph,
        title: 'Nag Bali, Sarpa Dosha & Kaal Sarp Dosh Puja in Gokarna',
        description: 'Nag Bali, Sarpa Dosha and Kaal Sarp Dosh puja in Gokarna, performed and guided personally by Guruji. No fixed packages. Call +91 96638 28936.',
        url: '/nag-bali-sarpa-dosha-gokarna',
    },
};

// Single source for the visible FAQ section and the FAQPage structured data.
const faqs = [
    {
        q: 'Who should perform Nag Bali in Gokarna?',
        a: 'Families who see signs pointing to Sarpa Dosha, a delay in Santana linked to Sarpa Dosha in the Jataka, recurring dreams involving Naga, or a family history connected with Sarpa Hatya. Many families come after elders or a jyotishi advise Nag Bali.',
    },
    {
        q: 'What happens during the Nag Bali vidhi?',
        a: 'A symbolic Naga made of dough or silver is offered with the due rites as prescribed in shastra, to redress the effects of Sarpa Hatya committed by the family, knowingly or unknowingly, across generations. The rites are performed to seek the blessings of Naga Devata.',
    },
    {
        q: 'Which tradition is followed for Nag Bali here?',
        a: 'The vidhi follows the Skanda Purana guidelines available in the Gokarna tradition. Guruji Balachandra Prasad, with over 20 years of experience, performs the rites in person at Gokarna, and the karta traditionally attends.',
    },
    {
        q: 'Is Nag Bali performed along with Narayana Bali?',
        a: 'Yes. When both Doshas are present, the two are often performed together as Nag-Narayana Bali. Where Sarpa Dosha is linked to the ancestors, Pitru Dosha Pooja may also be advised.',
    },
    {
        q: 'Do you perform Kaal Sarp Dosh puja in Gokarna?',
        a: 'Yes. Guruji performs Kaal Sarp Dosh Shanti puja in Gokarna for families whose Jataka has been read as showing Kaal Sarp Dosha. After hearing your situation he advises whether it is needed on its own or together with Nag Bali, and fixes a suitable day.',
    },
    {
        q: 'How is the dakshina for Nag Bali decided?',
        a: 'There is no fixed package. It depends on whether Nag Bali is performed alone or combined with Narayana Bali, and on the rites advised for your family. Guruji tells you the amount openly on the phone, and there are no hidden charges.',
    },
];

export default function NagBaliPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <PageJsonLd
                path="/nag-bali-sarpa-dosha-gokarna"
                name="Nag Bali & Sarpa Dosha Pooja in Gokarna"
                description="Nag Bali, Sarpa Dosha and Kaal Sarp Dosh puja in Gokarna, performed and guided personally by Guruji. No fixed packages. Call +91 96638 28936."
                faqs={faqs}
            />
            <Header />

            {/* HERO SECTION - Full Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={nagabali}
                        alt="Nag Bali Pooja Gokarna ritual"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="100vw"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-charcoal/90 z-10" />
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white pt-32 pb-36 md:pb-24">
                    <div className="animate-in fade-in zoom-in duration-700 space-y-6 max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-4 rounded-full bg-green-900/40 border border-green-500/50 text-green-300 font-bold text-sm tracking-widest uppercase backdrop-blur-sm">
                            Sarpa Dosha Nivarana
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg text-white">
                            Nag Bali & Sarpa Dosha Pooja in <span className="text-saffron">Gokarna</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
                            Nag Bali, Sarpa Dosha and Kaal Sarp Dosh puja in Gokarna, performed by experienced priests seeking the blessings of Naga Devata.
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
                                href="https://wa.me/919663828936?text=Namaste%20Guruji,%20I%20want%20to%20know%20about%20Nag%20Bali%20Pooja%20in%20Gokarna."
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
                <ScrollCue href="#who-should" />
            </section>

            {/* WHO SHOULD PERFORM */}
            <section id="who-should" className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-12">
                        Who Should Perform Nag Bali?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {[
                            "Signs pointing to Sarpa Dosha in the family",
                            "Delay in Santana (progeny) linked to Sarpa Dosha in the Jataka",
                            "Elders or a jyotishi advising Nag Bali for the family",
                            "Recurring dreams involving Naga",
                            "A family history connected with Sarpa Hatya"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-all hover:border-green-200">
                                <div className="mt-1 bg-green-100 p-2 rounded-full text-green-700 shrink-0">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <p className="text-gray-700 font-medium text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <TrackedLink href="tel:+919663828936" className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                            Discuss with Guruji <ArrowRight size={20} />
                        </TrackedLink>
                    </div>
                </div>
            </section>

            {/* HOW IT HAPPENS - Abstract BG */}
            <section className="py-20 bg-cream relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
                        Nag Bali Procedure (Vidhi)
                    </h2>
                    <p className="text-charcoal/80 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                        Nag Bali involves offering a symbolic Naga made of dough or silver, with due rites as prescribed in shastra, to redress the effects of Sarpa Hatya committed by the family, knowingly or unknowingly, across generations.
                        It is performed to seek the blessings of Naga Devata.
                        It is often performed alongside the{' '}
                        <Link href="/narayana-bali-pooja-gokarna" className="text-saffron font-bold hover:underline">Narayana Bali pooja in Gokarna</Link>{' '}
                        if both Doshas are present.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
                        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-green-100 flex-1 transform transition hover:-translate-y-1">
                            <h3 className="font-bold text-2xl text-saffron mb-3 flex items-center gap-3">
                                <Info size={28} /> Tradition
                            </h3>
                            <p className="text-charcoal font-medium">Strictly follows Skanda Purana guidelines available in Gokarna tradition.</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-green-100 flex-1 transform transition hover:-translate-y-1">
                            <h3 className="font-bold text-2xl text-saffron mb-3 flex items-center gap-3">
                                <Calendar size={28} /> Connection to Pitru Dosha
                            </h3>
                            <p className="text-charcoal font-medium">
                                Sometimes Sarpa Dosha is linked to ancestors. In such cases,
                                <Link href="/pitru-dosha-pooja-gokarna" className="text-saffron underline hover:text-orange-700 ml-1 font-bold">
                                    Pitru Dosha Pooja
                                </Link> is also advised.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KAAL SARP DOSH */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 text-center">
                        Kaal Sarp Dosh Puja in Gokarna
                    </h2>
                    <div className="space-y-5 text-charcoal/80 text-lg leading-relaxed">
                        <p>
                            In jyotisha, Kaal Sarp Dosha is said to be present in a Jataka when all seven grahas fall between Rahu and Ketu. Families who have been told this by their jyotishi often come to Gokarna for Kaal Sarp Dosh Shanti puja.
                        </p>
                        <p>
                            Guruji performs the puja in Gokarna with the karta present. Because Kaal Sarp Dosha and Sarpa Dosha are related, he first listens to what has been advised for your family and tells you whether Kaal Sarp Dosh puja alone is enough or whether Nag Bali should be done with it.
                        </p>
                    </div>
                    <div className="mt-10 text-center">
                        <TrackedLink href="tel:+919663828936" className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                            Ask Guruji about Kaal Sarp Dosh puja <ArrowRight size={20} />
                        </TrackedLink>
                    </div>
                </div>
            </section>

            {/* COST SECTION - Simplified */}
            <section className="py-20 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-black"></div>
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Pooja Dakshina</h2>
                    <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                        The cost depends on whether Nag Bali or Kaal Sarp Dosh puja is performed alone or combined with Narayana Bali (Nag-Narayana Bali).
                    </p>

                    <div>
                        <TrackedLink href="tel:+919663828936" className="inline-block bg-saffron hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-colors shadow-md">
                            Get Cost Details
                        </TrackedLink>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-charcoal text-center mb-12">
                        Nag Bali & Sarpa Dosha FAQ
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                <h3 className="font-bold text-lg text-charcoal">{faq.q}</h3>
                                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-black"></div>
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
                        Talk to Guruji About Nag Bali
                    </h2>
                    <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                        Guruji hears your family&apos;s situation, advises the right vidhi and the day, and tells you the dakshina openly on the call.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <TrackedLink
                            href="tel:+919663828936"
                            className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                        >
                            <Phone size={24} className="fill-current" />
                            Call +91 96638 28936
                        </TrackedLink>
                        <TrackedLink
                            href="https://wa.me/919663828936?text=Namaste%20Guruji,%20I%20want%20to%20know%20about%20Nag%20Bali%20Pooja%20in%20Gokarna."
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <MessageCircle size={24} />
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
