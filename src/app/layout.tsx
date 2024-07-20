import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Aside from "@/components/home/Aside";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauly's Blog",
  description: "Let's code together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-800`}>
        <Navbar />
        <div className="container grid grid-cols-3 gap-10 mt-8 mb-32">
          <main className="col-span-2">{children}</main>
          <aside>
            <Aside />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
