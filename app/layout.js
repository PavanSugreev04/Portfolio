import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Pavan Sugreev Kotapati | Portfolio",
  description:
    "Portfolio of Pavan Sugreev Kotapati — a Computer Science Engineer specializing in full-stack development, AI/ML, and real-time systems. Showcasing projects, experience, and skills in React, Node.js, Flask, and Machine Learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
