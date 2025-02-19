import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yash Rahurikar",
  description:
    "Yash Rahurikar is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-background"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-background flex-1 overflow-y-auto border-l border-muted">
            <div className="flex-1 bg-background min-h-screen lg:rounded-tl-xl border border-transparent overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
