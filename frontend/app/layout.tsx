import type { Metadata } from "next";
// Use system fonts to avoid fetch failures during build
import "./globals.css";
import AuthProvider from '@/components/AuthProvider';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Crawl4AI RAG",
  description: "Agent-powered frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <header className="p-4 border-b mb-6">
            <Link href="/" className="font-bold">Crawl4AI Dashboard</Link>
          </header>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
