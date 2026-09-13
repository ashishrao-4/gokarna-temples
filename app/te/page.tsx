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

const TITLE = 'గోకర్ణంలో నారాయణ బలి, నాగ బలి, పితృ దోషం పూజ';
const DESCRIPTION = 'గోకర్ణంలో బాలచంద్ర ప్రసాద్ గురూజీ ద్వారా శాస్త్రోక్తంగా నారాయణ బలి, నాగ బలి, పితృ దోషం పూజ మరియు పితృ పక్షం 2026 శ్రాద్ధం. గురూజీ తెలుగులోనే మాట్లాడతారు. కాల్ చేయండి: +91 96638 28936.';

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: {
        canonical: '/te',
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
        url: '/te',
        locale: 'te_IN',
    },
};

const PHONE_HREF = 'tel:+919663828936';
const WHATSAPP_URL = `https://wa.me/919663828936?text=${encodeURIComponent('నమస్కారం గురూజీ, గోకర్ణంలో పూజ చేయించుకోవడం గురించి వివరాలు కావాలి. దయచేసి తెలియజేయండి.')}`;

const rituals = [
    {
        title: 'నారాయణ బలి',
        desc: 'ఇంట్లో ఎవరైనా ప్రమాదంలోనో, అకస్మాత్తుగానో, అకాల మరణం పొందినప్పుడు వారి ఉత్తర క్రియలు సక్రమంగా పూర్తి కావాలని నారాయణ బలి చేయిస్తారు. వెళ్ళిపోయిన వారి సద్గతి కోసం ప్రార్థిస్తూ, కుటుంబ శాంతి కోసం భగవంతుని ఆశీస్సులు కోరే కర్మ ఇది.',
        href: '/narayana-bali-pooja-gokarna',
        linkText: 'నారాయణ బలి గురించి మరిన్ని వివరాలు (English)',
    },
    {
        title: 'నాగ బలి మరియు సర్ప దోషం',
        desc: 'తెలిసో తెలియకో సర్ప హత్య జరిగినప్పుడు, లేదా జాతకంలో సర్ప దోషం ఉందని పెద్దలు చెప్పినప్పుడు నాగ బలి చేయించే సంప్రదాయం ఉంది. స్కంద పురాణంలో చెప్పినట్లుగా, గోకర్ణం సంప్రదాయం ప్రకారం నాగ దేవత ఆశీస్సుల కోసం ఈ విధిని నిర్వహిస్తారు.',
        href: '/nag-bali-sarpa-dosha-gokarna',
        linkText: 'నాగ బలి గురించి మరిన్ని వివరాలు (English)',
    },
    {
        title: 'పితృ దోషం',
        desc: 'పెద్దల శ్రాద్ధ కర్మలు తప్పిపోయినా, అసంపూర్ణంగా మిగిలిపోయినా పితృ దోషం ఉందని చెబుతారు. త్రిపిండి శ్రాద్ధం, పిండ ప్రదానం, తర్పణాల ద్వారా పితృదేవతలను స్మరించుకుని వారి ఆశీస్సులు కోరవచ్చు. మీ ఇంటి పరిస్థితి విని గురూజీ సరైన విధిని సూచిస్తారు.',
        href: '/pitru-dosha-pooja-gokarna',
        linkText: 'పితృ దోషం పూజ గురించి మరిన్ని వివరాలు (English)',
    },
    {
        title: 'పితృ పక్షం 2026',
        desc: 'ఈ సంవత్సరం పితృ పక్షం సెప్టెంబర్ 26 నుండి అక్టోబర్ 10, 2026 వరకు. అక్టోబర్ 10 మహాలయ అమావాస్య; తిథి తెలియని పెద్దలకు కూడా ఆ రోజు శ్రాద్ధం పెట్టే ఆచారం ఉంది. ఈ పదిహేను రోజులు గోకర్ణానికి చాలా మంది వస్తారు, కాబట్టి ముందుగానే కాల్ చేసి రోజు ఖరారు చేసుకోండి.',
        href: '/pitru-paksha-gokarna',
        linkText: 'పితృ పక్షం 2026 గురించి మరిన్ని వివరాలు (English)',
    },
];

const reasons = [
    'గోకర్ణంలో 20 సంవత్సరాలకు పైగా ఈ కర్మలు నిర్వహిస్తున్నారు',
    'ముందుగా చెప్పని ఖర్చులు ఏవీ ఉండవు; దక్షిణ గురించి ఫోన్‌లోనే స్పష్టంగా మాట్లాడతారు',
    'అన్ని విధులూ శాస్త్రోక్తంగా, శ్రద్ధగా జరుగుతాయి',
    'మీ కుటుంబానికి ఏ రోజు అనుకూలమో మార్గదర్శనం చేస్తారు',
];

