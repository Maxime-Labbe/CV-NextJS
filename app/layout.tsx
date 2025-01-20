import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Labbe Maxime - Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={garamond.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
