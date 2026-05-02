"use client";

import React from "react";
import { gtag_report_conversion } from "@/lib/gtag";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export default function TrackedLink({ href, onClick, children, ...props }: TrackedLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gtag_report_conversion();
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
