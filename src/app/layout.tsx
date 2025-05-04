import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/lib/providers/Providers";
// import { ThemeProvider } from "@/lib/providers/ThemeProvider";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urban Adobe",
  description: "buy sell and rent property website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={poppins.className}>
          <Toaster position="top-right" richColors />
          {children}
        </body>
      </html>
    </Providers>
  );
}
