import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Çıt Çıt – Yakında Açılıyor!",
  description: "Çıt Çıt, hızlı ve lezzetli atıştırmalıklarla yakında hizmetinizde! Takipte kalın ve açılışımızı kaçırmayın.",
  keywords: ["fast food", "çıtır çıtır", "yakında açılıyor", "burger", "atıştırmalık"],
  authors: [{ name: "Çıt Çıt", url: "https://www.citcit.com" }],
  openGraph: {
    title: "Çıt Çıt – Yakında Açılıyor!",
    description: "Çıt Çıt, hızlı ve lezzetli atıştırmalıklarla yakında hizmetinizde! Takipte kalın.",
    url: "https://www.citcit.com",
    siteName: "Çıt Çıt",
    images: [
      {
        url: "/citcit-logo.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/citcit-logo.svg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
    <main>
    {children}
    </main>
        <Footer/>
      </body>
    </html>
  );
}
