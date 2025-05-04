import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import { NavbarSection } from "./components/ui/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Chaudhary",
  description: "Shivam Chaudhary||Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-lime-100 min-h-screen">
          <NavbarSection />
          <Providers>{children}</Providers>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
