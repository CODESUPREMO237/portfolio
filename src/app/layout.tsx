import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CODE SUPREMO | Senior Software Engineer - Distributed Systems and Scalable Architecture",
    template: "%s | CODE SUPREMO",
  },
  description:
    "CODE SUPREMO - principal-level systems engineering portfolio focused on reliability, architecture decisions, performance, and business outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${headingFont.variable} ${monoFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
