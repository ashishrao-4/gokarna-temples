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

export const gtag_report_conversion = (url?: string) => {
    if (typeof window !== "undefined" && (window as unknown as WindowWithGTag).gtag) {
        const callback = function () {
            if (typeof url !== 'undefined') {
                window.location.href = url;
            }
        };
        (window as unknown as WindowWithGTag).gtag('event', 'conversion', {
            'send_to': 'AW-402638274/6OqPCJimpfYcEMKL_78B',
            'value': 1.0,
            'currency': 'INR',
            'event_callback': callback
        });
    } else if (url) {
        window.location.href = url;
    }
    return false;
};