const faqs = [
    {
        q: 'పూజకు ఏమేమి తీసుకురావాలి?',
        a: 'కావలసిన వివరాలన్నీ గురూజీ ఫోన్‌లోనే చెబుతారు. సాధారణంగా కర్తకు శుభ్రమైన సాంప్రదాయ వస్త్రాలు, వెళ్ళిపోయిన వారి పేరు, మీ గోత్రం, తెలిస్తే వారు మరణించిన తేదీ లేదా తిథి తెలిసి ఉంటే చాలు.',
    },
    {
        q: 'పూజ ఎన్ని రోజులు జరుగుతుంది?',
        a: 'నారాయణ బలి సాధారణంగా ఒక రోజు కర్మ, కొన్నిసార్లు రెండు రోజులు పట్టవచ్చు. ఉదయం తెల్లవారుజామునే మొదలవుతుంది, కాబట్టి ముందు రోజు సాయంత్రమే గోకర్ణం చేరుకోవడం మంచిది. మీ కర్మకు ఎంత సమయం పడుతుందో గురూజీ ముందే చెబుతారు.',
    },
    {
        q: 'కుటుంబ సభ్యులందరూ రావచ్చా?',
        a: 'తప్పకుండా రావచ్చు. కర్త (కర్మ చేసేవారు) తప్పనిసరిగా ఉండాలి; మిగతా కుటుంబ సభ్యులు కూడా పాల్గొనవచ్చు. రావడం అసలు వీలుకాకపోతే, మీ పేరు మీద సంకల్పం గురించి గురూజీని అడగండి.',
    },
    {
        q: 'పితృ పక్షంలో పూజ కోసం ఎప్పుడు కాల్ చేయాలి?',
        a: 'వీలైనంత త్వరగా. పితృ పక్షం (సెప్టెంబర్ 26 – అక్టోబర్ 10, 2026) గోకర్ణంలో సంవత్సరంలోనే అత్యంత రద్దీ సమయం. మహాలయ అమావాస్య వంటి ముఖ్యమైన రోజులు త్వరగా నిండిపోతాయి.',
    },
    {
        q: 'దక్షిణ ఎంత?',
        a: 'ఏ కర్మ చేయించాలి, ఎన్ని రోజులు, ఎంత మంది పురోహితులు కావాలి అనే దాని మీద ఆధారపడి ఉంటుంది. గురూజీ ఫోన్‌లోనే స్పష్టంగా చెబుతారు; ముందుగా చెప్పని ఖర్చులు ఏవీ ఉండవు.',
    },
];

export default function TeluguPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <Header />

            <div lang="te" className="lang-te font-sans">
                {/* HERO */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={heroImage}
                            alt="గోకర్ణంలో నారాయణ బలి కర్మ"
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
                                గోకర్ణ క్షేత్రం
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-snug drop-shadow-lg text-white">
                                <span className="text-saffron">గోకర్ణంలో</span> నారాయణ బలి, నాగ బలి మరియు పితృ దోషం పూజ
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
                                బాలచంద్ర ప్రసాద్ గురూజీ గోకర్ణంలో ఇరవై సంవత్సరాలకు పైగా ఈ కర్మలను శాస్త్రోక్తంగా నిర్వహిస్తున్నారు. ముందుగా మీ ఇంటి విషయం ఓపికగా విని, ఆ తర్వాత ఏ విధి, ఏ రోజు సరైనదో చెబుతారు.
                            </p>
                            <p className="inline-flex items-center gap-2 text-base md:text-lg text-white bg-white/10 border border-white/20 rounded-full px-5 py-2 backdrop-blur-sm">
                                <Languages size={20} className="text-saffron shrink-0" />
                                గురూజీ ఫోన్‌లో తెలుగు, కన్నడ, హిందీ, మరాఠీ భాషల్లో మాట్లాడతారు
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                <TrackedLink
                                    href={PHONE_HREF}
                                    className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,153,51,0.4)]"
                                >
                                    <Phone size={24} className="fill-current" />
                                    గురూజీకి కాల్ చేయండి: +91 96638 28936
                                </TrackedLink>
                                <TrackedLink
                                    href={WHATSAPP_URL}
                                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                                >
                                    <MessageCircle size={24} />
                                    వాట్సాప్ చేయండి
                                </TrackedLink>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LANGUAGE TRUST POINT */}
                <section className="py-16 bg-gradient-to-b from-white to-orange-50/30">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                            మీ భాషలోనే మాట్లాడండి
                        </h2>
                        <p className="text-charcoal/80 text-xl leading-relaxed">
                            ఇంటి పెద్దల విషయం చెప్పుకునేటప్పుడు భాష అడ్డు కాకూడదు. గురూజీ తెలుగు, కన్నడ, హిందీ, మరాఠీ భాషల్లో మాట్లాడతారు. మీ సందేహాలన్నీ నిస్సంకోచంగా అడగండి, ప్రతిదీ వివరంగా చెబుతారు.
                        </p>
                    </div>
                </section>

                {/* RITUALS */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                            గోకర్ణంలో నిర్వహించే కర్మలు
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
                            కుటుంబాలు గురూజీ దగ్గరికే ఎందుకు వస్తాయి
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
                                గురూజీతో మాట్లాడండి <ArrowRight size={20} />
                            </TrackedLink>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-serif font-bold text-charcoal text-center mb-12">
                            తరచుగా అడిగే ప్రశ్నలు
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
                            మీ కుటుంబ కర్మ గురించి ఈరోజే గురూజీతో మాట్లాడండి
                        </h2>
                        <p className="text-charcoal/80 text-xl mb-10 leading-relaxed">
                            ఉదయం 6 నుండి అర్ధరాత్రి 12 వరకు కాల్ చేయవచ్చు. తెలుగులోనే మాట్లాడండి.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink
                                href={PHONE_HREF}
                                className="bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,153,51,0.4)]"
                            >
                                <Phone size={24} className="fill-current" />
                                కాల్ చేయండి: +91 96638 28936
                            </TrackedLink>
                            <TrackedLink
                                href={WHATSAPP_URL}
                                className="bg-white hover:bg-orange-50 border-2 border-saffron/30 text-charcoal px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                            >
                                <MessageCircle size={24} className="text-saffron" />
                                వాట్సాప్ చేయండి
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
