// src/config/metadata.ts
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: "Study Times - Study Visa Consultation",
    description:
        "Expert study visa consultation services for students in Pakistan.",
    applicationName: "Study Times",
    authors: [{ name: "Study Times Team", url: "https://studytimes.com.pk" }],
    keywords: [
        "study visa",
        "consultation",
        "education",
        "Pakistan",
        "Study Times",
    ],
    manifest: "/manifest.json",
    icons: {
        icon: "/fav/favicon.ico",
        apple: "/fav/apple-icon.png",
        other: [
            { rel: "icon", url: "/fav/icon.png" },
            { rel: "icon", type: "image/svg+xml", url: "/fav/icon.svg" },
        ],
    },
    openGraph: {
        title: "Study Times - Study Visa Consultation",
        description:
            "Expert study visa consultation services for students in Pakistan.",
        url: "https://studytimes.com.pk",
        siteName: "Study Times",
        images: [
            {
                url: "https://studytimes.com.pk/fav/icon.png",
                width: 800,
                height: 600,
                alt: "Study Times Logo",
            },
        ],
        locale: "en_PK",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Study Times - Study Visa Consultation",
        description:
            "Expert study visa consultation services for students in Pakistan.",
        images: ["https://studytimes.com.pk/fav/icon.png"],
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
    },
    alternates: {
        canonical: "https://studytimes.com.pk",
    },
    verification: {
        google: "google-site-verification=your_verification_code",
        yandex: "yandex-verification=your_verification_code",
    },
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
    width: "device-width",
    initialScale: 1,
};
