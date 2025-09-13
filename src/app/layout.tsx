import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/schema";
import MarketingLayoutWrapper from "@/components/MarketingLayoutWrapper";
import { FloatingHaveYourSayButton } from "@/components/FloatingHaveYourSayButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: "Stackcess - Sports Supplements Operating System",
  description: "The unified platform connecting supplement brands, distributors, and retailers. Manage products, assets, compliance, and partnerships in one place. Join the waitlist for early access.",
  keywords: ["sports supplements", "supplement brands", "product management", "compliance tracking", "partner collaboration", "asset management", "supplement industry", "distributors", "retailers"],
  authors: [{ name: "Stackcess Team" }],
  creator: "Stackcess",
  publisher: "Stackcess",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Stackcess',
    title: 'Stackcess - Sports Supplements Operating System',
    description: 'The unified platform connecting supplement brands, distributors, and retailers. Manage products, assets, compliance, and partnerships in one place.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stackcess - Sports Supplements Operating System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stackcess - Sports Supplements Operating System',
    description: 'The unified platform connecting supplement brands, distributors, and retailers. Manage products, assets, compliance, and partnerships in one place.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebSiteSchema()
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en">
      <head>
        {/* Favicon handled automatically by Next.js from app/favicon.ico and app/icon.svg */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased bg-[#0a0a0a]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <MarketingLayoutWrapper>
          <div className="flex-1">
            {children}
          </div>
          <FloatingHaveYourSayButton />
        </MarketingLayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}