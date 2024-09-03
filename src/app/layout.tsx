import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yaba Market E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
  icons: {
    icon: "/favicon.ico",

    apple: "/apple-touch-icon.png",
    shortcut: ["/apple-touch-icon.png"]
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <header className="lg:flex items-center justify-center sticky top-0 z-50  bg-white">
          <NavBar />
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
