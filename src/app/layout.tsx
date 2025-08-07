import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Merriweather, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/schema";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

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

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-merriweather',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
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
      <head>
        <link rel="icon" href="/stackcess-icon-wb-logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${merriweather.variable} ${ibmPlexMono.variable} antialiased`}
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
        <div className="min-h-screen">
          <AnnouncementBar />
          <SidebarProvider>
            <Header />
            <div className="flex pt-[6.5rem] min-h-[calc(100vh-6.5rem)] flex-col">
              <div className="relative">
                <AppSidebar />
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-4xl px-4">
                    {children}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Footer />
              </div>
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}