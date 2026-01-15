"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to send");

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contact-form" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-xl">
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2">Your Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2">Your Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all resize-none"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? (
                            <span className="flex items-center gap-2">Sending...</span>
                        ) : status === "success" ? (
                            <span className="flex items-center gap-2"><CheckCircle size={20} /> Sent Successfully</span>
                        ) : (
                            <span className="flex items-center gap-2">Send Enquiry <Send size={18} /></span>
                        )}
                    </button>

                    {status === "error" && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                            <AlertCircle size={16} />
                            Failed to send message. Please try again or call us directly.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
