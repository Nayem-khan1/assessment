import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "A modern e-commerce store built with Next.js and Redux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <StoreProvider>
          <Navbar />
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
