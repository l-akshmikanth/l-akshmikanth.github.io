import { Metadata } from "next";
import { translations } from "@/lib/i18n";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { EnrichedProject } from "@/lib/og-fetcher";

// Try to load enriched data; fall back to raw projects
let projects: EnrichedProject[];
try {
  projects = require("@/data/enriched-projects.json");
} catch {
  const raw = require("@/data/projects.json");
  projects = raw.map((p: EnrichedProject) => ({
    ...p,
    previewUrl: p.screenshotPath || null,
    useIframe: !p.screenshotPath,
  }));
}

export const metadata: Metadata = {
  title: translations.ka.title,
  description: translations.ka.heroDesc,
  openGraph: {
    title: translations.ka.title,
    description: translations.ka.heroSubTagline,
    url: "https://l-akshmikanth.github.io/ka/",
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
    title: translations.ka.title,
    images: ["https://l-akshmikanth.github.io/og-image.png"],
  },
};

export default function KannadaPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <Header locale="ka" />
      <main className="flex-1">
        <HeroSection locale="ka" />
        <SkillsSection locale="ka" />
        <PortfolioGallery projects={projects} locale="ka" />
        <ContactSection locale="ka" />
      </main>
      <Footer locale="ka" />
    </div>
  );
}
