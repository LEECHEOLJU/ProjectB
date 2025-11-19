import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoo Tycoon - Build Your Dream Zoo",
  description: "Manage your own zoo, collect animals, build facilities, and make your visitors happy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
