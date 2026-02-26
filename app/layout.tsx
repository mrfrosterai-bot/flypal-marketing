import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlyPal — Share Your Flight",
  description: "Turn your flight number into a shareable link. Your family tracks you in real-time — no app install needed.",
  keywords: "flight tracker, share flight, family travel, airport pickup, flight status, live flight tracking",
  openGraph: {
    title: "FlyPal — One link. Everyone knows.",
    description: "Share your flight with family & friends in one tap. No app install needed for them.",
    url: "https://flypal.app",
    siteName: "FlyPal",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlyPal — One link. Everyone knows.",
    description: "Share your flight with family & friends in one tap.",
  },
  metadataBase: new URL("https://flypal.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
