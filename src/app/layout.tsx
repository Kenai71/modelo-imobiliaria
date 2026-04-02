import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nordelia Imóveis | Elegância e Tradição",
  description: "Transformando a experiência de quem busca um novo lar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-nordelia-white text-nordelia-blue antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}