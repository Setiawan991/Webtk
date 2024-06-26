import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";


import NavbarStatis from "@/components/navbarstatis";
import { FloatingNav } from "@/components/(frontend)/navbarDinamis";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${gabarito.className}`}>
          <div>
            <NavbarStatis />
            <FloatingNav navItems={navItems} />
            {children}
          </div>
          <Toaster richColors position="top-right" />
        </body>
      </ClerkProvider>
    </html>
  );
}
