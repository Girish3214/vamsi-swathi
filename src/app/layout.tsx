import type { Metadata } from "next";
import { Bonheur_Royale, Tangerine, Poppins } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components";

const bonheur = Bonheur_Royale({
  variable: "--font-bonheur",
  weight: "400",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divyaandmanikanta.vercel.app"),
  title: "Divyasree & Manikanta Wedding Invite",
  description:
    "With the blessings of family and friends, we invite you to celebrate the wedding of Divya Sree and Manikanta Raju.",
  openGraph: {
    title: "Divyasree & Manikanta Raju | Wedding Invitation",
    description: "Join us in celebrating our wedding.",
    url: "https://divyaandmanikanta.vercel.app",
    siteName: "Divyasree & Manikanta Wedding",
    images: [
      {
        url: "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1769745155/marriage/og-image_fvp0rl.png",
        width: 1200,
        height: 630,
        alt: "Wedding invitation of Divya Sree and Manikanta Raju",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyasree & Manikanta Raju | Wedding Invitation",
    description:
      "Join us in celebrating the wedding of Divya Sree and Manikanta Raju.",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png" }],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bonheur.variable} ${tangerine.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
        data-lt-installed="true"
      >
        <Loader />
        {children}
      </body>
    </html>
  );
}
