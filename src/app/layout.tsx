import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Louder Than Your Thoughts", template: "%s | Louder Than Your Thoughts" },
  description: "A teen mental health podcast with honest conversations, expert perspectives, and room to feel heard.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><a className="skip-link" href="#main">Skip to content</a><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
