import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Check, ArrowRight, Languages } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';
import TrackedLink from '@/components/TrackedLink';
import { siteMetadata } from '@/lib/metadata';
import heroImage from '../../images/narayana-bali.jpg';

const TITLE = 'ಗೋಕರ್ಣದಲ್ಲಿ ನಾರಾಯಣ ಬಲಿ, ನಾಗ ಬಲಿ, ಪಿತೃ ದೋಷ ಪೂಜೆ';
const DESCRIPTION = 'ಗೋಕರ್ಣದಲ್ಲಿ ಬಾಲಚಂದ್ರ ಪ್ರಸಾದ್ ಗುರೂಜಿಯವರಿಂದ ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನಾರಾಯಣ ಬಲಿ, ನಾಗ ಬಲಿ, ಪಿತೃ ದೋಷ ಪೂಜೆ ಮತ್ತು ಪಿತೃ ಪಕ್ಷ 2026 ಶ್ರಾದ್ಧ. ಗುರೂಜಿ ಕನ್ನಡದಲ್ಲೇ ಮಾತನಾಡುತ್ತಾರೆ. ಕರೆ ಮಾಡಿ: +91 96638 28936.';

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: {
        canonical: '/kn',
        languages: {
            'en-IN': '/',
            'kn-IN': '/kn',
            'te-IN': '/te',
        },
    },
    openGraph: {
        ...siteMetadata.openGraph,
        title: TITLE,
        description: DESCRIPTION,
        url: '/kn',
        locale: 'kn_IN',
    },
};

const PHONE_HREF = 'tel:+919663828936';
const WHATSAPP_URL = `https://wa.me/919663828936?text=${encodeURIComponent('ನಮಸ್ಕಾರ ಗುರೂಜಿ, ಗೋಕರ್ಣದಲ್ಲಿ ಪೂಜೆ ಮಾಡಿಸುವ ಬಗ್ಗೆ ಮಾಹಿತಿ ಬೇಕಿತ್ತು. ದಯವಿಟ್ಟು ತಿಳಿಸಿ.')}`;

const rituals = [
    {
        title: 'ನಾರಾಯಣ ಬಲಿ',
        desc: 'ಮನೆಯವರಲ್ಲಿ ಯಾರಾದರೂ ಅಪಘಾತದಲ್ಲೋ, ಆಕಸ್ಮಿಕವಾಗಿಯೋ, ಅಕಾಲದಲ್ಲಿ ತೀರಿಕೊಂಡಿದ್ದರೆ ಅವರ ಉತ್ತರಕ್ರಿಯೆ ಸರಿಯಾಗಿ ಪೂರ್ಣಗೊಳ್ಳಲೆಂದು ನಾರಾಯಣ ಬಲಿ ಮಾಡಿಸುತ್ತಾರೆ. ಅಗಲಿದವರ ಸದ್ಗತಿಗಾಗಿ ಪ್ರಾರ್ಥಿಸಿ, ಕುಟುಂಬದ ನೆಮ್ಮದಿಗಾಗಿ ಭಗವಂತನ ಆಶೀರ್ವಾದ ಬೇಡುವ ಕರ್ಮ ಇದು.',
        href: '/narayana-bali-pooja-gokarna',
        linkText: 'ನಾರಾಯಣ ಬಲಿ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ವಿವರ (English)',
    },
    {
        title: 'ನಾಗ ಬಲಿ ಮತ್ತು ಸರ್ಪ ದೋಷ',
        desc: 'ತಿಳಿದೋ ತಿಳಿಯದೆಯೋ ಸರ್ಪ ಹತ್ಯೆ ಆಗಿದ್ದರೆ, ಅಥವಾ ಜಾತಕದಲ್ಲಿ ಸರ್ಪ ದೋಷ ಇದೆ ಎಂದು ಹಿರಿಯರು ಹೇಳಿದ್ದರೆ ನಾಗ ಬಲಿ ಮಾಡಿಸುವ ಸಂಪ್ರದಾಯವಿದೆ. ಸ್ಕಂದ ಪುರಾಣದಲ್ಲಿ ಹೇಳಿರುವಂತೆ, ಗೋಕರ್ಣದ ಪರಂಪರೆಯ ಪ್ರಕಾರ ನಾಗ ದೇವರ ಆಶೀರ್ವಾದಕ್ಕಾಗಿ ಈ ವಿಧಿಯನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ.',
        href: '/nag-bali-sarpa-dosha-gokarna',
        linkText: 'ನಾಗ ಬಲಿ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ವಿವರ (English)',
    },
    {
        title: 'ಪಿತೃ ದೋಷ',
        desc: 'ಹಿರಿಯರ ಶ್ರಾದ್ಧ ಕರ್ಮಗಳು ತಪ್ಪಿಹೋಗಿದ್ದರೆ ಅಥವಾ ಅಪೂರ್ಣವಾಗಿದ್ದರೆ ಪಿತೃ ದೋಷ ಇದೆ ಎಂದು ಹೇಳುತ್ತಾರೆ. ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ, ಪಿಂಡ ಪ್ರದಾನ, ತರ್ಪಣಗಳ ಮೂಲಕ ಪಿತೃಗಳನ್ನು ಸ್ಮರಿಸಿ ಅವರ ಆಶೀರ್ವಾದ ಬೇಡಬಹುದು. ನಿಮ್ಮ ಮನೆಯ ಪರಿಸ್ಥಿತಿ ಕೇಳಿ ಗುರೂಜಿ ಸೂಕ್ತ ವಿಧಿಯನ್ನು ತಿಳಿಸುತ್ತಾರೆ.',
        href: '/pitru-dosha-pooja-gokarna',
        linkText: 'ಪಿತೃ ದೋಷ ಪೂಜೆ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ವಿವರ (English)',
    },
    {
        title: 'ಪಿತೃ ಪಕ್ಷ 2026',
        desc: 'ಈ ವರ್ಷ ಪಿತೃ ಪಕ್ಷ ಸೆಪ್ಟೆಂಬರ್ 26 ರಿಂದ ಅಕ್ಟೋಬರ್ 10, 2026 ರವರೆಗೆ ಇದೆ. ಅಕ್ಟೋಬರ್ 10 ಮಹಾಲಯ ಅಮಾವಾಸ್ಯೆ; ತಿಥಿ ಗೊತ್ತಿಲ್ಲದ ಹಿರಿಯರಿಗೂ ಅಂದು ಶ್ರಾದ್ಧ ಮಾಡುವ ಪದ್ಧತಿ ಇದೆ. ಈ ಹದಿನೈದು ದಿನ ಗೋಕರ್ಣದಲ್ಲಿ ತುಂಬಾ ಜನ ಬರುತ್ತಾರೆ, ಹಾಗಾಗಿ ಬೇಗನೆ ಕರೆ ಮಾಡಿ ದಿನ ನಿಗದಿ ಮಾಡಿಕೊಳ್ಳಿ.',
        href: '/pitru-paksha-gokarna',
        linkText: 'ಪಿತೃ ಪಕ್ಷ 2026 ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ವಿವರ (English)',
    },
];

