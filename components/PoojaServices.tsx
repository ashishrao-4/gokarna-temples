import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import narayanaBali from "../images/koti 3.jpg";
import tripindiShradh from "../images/tripindi1.jpg";
import nagabali from "../images/sarpadosha.jpg";
import pitruDoshaNivarana from "../images/pitrudosh.jpg";

const poojas = [
    {
        id: 1,
        title: "Narayana Bali Puja",
        description: "Narayana Bali is a powerful ritual performed in Gokarna for liberation from ancestral curses (Pitru Dosha) and unnatural deaths.",
        image: narayanaBali,
        benefits: ["Peace for ancestors", "Support through sudden setbacks", "Restore family harmony"],
        link: "/narayana-bali-pooja-gokarna"
    },
    {
        id: 2,
        title: "Pitru Dosha Pooja",
        description: "Pitru Dosha Nivarana is performed when ancestral issues cause career or marriage delays in the family.",
        image: pitruDoshaNivarana,
        benefits: ["Ancestral karma solutions", "Guidance for family well-being", "Career stability"],
        link: "/pitru-dosha-pooja-gokarna"
    },
    {
        id: 3,
        title: "Nag Bali Sarpa Dosha",
        description: "Nag Bali and Sarpa Dosha Nivarana are performed in Gokarna to seek relief from Naga Dosha, as per shastra.",
        image: nagabali,
        benefits: ["Support for progeny concerns", "Blessings for family well-being", "Mental peace"],
        link: "/nag-bali-sarpa-dosha-gokarna"
    },
    {
        id: 4,
        title: "Tripindi Shradh",
        description: "Tripindi Shradh in Gokarna satisfies unsatisfied souls of the last 3 generations.",
        image: tripindiShradh,
        benefits: ["Ancestral peace", "Family blessings", "Dosha nivarana guidance"],
        link: "/pitru-dosha-pooja-gokarna"
    }
];

export default function PoojaServices() {
    return (
        <section id="poojas" className="py-20 bg-cream">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">Our Sacred Vedic Rituals in Gokarna</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Authentic Narayana Bali, Pitru Dosha, and Nag Bali poojas performed by experienced Vedic pandits.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {poojas.map((pooja) => (
                        <div
                            key={pooja.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group/card"
                        >
                            <Link href={pooja.link} className="relative h-56 w-full overflow-hidden block">
                                {/* No looping Ken Burns pan. It never stopped, it cost battery on phones,
                                    and a photo that drifts forever is the giveaway of a template. */}
                                <Image
                                    src={pooja.image}
                                    alt={pooja.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    loading="lazy"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80"></div>
                                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold font-serif shadow-black drop-shadow-md group-hover/card:text-saffron transition-colors">{pooja.title}</h3>
                            </Link>
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed bg-stone-50 p-3 rounded-lg border border-gray-100">{pooja.description}</p>

                                <div className="space-y-3 mb-8 flex-1">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Benefits</h4>
                                    {pooja.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-charcoal font-medium">
                                            <div className="mt-1 bg-green-100 rounded-full p-0.5">
                                                <Check size={12} className="text-green-600" />
                                            </div>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href={pooja.link} className="w-full mt-auto bg-white hover:bg-saffron hover:text-white text-charcoal font-semibold py-3 rounded-xl border-2 border-saffron/20 hover:border-saffron transition-all flex justify-center items-center gap-2 group">
                                    View Details
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
