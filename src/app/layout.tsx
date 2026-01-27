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
  title: "Wedding Invite",
  description: "Wedding Invite",
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
