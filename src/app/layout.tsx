import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FJR Teleprompter - Locação e Operação Profissional",
  description: "Locação e operação profissional de teleprompter para produções audiovisuais, cinema, TV, eventos corporativos e shows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${syne.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-bg-dark text-gray-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
