import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Nordelia Imóveis | Tradição e Inovação",
  description: "Transformando a experiência de quem busca um novo lar ou ambiente de trabalho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#FFFFFF] text-slate-800 antialiased selection:bg-[#002F6C] selection:text-white">
        {children}
      </body>
    </html>
  );
}