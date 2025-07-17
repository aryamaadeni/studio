import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { BackToTopButton } from '@/components/back-to-top-button';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Arya Maadeni's Portfolio",
  description: "A professional portfolio for Arya Maadeni, showcasing projects, skills, and experience.",
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
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
    <html lang="en" className={`!scroll-smooth ${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <BackToTopButton />
      </body>
    </html>
  );
}
