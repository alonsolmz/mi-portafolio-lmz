import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Alonsolmz | Software Engineer',
  description: 'Ingeniero de Software enfocado en desarrollo web y bases de datos. Mira mis proyectos y experiencia aquí.',
  
  // WhatsApp
  openGraph: {
    title: 'Alonsolmz | Software Engineer',
    description: 'Portafolio profesional de Alonso Almerco Ramirez.',
    url: 'https://alonsolmzportafolio.vercel.app/',
    siteName: 'Alonsolmz Portfolio',
    images: [
      {
        url: 'https://alonsolmzportafolio.vercel.app/ftporta.png', 
        width: 1200,
        height: 630,
        alt: 'Alonso Almerco Portafolio',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Alonsolmz | Software Engineer',
    description: 'Portafolio profesional de Alonso Almerco.',
    images: ['https://alonsolmzportafolio.vercel.app/ftporta.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
