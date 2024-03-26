import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <nav className="t-flex t-p-3 t-items-center t-gap-4 t-flex-wrap">
          <Link href="/" className="t-text-white t-text-2xl t-no-underline">
            Devsense
          </Link>
          <div className="t-flex t-gap-6">
            <Link
              href="/custom-hook"
              className="t-text-white t-text-lg t-no-underline"
            >
              Custom hooks
            </Link>
            <Link
              href="/spot-light"
              className="t-text-white t-text-lg t-no-underline"
            >
              Spot light
            </Link>
            <Link
              href="/web-worker"
              className="t-text-white t-text-lg t-no-underline"
            >
              Web worker
            </Link>
            <Link
              href="/react-dnd"
              className="t-text-white t-text-lg t-no-underline"
            >
              React-dnd
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
