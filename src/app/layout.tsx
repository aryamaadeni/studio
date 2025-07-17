import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { BackToTopButton } from '@/components/back-to-top-button';
import { Space_Grotesk, Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Arya Maadeni's Portfolio",
  description: "A professional portfolio for Arya Maadeni, showcasing projects, skills, and experience.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <BackToTopButton />
      </body>
    </html>
  );
}
