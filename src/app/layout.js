import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['400', '500', '900'],subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Next Hero',
    template: "%s | Next Hero"
  },
  description: "Learning Next.js with PH",
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <hr/>
        {children}
        <hr/>
        <Footer />
      </body>
    </html>
  );
}
