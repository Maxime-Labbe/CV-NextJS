import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Context from "./Context";

const ahrefs = localFont({
  src: [
    {
      path: "../fonts/ahrefs-light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ahrefs-regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ahrefs.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ahrefs-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ahrefs-special.woff2",
      weight: "800",
      style: "normal",
    }
  ],
  variable: "--font-ahrefs",
  display: "swap",
})

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
      <body className={`${ahrefs.className} dark`}>
        <Context>
          <Navbar />
          {children}
        </Context>
      </body>
    </html>
  );
}
