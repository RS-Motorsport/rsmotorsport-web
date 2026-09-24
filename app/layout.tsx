import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Schema from "./schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rsmotorsport.pe"),

  title: {
    default: "RS Motorsport | Diagnóstico e Ingeniería Automotriz",
    template: "%s | RS Motorsport",
  },

  description:
    "Taller automotriz multimarca en Lima especializado en diagnóstico electrónico, mantenimiento, reparaciones, frenos, suspensión, reprogramación ECU e inspección precompra.",

  applicationName: "RS Motorsport",

  authors: [
    {
      name: "RS Motorsport",
    },
  ],

  creator: "RS Motorsport",
  publisher: "RS Motorsport",

  category: "Automotive",

  keywords: [
    "RS Motorsport",
    "taller automotriz Lima",
    "taller multimarca Lima",
    "diagnóstico automotriz Lima",
    "diagnóstico electrónico automotriz",
    "mecánica especializada",
    "mantenimiento automotriz Lima",
    "reparación automotriz Lima",
    "frenos y suspensión",
    "reprogramación ECU Lima",
    "inspección precompra",
    "taller BMW Lima",
    "taller Mercedes Benz Lima",
    "taller Audi Lima",
    "taller Volkswagen Lima",
    "taller Barranco",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: "RS Motorsport",
    title: "RS Motorsport | Diagnóstico e Ingeniería Automotriz",
    description:
      "Diagnóstico preciso, mantenimiento, reparaciones e ingeniería automotriz especializada en Lima.",
    images: [
      {
        url: "/images/hero-workshop-sprint03.webp",
        width: 1600,
        height: 1067,
        alt: "RS Motorsport - Diagnóstico e ingeniería automotriz",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RS Motorsport | Diagnóstico e Ingeniería Automotriz",
    description:
      "Diagnóstico preciso, mantenimiento, reparaciones e ingeniería automotriz especializada en Lima.",
    images: ["/images/hero-workshop-sprint03.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Schema />
        {children}
      </body>
    </html>
  );
}