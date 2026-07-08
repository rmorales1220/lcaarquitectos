import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lcaarquitectos.mx"),
  title: {
    default: "LCA Arquitectos — Arquitectura Residencial en Monterrey",
    template: "%s — LCA Arquitectos",
  },
  description:
    "Despacho de arquitectura residencial en Monterrey dirigido por el Arq. Leonardo Castillo Garza. Más de 20 años diseñando residencias atemporales.",
  keywords: [
    "arquitectura",
    "arquitecto Monterrey",
    "arquitectura residencial",
    "San Pedro Garza García",
    "diseño de casas",
    "LCA Arquitectos",
  ],
  openGraph: {
    title: "LCA Arquitectos — Arquitectura Residencial en Monterrey",
    description:
      "Más de 20 años diseñando residencias atemporales en Monterrey. Dirigido por el Arq. Leonardo Castillo Garza.",
    type: "website",
    locale: "es_MX",
    siteName: "LCA Arquitectos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="grain font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
