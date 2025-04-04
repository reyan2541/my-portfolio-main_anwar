import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigationn/nav-bar";
import Footer from "@/components/common/footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anwar  Gashaw",
  description: "Showcasing projects, skills, and expertise in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-950 flex mt-6 justify-center min-h-screen`}
        suppressHydrationWarning
      >
        <div className="w-full max-w-screen-xl px-4">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
