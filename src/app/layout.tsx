import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Aside from "@/components/home/Aside";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauly dotDev | Let's code together",
  description:
    "Explore the world of coding and development with Mauly dotDev. Get insights, tutorials, and tips on programming languages, web development, and more.",
  category: "Programming",
  keywords: [
    "Mauly",
    "dotDev",
    "Programming",
    "Web Development",
    "Coding",
    "Trapcy",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Development",
  ],
  publisher: "Mauly dotDev",
  creator: "Mauly dotDev",
  robots: "index, follow",
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
        <div className="container grid lg:grid-cols-3 gap-10 mt-8 mb-16 lg:mb-32">
          <main className="lg:col-span-2">{children}</main>
          <aside>
            <Aside />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
