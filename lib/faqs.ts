// Single source for the homepage FAQ: rendered by components/FAQ.tsx and
// published as FAQPage structured data by components/HomeJsonLd.tsx.
export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
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
        a: "It is recommended for the Karta (main performer) to be present. Other family members are welcome. If travel is impossible, we can perform the puja with your Sankalpa remotely and share photos and videos of the ritual, though being physically present is considered more meaningful when possible."
    },
    {
        q: "How long does the ritual take?",
        a: "Most dosha nivaran pujas like Narayana Bali or Tripindi Shradh take approximately 3-5 hours. We recommend arriving the previous evening or early morning (before 7 AM) to start the rituals on time."
    },
    {
        q: "Do you help with accommodation and food?",
        a: "Yes, we can assist you in booking clean, satvik accommodation near the temple. Simple satvik food (Prasadam) is often arranged as part of the ritual or guidance is provided for nearby pure veg restaurants."
    },
    {
        q: "How much is the dakshina for these poojas?",
        a: "There is no fixed package. The dakshina depends on which rites are performed and for how many ancestors. Guruji tells you the amount clearly on the phone before you travel, and there are no hidden charges."
    },
    {
        q: "Which languages does Guruji speak?",
        a: "Guruji speaks Kannada, Telugu, Hindi and Marathi, apart from English, so families can discuss the rituals comfortably in their own language."
    }
];
