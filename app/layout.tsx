import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import "./globals.css";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Mamisoa Ratsimbarison",
  description: "Web developper junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <header>
        <link rel="icon" href="/saryko.png" sizes="any" />
      </header>
      <body className={cn(GeistSans.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}

