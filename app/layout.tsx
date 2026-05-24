import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vórtex Sites - Agência de Design e Desenvolvimento Web",
  description: "Transformamos sua presença digital com design estratégico, performance excepcional e conversão comprovada.",
  keywords: ["web design", "desenvolvimento web", "design estratégico", "sites", "agência digital"],
  openGraph: {
    title: "Vórtex Sites - Agência de Design e Desenvolvimento Web",
    description: "Transformamos sua presença digital com design estratégico, performance excepcional e conversão comprovada.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e27",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${sora.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