const reasons = [
    'ಗೋಕರ್ಣದಲ್ಲಿ 20 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲದಿಂದ ಈ ಕರ್ಮಗಳನ್ನು ನಡೆಸಿಕೊಡುತ್ತಿದ್ದಾರೆ',
    'ಮೊದಲೇ ಹೇಳದ ಯಾವುದೇ ಖರ್ಚು ಇರುವುದಿಲ್ಲ; ದಕ್ಷಿಣೆಯ ಬಗ್ಗೆ ಫೋನಿನಲ್ಲೇ ಮುಕ್ತವಾಗಿ ಮಾತನಾಡುತ್ತಾರೆ',
    'ಎಲ್ಲ ವಿಧಿಗಳೂ ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ, ಶ್ರದ್ಧೆಯಿಂದ ನಡೆಯುತ್ತವೆ',
    'ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಯಾವ ದಿನ ಸೂಕ್ತ ಎಂಬ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ',
];

const faqs = [
    {
        q: 'ಪೂಜೆಗೆ ಏನೇನು ತರಬೇಕು?',
        a: 'ಬೇಕಾದ ವಿವರಗಳನ್ನು ಗುರೂಜಿ ಕರೆಯಲ್ಲೇ ತಿಳಿಸುತ್ತಾರೆ. ಸಾಮಾನ್ಯವಾಗಿ ಕರ್ತೃವಿಗೆ ಶುಭ್ರವಾದ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪು, ಅಗಲಿದವರ ಹೆಸರು, ನಿಮ್ಮ ಗೋತ್ರ, ಮತ್ತು ಗೊತ್ತಿದ್ದರೆ ಅವರು ತೀರಿಕೊಂಡ ದಿನಾಂಕ ಅಥವಾ ತಿಥಿ ತಿಳಿದಿದ್ದರೆ ಸಾಕು.',
    },
    {
        q: 'ಪೂಜೆ ಎಷ್ಟು ದಿನ ನಡೆಯುತ್ತದೆ?',
        a: 'ನಾರಾಯಣ ಬಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಒಂದು ದಿನದ ಕರ್ಮ, ಕೆಲವೊಮ್ಮೆ ಎರಡು ದಿನ ಆಗಬಹುದು. ಬೆಳಗ್ಗೆ ಬೇಗನೆ ಆರಂಭವಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಹಿಂದಿನ ದಿನ ಸಂಜೆಯೇ ಗೋಕರ್ಣಕ್ಕೆ ಬರುವುದು ಒಳ್ಳೆಯದು. ನಿಮ್ಮ ಕರ್ಮಕ್ಕೆ ಎಷ್ಟು ಸಮಯ ಬೇಕು ಎಂದು ಗುರೂಜಿ ಮೊದಲೇ ಹೇಳುತ್ತಾರೆ.',
    },
    {
        q: 'ಮನೆಯವರೆಲ್ಲರೂ ಬರಬಹುದೇ?',
        a: 'ಖಂಡಿತ ಬರಬಹುದು. ಕರ್ತೃ (ಕರ್ಮ ಮಾಡುವವರು) ಇರಲೇಬೇಕು; ಉಳಿದ ಮನೆಯವರೂ ಜೊತೆಗಿದ್ದು ಭಾಗವಹಿಸಬಹುದು. ಬರಲು ಸಾಧ್ಯವೇ ಇಲ್ಲದಿದ್ದರೆ ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ಸಂಕಲ್ಪ ಮಾಡುವ ಬಗ್ಗೆ ಗುರೂಜಿಯವರನ್ನು ಕೇಳಿ.',
    },
    {
        q: 'ಪಿತೃ ಪಕ್ಷದಲ್ಲಿ ಪೂಜೆಗೆ ಯಾವಾಗ ಕರೆ ಮಾಡಬೇಕು?',
        a: 'ಆದಷ್ಟು ಬೇಗ. ಪಿತೃ ಪಕ್ಷ (ಸೆಪ್ಟೆಂಬರ್ 26 – ಅಕ್ಟೋಬರ್ 10, 2026) ಗೋಕರ್ಣದಲ್ಲಿ ವರ್ಷದ ಅತ್ಯಂತ ಜನದಟ್ಟಣೆಯ ಸಮಯ. ಮಹಾಲಯ ಅಮಾವಾಸ್ಯೆಯಂತಹ ಮುಖ್ಯ ದಿನಗಳು ಬೇಗನೆ ತುಂಬುತ್ತವೆ.',
    },
    {
        q: 'ದಕ್ಷಿಣೆ ಎಷ್ಟು?',
        a: 'ಇದು ಯಾವ ಕರ್ಮ ಮಾಡಿಸಬೇಕು, ಎಷ್ಟು ದಿನ, ಎಷ್ಟು ಪುರೋಹಿತರು ಬೇಕು ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ. ಗುರೂಜಿ ಕರೆಯಲ್ಲೇ ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುತ್ತಾರೆ; ಮೊದಲೇ ಹೇಳದ ಯಾವುದೇ ಖರ್ಚು ಇರುವುದಿಲ್ಲ.',
    },
];

