import type { Metadata } from "next";
import "./globals.css";
import { GlobalPageStyle } from "./GlobalPageStyle.css";
import NextAuthProvider from "./providers/NextAuthProvider";
import NextAuthSession from "./providers/NextAuthSession";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <NextAuthSession>
          <body className={GlobalPageStyle.container}>{children}</body>
        </NextAuthSession>
      </NextAuthProvider>
    </html>
  );
}
