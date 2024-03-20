import { valueSansPro } from "@/assets/Fonts/font";
import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Unlocklive Coffee",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${valueSansPro.className} mx-auto max-w-screen-2xl text-xs text-primary sm:text-sm lg:text-base`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
