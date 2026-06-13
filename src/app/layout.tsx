import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakshmikanth | Web Developer & Business Website Designer",
  description:
    "Lakshmikanth — a passionate web developer from Karnataka, India. Building fast, responsive, and meaningful web experiences: college portals, business websites, digital invitations, and more.",
  openGraph: {
    title: "Lakshmikanth | Web Developer & Business Website Designer",
    description:
      "From college portals to business websites and digital invitations — I build responsive web experiences that leave a lasting impression.",
    url: "https://l-akshmikanth.github.io/en",
    siteName: "Lakshmikanth Portfolio",
    type: "website",
    images: [
      {
        url: "https://l-akshmikanth.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lakshmikanth — Web Developer & Business Website Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshmikanth | Web Developer & Business Website Designer",
    description: "Building fast, responsive web experiences from Karnataka, India.",
    images: ["https://l-akshmikanth.github.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased" style={{ background: "var(--bg)", color: "var(--fg)" }}>
        {children}
      </body>
    </html>
  );
}