export default function KannadaPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <Header />

            <div lang="kn" className="lang-kn font-sans">
                {/* HERO */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={heroImage}
                            alt="ಗೋಕರ್ಣದಲ್ಲಿ ನಾರಾಯಣ ಬಲಿ ಕರ್ಮ"
                            fill
                            className="object-cover"
                            priority
                            placeholder="blur"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal/90 z-10" />
                    </div>

                    <div className="relative z-20 container mx-auto px-4 text-center text-white pt-32 pb-20">
                        <div className="animate-in fade-in zoom-in duration-700 space-y-6 max-w-4xl mx-auto">
                            <span className="inline-block py-1 px-4 rounded-full bg-saffron/20 border border-saffron/50 text-saffron font-bold text-sm backdrop-blur-sm">
                                ಗೋಕರ್ಣ ಕ್ಷೇತ್ರ
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-snug drop-shadow-lg text-white">
                                <span className="text-saffron">ಗೋಕರ್ಣದಲ್ಲಿ</span> ನಾರಾಯಣ ಬಲಿ, ನಾಗ ಬಲಿ ಮತ್ತು ಪಿತೃ ದೋಷ ಪೂಜೆ
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
                                ಬಾಲಚಂದ್ರ ಪ್ರಸಾದ್ ಗುರೂಜಿಯವರು ಗೋಕರ್ಣದಲ್ಲಿ ಇಪ್ಪತ್ತು ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲದಿಂದ ಈ ಕರ್ಮಗಳನ್ನು ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನಡೆಸಿಕೊಡುತ್ತಿದ್ದಾರೆ. ಮೊದಲು ನಿಮ್ಮ ಮನೆಯ ವಿಷಯವನ್ನು ಸಮಾಧಾನವಾಗಿ ಕೇಳಿ, ನಂತರ ಯಾವ ವಿಧಿ, ಯಾವ ದಿನ ಸೂಕ್ತ ಎಂದು ತಿಳಿಸುತ್ತಾರೆ.
                            </p>
                            <p className="inline-flex items-center gap-2 text-base md:text-lg text-white bg-white/10 border border-white/20 rounded-full px-5 py-2 backdrop-blur-sm">
                                <Languages size={20} className="text-saffron shrink-0" />
                                ಗುರೂಜಿ ಫೋನಿನಲ್ಲಿ ಕನ್ನಡ, ತೆಲುಗು, ಹಿಂದಿ ಮತ್ತು ಮರಾಠಿಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಾರೆ
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                <TrackedLink
                                    href={PHONE_HREF}
                                    className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,153,51,0.4)]"
                                >
                                    <Phone size={24} className="fill-current" />
                                    ಗುರೂಜಿಗೆ ಕರೆ ಮಾಡಿ: +91 96638 28936
                                </TrackedLink>
                                <TrackedLink
                                    href={WHATSAPP_URL}
                                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                                >
                                    <MessageCircle size={24} />
                                    ವಾಟ್ಸಾಪ್ ಮಾಡಿ
                                </TrackedLink>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LANGUAGE TRUST POINT */}
                <section className="py-16 bg-gradient-to-b from-white to-orange-50/30">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                            ನಿಮ್ಮದೇ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ
                        </h2>
                        <p className="text-charcoal/80 text-xl leading-relaxed">
                            ಮನೆಯ ಹಿರಿಯರ ವಿಷಯ ಹೇಳಿಕೊಳ್ಳುವಾಗ ಭಾಷೆ ಅಡ್ಡಿಯಾಗಬಾರದು. ಗುರೂಜಿ ಕನ್ನಡ, ತೆಲುಗು, ಹಿಂದಿ ಮತ್ತು ಮರಾಠಿಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಾರೆ. ನಿಮ್ಮ ಸಂದೇಹಗಳನ್ನು ನಿರಾಳವಾಗಿ ಕೇಳಿ, ಎಲ್ಲವನ್ನೂ ಬಿಡಿಸಿ ಹೇಳುತ್ತಾರೆ.
                        </p>
                    </div>
                </section>

                {/* RITUALS */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                            ಗೋಕರ್ಣದಲ್ಲಿ ನಡೆಸುವ ಕರ್ಮಗಳು
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {rituals.map((item) => (
                                <div key={item.href} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-xl transition-all hover:bg-orange-50/50 hover:border-orange-100 flex flex-col">
                                    <h3 className="font-bold text-2xl font-serif text-charcoal mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">{item.desc}</p>
                                    <Link href={item.href} hrefLang="en" className="text-saffron font-bold hover:underline flex items-center gap-1">
                                        {item.linkText} <ArrowRight size={18} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY GURUJI */}
                <section className="py-20 bg-stone-100">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-10">
                            ಕುಟುಂಬಗಳು ಗುರೂಜಿಯವರ ಬಳಿ ಯಾಕೆ ಬರುತ್ತಾರೆ
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            {reasons.map((item) => (
                                <div key={item} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                                    <div className="mt-1 bg-saffron/10 p-2 rounded-full text-saffron shrink-0">
                                        <Check size={18} strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 font-medium text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <TrackedLink href={PHONE_HREF} className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                                ಗುರೂಜಿಯವರೊಂದಿಗೆ ಮಾತನಾಡಿ <ArrowRight size={20} />
                            </TrackedLink>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-serif font-bold text-charcoal text-center mb-12">
                            ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <details key={faq.q} className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-orange-50 open:border-orange-100 transition-all cursor-pointer">
                                    <summary className="font-bold text-lg text-charcoal list-none flex justify-between items-center gap-4 outline-none">
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
                            ನಿಮ್ಮ ಕುಟುಂಬದ ಕರ್ಮದ ಬಗ್ಗೆ ಇಂದೇ ಗುರೂಜಿಯವರೊಂದಿಗೆ ಮಾತನಾಡಿ
                        </h2>
                        <p className="text-charcoal/80 text-xl mb-10 leading-relaxed">
                            ಬೆಳಗ್ಗೆ 6 ರಿಂದ ರಾತ್ರಿ 12 ರವರೆಗೆ ಕರೆ ಮಾಡಬಹುದು. ಕನ್ನಡದಲ್ಲೇ ಮಾತನಾಡಿ.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink
                                href={PHONE_HREF}
                                className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,153,51,0.4)]"
                            >
                                <Phone size={24} className="fill-current" />
                                ಕರೆ ಮಾಡಿ: +91 96638 28936
                            </TrackedLink>
                            <TrackedLink
                                href={WHATSAPP_URL}
                                className="bg-white hover:bg-orange-50 border-2 border-saffron/30 text-charcoal px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                            >
                                <MessageCircle size={24} className="text-saffron" />
                                ವಾಟ್ಸಾಪ್ ಮಾಡಿ
                            </TrackedLink>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
            <PhoneCTA />
        </main>
    );
}
