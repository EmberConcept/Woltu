import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cookies from "@/components/Cookies";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woltu Energy Homepage",
  description: "Willkommen auf der Woltu ENERGY Homepage, ein Ort für grüne Photovoltaik-Innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Cookies></Cookies>
          <Footer />
        </main>
      </body>
    </html>
  );
}
