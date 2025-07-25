import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/schema";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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

export const metadata: Metadata = {
  title: "Stackset - Modern News & Technology Blog",
  description: "Stay updated with the latest in technology, science, and innovation. A modern news feed style blog with seamless mobile and web experience.",
  keywords: ["news", "technology", "science", "innovation", "blog", "articles"],
  authors: [{ name: "Stackset Team" }],
  creator: "Stackset",
  publisher: "Stackset",
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
    siteName: 'Stackset',
    title: 'Stackset - Modern News & Technology Blog',
    description: 'Stay updated with the latest in technology, science, and innovation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stackset - Modern News Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stackset - Modern News & Technology Blog',
    description: 'Stay updated with the latest in technology, science, and innovation.',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
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
        <div className="min-h-screen flex justify-center">
          <div className="w-full max-w-7xl">
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>
          </div>
        </div>
      </body>
    </html>
  );
}