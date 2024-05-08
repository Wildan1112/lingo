import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo",
  description: "Learn Languages by Uye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
