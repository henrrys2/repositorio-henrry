import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henrry Mendoza — Full Stack Developer",
  description:
    "Desarrollador Web Full Stack con más de 5 años de experiencia en Node.js, PHP, Next.js y PostgreSQL. Creando APIs y soluciones web escalables.",
  keywords:
    "Henrry Mendoza, Full Stack Developer, Web Developer, Node.js, Next.js, PHP, Laravel, CakePHP, PostgreSQL, TypeScript, React",
  authors: [{ name: "Henrry Mendoza Elguera" }],
  openGraph: {
    title: "Henrry Mendoza — Full Stack Developer",
    description:
      "Desarrollador Web Full Stack con más de 5 años de experiencia creando soluciones web escalables.",
    type: "website",
    locale: "es_PE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
