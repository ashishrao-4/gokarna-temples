import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneCTA from '@/components/PhoneCTA';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'How Gokarna Temples handles the information of visitors to this website and families who contact Guruji by phone or WhatsApp.',
    alternates: {
        canonical: '/privacy-policy',
    },
};

const LAST_UPDATED = '22 September 2026';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white font-sans">
            <Header />

            <article className="container mx-auto px-4 max-w-3xl pt-32 pb-24">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-3">
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-500 mb-12">Last updated: {LAST_UPDATED}</p>

                <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
                    <section>
                        <p>
                            This website is run by Gokarna Temples, an independent Vedic ritual service based at
                            Car Street, near the Mahabaleshwar Temple, Gokarna, Karnataka 581326. This page explains
                            what information we receive when you visit the site or contact Guruji, and what we do with it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">What we collect</h2>
                        <p className="mb-4">
                            We do not ask you to create an account, and there is no payment or booking form on this
                            website. You are not required to type any personal details into this site in order to use it.
                        </p>
                        <p>
                            When you tap a call or WhatsApp button, your phone or WhatsApp app opens with our number.
                            From that point the conversation happens on your own phone, and Guruji learns only what you
                            choose to tell him &mdash; typically your name, the ancestor the rites are for, your gotra,
                            and the date or tithi of the death. These details are used to advise the correct ritual and
                            day, and are not published, sold, or shared with anyone outside the priests performing your rites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Analytics and advertising cookies</h2>
                        <p className="mb-4">
                            This site uses Google Analytics and Google Ads conversion tracking. These set cookies in your
                            browser and send Google information such as your approximate location, device and browser type,
                            the pages you viewed, and whether you tapped a call or WhatsApp button. We use this only to
                            understand which pages bring families to Guruji and how much our advertising costs.
                        </p>
                        <p className="mb-4">
                            We see this data in aggregate. We do not receive your name, your phone number, or any way to
                            identify you personally from these tools.
                        </p>
                        <p>
                            Google processes this information under its own privacy policy, available at{' '}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-saffron font-bold hover:underline"
                            >
                                policies.google.com/privacy
                            </a>
                            . You can block these cookies through your browser settings, or opt out of Google Analytics
                            using Google&apos;s browser add-on. The site works normally either way.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Hosting</h2>
                        <p>
                            The site is hosted on Vercel, which keeps standard server logs of requests, including IP
                            addresses, for security and performance purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Children</h2>
                        <p>
                            This site is meant for adults arranging rituals for their families. We do not knowingly
                            collect information from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Your choices</h2>
                        <p>
                            If you have spoken to Guruji and would like the details you shared removed from his records,
                            call or message the number below and ask. There is nothing else stored about you on this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Contact</h2>
                        <p>
                            Gokarna Temples, Car Street, near Mahabaleshwar Temple, Gokarna, Uttara Kannada District,
                            Karnataka 581326, India.
                            <br />
                            Phone and WhatsApp:{' '}
                            <a href="tel:+919663828936" className="text-saffron font-bold hover:underline">
                                +91 96638 28936
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Changes</h2>
                        <p>
                            If this policy changes, the revised version will appear on this page with a new date at the top.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
            <PhoneCTA />
        </main>
    );
}
