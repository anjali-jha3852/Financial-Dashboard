import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Financial Dashboard",
  description: "Assignment project with charts and export",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
