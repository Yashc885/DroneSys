import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
// import AppProtector from "@/components/app-protector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
  title: {
    default: "Drone Booking  Platform",
    template: " Two ways  Platform",
  },
  description:
    "",
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "",
    me: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        {/* <AppProtector /> */}
        <Toaster />
      </body>
    </html>
  );
}