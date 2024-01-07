import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devsense | by Rao Sandeep",
  description: "Devsense (by Rao Sandeep)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ color: "white" }}>
        {children}
      </body>
    </html>
  );
}
