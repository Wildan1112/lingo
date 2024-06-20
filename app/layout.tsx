import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { ExitModal } from "@/components/modals/exit-modal";
const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lingo",
    template: "Lingo - %s",
  },
  description: "Learn Languages by Uye",
  icons: {
    icon: "/mascot.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {/* ADD SONNER here </Toaster /> */}
          {children}
          <ExitModal />
        </body>
      </html>
    </ClerkProvider>
  );
}
