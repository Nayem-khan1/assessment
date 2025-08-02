import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import Footer from "@/components/Footer";
import NavBarTop from "@/components/navbar/NavbarTop";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/navbar/MobileNav";
import { Toaster } from "react-hot-toast";

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
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
        <Toaster />
        <StoreProvider>
          <NavBarTop />
          <Navbar />
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <MobileNav />
          <div className="w-full">
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
