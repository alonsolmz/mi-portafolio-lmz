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

export const metadata = {
  title: 'Alonso Almerco | Software Engineer Portfolio', //
  description: 'Ingeniero de Software especializado en desarrollo web con Java, Node.js y React. Explora mis proyectos y certificaciones.', //
  alternates: {
    canonical: 'https://alonsolmzportafolio.vercel.app/', //
  },
  openGraph: {
    title: 'Alonso Almerco | Software Engineer', //
    description: 'Portafolio profesional de Alonso Almerco Ramirez.', //
    url: 'https://alonsolmzportafolio.vercel.app/', //
    siteName: 'Alonso Almerco Portfolio', //
    images: [
      {
        url: '/ftportada.jpeg', // Asegúrate de que tu foto esté en la carpeta public
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_PE',
    type: 'website', //
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
