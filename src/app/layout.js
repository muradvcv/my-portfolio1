
import Cursor from "@/components/Cursor";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Md Khalekuzzaman",
  description: "Modern Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} font-sans bg-[#020617] text-white antialiased`}
      ><Cursor />
    
        {children}
      </body>
    </html>
  );
}