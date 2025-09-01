import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Sri Krishna Goshala - A sanctuary for the sacred cow",
  description: "A sanctuary of love, care, and devotion for the sacred cow. Join us in our mission to provide a loving and nurturing environment for these gentle souls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        
        {children}
        <Toaster />
      </body>
    </html>
  );
}
