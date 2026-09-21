"use client";

import React from "react";
import { gtag_report_conversion, type ContactChannel } from "@/lib/gtag";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    /** Defaults to what the href implies (tel: -> call, wa.me -> whatsapp). */
    channel?: ContactChannel;
}

const channelFromHref = (href: string): ContactChannel => {
    if (href.startsWith("tel:")) return "call";
    if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp";
    return "other";
};

export default function TrackedLink({ href, channel, onClick, children, ...props }: TrackedLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gtag_report_conversion(undefined, channel ?? channelFromHref(href));
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
}
