import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raftar - The Future of Pakistani Racing Games",
  description: "Experience the thrill of racing through iconic Pakistani streets with Raftar!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon here */}
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${inter.className} grid-pattern`}>{children}</body>
    </html>
  );
}
