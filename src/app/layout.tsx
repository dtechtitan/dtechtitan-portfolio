import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-brand",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mayowa Daniel (dtechtitan) | Data Science & ML",
  description:
    "Data Science student at the University of Lagos building projects in fraud analytics, real estate analysis, and dashboards. Open to internships and freelance work in fintech and AI/ML.",
  keywords: [
    "data science",
    "machine learning",
    "Lagos",
    "Nigeria",
    "fintech",
    "SQL",
    "Python",
    "portfolio",
    "dtechtitan",
  ],
  authors: [{ name: "Mayowa Daniel" }],
  metadataBase: new URL("https://dtechtitan-portfolio.vercel.app"),
  openGraph: {
    title: "Mayowa Daniel (dtechtitan) | Data Science & ML",
    description:
      "Data Science student building projects in fraud analytics, real estate analysis, and dashboards.",
    url: "https://dtechtitan-portfolio.vercel.app",
    siteName: "dtechtitan Portfolio",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayowa Daniel (dtechtitan) | Data Science & ML",
    description:
      "Data Science student building projects in fraud analytics, real estate analysis, and dashboards.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
