"use client";

// Define the gtag type since we're using it from the window object
type GTagCommand = "config" | "event" | "js";

interface WindowWithGTag extends Window {
    dataLayer: any[];
    gtag: (command: GTagCommand, ...args: any[]) => void;
}

// Helper to push conversion/click events
export const sendGTMEvent = (
    action: string,
    category: string,
    label: string,
    value?: number
) => {
    if (typeof window !== "undefined" && (window as unknown as WindowWithGTag).gtag) {
        (window as unknown as WindowWithGTag).gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    } else {
        // For debugging or if gtag didn't load yet
        console.log("GTab Event:", { action, category, label, value });
    }
};

// Specifically for Google Ads conversion tracking on calls/whatsapp
// Since the user provided the SAME config snippet, they likely want standard conversion tracking
// We'll use a standard 'conversion' event or 'contact' event.
export const trackConversion = (conversionId: string) => {
    // If the user had a specific conversion label (e.g. AW-402638274/AbCdEfGhIj), we would use that.
    // For now, we will track a generic conversion event which they can configure in GAds.
    if (typeof window !== "undefined" && (window as unknown as WindowWithGTag).gtag) {
        (window as unknown as WindowWithGTag).gtag("event", "conversion", {
            'send_to': conversionId
        });
    }
}
