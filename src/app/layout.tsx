import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import SessionWrapper from "@/components/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Manage",
  description: "Sistema de gerenciamento comercial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
