import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import Navbar from "@/components/shared/navbar";
import Categories from "@/components/shared/categories";
import Footer from "@/components/shared/footer";
import modeStore from "@/store/mode-store";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic", "latin"],
});
const monospace = Montserrat({
  variable: "--font-monospace",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hand-creative.uz"),
  title: "Hand Creative |  Online Shop",
  description: "",
  authors: { name: "Abdulloh Qurbonov", url: "https://your-future.uz" },
  openGraph: {
    title: "Hand Creative |  Online Shop",
    description: "",
    type: "website",
    url: "https://hand-creative.uz",
    locale: "uz_Uz",
    countryName: "Uzbekistan Tashkent",
    siteName: "Hand Creativ",
    emails: ["abdullohkurbonov2008@gmail.com", ""]
  },
  keywords: [""]
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en">
      <body
        className={`${monospace.variable} ${roboto.variable} ${modeStore.status === 'dark' ? 'dark' : null} antialiased`}
      > <header>
          <Navbar />
          <nav className='bg-[#2E2E2E]'>
            <Categories />
          </nav>
        </header>
        <main>

          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
