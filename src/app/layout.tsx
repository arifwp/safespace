import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/utils/Providers";

export const metadata: Metadata = {
  title: "Safe Space",
  description: "Safe Space For Everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
