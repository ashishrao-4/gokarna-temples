import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, Info, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';
import nagabali from '../../images/sarpadosha.jpg';

export const metadata: Metadata = {
    title: 'Nag Bali & Sarpa Dosha Pooja in Gokarna | Naga Dosha Remedies',
    description: 'Perform Nag Bali and Sarpa Dosha Nivarana in Gokarna with experienced pandits. Remedies for Naga Dosha, child birth issues, and ancestral snake-related karmas.',
};

export default function NagBaliPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <Header />

            {/* HERO SECTION - Full Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={nagabali}
                        alt="Nag Bali Pooja Grounds"
                        fill
                        className="object-cover"
                        priority
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-charcoal/90 z-10" />
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white pt-32 pb-20">
                    <div className="animate-in fade-in zoom-in duration-700 space-y-6 max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-4 rounded-full bg-green-900/40 border border-green-500/50 text-green-300 font-bold text-sm tracking-widest uppercase backdrop-blur-sm">
                            Sarpa Dosha Nivarana
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg text-white">
                            Nag Bali & Sarpa Dosha Pooja in <span className="text-saffron">Gokarna</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
                            Find relief from Naga Dosha, Kaal Sarp Dosh, and health impediments.
                            Participate in authentic Nag Bali Samskara at the sacred grounds of Gokarna.
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
                                href="https://wa.me/919663828936?text=Namaste%20Guruji,%20I%20want%20to%20know%20about%20Nag%20Bali%20Pooja%20in%20Gokarna."
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Enquiry
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO SHOULD PERFORM */}
            <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-12">
                        Who Should Perform Nag Bali?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {[
                            "Indications of Sarpa Dosha or Kaal Sarp Dosh",
                            "Difficulty in conceiving children (Putra Dosha)",
                            "Repeated skin diseases or health ailments",
                            "Seeing snakes in dreams frequently",
                            "Ancestral history of harming snakes (Sarpa Hatya)"
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
                        <a href="tel:+919663828936" className="inline-flex items-center gap-2 text-saffron font-bold text-lg hover:underline decoration-2 underline-offset-4">
                            Discuss with Guruji <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* HOW IT HAPPENS - Abstract BG */}
            <section className="py-20 bg-green-50/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
                        Nag Bali Procedure (Vidhi)
                    </h2>
                    <p className="text-charcoal/80 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                        Nag Bali involves the respectful symbolic funeral of a snake made of dough or silver, to release the curse of 'Sarpa Hatya' (Killing of Snake).
                        It is a propitiatory rite to please Nag Devata and seek forgiveness.
                        This is often performed alongside <span className="font-bold text-charcoal">Narayana Bali</span> if both Doshas are present.
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

            {/* COST SECTION - Simplified */}
            <section className="py-20 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-black"></div>
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Pooja Dakshina</h2>
                    <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                        The cost depends on whether Nag Bali is performed alone or combined with Narayana Bali (Nag-Narayana Bali).
                    </p>

                    <div>
                        <a href="tel:+919663828936" className="inline-block bg-saffron hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,153,51,0.3)]">
                            Get Cost Details
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <PhoneCTA />
        </main>
    );
}
