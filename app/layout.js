import StarsCanvas from "@/components/Stars";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AFUbot - Landing",
  description: "AFUbot - An autonomous solution for Urban Food Delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "black" }}>
      <body className={inter.className}>
        <div>
          <Navbar></Navbar>
          {children}
          <StarsCanvas></StarsCanvas>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
