"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What is the importance of performing pujas in Gokarna?",
        a: "Gokarna is known as the 'Dakshin Kashi' (Kashi of the South) and is one of the seven Mukti Sthalas. It is believed that Lord Shiva (Mahabaleshwar) resides here in the Atma Linga form. Performing ancestral rites (Pitru Karya) here is considered extremely powerful for liberation of souls."
    },
    {
        q: "What is the best time to perform Narayana Bali Puja?",
        a: "These rituals can be performed on most days, but Amavasya (New Moon) days, Pitru Paksha, and specific nakshatras are considered highly auspicious. Please consult Guruji by phone for the best muhurtham based on your birth chart."
    },
    {
        q: "Does the entire family need to be present?",
        a: "It is recommended for the Karta (main performer) to be present. Other family members are welcome. If travel is impossible, we can perform the puja with your Sankalpa remotely and share video evidence, though physical presence yields the most satisfaction."
    },
    {
        q: "How long does the ritual take?",
        a: "Most dosha nivaran pujas like Narayana Bali or Tripindi Shradh take approximately 3-5 hours. We recommend arriving the previous evening or early morning (before 7 AM) to start the rituals on time."
    },
    {
        q: "Do you help with accommodation and food?",
        a: "Yes, we can assist you in booking clean, satvik accommodation near the temple. Simple satvik food (Prasadam) is often arranged as part of the ritual or guidance is provided for nearby pure veg restaurants."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <p className="text-gray-600">Common doubts about Vedic rituals in Gokarna.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="font-bold text-charcoal text-lg pr-4">{faq.q}</span>
                                <span className={`p-2 rounded-full transition-colors shrink-0 ${openIndex === index ? "bg-saffron text-white" : "bg-gray-100 text-gray-500"}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
