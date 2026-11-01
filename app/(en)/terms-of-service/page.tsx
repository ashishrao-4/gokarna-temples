import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'The terms on which Gokarna Temples arranges Narayana Bali, Nag Bali, Pitru Dosha and Tripindi Shradh rituals in Gokarna.',
    alternates: {
        canonical: '/terms-of-service',
    },
};

const LAST_UPDATED = '22 September 2026';

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <Header />

            <article className="container mx-auto px-4 max-w-3xl pt-32 pb-24">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-3">
                    Terms of Service
                </h1>
                <p className="text-sm text-gray-500 mb-12">Last updated: {LAST_UPDATED}</p>

                <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Who we are</h2>
                        <p>
                            Gokarna Temples is an independent Vedic ritual service run by Guruji Balachandra Prasad at
                            Gokarna, Karnataka. We are not the official Mahabaleshwar Temple, and we are not an agent of,
                            or affiliated with, any temple administration or government body. Using this site or calling
                            the number on it means you accept the terms below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">How rituals are arranged</h2>
                        <p className="mb-4">
                            Everything is arranged by phone or WhatsApp. There is no online booking or payment on this
                            site. Guruji first listens to your family&apos;s situation, then advises which ritual is
                            appropriate and which day suits it.
                        </p>
                        <p>
                            For the rites to be performed correctly, the details you give &mdash; the name and gotra of
                            the ancestor, the circumstances and date of death, and who will act as karta &mdash; must be
                            accurate to the best of your knowledge.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Dakshina</h2>
                        <p>
                            We do not sell fixed packages. The dakshina depends on the ritual advised, the number of days
                            and priests involved, and the materials required. Guruji states the amount openly on the
                            phone before anything is confirmed, and there are no hidden charges. Any quote given is for
                            the rites as discussed; if your family later asks for additional rites, the amount is
                            discussed again.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Attendance and dates</h2>
                        <p className="mb-4">
                            Most of these rituals require the karta to be present in Gokarna. Dates are confirmed
                            according to the panchang and the availability of priests. During Pitru Paksha and other
                            busy periods the significant days fill early, so a requested day cannot always be promised.
                        </p>
                        <p>
                            If you need to change or cancel a confirmed date, tell Guruji as early as you can so the
                            priests and materials can be released for another family. Your own travel, stay and
                            transport to Gokarna remain your responsibility.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">What we do and do not promise</h2>
                        <p>
                            We undertake to perform the rites faithfully, as prescribed in shastra and in the Gokarna
                            tradition. These are acts of shraddha and faith. We make no claim or guarantee about any
                            worldly outcome &mdash; health, marriage, progeny, career, finances or otherwise &mdash; and
                            nothing on this website should be read as medical, legal, financial or astrological advice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Content on this site</h2>
                        <p>
                            The text and photographs on this site belong to Gokarna Temples or are used with the
                            permission of their owners. Please do not copy them for commercial use. Descriptions of
                            rituals are given in general terms for explanation; the exact vidhi for your family is
                            settled with Guruji on the call.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Privacy</h2>
                        <p>
                            How we handle your information is set out in our{' '}
                            <Link href="/privacy-policy" className="text-saffron font-bold hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Governing law and contact</h2>
                        <p>
                            These terms are governed by the laws of India, and any dispute falls under the jurisdiction
                            of the courts of Uttara Kannada District, Karnataka.
                            <br />
                            <br />
                            Gokarna Temples, Car Street, near Mahabaleshwar Temple, Gokarna, Uttara Kannada District,
                            Karnataka 581326, India.
                            <br />
                            Phone and WhatsApp:{' '}
                            <a href="tel:+919663828936" className="text-saffron font-bold hover:underline">
                                +91 96638 28936
                            </a>
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
            <PhoneCTA />
        </main>
    );
}
